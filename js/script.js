(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- icons ---------- */
  const ICONS = {
    home: "M3 11l9-8 9 8M5 10v10h14V10",
    folder: "M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z",
    book: "M4 4h6a2 2 0 012 2v14a2 2 0 00-2-2H4zM20 4h-6a2 2 0 00-2 2v14a2 2 0 012-2h6z",
    cards: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
    quiz: "M12 21a9 9 0 100-18 9 9 0 000 18zM8 12l3 3 5-6",
    search: "M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3",
    moon: "M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z",
    sun: "M12 16a4 4 0 100-8 4 4 0 000 8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
    flame: "M12 22c4 0 7-3 7-7 0-3-2-5-3-7-1 2-2 3-3 3 0-4-2-7-4-9 0 5-4 7-4 12 0 4 3 8 7 8z",
    clock: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2",
    right: "M5 12h14M13 6l6 6-6 6",
    left: "M19 12H5M11 6l-6 6 6 6",
    shuffle: "M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5",
    list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
    target: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 16a4 4 0 100-8 4 4 0 000 8z",
    trophy: "M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0zM17 5h3v2a3 3 0 01-3 3M7 5H4v2a3 3 0 003 3",
    reset: "M3 12a9 9 0 109-9 9 9 0 00-6.7 3L3 8M3 3v5h5",
    menu: "M4 6h16M4 12h16M4 18h16",
    check: "M5 12l5 5 9-10",
    cpu: "M7 7h10v10H7zM9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3",
    briefcase: "M3 8h18v12H3zM8 8V5a1 1 0 011-1h6a1 1 0 011 1v3M3 13h18",
    globe: "M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
    shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
    sparkle: "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z",
    glossary: "M4 5h16M4 10h16M4 15h10M4 20h7",
    chev: "M9 6l6 6-6 6",
    cloud: "M7 18a4 4 0 010-8 5 5 0 019.6-1.3A4.5 4.5 0 0117 18z",
    plus: "M12 5v14M5 12h14",
    eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 15a3 3 0 100-6 3 3 0 000 6z"
  };
  const ic = (n, s = 18) => `<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ICONS[n]}"/></svg>`;

  /* ---------- topic meta ---------- */
  const META = {
    m1t1: { n: 1, short: "History of Computing", min: 14, icon: "cpu", take: ["Computing is processing information to solve problems — older than computers themselves.", "Early devices (tally sticks → Leibniz Calculator) automated arithmetic step by step.", "Babbage, Lovelace and Hollerith laid the groundwork for modern computing.", "Nine eras trace the journey from gears to AI and mobile."] },
    m1t2: { n: 2, short: "Social History", min: 10, icon: "globe", take: ["Computing transformed education, communication, healthcare, business, entertainment and government.", "Downsides include privacy loss, cybercrime, job displacement, the digital divide and misinformation.", "Always verify before sharing — popularity is not proof of accuracy."] },
    m2t1: { n: 1, short: "Computer System", min: 8, icon: "cpu", take: ["A computer accepts data, processes it, stores it and produces information (IPO cycle).", "Computers are fast, accurate, consistent and connected — but they don't think independently.", "They come as personal/mobile, enterprise/scale and embedded systems."] },
    m2t2: { n: 2, short: "Inside a Computer", min: 12, icon: "cpu", take: ["The CPU has an ALU, Control Unit and Registers and follows Fetch → Decode → Execute.", "RAM is temporary and fast; storage is permanent and slower.", "Software is instructions; data is raw input; information is processed data."] },
    m2t3: { n: 3, short: "Number Systems", min: 16, icon: "cpu", take: ["Computers use binary (base 2); humans use decimal (base 10).", "Binary → decimal: multiply by place value and add. Decimal → binary: divide by 2 and read remainders bottom to top.", "Hex groups 4 bits; octal groups 3. In binary, 1 + 1 = 10."] },
    m2t4: { n: 4, short: "User Interaction", min: 8, icon: "eye", take: ["UI evolved from punch cards → CLI → GUI → touch → voice.", "Good interfaces are easy to learn, efficient, accessible and safe.", "A powerful computer is useless if people can't use it effectively."] },
    m3t1: { n: 1, short: "Computer Networks", min: 12, icon: "globe", take: ["A network connects devices to communicate, share data and access services.", "Types: PAN, LAN, MAN, WAN. Topologies: bus, star, ring, mesh.", "Routers connect networks; switches forward intelligently; DNS maps names to IPs."] },
    m3t2: { n: 2, short: "Internet & WWW", min: 10, icon: "globe", take: ["The Internet is infrastructure; the WWW is a service running on it.", "HTTPS encrypts traffic. DNS translates domain names into IP addresses.", "Web evolved from static (Web 1.0) to read/write (Web 2.0) to intelligent (modern)."] },
    m3t3: { n: 3, short: "HTML", min: 8, icon: "book", take: ["HTML is a markup language, not a programming language.", "HTML = structure, CSS = appearance, JavaScript = behavior.", "Elements = tag + content + closing tag; void elements need no closing tag."] },
    m3t4: { n: 4, short: "CSS", min: 8, icon: "book", take: ["CSS controls appearance, positioning and layout.", "Selectors: element, class (.), ID (#). Specificity: ID > Class > Element.", "External CSS is the recommended way for reusable styling."] },
    m3t5: { n: 5, short: "Cyber Threats", min: 12, icon: "shield", take: ["Malware includes viruses, worms, trojans, ransomware, spyware and keyloggers.", "Social engineering: phishing, spear phishing, smishing, vishing, pharming.", "Golden Rule of Defense: Stop → Think → Verify."] },
    m3t6: { n: 6, short: "Cybersecurity Categories", min: 10, icon: "shield", take: ["Categories: network, information, application, endpoint, cloud, IAM and operational.", "CIA Triad: Confidentiality, Integrity, Availability.", "Defense in Depth: layers work together — user, device, network, application, data."] },
    m3t7: { n: 7, short: "Cybersecurity Tech", min: 14, icon: "shield", take: ["Key tech: firewalls, antivirus, encryption, MFA, VPN, IDS/IPS, TLS, backups.", "IDS detects and alerts; IPS detects and blocks.", "People + Processes + Technology = Cybersecurity."] },
    t1: { n: 1, short: "Computing Trends", min: 14, icon: "cpu", take: ["A trend is a technology gaining adoption. One technology can be both current and emerging, depending on the application.", "Eight major trends: AI, cloud, cybersecurity, big data, IoT, edge, AR/VR/XR and robotics. Emerging: quantum, digital twins, green IT, blockchain and 5G.", "Benefits must be balanced with security, privacy, fairness and sustainability."] },
    t2: { n: 2, short: "Computing Careers", min: 12, icon: "briefcase", take: ["Computing professionals work in every sector, not only in technology companies.", "Ten core roles plus paths like cloud, DevOps, QA, game development and project management.", "Technical skills do the work, soft skills help you collaborate. Build a path: explore, learn, practice, portfolio, experience."] },
    t3: { n: 3, short: "Impact on Society", min: 13, icon: "globe", take: ["Computing affects communication, education, business, healthcare, government and the environment.", "Risks include privacy loss, cybercrime, misinformation, automation, mental health strain and the digital divide.", "Society shapes technology and technology shapes society, so users and professionals share responsibility."] },
    t4: { n: 4, short: "Ethics in Computing", min: 12, icon: "shield", take: ["Appreciating computing means valuing it and using it responsibly and ethically.", "Professionals owe accuracy, security, quality, honesty, respect for users and accountability.", "Something can be technically possible without being ethical. Protect privacy, give credit and use AI honestly."] }
  };

  /* ---------- flatten modules ---------- */
  const SUBJECT = SUBJECTS[0];
  const MODULES = SUBJECT.modules;
  const TOPICS = [];
  MODULES.forEach(m => m.topics.forEach(t => { t.moduleId = m.id; t.moduleNo = +m.id.slice(1); t.moduleName = m.name; TOPICS.push(t); }));
  TOPICS.forEach(t => Object.assign(t, META[t.id] || { n: 1, short: t.title, min: 10, icon: "book", take: [] }));

  const topicById = id => TOPICS.find(t => t.id === id);
  const moduleById = id => MODULES.find(m => m.id === id);
  const moduleTopics = id => TOPICS.filter(t => t.moduleId === id);
  const col = t => t.id === "mix" ? 'style="--c:var(--accent);--cs:var(--accent-soft)"' : `style="--c:var(--c${t.n});--cs:var(--s${t.n})"`;
  const TAB_NAME = { notes: "Notes", cards: "Flashcards", quiz: "Quiz" };
  const TAB_ICON = { notes: "book", cards: "cards", quiz: "quiz" };

  /* ---------- storage ---------- */
  let P = { known: {}, read: {}, best: {}, days: {}, attempts: 0, last: null };
  try { const r = localStorage.getItem("reviewhub.v3"); if (r) Object.assign(P, JSON.parse(r)); } catch (e) { }
  const save = () => { try { localStorage.setItem("reviewhub.v3", JSON.stringify(P)); } catch (e) { } };
  const dayKey = d => { d = d || new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const touch = () => { const k = dayKey(); P.days[k] = (P.days[k] || 0) + 1; save(); };
  const streak = () => { let n = 0; const d = new Date(); if (!P.days[dayKey(d)]) d.setDate(d.getDate() - 1); while (P.days[dayKey(d)]) { n++; d.setDate(d.getDate() - 1); } return n; };

  /* ---------- derived ---------- */
  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
  const readN = t => (P.read[t.id] || []).length;
  const knownN = t => (P.known[t.id] || []).length;
  const readPct = t => pct(readN(t), t.notes.length);
  const cardPct = t => pct(knownN(t), t.cards.length);
  const quizPct = t => P.best[t.id] || 0;
  const mastery = t => Math.round((readPct(t) + cardPct(t) + quizPct(t)) / 3);
  const moduleMastery = mId => { const ts = moduleTopics(mId); return ts.length ? Math.round(ts.reduce((a, t) => a + mastery(t), 0) / ts.length) : 0; };
  const totals = () => {
    const cards = TOPICS.reduce((a, t) => a + t.cards.length, 0), known = TOPICS.reduce((a, t) => a + knownN(t), 0);
    const bests = TOPICS.filter(t => P.best[t.id] != null);
    return {
      cards, known, cardsPct: pct(known, cards), avgQuiz: bests.length ? Math.round(bests.reduce((a, t) => a + P.best[t.id], 0) / bests.length) : 0,
      mastery: Math.round(TOPICS.reduce((a, t) => a + mastery(t), 0) / TOPICS.length), sections: TOPICS.reduce((a, t) => a + t.notes.length, 0), questions: TOPICS.reduce((a, t) => a + t.quiz.length, 0)
    };
  };
  const ring = (p, size = 64, stroke = 7, color = "var(--c, var(--accent))") => {
    const r = (size - stroke) / 2, c = 2 * Math.PI * r;
    return `<span class="ring" style="width:${size}px;height:${size}px;--rf:${Math.round(size * .26)}px"><svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" style="stroke:var(--line)" stroke-width="${stroke}"/><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" style="stroke:${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - p / 100)}" transform="rotate(-90 ${size / 2} ${size / 2})"/></svg><b>${p}%</b></span>`;
  };
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; };
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const plain = h => h.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const toast = msg => { const t = $("#toast"); t.textContent = msg; t.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => t.hidden = true, 1800); };

  /* ---------- state ---------- */
  const S = {
    view: "home", module: null, topic: null, tab: "notes", list: false, gq: "", gf: "all",
    fc: { i: 0, flip: false, only: false, deck: [] }, qz: { phase: "intro", i: 0, pick: null, score: 0, run: 0, bestRun: 0, qs: [], miss: [], log: [] }
  };
  let spy = null;

  /* ---------- theme ---------- */
  const effTheme = () => document.documentElement.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  try { const st = localStorage.getItem("reviewhub.theme"); if (st) document.documentElement.setAttribute("data-theme", st); } catch (e) { }
  const paintTheme = () => { const d = effTheme() === "dark"; $("#themeBtn").innerHTML = ic(d ? "sun" : "moon", 19); $("#themeBtn").setAttribute("aria-label", d ? "Switch to light mode" : "Switch to dark mode"); };

  /* ---------- sidebar ---------- */
  function sideHtml() {
    const T = totals(), v = S.view;
    const modBlocks = MODULES.map(m => {
      const open = (v === "module" && S.module && S.module.id === m.id) || (v === "topic" && S.topic && S.topic.moduleId === m.id);
      const tp = moduleTopics(m.id);
      const topics = tp.map(t => `<button class="sl l3${v === "topic" && S.topic && S.topic.id === t.id ? " on" : ""}" data-act="open" data-arg="${t.id}" ${col(t)}><span class="dot"></span><span class="lbl">T${t.n} · ${t.short}</span><span class="mini">${mastery(t)}%</span></button>`).join("");
      return `<button class="sl l2${v === "module" && S.module && S.module.id === m.id ? " on" : ""}" data-act="module" data-arg="${m.id}">${ic("folder", 16)}<span class="lbl">${m.name} · ${m.sub}</span><span class="mini">${moduleMastery(m.id)}%</span></button>${open ? topics : ""}`;
    }).join("");
    return `<h5>Library</h5>
    <button class="sl${v === "home" ? " on" : ""}" data-act="home">${ic("home")}<span class="lbl">Dashboard</span></button>
    <button class="sl${v === "subject" ? " on" : ""}" data-act="subject">${ic("folder")}<span class="lbl">${SUBJECT.name}</span></button>
    ${modBlocks}
    <h5>Study tools</h5>
    <button class="sl${v === "glossary" ? " on" : ""}" data-act="glossary">${ic("glossary")}<span class="lbl">Glossary</span><span class="mini">${T.cards}</span></button>
    <button class="sl${v === "topic" && S.topic && S.topic.id === "mix" ? " on" : ""}" data-act="mix">${ic("target")}<span class="lbl">Mixed quiz</span><span class="mini">20 Q</span></button>
    <div class="side-card"><div class="row">${ring(T.mastery, 56, 6, "var(--accent)")}<div><b>Overall mastery</b><small>${T.known} of ${T.cards} cards known</small></div></div>
      <div class="bar"><span style="width:${T.cardsPct}%;--c:var(--accent)"></span></div></div>
    <div class="kbd-hint"><span><kbd>/</kbd> search anywhere</span><span><kbd>Space</kbd> flip · <kbd>←</kbd><kbd>→</kbd> cards</span><span><kbd>1</kbd>–<kbd>4</kbd> answer quiz</span></div>`;
  }
  function chrome() {
    $("#side").innerHTML = sideHtml();
    const n = streak(); $("#streak").innerHTML = `${ic("flame", 17)}<span>${n} day${n === 1 ? "" : "s"}</span>`;
    const br = $("#bring"); if (br && S.topic && S.topic.id !== "mix") br.innerHTML = ring(mastery(S.topic), 84, 9) + "<small>Mastery</small>";
  }

  /* ---------- views ---------- */
  const crumbs = items => `<nav class="crumbs">${items.map((x, i) => (i ? ic("chev", 14) : "") + (x[1] && i < items.length - 1 ? `<button data-act="${x[1]}"${x[2] ? ` data-arg="${x[2]}"` : ""}>${x[0]}</button>` : `<span>${x[0]}</span>`)).join("")}</nav>`;

  function homeHtml() {
    const T = totals(), last = P.last && topicById(P.last.id);
    const nx = TOPICS.slice().sort((a, b) => mastery(a) - mastery(b))[0];
    const cont = last ? `Continue · Topic ${last.n} ${TAB_NAME[P.last.tab]}` : "Start with Topic 1";
    const contArg = last ? `${last.id}:${P.last.tab}` : "t1:notes";
    const stat = (c, i, v, l) => `<div class="stat" style="--c:var(--c${c});--cs:var(--s${c})"><span class="ico">${ic(i, 22)}</span><div><b>${v}</b><small>${l}</small></div></div>`;
    return `<section class="hero"> <div><p class="eyebrow">My Library · Notesch</p> <h1>Kung ay tubig ay water, <span>I miss you.</span></h1> <p class="lead">She's the one who showed me that theres something, she made me feel like I mattered, like I was someone she genuinely wanted, someone that's worth choosing. But now I realize, maybe she just loved the idea of loving me. Maybe she just like how I cared. But when it came to actually choosing me, she couldn't do it. Di ko boang para di nako mapansin, gakakita nako ang tanan, gaka feel nako. I can feel the small changes nga ga hinay hinay niya nga pag layo sa ako and pagka inconsistent. But even though that happened, I just chose to stay, even when I already know the truth, I still stayed, even when things started to feel one-sided. Because despite everything, I still appreciate her for being who she is.</p> <div class="hero-actions"><button class="btn primary" data-act="open" data-arg="${contArg}">${cont} ${ic("right", 16)}</button><button class="btn" data-act="subject">${ic("folder", 16)} Browse</button></div></div> <div class="hero-art" aria-hidden="true"><div class="orbit"></div><div class="orbit b"></div> <div class="cloud">${ic("cloud", 46)}<b>IT111</b><small>REVIEWER</small></div> <div class="fcard fc-a" style="--c:var(--c1);--cs:var(--s1)"><span class="badge">NOTES</span><div><b>${TOPICS[0].short}</b><small>${TOPICS[0].notes.length} sections</small></div></div> <div class="fcard fc-b" style="--c:var(--c3);--cs:var(--s3)"><span class="badge">CARDS</span><div><b>Flashcards</b><small>${T.cards} cards to master</small></div></div> <div class="fcard fc-c" style="--c:var(--c4);--cs:var(--s4)"><span class="badge">QUIZ</span><div><b>Practice quiz</b><small>${T.questions} questions</small></div></div></div></section> <div class="stats">${stat(1, "target", T.mastery + "%", "Overall mastery")}${stat(3, "cards", `${T.known}/${T.cards}`, "Cards known")}${stat(2, "trophy", T.avgQuiz ? T.avgQuiz + "%" : "None yet", "Average best quiz")}${stat(4, "flame", streak(), "Day streak")}</div> <div class="section-head"><div><p class="eyebrow">Recommended</p><h2 class="h2">Up next for you</h2></div></div> <div class="next" ${col(nx)}><span class="fico">${ic(nx.icon, 26)}</span> <div><span class="pill">TOPIC ${nx.n}</span><h3>${nx.title}</h3><p class="lede">${mastery(nx) ? "Your lowest mastery right now. A few flashcards will move it fast." : "Not started yet. Read the notes first, then flip the cards."}</p></div> <div class="chips"><button class="btn sm" data-act="open" data-arg="${nx.id}:notes">${ic("book", 15)} Notes</button><button class="btn sm" data-act="open" data-arg="${nx.id}:cards">${ic("cards", 15)} Cards</button><button class="btn sm" data-act="open" data-arg="${nx.id}:quiz">${ic("quiz", 15)} Quiz</button></div></div> <div class="section-head"><div><p class="eyebrow">Subject folders</p><h2 class="h2">Your library</h2></div></div> <div class="grid"><button class="folder" data-act="subject"><div class="top"><span class="fico">${ic("folder", 26)}</span>${ring(T.mastery, 52, 6, "var(--accent)")}</div> <div><h3>IT111</h3><p>Introduction to Computing</p></div> <div class="chips"><span class="chip">1 module</span><span class="chip">4 topics</span><span class="chip">${T.cards} flashcards</span><span class="chip">${T.questions} questions</span></div></button></div> <div class="section-head"><div><p class="eyebrow">How it works</p><h2 class="h2">Three steps per topic</h2></div></div> <div class="steps"><div class="step"><span class="ico">${ic("book", 21)}</span><h3>Read the notes</h3><p>Use the outline to jump around. Mark each section as read.</p></div>${ic("right", 22)} <div class="step"><span class="ico">${ic("cards", 21)}</span><h3>Flip the cards</h3><p>Mark what you know. Filter to the ones you do not.</p></div>${ic("right", 22)} <div class="step"><span class="ico">${ic("quiz", 21)}</span><h3>Take the quiz</h3><p>Answers come with explanations and a missed-items review.</p></div></div> ${footHtml()}`;
  } const footHtml = () => `<div class="foot"><span>Source: Source-sogon(luther gwapo)</span><span>Progress is saved in this browser only.</span></div>`;

  function subjectHtml() {
    const T = totals();
    return crumbs([["Library", "home"], ["IT111", null]]) + `<header class="banner"><div><p class="eyebrow">Subject folder</p><h1 class="h1">IT111</h1><p class="lede">Introduction to Computing</p><div class="chips"><span class="chip">${ic("folder", 14)} ${MODULES.length} modules</span><span class="chip">${ic("book", 14)} ${TOPICS.length} topics</span><span class="chip">${ic("cards", 14)} ${T.cards} cards</span></div></div><div class="bring">${ring(T.mastery, 84, 9, "var(--accent)")}<small>Mastery</small></div><span class="wm">IT</span></header>
    <div class="section-head"><h2 class="h2">Modules</h2></div>
    <div class="grid">${MODULES.map(m => `<button class="folder" data-act="module" data-arg="${m.id}"><div class="top"><span class="fico">${ic("folder", 26)}</span>${ring(moduleMastery(m.id), 52, 6, "var(--accent)")}</div><div><h3>${m.name}</h3><p>${m.sub}</p></div><div class="chips"><span class="chip">${m.topics.length} topics</span><span class="chip">${m.topics.reduce((a, t) => a + t.notes.length, 0)} sections</span><span class="chip">${m.topics.reduce((a, t) => a + t.quiz.length, 0)} questions</span></div></button>`).join("")}</div>${footHtml()}`;
  }

  function topicCard(t) {
    return `<article class="tcard" tabindex="0" role="button" data-act="open" data-arg="${t.id}" aria-label="Open ${t.moduleName} Topic ${t.n}: ${esc(t.title)}" ${col(t)}>
    <div class="tcard-head"><span class="tnum">0${t.n}</span><span class="ticon">${ic(t.icon, 24)}</span></div>
    <div><h3>${t.title}</h3><p>${t.sub}</p></div>
    <div class="chips"><span class="chip">${ic("book", 14)} ${t.notes.length} sections</span><span class="chip">${ic("cards", 14)} ${t.cards.length} cards</span><span class="chip">${ic("quiz", 14)} ${t.quiz.length} Q</span></div>
    <div class="meters"><div class="meter">Notes<div class="bar"><span style="width:${readPct(t)}%"></span></div><em>${readPct(t)}%</em></div><div class="meter">Cards<div class="bar"><span style="width:${cardPct(t)}%"></span></div><em>${cardPct(t)}%</em></div><div class="meter">Quiz<div class="bar"><span style="width:${quizPct(t)}%"></span></div><em>${P.best[t.id] != null ? quizPct(t) + "%" : "–"}</em></div></div>
    <div class="tfoot"><span>${ic("clock", 14)} ~${t.min} min</span><div class="quick"><button data-act="open" data-arg="${t.id}:notes" title="Notes" aria-label="Open notes">${ic("book", 16)}</button><button data-act="open" data-arg="${t.id}:cards" title="Flashcards" aria-label="Open flashcards">${ic("cards", 16)}</button><button data-act="open" data-arg="${t.id}:quiz" title="Quiz" aria-label="Open quiz">${ic("quiz", 16)}</button></div></div></article>`;
  }
  function moduleHtml() {
    const m = S.module, T = totals(), ts = moduleTopics(m.id);
    return crumbs([["Library", "home"], ["IT111", "subject"], [m.name, null]]) + `<header class="banner"><div><p class="eyebrow">IT111 · ${m.name}</p><h1 class="h1">${m.sub}</h1><p class="lede">${ts.length} topics. Open one to read, flip cards or take its quiz.</p>
    <div class="chips"><span class="chip">${ic("book", 14)} ${ts.reduce((a, t) => a + t.notes.length, 0)} sections</span><span class="chip">${ic("cards", 14)} ${ts.reduce((a, t) => a + t.cards.length, 0)} cards</span><span class="chip">${ic("quiz", 14)} ${ts.reduce((a, t) => a + t.quiz.length, 0)} questions</span></div></div><div class="bring">${ring(moduleMastery(m.id), 84, 9, "var(--accent)")}<small>Mastery</small></div><span class="wm">0${m.id.slice(1)}</span></header>
    <div class="section-head"><div><p class="eyebrow">Topics</p><h2 class="h2">Pick a topic to study</h2></div><div class="chips"><button class="btn sm" data-act="glossary">${ic("glossary", 15)} Glossary</button><button class="btn sm primary" data-act="mix">${ic("target", 15)} Mixed quiz</button><button class="btn sm" data-act="view" aria-pressed="${S.list}">${ic(S.list ? "grid" : "list", 15)} ${S.list ? "Grid" : "List"}</button></div></div>
    <div class="grid${S.list ? " list" : ""}">${ts.map(topicCard).join("")}</div>${footHtml()}`;
  }

  function topicHtml() {
    const t = S.topic, mix = t.id === "mix";
    const crumb = crumbs([["Library", "home"], ["IT111", "subject"], [mix ? "Mixed quiz" : t.moduleName, mix ? null : "module", mix ? null : t.moduleId], [mix ? "Mixed quiz" : "Topic " + t.n, null]]);
    const banner = mix
      ? `<header class="banner" ${col(t)}><div><p class="eyebrow">Exam simulation</p><h1 class="h1">Mixed module quiz</h1><p class="lede">${t.quiz.length} random questions from all four modules.</p></div><span class="wm">?</span></header>`
      : `<header class="banner" ${col(t)}><div><p class="eyebrow">${t.moduleName} · IT111</p><h1 class="h1">${t.title}</h1><p class="lede">${t.sub}</p>
      <div class="chips"><span class="chip">${ic("book", 14)} ${t.notes.length} sections</span><span class="chip">${ic("cards", 14)} ${t.cards.length} cards</span><span class="chip">${ic("quiz", 14)} ${t.quiz.length} questions</span><span class="chip">${ic("clock", 14)} ~${t.min} min</span></div></div><div class="bring" id="bring"></div><span class="wm">0${t.n}</span></header>`;
    const tabs = mix ? "" : `<div class="tabs" role="tablist" ${col(t)}>${["notes", "cards", "quiz"].map(k => `<button class="tab" role="tab" aria-selected="${S.tab === k}" data-act="tab" data-arg="${k}">${ic(TAB_ICON[k], 17)} ${TAB_NAME[k]} <small>${k === "notes" ? t.notes.length : k === "cards" ? t.cards.length : t.quiz.length}</small></button>`).join("")}</div>`;
    return crumb + banner + tabs + `<div class="pane" id="pane" ${col(t)}></div>`;
  }

  /* notes */
  function paintNotes() {
    const t = S.topic, rd = P.read[t.id] || [], pane = $("#pane");
    pane.innerHTML = `<div class="take"><span class="ico">${ic("sparkle", 22)}</span><div><h3>Key takeaways</h3><ul>${t.take.map(x => `<li>${x}</li>`).join("")}</ul></div></div>
    <div class="notes-layout"><nav class="toc" aria-label="Section outline"><h6>Outline</h6>${t.notes.map((n, i) => `<button data-act="toc" data-arg="${i}" data-i="${i}" class="${rd.includes(i) ? "done" : ""}"><span class="tick">${ic("check", 11)}</span><span>${n.title}</span></button>`).join("")}</nav>
    <div><div class="toolbar"><label class="search">${ic("search", 17)}<input id="nq" type="search" placeholder="Search this topic’s notes…" aria-label="Search notes"></label><button class="btn" id="expBtn" data-act="expand">Expand all</button></div>
    <div class="readbar"><span id="rtxt"></span><div class="bar"><span id="rbar" style="width:0"></span></div></div>
    <div id="secs">${t.notes.map((n, i) => `<details class="sec${rd.includes(i) ? " done" : ""}" id="sec-${i}" data-i="${i}" data-text="${esc((n.title + " " + n.tag + " " + plain(n.html)).toLowerCase()).replace(/"/g, "&quot;")}"><summary><span class="n">${i + 1}</span><div><small>${n.tag}</small><h3>${n.title}</h3></div><span class="chev">${ic("chev", 18)}</span></summary><div class="sec-body">${n.html}<div class="sec-foot"><button class="btn sm${rd.includes(i) ? " ok" : ""}" data-act="read" data-arg="${i}">${ic("check", 15)} ${rd.includes(i) ? "Read" : "Mark as read"}</button></div></div></details>`).join("")}</div>
    <p class="empty" id="nempty" hidden>No sections match that search.</p></div></div>`;
    const first = $("#sec-0"); if (first) first.open = true;
    readBar();
    $("#nq").oninput = e => {
      const q = e.target.value.trim().toLowerCase(); let n = 0;
      $$(".sec").forEach(s => { const m = !q || s.dataset.text.includes(q); s.hidden = !m; if (m) n++; if (q) s.open = m; });
      $$(".toc button").forEach(b => b.hidden = !!q && $("#sec-" + b.dataset.i).hidden);
      $("#nempty").hidden = n > 0;
    };
    if (spy) spy.disconnect();
    spy = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) $$(".toc button").forEach(b => b.classList.toggle("on", b.dataset.i === en.target.dataset.i)); }), { rootMargin: "-15% 0px -75% 0px" });
    $$(".sec").forEach(s => spy.observe(s));
  }
  function readBar() {
    const t = S.topic, n = readN(t); const rt = $("#rtxt"), rb = $("#rbar"); if (!rt) return;
    rt.textContent = `${n} of ${t.notes.length} sections read`; rb.style.width = pct(n, t.notes.length) + "%";
  }

  /* flashcards */
  function startFc() { S.fc = { i: 0, flip: false, only: false, deck: S.topic.cards.map((c, i) => i) }; }
  function fcDeck() { const kn = P.known[S.topic.id] || []; return S.fc.only ? S.fc.deck.filter(i => !kn.includes(i)) : S.fc.deck; }
  function paintFc() {
    const t = S.topic, pane = $("#pane"), kn = P.known[t.id] || []; let deck = fcDeck();
    if (!deck.length) {
      pane.innerHTML = `<div class="qwrap"><div class="qcard center"><span class="fico">${ic("trophy", 28)}</span><h3>You marked every card as known.</h3><p class="lede">Reset to review them again, or take the quiz.</p><div class="fc-ctl"><button class="btn primary" data-act="fc-reset">${ic("reset", 16)} Reset progress</button><button class="btn" data-act="fc-all">Show all cards</button><button class="btn" data-act="tab" data-arg="quiz">${ic("quiz", 16)} Take the quiz</button></div></div></div>`; return;
    }
    if (S.fc.i >= deck.length) S.fc.i = 0;
    const idx = deck[S.fc.i], c = t.cards[idx], isK = kn.includes(idx);
    pane.innerHTML = `<div class="fc-wrap"><div class="fc-top"><div class="row"><span>Card ${S.fc.i + 1} of ${deck.length}</span><span>${kn.length} of ${t.cards.length} known</span></div>
    ${S.fc.only ? `<div class="bar"><span style="width:${pct(S.fc.i + 1, deck.length)}%"></span></div>` : `<div class="map" aria-label="Card map">${S.fc.deck.map((d, p) => `<button data-act="fc-jump" data-arg="${p}" aria-label="Card ${p + 1}" class="${p === S.fc.i ? "cur" : kn.includes(d) ? "k" : ""}"></button>`).join("")}</div>`}</div>
    <div class="stack"><button class="fc${S.fc.flip ? " flip" : ""}" id="fc" data-act="fc-flip" aria-label="Flashcard, press to flip"><div class="fc-in">
      <div class="face"><span class="tag pill">QUESTION</span>${isK ? `<span class="kn">${ic("check", 15)} Known</span>` : ""}<div class="t">${c[0]}</div><span class="hint">${ic("eye", 15)} Click or press Space to reveal</span></div>
      <div class="face back"><span class="tag pill">ANSWER</span><div class="a">${c[1]}</div></div></div></button></div>
    <div class="fc-ctl"><button class="btn" data-act="fc-prev">${ic("left", 16)} Prev</button><button class="btn no" data-act="fc-learn">Still learning</button><button class="btn ok" data-act="fc-got">${ic("check", 16)} Got it</button><button class="btn" data-act="fc-next">Next ${ic("right", 16)}</button></div>
    <div class="fc-ctl"><button class="btn sm" data-act="fc-shuf">${ic("shuffle", 15)} Shuffle</button><button class="btn sm" data-act="fc-only" aria-pressed="${S.fc.only}">${S.fc.only ? "Unknown only: on" : "Show unknown only"}</button><button class="btn sm" data-act="fc-reset">${ic("reset", 15)} Reset</button></div>
    <div class="kb"><span><kbd>Space</kbd> flip</span><span><kbd>←</kbd> <kbd>→</kbd> move</span><span><kbd>G</kbd> got it</span><span><kbd>L</kbd> still learning</span></div></div>`;
  }

  /* quiz */
  const prep = q => { const ix = shuffle(q.o.map((_, i) => i)); return { q: q.q, o: ix.map(i => q.o[i]), a: ix.indexOf(q.a), w: q.w }; };
  function resetQuiz() { S.qz = { phase: "intro", i: 0, pick: null, score: 0, run: 0, bestRun: 0, qs: [], miss: [], log: [] }; }
  function paintQuiz() {
    const t = S.topic, z = S.qz, pane = $("#pane"), L = ["A", "B", "C", "D"];
    if (z.phase === "intro") {
      const b = P.best[t.id];
      pane.innerHTML = `<div class="qwrap"><div class="qcard center"><span class="fico">${ic("quiz", 28)}</span><h3 style="margin:4px 0 0">${t.quiz.length} questions, with explanations</h3><p class="lede">Questions and answer order are shuffled each time. You see the explanation right after each answer.</p>
      <div class="facts"><span class="chip">${ic("clock", 14)} ~${Math.ceil(t.quiz.length / 2)} min</span><span class="chip">${ic("trophy", 14)} ${b != null ? "Best: " + b + "%" : "No attempts yet"}</span></div>
      <button class="btn primary" data-act="qz-start" style="margin-top:8px">Start quiz ${ic("right", 16)}</button></div></div>`; return;
    }
    if (z.phase === "done") {
      const p = pct(z.score, z.qs.length);
      const msg = p >= 90 ? "Excellent. You are exam ready on this topic." : p >= 70 ? "Good work. Review the missed items and try again." : p >= 50 ? "Getting there. Re-read the notes, then retake." : "Go back to the notes and flashcards, then try again.";
      pane.innerHTML = `<div class="qwrap"><div class="qcard center">${ring(p, 130, 12)}<h3 style="margin:6px 0 0">${z.score} of ${z.qs.length} correct</h3><p class="lede">${msg}</p>
      <div class="facts"><span class="chip">${ic("flame", 14)} Best run: ${z.bestRun} in a row</span>${t.id !== "mix" ? `<span class="chip">${ic("trophy", 14)} Best score: ${P.best[t.id]}%</span>` : ""}</div>
      ${z.miss.length ? `<div class="miss"><b style="font-size:13px">Review these ${z.miss.length}</b>${z.miss.map(m => `<div>${m.q}<br><b>Answer: ${m.o[m.a]}</b></div>`).join("")}</div>` : `<div class="miss"><div>No missed questions. Nice work.</div></div>`}
      <div class="fc-ctl" style="margin-top:8px"><button class="btn primary" data-act="qz-retake">${ic("reset", 16)} Retake</button>${t.id !== "mix" ? `<button class="btn" data-act="tab" data-arg="cards">${ic("cards", 16)} Flashcards</button>` : `<button class="btn" data-act="home">Back to dashboard</button>`}</div></div></div>`; return;
    }
    const q = z.qs[z.i];
    pane.innerHTML = `<div class="qwrap"><div class="qcard"><div class="qhead"><span>Question ${z.i + 1} of ${z.qs.length}</span><span>${z.run > 1 ? ic("flame", 14) + " " + z.run + " in a row · " : ""}Score ${z.score}</span></div>
    <div class="qdots" style="margin-top:10px">${z.qs.map((_, i) => `<i class="${i < z.log.length ? (z.log[i] ? "ok" : "bad") : i === z.i ? "cur" : ""}"></i>`).join("")}</div>
    <h3 style="margin-top:20px">${q.q}</h3><div class="opts">${q.o.map((o, i) => `<button class="opt${z.pick != null ? (i === q.a ? " right" : i === z.pick ? " wrong" : "") : ""}" data-act="qz-pick" data-arg="${i}"${z.pick != null ? " disabled" : ""}><span class="l">${L[i]}</span><span>${o}</span></button>`).join("")}</div>
    ${z.pick != null ? `<div class="why"><b>${z.pick === q.a ? "Correct. " : "Not quite. "}</b>${q.w}</div><div class="fc-ctl" style="justify-content:flex-end;margin-top:14px"><button class="btn primary" data-act="qz-next">${z.i === z.qs.length - 1 ? "See results" : "Next question"} ${ic("right", 16)}</button></div>` : ""}</div></div>`;
  }

  /* glossary */
  const allTerms = () => TOPICS.flatMap(t => t.cards.map((c, i) => ({ t, i, q: c[0], a: c[1] })));
  function glossaryHtml() {
    return crumbs([["Library", "home"], ["IT111", "subject"], ["Glossary", null]]) + `<header class="banner"><div><p class="eyebrow">Study tool</p><h1 class="h1">Glossary and key terms</h1><p class="lede">Every flashcard as a searchable list. Tick the ones you know.</p></div><span class="wm">A–Z</span></header>
    <div class="toolbar" style="margin-top:22px"><label class="search">${ic("search", 17)}<input id="gq" type="search" placeholder="Search terms and definitions…" value="${esc(S.gq)}" aria-label="Search glossary"></label></div>
    <div class="fchips"><button class="fchip" data-act="gfilter" data-arg="all" aria-pressed="${S.gf === "all"}">All</button>${MODULES.map(m => `<button class="fchip" data-act="gfilter" data-arg="${m.id}" aria-pressed="${S.gf === m.id}">${m.name}</button>`).join("")}${TOPICS.map(t => `<button class="fchip" ${col(t)} data-act="gfilter" data-arg="${t.id}" aria-pressed="${S.gf === t.id}">${t.moduleName.split(" ")[1] || ""} T${t.n}</button>`).join("")}</div>
    <p class="lede" id="gcount" style="margin-top:14px;font-size:13px"></p><div class="terms" id="terms"></div>${footHtml()}`;
  }
  function paintTerms() {
    const q = S.gq.trim().toLowerCase();
    const list = allTerms().filter(x => {
      if (S.gf === "all") return true;
      if (S.gf.startsWith("m") && !S.gf.startsWith("m1") && !S.gf.startsWith("m2") && !S.gf.startsWith("m3") && !S.gf.startsWith("m4")) return x.t.moduleId === S.gf;
      if (/^m\d$/.test(S.gf)) return x.t.moduleId === S.gf;
      return x.t.id === S.gf;
    }).filter(x => !q || (x.q + " " + x.a).toLowerCase().includes(q));
    $("#gcount").textContent = `${list.length} term${list.length === 1 ? "" : "s"}`;
    $("#terms").innerHTML = list.length ? list.map(x => { const k = (P.known[x.t.id] || []).includes(x.i); return `<article class="term" ${col(x.t)}><div class="term-top"><span class="pill">${x.t.moduleName} · T${x.t.n}</span><button class="kbtn" data-act="gterm" data-arg="${x.t.id}:${x.i}" aria-pressed="${k}" aria-label="Mark ${esc(x.q)} as known">${ic("check", 15)}</button></div><h4>${x.q}</h4><p>${x.a}</p></article>`; }).join("") : `<p class="empty" style="grid-column:1/-1">No terms match.</p>`;
  }

  /* ---------- render ---------- */
  function render(scroll = true) {
    const v = S.view, m = $("#main");
    m.innerHTML = v === "home" ? homeHtml() : v === "subject" ? subjectHtml() : v === "module" ? moduleHtml() : v === "glossary" ? glossaryHtml() : topicHtml();
    m.style.animation = "none"; void m.offsetWidth; m.style.animation = "";
    chrome();
    if (v === "topic") { if (S.tab === "notes" && S.topic.id !== "mix") paintNotes(); else if (S.tab === "cards") paintFc(); else paintQuiz(); }
    if (v === "glossary") { paintTerms(); $("#gq").oninput = e => { S.gq = e.target.value; paintTerms(); }; }
    if (scroll) window.scrollTo({ top: 0 });
    closeDrawer();
  }
  function openTopic(id, tab) {
    S.topic = topicById(id); S.view = "topic"; S.tab = tab || "notes";
    if (S.tab === "cards") startFc(); if (S.tab === "quiz") resetQuiz();
    P.last = { id, tab: S.tab }; save(); render();
  }
  function openMix() {
    const all = TOPICS.flatMap(t => t.quiz);
    S.topic = { id: "mix", n: 0, title: "Mixed module quiz", quiz: shuffle(all).slice(0, 20), notes: [], cards: [] }; S.view = "topic"; S.tab = "quiz"; resetQuiz(); render();
  }
  function setTab(k) { S.tab = k; if (k === "cards") startFc(); if (k === "quiz") resetQuiz(); P.last = { id: S.topic.id, tab: k }; save(); render(false); window.scrollTo({ top: 0 }); }
  const closeDrawer = () => { $("#side").classList.remove("open"); $("#backdrop").hidden = true; };

  /* ---------- actions ---------- */
  function act(a, arg, el) {
    const t = S.topic, fc = S.fc, z = S.qz;
    switch (a) {
      case "home": S.view = "home"; render(); break;
      case "subject": S.view = "subject"; render(); break;
      case "module": S.module = moduleById(arg || (t && t.moduleId) || MODULES[0].id); S.view = "module"; render(); break;
      case "glossary": S.view = "glossary"; render(); break;
      case "mix": openMix(); break;
      case "open": { const [id, tab] = arg.split(":"); openTopic(id, tab); break; }
      case "tab": setTab(arg); break;
      case "theme": { const n = effTheme() === "dark" ? "light" : "dark"; document.documentElement.setAttribute("data-theme", n); try { localStorage.setItem("reviewhub.theme", n); } catch (e) { } paintTheme(); break; }
      case "menu": $("#side").classList.add("open"); $("#backdrop").hidden = false; break;
      case "closemenu": closeDrawer(); break;
      case "view": S.list = !S.list; render(false); break;
      case "toc": { const s = $("#sec-" + arg); s.open = true; s.hidden = false; s.scrollIntoView({ behavior: "smooth", block: "start" }); break; }
      case "expand": { const open = el.textContent === "Expand all"; $$(".sec").forEach(s => s.open = open); el.textContent = open ? "Collapse all" : "Expand all"; break; }
      case "read": {
        const i = +arg, a2 = P.read[t.id] || []; const had = a2.includes(i);
        P.read[t.id] = had ? a2.filter(x => x !== i) : a2.concat(i); if (!had) touch(); save();
        const s = $("#sec-" + i); s.classList.toggle("done", !had); el.className = "btn sm" + (had ? "" : " ok"); el.innerHTML = ic("check", 15) + (had ? " Mark as read" : " Read");
        $(`.toc button[data-i="${i}"]`).classList.toggle("done", !had); readBar(); chrome();
        if (!had && readN(t) === t.notes.length) toast("All sections read. Now flip the flashcards."); break;
      }
      case "fc-flip": fc.flip = !fc.flip; $("#fc").classList.toggle("flip", fc.flip); break;
      case "fc-prev": case "fc-next": { const d = fcDeck(); fc.i = (fc.i + (a === "fc-next" ? 1 : -1) + d.length) % d.length; fc.flip = false; paintFc(); break; }
      case "fc-jump": fc.i = +arg; fc.flip = false; paintFc(); break;
      case "fc-got": { const idx = fcDeck()[fc.i], k = P.known[t.id] || []; if (!k.includes(idx)) k.push(idx); P.known[t.id] = k; touch(); fc.flip = false; if (fc.only && fc.i >= fcDeck().length) fc.i = 0; paintFc(); chrome(); break; }
      case "fc-learn": { const idx = fcDeck()[fc.i]; P.known[t.id] = (P.known[t.id] || []).filter(x => x !== idx); save(); const d = fcDeck(); fc.i = (fc.i + 1) % d.length; fc.flip = false; paintFc(); chrome(); break; }
      case "fc-shuf": fc.deck = shuffle(fc.deck); fc.i = 0; fc.flip = false; paintFc(); break;
      case "fc-only": fc.only = !fc.only; fc.i = 0; fc.flip = false; paintFc(); break;
      case "fc-all": fc.only = false; fc.i = 0; paintFc(); break;
      case "fc-reset": P.known[t.id] = []; save(); startFc(); paintFc(); chrome(); toast("Flashcard progress reset"); break;
      case "qz-start": z.phase = "run"; z.qs = (t.id === "mix" ? t.quiz : shuffle(t.quiz)).map(prep); z.i = 0; z.pick = null; z.score = 0; z.run = 0; z.bestRun = 0; z.miss = []; z.log = []; paintQuiz(); break;
      case "qz-pick": { if (z.pick != null) break; const q = z.qs[z.i], i = +arg; z.pick = i; const ok = i === q.a; z.log.push(ok); if (ok) { z.score++; z.run++; z.bestRun = Math.max(z.bestRun, z.run); } else { z.run = 0; z.miss.push(q); } paintQuiz(); break; }
      case "qz-next": if (z.i === z.qs.length - 1) { z.phase = "done"; const p = pct(z.score, z.qs.length); if (t.id !== "mix" && (P.best[t.id] == null || p > P.best[t.id])) P.best[t.id] = p; P.attempts++; touch(); chrome(); } else { z.i++; z.pick = null; } paintQuiz(); break;
      case "qz-retake": if (t.id === "mix") { openMix(); } else { resetQuiz(); paintQuiz(); } break;
      case "gfilter": S.gf = arg; $$(".fchip").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.arg === arg))); paintTerms(); break;
      case "gterm": { const [id, i] = arg.split(":"), k = P.known[id] || [], n = +i; P.known[id] = k.includes(n) ? k.filter(x => x !== n) : k.concat(n); touch(); paintTerms(); chrome(); break; }
      case "sres": {
        const [kind, id, i] = arg.split("|"); hideRes(); $("#gs").value = "";
        if (kind === "topic") openTopic(id, "notes");
        else if (kind === "sec") { openTopic(id, "notes"); setTimeout(() => { const s = $("#sec-" + i); if (s) { s.open = true; s.scrollIntoView({ behavior: "smooth", block: "start" }); } }, 60); }
        else { S.view = "glossary"; S.gf = "all"; S.gq = topicById(id).cards[+i][0]; render(); }
        break;
      }
    }
  }
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-act]");
    if (!el) { if (!e.target.closest(".gsearch")) hideRes(); return; }
    if (el.matches("[disabled]")) return;
    act(el.dataset.act, el.dataset.arg, el);
  });

  /* ---------- global search ---------- */
  const hideRes = () => { const r = $("#sres"); if (r) r.hidden = true; };
  $("#gs").addEventListener("input", e => {
    const q = e.target.value.trim().toLowerCase(), box = $("#sres");
    if (!q) { box.hidden = true; return; }
    const tp = TOPICS.filter(t => (t.title + " " + t.keywords).toLowerCase().includes(q)).slice(0, 4);
    const sc = TOPICS.flatMap(t => t.notes.map((n, i) => ({ t, i, n }))).filter(x => (x.n.title + " " + x.n.tag).toLowerCase().includes(q)).slice(0, 5);
    const tm = allTerms().filter(x => (x.q + " " + x.a).toLowerCase().includes(q)).slice(0, 4);
    const row = (arg, a, b, c) => `<button data-act="sres" data-arg="${arg}" ${col(c)}><span class="dot"></span><span>${a}<small>${b}</small></span></button>`;
    let h = "";
    if (tp.length) h += "<h6>Topics</h6>" + tp.map(t => row(`topic|${t.id}|0`, t.title, `${t.moduleName} · Topic ${t.n}`, t)).join("");
    if (sc.length) h += "<h6>Sections</h6>" + sc.map(x => row(`sec|${x.t.id}|${x.i}`, x.n.title, `${x.t.moduleName} · ${x.n.tag}`, x.t)).join("");
    if (tm.length) h += "<h6>Glossary</h6>" + tm.map(x => row(`term|${x.t.id}|${x.i}`, x.q, `${x.t.moduleName} · Topic ${x.t.n}`, x.t)).join("");
    box.innerHTML = h || `<h6>No results</h6><p style="margin:4px 10px 10px;color:var(--muted);font-size:13px">Try a different word.</p>`; box.hidden = false;
  });

  /* ---------- keyboard ---------- */
  document.addEventListener("keydown", e => {
    const tag = (e.target.tagName || "").toLowerCase();
    if (e.key === "Escape") { hideRes(); closeDrawer(); if (tag === "input") e.target.blur(); return; }
    if ((e.key === "Enter" || e.key === " ") && e.target.matches(".tcard[data-act]") && e.target === document.activeElement) { e.preventDefault(); act(e.target.dataset.act, e.target.dataset.arg, e.target); return; }
    if (tag === "input" || tag === "textarea" || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === "/") { e.preventDefault(); $("#gs").focus(); return; }
    if (S.view !== "topic") return;
    if (S.tab === "cards" && fcDeck().length) {
      if (e.key === " ") { e.preventDefault(); act("fc-flip"); }
      else if (e.key === "ArrowRight") act("fc-next"); else if (e.key === "ArrowLeft") act("fc-prev");
      else if (e.key.toLowerCase() === "g") act("fc-got"); else if (e.key.toLowerCase() === "l") act("fc-learn");
    } else if (S.tab === "quiz" && S.qz.phase === "run") {
      if (/^[1-4]$/.test(e.key) && S.qz.pick == null && +e.key <= S.qz.qs[S.qz.i].o.length) act("qz-pick", String(+e.key - 1));
      else if ((e.key === "Enter" || e.key === "ArrowRight") && S.qz.pick != null) act("qz-next");
    }
  });

  /* ---------- boot ---------- */
  $("#themeBtn").dataset.act = "theme"; $("#menuBtn").innerHTML = ic("menu", 20); $("#gsIcon").innerHTML = ic("search", 17);
  $("#brandMark").innerHTML = ic("book", 19);
  paintTheme(); render(false);
})();
