"use client";

import { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import {
  loadChat,
  saveChat,
  clearChat,
  type ChatMessage,
} from "@/lib/chatStorage";
import { Trash2, Send, Bot, User, Copy, RefreshCw } from "lucide-react";

const defaultMessages: ReadonlyArray<ChatMessage> = [
  { 
    role: "assistant", 
    content: "Hello! I am your SYNERGIC BOND AI Tutor. Ask me any chemistry concept, formula, reaction, or exception from your syllabus, and I will help you master it." 
  }
];

export default function AdvancedAITutorPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const stored = loadChat();
    return stored && stored.length > 0 ? stored : [...defaultMessages];
  });
  const [input, setInput] = useState("");
  const [chapterId, setChapterId] = useState("mole-concept");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Stream lock to prevent corruption from concurrent requests during active streaming
  const streamLockRef = useRef(false);

  // Persist chat to local storage whenever messages update (skipping initial greeting save)
  useEffect(() => {
    if (messages.length > 1) {
      saveChat(messages);
    }
  }, [messages]);

  // Auto-scroll to newest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading || streamLockRef.current) return;

    streamLockRef.current = true;
    const userMessage = input;
    setInput("");
    
    // Explicitly typed array to prevent TS inference issues
    const updatedHistory: ChatMessage[] = [
      ...messages,
      {
        role: "user",
        content: userMessage,
      },
    ];
    
    setMessages(updatedHistory);
    setLoading(true);

    // Freeze state to prevent race conditions from async updates
    const frozenMessages = [...updatedHistory];

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          chapterId: chapterId,
          history: frozenMessages
        })
      });

      if (!response.ok) {
        throw new Error("AI request failed");
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error("Failed to read response stream");

      const decoder = new TextDecoder();
      let done = false;
      let streamingReply = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        
        const chunk = decoder.decode(value, { stream: true });
        
        // Safe universal parser for SSE / raw / chunked responses
        const cleaned = chunk
          .replace(/^data:\s*/gm, "")
          .replace(/\n\n/g, "\n");

        streamingReply += cleaned;

        setMessages((prev) => {
          const updated = [...prev];
          
          // Bulletproof functional index lock via deterministic reverse loop
          let lastAssistantIndex = -1;
          for (let i = updated.length - 1; i >= 0; i--) {
            if (updated[i].role === "assistant") {
              lastAssistantIndex = i;
              break;
            }
          }

          if (lastAssistantIndex !== -1) {
            updated[lastAssistantIndex] = {
              role: "assistant",
              content: streamingReply,
            };
          }

          return updated;
        });
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Error communicating with knowledge graph tutor." }]);
    } finally {
      setLoading(false);
      streamLockRef.current = false;
    }
  };

  const handleClearChat = () => {
    clearChat();
    setMessages([...defaultMessages]);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const regenerateLastAnswer = async () => {
    if (streamLockRef.current) return;
    
    // Clean, deterministic search using reverse for loop
    let lastUserMsgIndex = -1;
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === "user") {
        lastUserMsgIndex = i;
        break;
      }
    }

    if (lastUserMsgIndex === -1) return;
    
    const userMessageToRegenerate = messages[lastUserMsgIndex].content;
    
    const historyForRegen = messages.slice(0, lastUserMsgIndex);
    
    // Deterministic state update removes async race condition or array-mutation index bugs
    setMessages(() => [
      ...historyForRegen,
      { role: "assistant", content: "" },
    ]);
    
    setLoading(true);
    streamLockRef.current = true;

    const frozenHistory = [...historyForRegen];

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessageToRegenerate,
          chapterId: chapterId,
          history: frozenHistory
        })
      });

      if (!response.ok) throw new Error("AI request failed");

      const reader = response.body?.getReader();
      if (!reader) throw new Error("Failed to read response stream");

      const decoder = new TextDecoder();
      let done = false;
      let streamingReply = "";

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        
        const chunk = decoder.decode(value, { stream: true });
        const cleaned = chunk
          .replace(/^data:\s*/gm, "")
          .replace(/\n\n/g, "\n");
          
        streamingReply += cleaned;

        setMessages((prev) => {
          const updated = [...prev];
          
          let lastAssistantIndex = -1;
          for (let i = updated.length - 1; i >= 0; i--) {
            if (updated[i].role === "assistant") {
              lastAssistantIndex = i;
              break;
            }
          }

          if (lastAssistantIndex !== -1) {
            updated[lastAssistantIndex] = {
              role: "assistant",
              content: streamingReply,
            };
          }

          return updated;
        });
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Error regenerating response." }]);
    } finally {
      setLoading(false);
      streamLockRef.current = false;
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-8 lg:p-10 flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex flex-col h-[90vh]">
        
        {/* Header & Context Selector */}
        <header className="mb-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">Syllabus-Grounded AI Tutor</h1>
            <p className="text-slate-600 text-sm mt-0.5">Trained entirely on the NEET/JEE knowledge graph. No hallucinations.</p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Targeting:</label>
              <select 
                value={chapterId} 
                onChange={(e) => setChapterId(e.target.value)}
                className="p-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                <option value="mole-concept">Mole Concept & Equivalents</option>
                <option value="atomic-structure">Atomic Structure & Mechanics</option>
                <option value="coordination-compounds">Coordination Compounds</option>
                <option value="hydrocarbons">Hydrocarbons & Aromaticity</option>
              </select>
            </div>

            <button
              type="button"
              onClick={regenerateLastAnswer}
              title="Regenerate Last Answer"
              disabled={loading}
              className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border border-indigo-100 transition-colors flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleClearChat}
              title="Clear Chat"
              disabled={loading}
              className="p-2.5 rounded-xl bg-purple-50 text-purple-600 hover:bg-purple-100 border border-purple-100 transition-colors flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Chat Messages Panel */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 overflow-y-auto space-y-6 flex flex-col">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex items-start gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              {m.role === "assistant" && (
                <div className="p-2 bg-slate-100 border border-slate-200 rounded-xl text-slate-700 flex-shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
              )}
              {/* Production-grade Polish Wrapper with Safety Boundaries for Equations/Formulas */}
              <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed border relative group ${
                m.role === "user" 
                  ? "bg-indigo-600 text-white font-medium rounded-br-none border-indigo-600" 
                  : "bg-slate-50 text-slate-800 font-medium rounded-bl-none border-slate-200/60"
              }`}>
                <div className="prose prose-slate max-w-none overflow-x-auto break-words whitespace-pre-wrap leading-relaxed">
                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                    {m.content}
                  </ReactMarkdown>
                </div>
                
                {m.role === "assistant" && m.content && m.content !== defaultMessages[0].content && (
                  <button
                    onClick={() => copyToClipboard(m.content)}
                    className="absolute right-2 bottom-2 p-1.5 rounded-lg bg-white/80 hover:bg-white border border-slate-200 shadow-sm text-slate-500 hover:text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Copy answer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              {m.role === "user" && (
                <div className="p-2 bg-indigo-100 border border-indigo-200 rounded-xl text-indigo-700 flex-shrink-0">
                  <User className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
          
          {loading && (
            <div className="flex justify-start items-center gap-3">
              <div className="p-2 bg-slate-100 border border-slate-200 rounded-xl text-slate-700">
                <Bot className="w-5 h-5 animate-pulse" />
              </div>
              <div className="max-w-[80%] p-4 rounded-2xl bg-slate-50 border border-slate-200/60 text-slate-500 text-sm flex items-center gap-2.5 rounded-bl-none">
                <svg className="animate-spin h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Graph context hydrating...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input Field */}
        <form onSubmit={handleSend} className="mt-6 flex gap-3 bg-white p-2 rounded-2xl shadow-sm border border-slate-200 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
            placeholder="Ask e.g., 'Why does Wurtz reaction fail for odd alkanes?' or 'Explain Bohr radius formula'"
            className="flex-1 p-3.5 bg-transparent border-0 focus:outline-none focus:ring-0 text-slate-800 placeholder-slate-400 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition shadow flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send className="w-4 h-4" /> Send
          </button>
        </form>

      </div>
    </main>
  );
}
