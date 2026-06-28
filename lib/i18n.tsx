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

  // ── Nav: About ──
  "nav.about": { english: "About & Mission", hindi: "हमारे बारे में", hinglish: "About & Mission", spanish: "Acerca y Misión", arabic: "من نحن ورسالتنا", french: "À Propos & Mission", german: "Über Uns & Mission" },
  "nav.home": { english: "Home", hindi: "होम", hinglish: "Home", spanish: "Inicio", arabic: "الرئيسية", french: "Accueil", german: "Start" },
  "nav.search": { english: "Search", hindi: "सर्च", hinglish: "Search", spanish: "Buscar", arabic: "بحث", french: "Recherche", german: "Suche" },
  "nav.library": { english: "Library", hindi: "लाइब्रेरी", hinglish: "Library", spanish: "Biblioteca", arabic: "المكتبة", french: "Bibliothèque", german: "Bibliothek" },
  "nav.nameReactions": { english: "Name Reactions", hindi: "नेम रिएक्शन्स", hinglish: "Name Reactions", spanish: "Reacciones", arabic: "تفاعلات مسماة", french: "Réactions Nommées", german: "Namensreaktionen" },
  "nav.redox": { english: "Oxidation / Reduction", hindi: "ऑक्सीकरण / अपचयन", hinglish: "Oxidation / Reduction", spanish: "Oxidación / Reducción", arabic: "الأكسدة / الاختزال", french: "Oxydation / Réduction", german: "Oxidation / Reduktion" },
  "nav.pyq": { english: "PYQ Mode", hindi: "PYQ मोड", hinglish: "PYQ Mode", spanish: "Preguntas Pasadas", arabic: "أسئلة سابقة", french: "Annales", german: "Altklausuren" },
  "nav.live": { english: "Live Arena", hindi: "लाइव अरीना", hinglish: "Live Arena", spanish: "Arena en Vivo", arabic: "الساحة المباشرة", french: "Arène Live", german: "Live-Arena" },
  "nav.neet": { english: "NEET Track", hindi: "NEET ट्रैक", hinglish: "NEET Track", spanish: "Ruta NEET", arabic: "مسار NEET", french: "Parcours NEET", german: "NEET-Pfad" },
  "nav.jee": { english: "JEE Track", hindi: "JEE ट्रैक", hinglish: "JEE Track", spanish: "Ruta JEE", arabic: "مسار JEE", french: "Parcours JEE", german: "JEE-Pfad" },
  "nav.gate": { english: "GATE Track", hindi: "GATE ट्रैक", hinglish: "GATE Track", spanish: "Ruta GATE", arabic: "مسار GATE", french: "Parcours GATE", german: "GATE-Pfad" },
  "nav.olympiadTrack": { english: "Olympiad Track", hindi: "ओलंपियाड ट्रैक", hinglish: "Olympiad Track", spanish: "Ruta Olimpiada", arabic: "مسار الأولمبياد", french: "Parcours Olympiade", german: "Olympiade-Pfad" },
  "nav.progress": { english: "Progress Analytics", hindi: "प्रोग्रेस एनालिटिक्स", hinglish: "Progress Analytics", spanish: "Analíticas", arabic: "تحليلات التقدّم", french: "Analytique", german: "Fortschritt" },
  "nav.reagents": { english: "Reagents", hindi: "रिएजेंट्स", hinglish: "Reagents", spanish: "Reactivos", arabic: "الكواشف", french: "Réactifs", german: "Reagenzien" },
  "nav.solubility": { english: "Solubility", hindi: "विलेयता", hinglish: "Solubility", spanish: "Solubilidad", arabic: "الذوبانية", french: "Solubilité", german: "Löslichkeit" },
  "nav.saltColors": { english: "Salt Colors", hindi: "साल्ट कलर्स", hinglish: "Salt Colors", spanish: "Colores de Sales", arabic: "ألوان الأملاح", french: "Couleurs des Sels", german: "Salzfarben" },
  "nav.properties": { english: "Properties", hindi: "गुण", hinglish: "Properties", spanish: "Propiedades", arabic: "الخواص", french: "Propriétés", german: "Eigenschaften" },
  "nav.more": { english: "More", hindi: "और", hinglish: "More", spanish: "Más", arabic: "المزيد", french: "Plus", german: "Mehr" },

  // ── Resources feature cards (titles + descriptions) ──
  "res.tutor.title": { english: "AI Tutor", hindi: "AI ट्यूटर", hinglish: "AI Tutor", spanish: "Tutor IA", arabic: "مدرّس ذكي", french: "Tuteur IA", german: "KI-Tutor" },
  "res.tutor.desc": { english: "Ask chemistry questions naturally and receive step-by-step explanations.", hindi: "केमिस्ट्री के सवाल सहज भाषा में पूछें और स्टेप-बाय-स्टेप समझ पाएं।", hinglish: "Chemistry ke questions natural language mein poocho aur step-by-step explanation pao.", spanish: "Haz preguntas de química con naturalidad y recibe explicaciones paso a paso.", arabic: "اطرح أسئلة الكيمياء بطبيعية واحصل على شرح خطوة بخطوة.", french: "Posez vos questions de chimie naturellement et obtenez des explications étape par étape.", german: "Stelle Chemie-Fragen ganz natürlich und erhalte Schritt-für-Schritt-Erklärungen." },
  "res.search.title": { english: "Universal Search", hindi: "यूनिवर्सल सर्च", hinglish: "Universal Search", spanish: "Búsqueda Universal", arabic: "بحث شامل", french: "Recherche Universelle", german: "Universelle Suche" },
  "res.search.desc": { english: "Instantly search concepts, reactions, formulas and chapters.", hindi: "कॉन्सेप्ट्स, रिएक्शन, फ़ॉर्मूले और चैप्टर तुरंत खोजें।", hinglish: "Concepts, reactions, formulas aur chapters instantly search karo.", spanish: "Busca al instante conceptos, reacciones, fórmulas y capítulos.", arabic: "ابحث فورًا في المفاهيم والتفاعلات والصيغ والفصول.", french: "Recherchez instantanément concepts, réactions, formules et chapitres.", german: "Durchsuche sofort Konzepte, Reaktionen, Formeln und Kapitel." },
  "res.revision.title": { english: "Revision Engine", hindi: "रिवीज़न इंजन", hinglish: "Revision Engine", spanish: "Motor de Repaso", arabic: "محرك المراجعة", french: "Moteur de Révision", german: "Wiederholungs-Engine" },
  "res.revision.desc": { english: "Revise smarter with quick facts, flashcards and memory boosters.", hindi: "क्विक फैक्ट्स, फ्लैशकार्ड और मेमोरी बूस्टर के साथ स्मार्ट रिवीज़न करें।", hinglish: "Quick facts, flashcards aur memory boosters ke saath smart revision karo.", spanish: "Repasa mejor con datos clave, tarjetas y refuerzos de memoria.", arabic: "راجع بذكاء عبر الحقائق السريعة والبطاقات ومعزّزات الذاكرة.", french: "Révisez plus malin avec des faits rapides, des cartes et des boosters de mémoire.", german: "Wiederhole klüger mit Schnellfakten, Lernkarten und Gedächtnis-Boostern." },
  "res.library.title": { english: "Knowledge Library", hindi: "नॉलेज लाइब्रेरी", hinglish: "Knowledge Library", spanish: "Biblioteca", arabic: "مكتبة المعرفة", french: "Bibliothèque", german: "Wissensbibliothek" },
  "res.library.desc": { english: "Everything you need—from concepts to mechanisms—in one place.", hindi: "कॉन्सेप्ट से मैकेनिज़म तक—जो चाहिए, एक ही जगह।", hinglish: "Concepts se mechanisms tak—jo chahiye, ek hi jagah.", spanish: "Todo lo que necesitas—de conceptos a mecanismos—en un solo lugar.", arabic: "كل ما تحتاجه—من المفاهيم إلى الآليات—في مكان واحد.", french: "Tout ce qu'il vous faut—des concepts aux mécanismes—en un seul endroit.", german: "Alles, was du brauchst—von Konzepten bis Mechanismen—an einem Ort." },

  // ── About / Mission (body) ──
  "about.missionTitle": { english: "Engineering the Future of Chemistry Education.", hindi: "रसायन शिक्षा के भविष्य का निर्माण।", hinglish: "Chemistry Education ke Future ko Engineer kar rahe hain.", spanish: "Diseñando el Futuro de la Educación Química.", arabic: "نصنع مستقبل تعليم الكيمياء.", french: "Concevoir l'Avenir de l'Éducation Chimique.", german: "Die Zukunft der Chemie-Bildung Gestalten." },
  "about.body": { english: "SYNERGIC BOND was built with a single obsession — give every chemistry student, regardless of geography or resources, access to the kind of precision preparation that produces top rankers, Olympiad medalists, and future scientists.", hindi: "SYNERGIC BOND एक ही जुनून से बना है — हर केमिस्ट्री विद्यार्थी को, चाहे वह कहीं का हो या उसके पास जो भी संसाधन हों, वही सटीक तैयारी मिले जो टॉप रैंकर, ओलंपियाड मेडलिस्ट और भावी वैज्ञानिक बनाती है।", hinglish: "SYNERGIC BOND ek hi obsession se bana hai — har chemistry student ko, chahe woh kahin ka ho, wahi precision preparation mile jo top rankers, Olympiad medalists aur future scientists banati hai.", spanish: "SYNERGIC BOND nació con una sola obsesión: dar a cada estudiante de química, sin importar su lugar o recursos, el tipo de preparación precisa que produce a los mejores, medallistas de olimpiadas y futuros científicos.", arabic: "وُلد SYNERGIC BOND بهَوَس واحد — منح كل طالب كيمياء، أيًّا كان موقعه أو موارده، التحضير الدقيق الذي يصنع المتفوّقين وأبطال الأولمبياد وعلماء المستقبل.", french: "SYNERGIC BOND est né d'une seule obsession : donner à chaque élève en chimie, quels que soient son lieu ou ses ressources, la préparation précise qui forme les meilleurs, les médaillés d'olympiades et les futurs scientifiques.", german: "SYNERGIC BOND entstand aus einer einzigen Besessenheit — jedem Chemie-Lernenden, unabhängig von Ort oder Mitteln, die präzise Vorbereitung zu geben, die Spitzenkräfte, Olympiade-Medaillengewinner und künftige Wissenschaftler hervorbringt." },
  "about.stat1": { english: "Years Teaching", hindi: "वर्षों का अध्यापन", hinglish: "Years Teaching", spanish: "Años Enseñando", arabic: "سنوات تدريس", french: "Ans d'Enseignement", german: "Jahre Lehre" },
  "about.stat2": { english: "Students Guided", hindi: "मार्गदर्शित विद्यार्थी", hinglish: "Students Guided", spanish: "Estudiantes Guiados", arabic: "طلاب تمّ إرشادهم", french: "Élèves Guidés", german: "Betreute Schüler" },
  "about.stat3": { english: "Rank Producers", hindi: "रैंक देने वाले", hinglish: "Rank Producers", spanish: "Generadores de Rango", arabic: "صنّاع المراتب", french: "Producteurs de Rangs", german: "Rang-Macher" },
  "about.pillar1body": { english: "Engineered to decode the highest-tier patterns of JEE Advanced, NEET, and International Olympiads — built by educators with 18+ years of rank-topping results.", hindi: "JEE Advanced, NEET और इंटरनेशनल ओलंपियाड के सबसे कठिन पैटर्न को समझने के लिए बनाया गया — 18+ वर्षों के रैंक-टॉपिंग अनुभव वाले शिक्षकों द्वारा।", hinglish: "JEE Advanced, NEET aur International Olympiads ke highest-tier patterns decode karne ke liye banaya — 18+ years rank-topping experience wale educators ne.", spanish: "Diseñado para descifrar los patrones de más alto nivel de JEE Advanced, NEET y olimpiadas internacionales — por educadores con más de 18 años de resultados de élite.", arabic: "مصمَّم لفك أصعب أنماط JEE Advanced وNEET والأولمبياد الدولي — من معلّمين بخبرة 18+ عامًا في صناعة المتفوّقين.", french: "Conçu pour décoder les schémas les plus exigeants de JEE Advanced, NEET et des olympiades internationales — par des enseignants avec plus de 18 ans de résultats d'élite.", german: "Entwickelt, um die anspruchsvollsten Muster von JEE Advanced, NEET und internationalen Olympiaden zu entschlüsseln — von Lehrkräften mit über 18 Jahren Spitzenresultaten." },
  "about.pillar2body": { english: "We transform rigid rote-memorization into dynamic visual mechanisms and algorithmic practice — so chemistry becomes intuition, not cramming.", hindi: "हम रटने को गतिशील विज़ुअल मैकेनिज़म और एल्गोरिद्मिक अभ्यास में बदलते हैं — ताकि केमिस्ट्री रटना नहीं, समझ बने।", hinglish: "Hum rote-memorization ko dynamic visual mechanisms aur algorithmic practice mein badalte hain — taaki chemistry ratna nahi, intuition ban jaye.", spanish: "Transformamos la memorización rígida en mecanismos visuales dinámicos y práctica algorítmica — para que la química sea intuición, no memorización.", arabic: "نحوّل الحفظ الجامد إلى آليات بصرية ديناميكية وتمارين منهجية — لتصبح الكيمياء حدسًا لا تلقينًا.", french: "Nous transformons le par-cœur rigide en mécanismes visuels dynamiques et pratique algorithmique — pour que la chimie devienne intuition, pas bachotage.", german: "Wir verwandeln starres Auswendiglernen in dynamische visuelle Mechanismen und algorithmisches Üben — damit Chemie zur Intuition wird, nicht zum Pauken." },
  "about.pillar3body": { english: "Fine-tuned core chemistry data trained to assist students 24/7 with zero placeholders — real answers from a real expert, powered by AI speed.", hindi: "बारीकी से तैयार कोर केमिस्ट्री डेटा जो विद्यार्थियों की 24/7 मदद करता है — बिना किसी प्लेसहोल्डर के, असली विशेषज्ञ के असली जवाब, AI की रफ़्तार के साथ।", hinglish: "Fine-tuned core chemistry data jo students ki 24/7 help karta hai — zero placeholders, real expert ke real answers, AI speed ke saath.", spanish: "Datos químicos esenciales afinados para ayudar a los estudiantes 24/7 sin rellenos — respuestas reales de un experto real, con la velocidad de la IA.", arabic: "بيانات كيمياء أساسية مُحسّنة لمساعدة الطلاب 24/7 دون حشو — إجابات حقيقية من خبير حقيقي بسرعة الذكاء الاصطناعي.", french: "Des données de chimie affinées pour aider les élèves 24/7 sans remplissage — de vraies réponses d'un vrai expert, à la vitesse de l'IA.", german: "Fein abgestimmte Chemie-Kerndaten, die Schüler rund um die Uhr unterstützen — ohne Platzhalter, echte Antworten eines echten Experten, mit KI-Tempo." },
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
