"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang =
  | "english" | "hindi" | "hinglish"
  | "spanish" | "arabic" | "french" | "german";

export const LANGS: { code: Lang; label: string; short: string; flag: string }[] = [
  { code: "english",  label: "English",  short: "EN", flag: "🇬🇧" },
  { code: "hindi",    label: "हिन्दी",     short: "HI", flag: "🇮🇳" },
  { code: "hinglish", label: "Hinglish", short: "HX", flag: "🇮🇳" },
  { code: "spanish",  label: "Español",  short: "ES", flag: "🇪🇸" },
  { code: "arabic",   label: "العربية",   short: "AR", flag: "🇸🇦" },
  { code: "french",   label: "Français", short: "FR", flag: "🇫🇷" },
  { code: "german",   label: "Deutsch",  short: "DE", flag: "🇩🇪" },
];

// Translation dictionary. UI chrome only — technical chemistry content stays English.
// Order per entry: english, hindi, hinglish, spanish, arabic, french, german
const DICT: Record<string, Record<Lang, string>> = {
  "nav.notes":        { english: "Notes", hindi: "नोट्स", hinglish: "Notes", spanish: "Notas", arabic: "ملاحظات", french: "Notes", german: "Notizen" },
  "nav.assignments":  { english: "Assignments", hindi: "असाइनमेंट", hinglish: "Assignments", spanish: "Tareas", arabic: "واجبات", french: "Devoirs", german: "Aufgaben" },
  "nav.quiz":         { english: "Quiz", hindi: "क्विज़", hinglish: "Quiz", spanish: "Examen", arabic: "اختبار", french: "Quiz", german: "Quiz" },
  "nav.mockExam":     { english: "Mock Exam", hindi: "मॉक एग्ज़ाम", hinglish: "Mock Exam", spanish: "Simulacro", arabic: "امتحان تجريبي", french: "Examen blanc", german: "Probeklausur" },
  "nav.aiTutor":      { english: "AI Tutor", hindi: "AI ट्यूटर", hinglish: "AI Tutor", spanish: "Tutor IA", arabic: "مدرّس ذكي", french: "Tuteur IA", german: "KI-Tutor" },
  "nav.snapSolve":    { english: "Snap & Solve", hindi: "स्नैप & सॉल्व", hinglish: "Snap & Solve", spanish: "Foto y Resuelve", arabic: "صوّر وحلّ", french: "Photo & Résous", german: "Foto & Lösen" },
  "nav.handwritten":  { english: "Handwritten", hindi: "हस्तलिखित", hinglish: "Handwritten", spanish: "Manuscrito", arabic: "بخط اليد", french: "Manuscrit", german: "Handschrift" },
  "nav.studyTools":   { english: "Study Tools", hindi: "स्टडी टूल्स", hinglish: "Study Tools", spanish: "Herramientas", arabic: "أدوات الدراسة", french: "Outils", german: "Lerntools" },
  "nav.molecule":     { english: "Molecule", hindi: "मॉलिक्यूल", hinglish: "Molecule", spanish: "Molécula", arabic: "جزيء", french: "Molécule", german: "Molekül" },
  "nav.challenge":    { english: "Challenge", hindi: "चैलेंज", hinglish: "Challenge", spanish: "Reto", arabic: "تحدٍّ", french: "Défi", german: "Challenge" },
  "nav.studyPlan":    { english: "Study Plan", hindi: "स्टडी प्लान", hinglish: "Study Plan", spanish: "Plan de Estudio", arabic: "خطة الدراسة", french: "Plan d'étude", german: "Lernplan" },
  "nav.predictor":    { english: "Predictor", hindi: "प्रेडिक्टर", hinglish: "Predictor", spanish: "Predictor", arabic: "المتنبّئ", french: "Prédicteur", german: "Vorhersage" },
  "nav.achievements": { english: "Achievements", hindi: "अचीवमेंट्स", hinglish: "Achievements", spanish: "Logros", arabic: "الإنجازات", french: "Succès", german: "Erfolge" },
  "nav.leaderboard":  { english: "Leaderboard", hindi: "लीडरबोर्ड", hinglish: "Leaderboard", spanish: "Ranking", arabic: "المتصدّرون", french: "Classement", german: "Bestenliste" },
  "nav.vault":        { english: "Vault", hindi: "वॉल्ट", hinglish: "Vault", spanish: "Bóveda", arabic: "الخزنة", french: "Coffre", german: "Tresor" },
  "nav.pricing":      { english: "Pricing", hindi: "प्राइसिंग", hinglish: "Pricing", spanish: "Precios", arabic: "الأسعار", french: "Tarifs", german: "Preise" },
  "nav.doubtSolver":  { english: "Doubt Solver", hindi: "डाउट सॉल्वर", hinglish: "Doubt Solver", spanish: "Resolver Dudas", arabic: "حلّ الأسئلة", french: "Résoudre", german: "Fragenlöser" },
  "nav.virtualLab":   { english: "Virtual Lab", hindi: "वर्चुअल लैब", hinglish: "Virtual Lab", spanish: "Lab Virtual", arabic: "مختبر افتراضي", french: "Labo Virtuel", german: "Virtuelles Labor" },
  "nav.teachers":     { english: "Teachers", hindi: "टीचर्स", hinglish: "Teachers", spanish: "Profesores", arabic: "المعلّمون", french: "Enseignants", german: "Lehrer" },
  "nav.signIn":       { english: "Sign In", hindi: "साइन इन", hinglish: "Sign In", spanish: "Entrar", arabic: "تسجيل الدخول", french: "Connexion", german: "Anmelden" },

  "hero.badge":       { english: "AI POWERED CHEMISTRY PLATFORM", hindi: "AI संचालित केमिस्ट्री प्लेटफ़ॉर्म", hinglish: "AI Powered Chemistry Platform", spanish: "PLATAFORMA DE QUÍMICA CON IA", arabic: "منصة الكيمياء بالذكاء الاصطناعي", french: "PLATEFORME DE CHIMIE IA", german: "KI-GESTÜTZTE CHEMIE-PLATTFORM" },
  "hero.headline1":   { english: "The Chemistry", hindi: "द केमिस्ट्री", hinglish: "The Chemistry", spanish: "El Sistema", arabic: "نظام تشغيل", french: "Le Système", german: "Das Chemie" },
  "hero.headline2":   { english: "Operating System", hindi: "ऑपरेटिंग सिस्टम", hinglish: "Operating System", spanish: "Operativo de Química", arabic: "الكيمياء", french: "d'exploitation de Chimie", german: "Betriebssystem" },
  "hero.tagline":     { english: "Search • Learn • Practice • Master", hindi: "खोजें • सीखें • अभ्यास करें • महारत पाएं", hinglish: "Search • Learn • Practice • Master", spanish: "Busca • Aprende • Practica • Domina", arabic: "ابحث • تعلّم • تدرّب • أتقن", french: "Cherche • Apprends • Pratique • Maîtrise", german: "Suchen • Lernen • Üben • Meistern" },
  "hero.startLearning": { english: "Start Learning →", hindi: "सीखना शुरू करें →", hinglish: "Start Learning →", spanish: "Empezar →", arabic: "ابدأ التعلّم →", french: "Commencer →", german: "Loslegen →" },
  "hero.exploreVault":  { english: "Explore Vault →", hindi: "वॉल्ट देखें →", hinglish: "Explore Vault →", spanish: "Explorar →", arabic: "استكشف →", french: "Explorer →", german: "Erkunden →" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };

const LangContext = createContext<Ctx>({ lang: "english", setLang: () => {}, t: (k) => k });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("english");

  // hydrate from saved preference
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("sb_lang")) as Lang | null;
    if (saved && LANGS.some((l) => l.code === saved)) setLangState(saved);
  }, []);

  // apply direction (RTL for Arabic) + html lang
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.dir = lang === "arabic" ? "rtl" : "ltr";
    const map: Record<Lang, string> = {
      english: "en", hindi: "hi", hinglish: "en", spanish: "es",
      arabic: "ar", french: "fr", german: "de",
    };
    document.documentElement.lang = map[lang];
  }, [lang]);

  function setLang(l: Lang) {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("sb_lang", l);
  }

  const t = (key: string) => DICT[key]?.[lang] ?? DICT[key]?.english ?? key;

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useT = () => useContext(LangContext);
