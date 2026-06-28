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

  // ── Journey / Choose Your Track ──
  "journey.eyebrow": { english: "— SELECT YOUR TRACK —", hindi: "— अपना ट्रैक चुनें —", hinglish: "— Apna Track Choose Karo —", spanish: "— ELIGE TU RUTA —", arabic: "— اختر مسارك —", french: "— CHOISISSEZ VOTRE PARCOURS —", german: "— WÄHLE DEINEN WEG —" },
  "journey.title": { english: "Choose Your Journey", hindi: "अपनी यात्रा चुनें", hinglish: "Choose Your Journey", spanish: "Elige Tu Camino", arabic: "اختر رحلتك", french: "Choisissez Votre Parcours", german: "Wähle Deinen Weg" },
  "journey.desc": { english: "Every scholar follows a different path. Select your destination and let SYNERGIC BOND guide you there.", hindi: "हर विद्यार्थी का रास्ता अलग होता है। अपना लक्ष्य चुनें और SYNERGIC BOND को मार्गदर्शन करने दें।", hinglish: "Har student ka path alag hota hai. Apni destination choose karo aur SYNERGIC BOND ko guide karne do.", spanish: "Cada estudiante sigue un camino diferente. Elige tu destino y deja que SYNERGIC BOND te guíe.", arabic: "لكل طالب مساره الخاص. اختر وجهتك ودع SYNERGIC BOND يرشدك.", french: "Chaque élève suit un chemin différent. Choisissez votre destination et laissez SYNERGIC BOND vous guider.", german: "Jeder Lernende geht einen anderen Weg. Wähle dein Ziel und lass dich von SYNERGIC BOND führen." },
  "journey.cta": { english: "Enter Track", hindi: "ट्रैक खोलें", hinglish: "Enter Track", spanish: "Entrar", arabic: "ادخل المسار", french: "Entrer", german: "Starten" },

  // ── Knowledge Vault ──
  "vault.eyebrow": { english: "Knowledge Vault", hindi: "नॉलेज वॉल्ट", hinglish: "Knowledge Vault", spanish: "Bóveda del Saber", arabic: "خزنة المعرفة", french: "Coffre du Savoir", german: "Wissenstresor" },
  "vault.title": { english: "Everything Chemistry. One Place.", hindi: "सारी केमिस्ट्री। एक जगह।", hinglish: "Saari Chemistry. Ek Jagah.", spanish: "Toda la Química. Un Lugar.", arabic: "كل الكيمياء. مكان واحد.", french: "Toute la Chimie. Un Seul Endroit.", german: "Die ganze Chemie. Ein Ort." },
  "vault.desc": { english: "Concepts, formulas, reactions and exceptions — organized into a premium chemistry knowledge system.", hindi: "कॉन्सेप्ट्स, फ़ॉर्मूले, रिएक्शन और अपवाद — एक प्रीमियम केमिस्ट्री नॉलेज सिस्टम में।", hinglish: "Concepts, formulas, reactions aur exceptions — ek premium chemistry knowledge system mein.", spanish: "Conceptos, fórmulas, reacciones y excepciones — en un sistema premium de conocimiento químico.", arabic: "المفاهيم والصيغ والتفاعلات والاستثناءات — في نظام معرفة كيميائي متميّز.", french: "Concepts, formules, réactions et exceptions — dans un système de savoir chimique premium.", german: "Konzepte, Formeln, Reaktionen und Ausnahmen — in einem Premium-Chemie-Wissenssystem." },
  "vault.tab.concepts": { english: "Concepts", hindi: "कॉन्सेप्ट्स", hinglish: "Concepts", spanish: "Conceptos", arabic: "المفاهيم", french: "Concepts", german: "Konzepte" },
  "vault.tab.reactions": { english: "Reactions", hindi: "रिएक्शन्स", hinglish: "Reactions", spanish: "Reacciones", arabic: "التفاعلات", french: "Réactions", german: "Reaktionen" },
  "vault.tab.formulas": { english: "Formula Vault", hindi: "फ़ॉर्मूला वॉल्ट", hinglish: "Formula Vault", spanish: "Fórmulas", arabic: "الصيغ", french: "Formules", german: "Formeln" },
  "vault.tab.exceptions": { english: "Exceptions", hindi: "अपवाद", hinglish: "Exceptions", spanish: "Excepciones", arabic: "الاستثناءات", french: "Exceptions", german: "Ausnahmen" },
  "vault.tab.facts": { english: "Quick Facts", hindi: "क्विक फैक्ट्स", hinglish: "Quick Facts", spanish: "Datos Clave", arabic: "حقائق سريعة", french: "Faits Rapides", german: "Schnelle Fakten" },
  "vault.tab.favorites": { english: "Favorites", hindi: "फेवरेट्स", hinglish: "Favorites", spanish: "Favoritos", arabic: "المفضّلة", french: "Favoris", german: "Favoriten" },
  "vault.entries": { english: "entries", hindi: "एंट्रीज़", hinglish: "entries", spanish: "entradas", arabic: "مُدخل", french: "entrées", german: "Einträge" },
  "vault.explore": { english: "Explore", hindi: "एक्सप्लोर करें", hinglish: "Explore", spanish: "Explorar", arabic: "استكشف", french: "Explorer", german: "Erkunden" },

  // ── Exam Center ──
  "exam.eyebrow": { english: "Exam Center", hindi: "एग्ज़ाम सेंटर", hinglish: "Exam Center", spanish: "Centro de Exámenes", arabic: "مركز الامتحانات", french: "Centre d'Examens", german: "Prüfungszentrum" },
  "exam.title": { english: "Every Chemistry Exam. One Directory.", hindi: "हर केमिस्ट्री एग्ज़ाम। एक डायरेक्टरी।", hinglish: "Har Chemistry Exam. Ek Directory.", spanish: "Cada Examen de Química. Un Directorio.", arabic: "كل امتحان كيمياء. دليل واحد.", french: "Chaque Examen de Chimie. Un Annuaire.", german: "Jede Chemie-Prüfung. Ein Verzeichnis." },
  "exam.desc": { english: "Eligibility, key dates, fees and official portals for chemistry exams worldwide.", hindi: "दुनिया भर के केमिस्ट्री एग्ज़ाम की पात्रता, तिथियाँ, फ़ीस और आधिकारिक पोर्टल।", hinglish: "Duniya bhar ke chemistry exams ki eligibility, dates, fees aur official portals.", spanish: "Requisitos, fechas, tarifas y portales oficiales de exámenes de química en todo el mundo.", arabic: "الأهلية والمواعيد والرسوم والبوابات الرسمية لامتحانات الكيمياء عالميًا.", french: "Admissibilité, dates, frais et portails officiels des examens de chimie dans le monde.", german: "Zulassung, Termine, Gebühren und offizielle Portale für Chemie-Prüfungen weltweit." },
  "exam.india": { english: "India Exams", hindi: "भारत के एग्ज़ाम", hinglish: "India Exams", spanish: "Exámenes India", arabic: "امتحانات الهند", french: "Examens Inde", german: "Indien-Prüfungen" },
  "exam.intl": { english: "International Exams", hindi: "इंटरनेशनल एग्ज़ाम", hinglish: "International Exams", spanish: "Exámenes Internacionales", arabic: "امتحانات دولية", french: "Examens Internationaux", german: "Internationale Prüfungen" },
  "exam.eligibility": { english: "Eligibility:", hindi: "पात्रता:", hinglish: "Eligibility:", spanish: "Requisitos:", arabic: "الأهلية:", french: "Admissibilité :", german: "Zulassung:" },
  "exam.opens": { english: "Opens", hindi: "खुलता है", hinglish: "Opens", spanish: "Abre", arabic: "يفتح", french: "Ouvre", german: "Öffnet" },
  "exam.closes": { english: "Closes", hindi: "बंद होता है", hinglish: "Closes", spanish: "Cierra", arabic: "يغلق", french: "Ferme", german: "Schließt" },
  "exam.officialSite": { english: "Official Site", hindi: "आधिकारिक साइट", hinglish: "Official Site", spanish: "Sitio Oficial", arabic: "الموقع الرسمي", french: "Site Officiel", german: "Offizielle Seite" },

  // ── Resources / One Platform ──
  "res.eyebrow": { english: "Everything You Need", hindi: "वह सब जो आपको चाहिए", hinglish: "Everything You Need", spanish: "Todo Lo Que Necesitas", arabic: "كل ما تحتاجه", french: "Tout Ce Qu'il Vous Faut", german: "Alles Was Du Brauchst" },
  "res.title": { english: "One Platform. Unlimited Learning.", hindi: "एक प्लेटफ़ॉर्म। असीमित सीखना।", hinglish: "Ek Platform. Unlimited Learning.", spanish: "Una Plataforma. Aprendizaje Ilimitado.", arabic: "منصة واحدة. تعلّم بلا حدود.", french: "Une Plateforme. Apprentissage Illimité.", german: "Eine Plattform. Unbegrenztes Lernen." },
  "res.desc": { english: "Every feature is designed to help you understand, remember and master chemistry faster.", hindi: "हर फ़ीचर आपको केमिस्ट्री तेज़ी से समझने, याद रखने और महारत पाने में मदद करता है।", hinglish: "Har feature aapko chemistry jaldi samajhne, yaad rakhne aur master karne mein help karta hai.", spanish: "Cada función te ayuda a entender, recordar y dominar la química más rápido.", arabic: "كل ميزة مصممة لمساعدتك على فهم الكيمياء وتذكّرها وإتقانها أسرع.", french: "Chaque fonctionnalité vous aide à comprendre, mémoriser et maîtriser la chimie plus vite.", german: "Jede Funktion hilft dir, Chemie schneller zu verstehen, zu merken und zu meistern." },

  // ── Testimonials ──
  "testi.eyebrow": { english: "Success Stories", hindi: "सफलता की कहानियाँ", hinglish: "Success Stories", spanish: "Casos de Éxito", arabic: "قصص نجاح", french: "Témoignages", german: "Erfolgsgeschichten" },
  "testi.title": { english: "Trusted by Rankers Worldwide", hindi: "दुनिया भर के टॉपर्स का भरोसा", hinglish: "Trusted by Rankers Worldwide", spanish: "La Confianza de los Mejores", arabic: "موثوق من المتفوّقين عالميًا", french: "La Confiance des Meilleurs", german: "Vertraut von Top-Schülern Weltweit" },
  "testi.all": { english: "Show All", hindi: "सभी देखें", hinglish: "Show All", spanish: "Todos", arabic: "عرض الكل", french: "Tout", german: "Alle" },
  "testi.scholars": { english: "Scholars", hindi: "विद्यार्थी", hinglish: "Scholars", spanish: "Estudiantes", arabic: "الطلاب", french: "Élèves", german: "Schüler" },
  "testi.educators": { english: "Educators", hindi: "शिक्षक", hinglish: "Educators", spanish: "Educadores", arabic: "المعلّمون", french: "Enseignants", german: "Lehrkräfte" },
  "testi.parents": { english: "Parents", hindi: "अभिभावक", hinglish: "Parents", spanish: "Padres", arabic: "أولياء الأمور", french: "Parents", german: "Eltern" },

  // ── Reference Books ──
  "books.eyebrow": { english: "Reference Library", hindi: "रेफ़रेंस लाइब्रेरी", hinglish: "Reference Library", spanish: "Biblioteca", arabic: "مكتبة المراجع", french: "Bibliothèque", german: "Referenzbibliothek" },
  "books.title": { english: "Elite Theory Bookshelf", hindi: "एलीट थ्योरी बुकशेल्फ़", hinglish: "Elite Theory Bookshelf", spanish: "Estantería de Teoría", arabic: "رفّ كتب النظرية", french: "Étagère de Théorie", german: "Theorie-Bücherregal" },
  "books.desc": { english: "The exact books that build deep chemistry intuition — curated by exam experts.", hindi: "वही किताबें जो गहरी केमिस्ट्री समझ बनाती हैं — एग्ज़ाम एक्सपर्ट्स द्वारा चुनी गई।", hinglish: "Wahi books jo deep chemistry intuition banati hain — exam experts ne curate ki.", spanish: "Los libros exactos que construyen una intuición química profunda — elegidos por expertos.", arabic: "الكتب التي تبني حدسًا كيميائيًا عميقًا — مختارة من خبراء الامتحانات.", french: "Les livres qui bâtissent une intuition chimique profonde — choisis par des experts.", german: "Die Bücher, die tiefe Chemie-Intuition aufbauen — von Experten kuratiert." },
  "books.cta": { english: "Get Theory Edition", hindi: "थ्योरी एडिशन लें", hinglish: "Get Theory Edition", spanish: "Obtener Edición", arabic: "احصل على النسخة", french: "Obtenir l'Édition", german: "Edition Holen" },

  // ── International Roadmap ──
  "intl.eyebrow": { english: "Going Global", hindi: "ग्लोबल हो रहे हैं", hinglish: "Going Global", spanish: "Hacia el Mundo", arabic: "نحو العالمية", french: "À l'International", german: "Global Werden" },
  "intl.title": { english: "International Exam Roadmap", hindi: "इंटरनेशनल एग्ज़ाम रोडमैप", hinglish: "International Exam Roadmap", spanish: "Hoja de Ruta Internacional", arabic: "خارطة الامتحانات الدولية", french: "Feuille de Route Internationale", german: "Internationaler Prüfungs-Fahrplan" },
  "intl.desc": { english: "Full prep for the world's top chemistry exams — rolling out region by region.", hindi: "दुनिया के टॉप केमिस्ट्री एग्ज़ाम की पूरी तैयारी — क्षेत्र दर क्षेत्र।", hinglish: "Duniya ke top chemistry exams ki poori prep — region by region.", spanish: "Preparación completa para los mejores exámenes de química — región por región.", arabic: "تحضير كامل لأهم امتحانات الكيمياء عالميًا — منطقة تلو الأخرى.", french: "Préparation complète aux meilleurs examens de chimie — région par région.", german: "Komplette Vorbereitung auf die Top-Chemie-Prüfungen — Region für Region." },
  "intl.comingSoon": { english: "COMING SOON · PRO REGION", hindi: "जल्द आ रहा है · PRO क्षेत्र", hinglish: "COMING SOON · PRO REGION", spanish: "PRÓXIMAMENTE · PRO", arabic: "قريبًا · منطقة PRO", french: "BIENTÔT · RÉGION PRO", german: "DEMNÄCHST · PRO-REGION" },

  // ── About / Mission ──
  "about.eyebrow": { english: "Our Mission", hindi: "हमारा मिशन", hinglish: "Our Mission", spanish: "Nuestra Misión", arabic: "مهمتنا", french: "Notre Mission", german: "Unsere Mission" },
  "about.pillar1": { english: "Built for Elite Ranks", hindi: "टॉप रैंक के लिए बना", hinglish: "Built for Elite Ranks", spanish: "Para los Mejores Puestos", arabic: "مصمّم للمراتب العليا", french: "Conçu pour les Meilleurs Rangs", german: "Für Spitzenränge Gebaut" },
  "about.pillar2": { english: "Beyond the Textbook", hindi: "किताबों से आगे", hinglish: "Beyond the Textbook", spanish: "Más Allá del Libro", arabic: "أبعد من الكتاب", french: "Au-delà du Manuel", german: "Über das Lehrbuch Hinaus" },
  "about.pillar3": { english: "Human Intelligence + AI", hindi: "मानवीय बुद्धि + AI", hinglish: "Human Intelligence + AI", spanish: "Inteligencia Humana + IA", arabic: "ذكاء بشري + AI", french: "Intelligence Humaine + IA", german: "Menschliche Intelligenz + KI" },

  // ── Donation ──
  "donate.eyebrow": { english: "Support the Mission", hindi: "मिशन का समर्थन करें", hinglish: "Support the Mission", spanish: "Apoya la Misión", arabic: "ادعم المهمة", french: "Soutenez la Mission", german: "Unterstütze die Mission" },
  "donate.title": { english: "Back Free Chemistry Education", hindi: "मुफ़्त केमिस्ट्री शिक्षा का साथ दें", hinglish: "Back Free Chemistry Education", spanish: "Apoya la Educación Gratuita", arabic: "ادعم تعليم الكيمياء المجاني", french: "Soutenez l'Éducation Gratuite", german: "Kostenlose Chemie-Bildung Fördern" },

  // ── FAQ ──
  "faq.eyebrow": { english: "FAQ", hindi: "सामान्य प्रश्न", hinglish: "FAQ", spanish: "Preguntas", arabic: "الأسئلة الشائعة", french: "FAQ", german: "FAQ" },
  "faq.title": { english: "Frequently Asked Questions", hindi: "अक्सर पूछे जाने वाले प्रश्न", hinglish: "Frequently Asked Questions", spanish: "Preguntas Frecuentes", arabic: "الأسئلة المتكرّرة", french: "Questions Fréquentes", german: "Häufige Fragen" },

  // ── Contact ──
  "contact.eyebrow": { english: "Get in Touch", hindi: "संपर्क करें", hinglish: "Get in Touch", spanish: "Contáctanos", arabic: "تواصل معنا", french: "Contactez-Nous", german: "Kontakt" },
  "contact.title": { english: "Contact & Feedback", hindi: "संपर्क और फ़ीडबैक", hinglish: "Contact & Feedback", spanish: "Contacto y Comentarios", arabic: "التواصل والملاحظات", french: "Contact et Avis", german: "Kontakt & Feedback" },
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
