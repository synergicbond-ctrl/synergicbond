export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  role: ChatRole;
  content: string;
}

const STORAGE_KEY = "synergicbond-chat-v1";

export function saveChat(messages: ChatMessage[]) {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(messages)
  );
}

export function loadChat(): ChatMessage[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) return [];

    return JSON.parse(raw) as ChatMessage[];
  } catch {
    return [];
  }
}

export function clearChat() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(STORAGE_KEY);
}