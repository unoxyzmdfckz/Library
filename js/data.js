var L = function (a) { return " <ul > " + a.map(function (x) { return " <li > " + x + " </li > " }).join(" ") + " </ul > " };
var TRIO = function (app, adv, ch, al) { return " <div class= \"cols\" > <div class= \"col\" > <h4 > " + (al || "Applications") + " </h4 > " + L(app) + " </div > <div class= \"col g\" > <h4 >Advantages</h4 > " + L(adv) + " </div > <div class= \"col r\" > <h4 >Challenges</h4 > " + L(ch) + " </div > </div > " };
var DUO = function (a, at, b, bt, bc) { return " <div class= \"cols\" > <div class= \"col\" > <h4 > " + at + " </h4 > " + L(a) + " </div > <div class= \"col " + (bc || "r") + "\" > <h4 > " + bt + " </h4 > " + L(b) + " </div > </div > " };
var CALL = function (t) { return " <div class= \"callout\" > " + t + " </div > " };

/* --- MODULE 1: History of Computing --- */
var M1_TOPICS = [
    {
        id: "m1t1", no: 1, short: "T1", title: "History of Computing", sub: "From simple calculations to modern computing", tone: "t1",
        keywords: "history babbage lovelace hollerith generations vacuum transistor ic microprocessor",
        notes: [
            { tag: "Foundations", title: "What Is Computing?", html: "<p>Computing involves processing information to solve problems or accomplish a task — calculating, counting, comparing, storing, processing, and making decisions.</p><p>A merchant in ancient times counting sacks of grain using tally marks is already doing computing.</p>" },
            { tag: "Early Devices", title: "Early Calculating Devices", html: L(["<b>Tally Sticks:</b> Pieces of wood/bone with marks to record quantities.", "<b>The Abacus:</b> Manual device using beads on rods for arithmetic.", "<b>Napier's Bones:</b> Numbered rods for multiplication/division (1600s).", "<b>Slide Rule:</b> Mechanical instrument based on logarithms.", "<b>Pascaline:</b> Blaise Pascal's mechanical calculator (1640s) for addition/subtraction.", "<b>Leibniz Calculator:</b> Could perform all four basic arithmetic operations."]) },
            { tag: "Pioneers", title: "The People Behind Computing", html: DUO(["<b>Charles Babbage:</b> Designed Difference Engine & Analytical Engine. Introduced concepts of Processing, Memory, Input, Output.", "<b>Ada Lovelace:</b> Wrote the first algorithm for the Analytical Engine. Regarded as the first computer programmer.", "<b>Herman Hollerith:</b> Invented punched-card tabulating machine for the 1890 US Census. Paved way for IBM."], "Key Figures", [], "", "g") },
            { tag: "Eras", title: "Eras of Computing", html: L(["<b>1. Mechanical Era:</b> Gears and wheels. Automated basic arithmetic.", "<b>2. Electromechanical Era:</b> Relays and punched cards. Processed larger data.", "<b>3. Vacuum Tube Era (1st Gen):</b> ENIAC. Fast but huge, hot, and unreliable.", "<b>4. Transistor Era (2nd Gen):</b> Smaller, faster, reliable. Moved to businesses/universities.", "<b>5. Integrated Circuits (3rd Gen):</b> Transistors on silicon chips. Lower cost, higher reliability.", "<b>6. Microprocessors (4th Gen):</b> Entire CPU on one chip. Enabled Personal Computers.", "<b>7. PC & Internet:</b> Computing shifted to individuals, then connected globally.", "<b>8. Mobile, Cloud & AI:</b> Computing integrated into daily life everywhere."]) }
        ],
        cards: [
            ["What is computing?", "Processing information to solve problems (calculating, counting, storing, deciding)."],
            ["Who is considered the first computer programmer?", "Ada Lovelace, for her work on Babbage's Analytical Engine."],
            ["What did Herman Hollerith invent?", "The punched-card tabulating machine, used for the 1890 US Census."],
            ["What defined the 1st Generation of computers?", "Vacuum tubes. They were large, generated heat, and were unreliable."],
            ["What defined the 4th Generation of computers?", "Microprocessors (entire CPU on a single chip), enabling personal computers."],
            ["What was the Pascaline?", "A mechanical calculator developed by Blaise Pascal in the 1640s for addition and subtraction."]
        ],
        quiz: [
            { q: "What device did Blaise Pascal develop in the 1640s?", o: ["The Abacus", "The Pascaline", "Napier's Bones", "The Slide Rule"], a: 1, w: "The Pascaline was a mechanical calculator for tax calculations." },
            { q: "Who is widely regarded as the world's first computer programmer?", o: ["Charles Babbage", "Herman Hollerith", "Ada Lovelace", "Gottfried Leibniz"], a: 2, w: "Ada Lovelace wrote the first algorithm for the Analytical Engine." },
            { q: "Which era introduced vacuum tubes?", o: ["1st Generation", "2nd Generation", "3rd Generation", "4th Generation"], a: 0, w: "The 1st Generation used vacuum tubes (e.g., ENIAC)." },
            { q: "What technology defined the 4th generation?", o: ["Transistors", "Vacuum tubes", "Integrated circuits", "Microprocessors"], a: 3, w: "Microprocessors compressed the CPU onto a single chip." },
            { q: "What was Herman Hollerith's major contribution?", o: ["Analytical Engine", "Punched-card tabulating machine", "Slide rule", "First algorithm"], a: 1, w: "He invented the punched-card machine for the 1890 Census." }
        ]
    },
    {
        id: "m1t2", no: 2, short: "T2", title: "Social History of Computing", sub: "How computing changed society", tone: "t2",
        keywords: "society education healthcare business privacy cybersecurity digital divide misinformation",
        notes: [
            { tag: "Impact", title: "Computing in Society", html: L(["<b>Education:</b> Shift from physical books to online learning, LMS, and digital libraries.", "<b>Communication:</b> From letters/landlines to email, social media, and video calls.", "<b>Healthcare:</b> Electronic Health Records, medical imaging, AI-assisted diagnosis.", "<b>Business:</b> E-commerce, digital banking, automated inventory.", "<b>Government:</b> Citizen records, automated taxes, digital public services."]) },
            { tag: "Challenges", title: "Is Computing Always Good?", html: DUO(["<b>Privacy & Surveillance:</b> Trade-off between convenience and data collection.", "<b>Cybersecurity:</b> Phishing, hacking, malware, identity theft.", "<b>Job Displacement:</b> Automation changes skills needed, doesn't just destroy jobs.", "<b>Digital Divide:</b> Unequal access to technology and internet.", "<b>Misinformation:</b> Easy to share false info. Verify sources before sharing."], "Key Challenges", [], "", "r") }
        ],
        cards: [
            ["How has computing changed education?", "Online learning, digital libraries, LMS, and automated assessments."],
            ["What is the 'Digital Divide'?", "Unequal access to technology, internet, and digital skills."],
            ["What is the trade-off regarding privacy?", "Convenience often requires giving up personal data."],
            ["How does computing affect healthcare?", "Electronic records, telemedicine, AI diagnosis, and medical imaging."],
            ["What should you do before sharing information online?", "Verify with reliable sources first. Popularity (likes) is not proof of accuracy."]
        ],
        quiz: [
            { q: "What is one major change computing brought to education?", o: ["No more books", "Online learning and digital libraries", "Teachers replaced by AI", "Schools stopped"], a: 1, w: "It enabled online learning and digital resources." },
            { q: "What is the 'digital divide'?", o: ["Gap between old/new computers", "RAM vs Storage", "Unequal access to technology", "Hardware vs Software"], a: 2, w: "It refers to unequal access to technology and internet." },
            { q: "What is the trade-off regarding privacy?", o: ["Convenience requires data", "Privacy is free", "Unrelated", "No risks"], a: 0, w: "Convenience often requires giving up data." },
            { q: "How has computing affected government?", o: ["No records", "All services stopped", "Online portals and digital transactions", "Taxes eliminated"], a: 2, w: "It enabled online portals and digital transactions." },
            { q: "What should you do before sharing info online?", o: ["Share immediately", "Verify with reliable sources", "Trust likes", "Only if friend sent"], a: 1, w: "Always verify with reliable sources first." }
        ]
    }
];

/* --- MODULE 2: Computer Systems --- */
var M2_TOPICS = [
    {
        id: "m2t1", no: 1, short: "T1", title: "Concept of a Computer System", sub: "IPO Cycle and characteristics", tone: "t1",
        keywords: "ipo input process output storage hardware software speed accuracy automation",
        notes: [
            { tag: "Definition", title: "What is a Computer?", html: "<p>An electronic device that accepts data, processes it, stores it, and produces information.</p>" },
            { tag: "IPO", title: "The IPO Cycle", html: L(["<b>Input:</b> Data enters (keyboard, mouse, mic).", "<b>Process:</b> Central units manipulate/calculate data.", "<b>Output:</b> Readable result (monitor, speakers).", "<b>Storage:</b> Saves data for later retrieval."]) },
            { tag: "Characteristics", title: "What Makes Computers Useful?", html: L(["<b>Speed:</b> Millions/billions of operations quickly.", "<b>Accuracy:</b> Highly accurate with correct instructions.", "<b>Storage:</b> Enormous amounts of information.", "<b>Automation:</b> Complex tasks done automatically.", "<b>Consistency:</b> Repeats without getting tired.", "<b>Connectivity:</b> Communicates with other devices."]) },
            { tag: "Limitations", title: "Computers Aren't 'Smart'", html: "<p>Computers don't think, understand intentions, or know truth. They blindly follow instructions. 'Garbage In → Garbage Out' means wrong input leads to wrong output.</p>" },
            { tag: "Forms", title: "Types of Computers", html: L(["<b>Personal/Mobile:</b> Desktops, laptops, smartphones.", "<b>Enterprise:</b> Servers, mainframes, supercomputers.", "<b>Embedded:</b> Inside everyday objects (smartwatches, ATMs, cars, fridges)."]) }
        ],
        cards: [
            ["What does IPO stand for?", "Input, Process, Output (and Storage)."],
            ["What is 'Garbage In, Garbage Out'?", "Wrong input leads to wrong output because computers blindly follow instructions."],
            ["Which is NOT a characteristic of computers?", "Independent thinking. Computers do not think; they follow instructions."],
            ["Give an example of an embedded computer.", "Smart refrigerator, ATM, modern car, or smartwatch."],
            ["What does 'Process' refer to in IPO?", "The computer manipulating and calculating data."]
        ],
        quiz: [
            { q: "What does a computer do with data according to IPO?", o: ["Only stores", "Accepts, processes, stores, produces", "Only displays", "Deletes"], a: 1, w: "It accepts, processes, stores, and produces information." },
            { q: "Which is NOT a useful characteristic?", o: ["Speed", "Accuracy", "Independent thinking", "Consistency"], a: 2, w: "Computers do not think independently." },
            { q: "What does 'Garbage In → Garbage Out' mean?", o: ["Wrong input leads to wrong output", "Computers fix mistakes", "Always correct", "Data cleaned"], a: 0, w: "If input is wrong, output will be wrong." },
            { q: "Which is an embedded computer?", o: ["Desktop", "Laptop", "Tablet", "Smart refrigerator"], a: 3, w: "Smart appliances like fridges are embedded systems." },
            { q: "What does 'Process' refer to?", o: ["Data entering", "Manipulating/calculating data", "Result on screen", "Saving data"], a: 1, w: "Processing is the manipulation and calculation of data." }
        ]
    },
    {
        id: "m2t2", no: 2, short: "T2", title: "Inside a Computer System", sub: "Hardware, Software, CPU, RAM", tone: "t2",
        keywords: "cpu alu control unit registers ram storage system software application software data information",
        notes: [
            { tag: "Hardware", title: "Hardware Components", html: L(["<b>Input Devices:</b> Keyboard, mouse, scanner, mic.", "<b>Output Devices:</b> Monitor, printer, speakers.", "<b>CPU:</b> The 'brain' that executes instructions.", "<b>RAM:</b> Temporary, fast workspace (volatile).", "<b>Storage:</b> Long-term retention (SSD/HDD)."]) },
            { tag: "CPU", title: "Inside the CPU", html: L(["<b>ALU:</b> Arithmetic and Logic Unit (math/comparisons).", "<b>Control Unit:</b> Directs processor, coordinates steps.", "<b>Registers:</b> Tiny, ultra-fast temporary storage.", "<b>CPU Cycle:</b> Fetch → Decode → Execute."]) },
            { tag: "Memory", title: "RAM vs. Storage", html: DUO(["Temporary workspace", "Incredibly fast", "Active programs", "Volatile (erased when off)"], "RAM", ["Long-term retention", "Slower than RAM", "Files, OS permanently", "Persistent"], "Storage (SSD/HDD)") },
            { tag: "Software", title: "Software Types", html: L(["<b>System Software:</b> OS (Windows/macOS), drivers, utilities.", "<b>Application Software:</b> Word processors, browsers, games."]) },
            { tag: "Data", title: "Data vs. Information", html: "<p><b>Data:</b> Raw input (numbers, text). <br><b>Information:</b> Processed data with meaning (e.g., '25 + 17 = 42').</p>" },
            { tag: "Peopleware", title: "Complete System", html: L(["<b>People:</b> Users, programmers, admins.", "<b>Procedures:</b> Rules for operating (backups, security).", "<b>Hardware:</b> The machine.", "<b>Software:</b> The instructions.", "<b>Data:</b> Raw input.", "<b>Information:</b> Final output."]) }
        ],
        cards: [
            ["What are the three main parts inside a CPU?", "ALU (Arithmetic Logic Unit), Control Unit, and Registers."],
            ["What is the key difference between RAM and Storage?", "RAM is temporary and volatile; Storage is permanent and persistent."],
            ["What is the correct order of the CPU cycle?", "Fetch → Decode → Execute."],
            ["Which is an example of system software?", "Windows operating system (or macOS, Linux, drivers)."],
            ["What is the difference between data and information?", "Data is raw input; Information is processed data with meaning."]
        ],
        quiz: [
            { q: "What are the three main parts inside a CPU?", o: ["RAM, SSD, HDD", "ALU, Control Unit, Registers", "Monitor, Keyboard, Mouse", "Windows, macOS, Linux"], a: 1, w: "ALU, Control Unit, and Registers." },
            { q: "Key difference between RAM and storage?", o: ["RAM is temporary; storage is permanent", "RAM is slower", "Storage is inside CPU", "RAM keeps data when off"], a: 0, w: "RAM is volatile (temporary); Storage is persistent." },
            { q: "Correct order of CPU cycle?", o: ["Decode→Fetch→Execute", "Execute→Decode→Fetch", "Fetch→Decode→Execute", "Fetch→Execute→Decode"], a: 2, w: "Fetch, then Decode, then Execute." },
            { q: "Which is system software?", o: ["Microsoft Word", "Google Chrome", "Minecraft", "Windows OS"], a: 3, w: "Operating systems like Windows are system software." },
            { q: "Difference between data and information?", o: ["Data is processed", "Data is raw; Information has meaning", "Same", "Data is numbers only"], a: 1, w: "Data is raw input; Information is processed with meaning." }
        ]
    },
    {
        id: "m2t3", no: 3, short: "T3", title: "Number Systems", sub: "Binary, Decimal, Hex, Octal, IP Addresses", tone: "t3",
        keywords: "binary decimal hexadecimal octal base conversion ip address ipv4 bits bytes",
        notes: [
            { tag: "Basics", title: "Number Systems", html: "<p>Computers use Binary (Base 2: 0,1). Humans use Decimal (Base 10: 0-9). Hex (Base 16) and Octal (Base 8) are shortcuts for binary.</p>" },
            { tag: "Binary", title: "Binary (Base 2)", html: L(["Digits: 0, 1.", "Place values: 1, 2, 4, 8, 16, 32...", "Example: 1011₂ = 8+0+2+1 = 11₁₀", "<b>Decimal to Binary:</b> Repeated division by 2, read remainders bottom-up."]) },
            { tag: "Hex/Octal", title: "Hexadecimal & Octal", html: L(["<b>Hex (Base 16):</b> 0-9, A-F. Groups of 4 bits. Example: 1111 1010 = FA.", "<b>Octal (Base 8):</b> 0-7. Groups of 3 bits. Example: 101 111 = 57."]) },
            { tag: "IP", title: "IP Addresses", html: "<p>IPv4 addresses (e.g., 192.168.1.10) have 4 octets. Each octet is 8 bits. Total 32 bits. Range per octet: 0-255.</p>" }
        ],
        cards: [
            ["What is the decimal equivalent of 1010₂?", "10 (8 + 0 + 2 + 0)."],
            ["What is the binary equivalent of 25₁₀?", "11001₂ (16 + 8 + 1)."],
            ["In binary addition, what is 1 + 1?", "10 (write 0, carry 1)."],
            ["What is the hex equivalent of 1111 0000₂?", "F0 (1111=F, 0000=0)."],
            ["Why does an IPv4 octet range from 0 to 255?", "Because it is 8 bits, and 11111111₂ = 255₁₀."]
        ],
        quiz: [
            { q: "Decimal equivalent of 1010₂?", o: ["8", "12", "10", "14"], a: 2, w: "8+0+2+0 = 10." },
            { q: "Binary equivalent of 25₁₀?", o: ["11000", "11001", "10101", "11100"], a: 1, w: "16+8+1 = 25, so 11001." },
            { q: "In binary, 1 + 1 = ?", o: ["10", "2", "11", "0"], a: 0, w: "10 (read as 'one-zero', carry the 1)." },
            { q: "Hex equivalent of 1111 0000₂?", o: ["0F", "FF", "E0", "F0"], a: 3, w: "1111=F, 0000=0, so F0." },
            { q: "Why does IPv4 octet range 0-255?", o: ["4 octets", "8 bits, 11111111=255", "Hexadecimal", "255 is prime"], a: 1, w: "8 bits max value is 255." }
        ]
    },
    {
        id: "m2t4", no: 4, short: "T4", title: "Development of User Interaction", sub: "UI Evolution: Punch Cards to Voice", tone: "t4",
        keywords: "ui gui cli voice touchscreen punch cards interface usability",
        notes: [
            { tag: "Evolution", title: "User Interaction History", html: L(["<b>Punch Cards:</b> Physical holes. Reliable but hard to modify, no feedback.", "<b>CLI (Command Line):</b> Text commands. Powerful/precise but requires memorization.", "<b>GUI (Graphical UI):</b> Visual elements (click/drag). Made computing accessible to ordinary people.", "<b>Touchscreen:</b> Direct physical interaction (phones/tablets).", "<b>Voice:</b> Siri/Alexa. Natural language interaction."]) },
            { tag: "Good UI", title: "Good Interface Characteristics", html: L(["Easy to learn", "Efficient for experts", "Accessible", "Understandable", "Responsive", "Safe (prevents errors)"]) }
        ],
        cards: [
            ["Main limitation of punch cards?", "Difficult to modify and no immediate feedback."],
            ["Main advantage of CLI over GUI?", "Powerful and precise control."],
            ["What did GUI change about computing?", "Made it easier for ordinary people to use via visual elements."],
            ["Which method allows saying 'Call Mom'?", "Voice interface."],
            ["Why does user interaction matter?", "A powerful computer is useless if people can't use it effectively."]
        ],
        quiz: [
            { q: "Main limitation of punch cards?", o: ["Too small", "Hard to modify/no feedback", "Only numbers", "Need internet"], a: 1, w: "They were hard to change and offered no immediate feedback." },
            { q: "Advantage of CLI?", o: ["Looks better", "Easier for beginners", "Powerful/precise control", "No keyboard"], a: 2, w: "CLI offers precise control for experts." },
            { q: "What did GUI change?", o: ["Easier for ordinary people", "Eliminated software", "Made slower", "Removed CPU"], a: 0, w: "It made computers accessible to non-experts." },
            { q: "Interaction for 'Call Mom'?", o: ["Punch cards", "CLI", "GUI", "Voice interface"], a: 3, w: "Voice interfaces allow natural speech commands." },
            { q: "Why does UI matter?", o: ["Computers cheap", "Useless if people can't use it", "Makes hardware faster", "Reduces electricity"], a: 1, w: "Usability is critical for effectiveness." }
        ]
    }
];

/* --- MODULE 3: Networks & Security --- */
var M3_TOPICS = [
    {
        id: "m3t1", no: 1, short: "T1", title: "Introduction to Computer Networks", sub: "LAN, WAN, Topology, Hardware", tone: "t1",
        keywords: "network lan wan pan man topology bus star ring mesh hub switch router mac ip",
        notes: [
            { tag: "Definition", title: "What is a Network?", html: "<p>A group of devices connected to communicate, share data/resources, and access services.</p>" },
            { tag: "Types", title: "Types of Networks", html: L(["<b>PAN:</b> Personal (Phone + Watch).", "<b>LAN:</b> Local (Computer Lab).", "<b>MAN:</b> Metropolitan (City-wide).", "<b>WAN:</b> Wide (The Internet)."]) },
            { tag: "Topology", title: "Network Topology", html: DUO(["<b>Bus:</b> Low cost, main cable failure kills network.", "<b>Star:</b> Easy management, depends on central device.", "<b>Ring:</b> Organized, hard to modify.", "<b>Mesh:</b> Highly reliable, expensive/complex."], "Topologies", [], "") },
            { tag: "Hardware", title: "Network Hardware", html: L(["<b>Hub:</b> Sends data to ALL devices.", "<b>Switch:</b> Sends data intelligently to intended device.", "<b>Router:</b> Connects different networks.", "<b>Modem:</b> Connects to ISP.", "<b>NIC:</b> Network Interface Card."]) },
            { tag: "Addresses", title: "MAC vs IP", html: "<p><b>MAC:</b> Identifies hardware (identity). <br><b>IP:</b> Identifies location on network (e.g., 192.168.1.10).</p>" },
            { tag: "Protocols", title: "Common Protocols", html: L(["<b>TCP/IP:</b> Basic communication.", "<b>HTTP/HTTPS:</b> Web content (Secure).", "<b>DNS:</b> Domain names to IP addresses.", "<b>FTP:</b> File transfer.", "<b>SMTP:</b> Email."]) }
        ],
        cards: [
            ["What does LAN stand for?", "Local Area Network."],
            ["Which device connects different networks?", "Router."],
            ["Difference between Hub and Switch?", "Hub sends to all; Switch sends to intended device only."],
            ["Which topology is highly reliable but expensive?", "Mesh topology."],
            ["What does DNS do?", "Converts domain names (google.com) into IP addresses."]
        ],
        quiz: [
            { q: "What does LAN stand for?", o: ["Large Area", "Local Area", "Long Access", "Linked Area"], a: 1, w: "Local Area Network." },
            { q: "Device connecting different networks?", o: ["Hub", "Switch", "Router", "NIC"], a: 2, w: "Routers connect different networks." },
            { q: "Hub vs Switch?", o: ["Hub sends to all; Switch to intended", "Hub wireless", "Identical", "Hub faster"], a: 0, w: "Switches are intelligent; Hubs broadcast to all." },
            { q: "Topology with multiple connections for reliability?", o: ["Bus", "Star", "Ring", "Mesh"], a: 3, w: "Mesh has redundant paths." },
            { q: "What does DNS do?", o: ["Transfer files", "Domain to IP", "Send email", "Encrypt"], a: 1, w: "DNS translates names to IPs." }
        ]
    },
    {
        id: "m3t2", no: 2, short: "T2", title: "Internet & World Wide Web", sub: "Internet vs WWW, HTTP, Client/Server", tone: "t2",
        keywords: "internet www web browser server http https dns static dynamic web 1.0 2.0",
        notes: [
            { tag: "Difference", title: "Internet vs WWW", html: DUO(["Global network infrastructure", "Connects networks", "Supports email, FTP, etc."], "Internet", ["Service on Internet", "Connects web pages", "Accessed via browsers"], "World Wide Web") },
            { tag: "Web Parts", title: "Three Parts of the Web", html: L(["<b>Browser:</b> Chrome, Firefox (Client).", "<b>Server:</b> Stores/provides websites.", "<b>Protocols:</b> HTTP, HTTPS."]) },
            { tag: "Process", title: "Visiting a Website", html: L(["1. Type URL.", "2. DNS translates domain to IP.", "3. Browser connects to Server.", "4. Server sends HTML/CSS/JS.", "5. Browser renders page."]) },
            { tag: "URL", title: "URL Structure", html: "<p><b>https://</b> Protocol. <b>www.example.com</b> Domain. <b>/products</b> Path.</p>" },
            { tag: "HTTP", title: "HTTP vs HTTPS", html: "<p><b>HTTP:</b> Plain text (unsafe). <br><b>HTTPS:</b> Encrypted (safe for passwords/payments).</p>" },
            { tag: "Web Evol", title: "Evolution of the Web", html: L(["<b>Web 1.0:</b> Read-only, static.", "<b>Web 2.0:</b> Read/Write, social media, blogs.", "<b>Modern Web:</b> Interactive, AI-driven, real-time."]) }
        ],
        cards: [
            ["Difference between Internet and WWW?", "Internet is infrastructure; WWW is a service on it."],
            ["Role of a Web Server?", "Stores, processes, and provides websites to clients."],
            ["Why is HTTPS important?", "It encrypts data between browser and website."],
            ["Example of a dynamic website?", "Facebook feed (changes based on user/data)."],
            ["What is a Static Website?", "Same content for every visitor (e.g., portfolio)."]
        ],
        quiz: [
            { q: "Internet vs WWW difference?", o: ["Infra vs Service", "Same", "WWW older", "Phone only"], a: 0, w: "Internet is the network; WWW is a service on it." },
            { q: "What does DNS do?", o: ["Transfer files", "Encrypt", "Domain to IP", "Email"], a: 2, w: "Translates domain names to IP addresses." },
            { q: "Why is HTTPS important?", o: ["Faster", "No ads", "Blocks malware", "Encrypts data"], a: 3, w: "It encrypts communication." },
            { q: "Dynamic website example?", o: ["Portfolio", "Facebook", "Read-only docs", "Info page"], a: 1, w: "Facebook changes content per user." },
            { q: "Role of Web Server?", o: ["Render HTML", "Store passwords", "Store/provide websites", "Assign IPs"], a: 2, w: "Servers store and provide website content." }
        ]
    },
    {
        id: "m3t3a", no: 3, short: "T3A", title: "Introduction to HTML", sub: "Structure of the Web", tone: "t3",
        keywords: "html markup tags elements body head title structure void elements",
        notes: [
            { tag: "HTML", title: "What is HTML?", html: "<p>HyperText Markup Language. Structures content. Not a programming language.</p>" },
            { tag: "Analogy", title: "HTML vs CSS vs JS", html: DUO(["Structure/Content", "Walls/Roof"], "HTML", ["Appearance/Design", "Paint/Decor"], "CSS", ["Behavior/Interactivity", "Electricity"], "JavaScript") },
            { tag: "Syntax", title: "Tags vs Elements", html: "<p><b>Tag:</b> Marker like `<p>`. <br><b>Element:</b> Full structure `<p>Hello</p>`.</p><p><b>Void Elements:</b> No closing tag (e.g., `<br>`, `<img>`).</p>" },
            { tag: "Structure", title: "Basic Document", html: "<pre>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n  &lt;head&gt;&lt;title&gt;Title&lt;/title&gt;&lt;/head&gt;\n  &lt;body&gt;Content&lt;/body&gt;\n&lt;/html&gt;</pre>" },
            { tag: "Elements", title: "Common Elements", html: L(["<b>Headings:</b> h1-h6", "<b>Paragraph:</b> p", "<b>Link:</b> a href='...'", "<b>Image:</b> img src='...' alt='...'", "<b>List:</b> ul/ol with li"]) }
        ],
        cards: [
            ["What does HTML stand for?", "HyperText Markup Language."],
            ["Is HTML a programming language?", "No, it is a markup language."],
            ["Purpose of <body> element?", "Contains the visible content of the page."],
            ["Difference between tag and element?", "Tag is the marker; Element is tag + content + closing tag."],
            ["What does href attribute do?", "Tells the browser where a link goes."]
        ],
        quiz: [
            { q: "HTML stands for?", o: ["HyperText Markup Logic", "HighText Machine", "HyperText Markup Language", "Home Tool"], a: 2, w: "HyperText Markup Language." },
            { q: "Is HTML a programming language?", o: ["No, markup", "Yes", "Yes, compiled", "No, database"], a: 0, w: "It is a markup language." },
            { q: "Purpose of <body>?", o: ["Metadata", "Title", "Link CSS", "Visible content"], a: 3, w: "Body contains visible content." },
            { q: "Tag vs Element?", o: ["Same", "Tag is marker; Element is full structure", "Tag has attrs", "No closing"], a: 1, w: "Element includes tags and content." },
            { q: "What does href do?", o: ["Image source", "Alt text", "Link destination", "Center text"], a: 2, w: "Defines the link destination." }
        ]
    },
    {
        id: "m3t3b", no: 4, short: "T3B", title: "Introduction to CSS", sub: "Styling the Web", tone: "t3",
        keywords: "css cascading style sheets selector class id property value inline external",
        notes: [
            { tag: "CSS", title: "What is CSS?", html: "<p>Cascading Style Sheets. Controls appearance/layout. HTML is 'what', CSS is 'how'.</p>" },
            { tag: "Rule", title: "Anatomy of a Rule", html: "<pre>p { color: blue; }</pre><p><b>Selector:</b> p. <b>Property:</b> color. <b>Value:</b> blue.</p>" },
            { tag: "Selectors", title: "Primary Selectors", html: L(["<b>Element:</b> p (all paragraphs).", "<b>Class:</b> .important (reusable, starts with dot).", "<b>ID:</b> #main-title (unique, starts with hash)."]) },
            { tag: "Methods", title: "Applying CSS", html: L(["<b>Inline:</b> In tag (hard to maintain).", "<b>Internal:</b> In <style> head.", "<b>External:</b> Separate .css file (Recommended)."]) },
            { tag: "Cascading", title: "Specificity", html: "<p>ID beats Class. Class beats Element. Last rule loaded wins if specificity is equal.</p>" }
        ],
        cards: [
            ["What does CSS stand for?", "Cascading Style Sheets."],
            ["Which selector begins with a period?", "Class selector (e.g., .important)."],
            ["Best method for reusable styling?", "External CSS (separate file)."],
            ["In specificity, which wins?", "ID beats Class, Class beats Element."],
            ["How to link external CSS?", "<link rel=\"stylesheet\" href=\"style.css\">"]
        ],
        quiz: [
            { q: "CSS stands for?", o: ["Computer Style", "Cascading Style Sheets", "Creative Style", "Colorful Style"], a: 1, w: "Cascading Style Sheets." },
            { q: "Selector beginning with period?", o: ["Class", "ID", "Element", "Universal"], a: 0, w: "Class selectors use a dot." },
            { q: "Best for reusable styling?", o: ["Inline", "Internal", "Inline+Internal", "External"], a: 3, w: "External CSS is best for maintenance." },
            { q: "Specificity winner?", o: ["Element", "Class", "ID beats Class", "Equal"], a: 2, w: "ID is more specific than Class." },
            { q: "Link external CSS?", o: ["<link>", "<style>", "<css>", "<script>"], a: 0, w: "Use <link rel=\"stylesheet\">." }
        ]
    },
    {
        id: "m3t4", no: 5, short: "T4", title: "Types of Cyber Threats", sub: "Malware, Social Engineering, Attacks", tone: "t4",
        keywords: "malware virus worm trojan ransomware phishing social engineering dos ddos mitm",
        notes: [
            { tag: "Malware", title: "Malicious Software", html: L(["<b>Virus:</b> Attaches to files, spreads on execution.", "<b>Worm:</b> Spreads independently.", "<b>Trojan:</b> Disguises as legitimate software.", "<b>Ransomware:</b> Encrypts files, demands payment.", "<b>Spyware/Keylogger:</b> Monitors activity/keystrokes."]) },
            { tag: "Social Eng", title: "Social Engineering", html: L(["<b>Phishing:</b> Fake messages/websites for credentials.", "<b>Spear Phishing:</b> Targeted phishing.", "<b>Smishing/Vishing:</b> SMS/Voice phishing.", "<b>Pharming:</b> Redirects to fraudulent sites."]) },
            { tag: "Attacks", title: "Network Attacks", html: L(["<b>DoS:</b> Overloads system to make unavailable.", "<b>DDoS:</b> DoS from thousands of devices.", "<b>MITM:</b> Man-in-the-Middle intercepts comms.", "<b>Insider Threat:</b> Authorized user misusing access."]) },
            { tag: "Defense", title: "Golden Rule", html: "<p><b>STOP:</b> Pause. <b>THINK:</b> Evaluate. <b>VERIFY:</b> Confirm authenticity.</p>" }
        ],
        cards: [
            ["Malware that encrypts files for payment?", "Ransomware."],
            ["What is Phishing?", "Fake messages tricking users into giving credentials."],
            ["Difference between DoS and DDoS?", "DDoS comes from thousands of compromised devices."],
            ["What is an Insider Threat?", "An authorized user misusing their access."],
            ["Golden Rule of Defense order?", "Stop → Think → Verify."]
        ],
        quiz: [
            { q: "Malware encrypting files for payment?", o: ["Virus", "Spyware", "Ransomware", "Worm"], a: 2, w: "Ransomware demands payment." },
            { q: "What is Phishing?", o: ["Fake messages for creds", "Overloading server", "Encrypting", "Intercepting"], a: 0, w: "Tricking users into revealing info." },
            { q: "DoS vs DDoS?", o: ["Wireless/Wired", "Same", "Individual/Govt", "DDoS from thousands of devices"], a: 3, w: "DDoS is distributed." },
            { q: "Insider Threat?", o: ["External hacker", "Authorized user misusing access", "Phishing", "Bug"], a: 1, w: "Misuse by someone with access." },
            { q: "Golden Rule order?", o: ["Verify→Think→Stop", "Think→Stop→Verify", "Stop→Think→Verify", "Stop→Verify→Think"], a: 2, w: "Stop, Think, Verify." }
        ]
    },
    {
        id: "m3t5", no: 6, short: "T5", title: "Categories of Cybersecurity", sub: "Network, Info, App, Endpoint, Cloud", tone: "t5",
        keywords: "cybersecurity categories network information application endpoint cloud iam cia triad defense in depth",
        notes: [
            { tag: "Categories", title: "Security Categories", html: L(["<b>Network:</b> Firewalls, monitoring.", "<b>Information:</b> CIA Triad (Confidentiality, Integrity, Availability).", "<b>Application:</b> Secure coding, updates.", "<b>Endpoint:</b> Laptops, phones (antivirus).", "<b>Cloud:</b> Google Drive, OneDrive protection.", "<b>IAM:</b> Identity & Access Management."]) },
            { tag: "CIA", title: "CIA Triad", html: L(["<b>Confidentiality:</b> Restricted access.", "<b>Integrity:</b> Unchanged data.", "<b>Availability:</b> Accessible when needed."]) },
            { tag: "Defense", title: "Defense in Depth", html: "<p>Multiple layers (User, Device, Network, App, Data). If one fails, others protect.</p>" }
        ],
        cards: [
            ["What does CIA Triad stand for?", "Confidentiality, Integrity, Availability."],
            ["Category protecting individual devices?", "Endpoint Security."],
            ["What does IAM control?", "Identities and access permissions."],
            ["What is Defense in Depth?", "Multiple layers working together."],
            ["Category protecting Google Drive?", "Cloud Security."]
        ],
        quiz: [
            { q: "CIA Triad?", o: ["Confidentiality, Integrity, Availability", "Control, Inspection, Access", "Central, Internal, Applied", "Cyber, Information, Analysis"], a: 0, w: "Confidentiality, Integrity, Availability." },
            { q: "Protects individual devices?", o: ["Network", "Endpoint", "Cloud", "Application"], a: 1, w: "Endpoint security." },
            { q: "IAM controls?", o: ["Cables", "Locks", "Identities/Permissions", "Backups"], a: 2, w: "Identity and Access Management." },
            { q: "Defense in Depth?", o: ["One firewall", "Avoid tech", "Encrypt all", "Multiple layers"], a: 3, w: "Layered security." },
            { q: "Protects Google Drive?", o: ["Cloud", "Endpoint", "Network", "Operational"], a: 0, w: "Cloud Security." }
        ]
    },
    {
        id: "m3t6", no: 7, short: "T6", title: "Cybersecurity Technologies", sub: "Firewall, Antivirus, Encryption, MFA", tone: "t6",
        keywords: "firewall antivirus encryption mfa vpn ids ips ssl tls backup patch siem least privilege",
        notes: [
            { tag: "Tech", title: "Common Technologies", html: L(["<b>Firewall:</b> Controls traffic (Allow/Block).", "<b>Antivirus:</b> Scan/Detect/Quarantine/Remove.", "<b>Encryption:</b> Plaintext to Ciphertext.", "<b>MFA:</b> Multiple factors (Know, Have, Are).", "<b>VPN:</b> Encrypted tunnel.", "<b>IDS/IPS:</b> Detect/Alert vs Detect/Block."]) },
            { tag: "Auth", title: "Authentication Factors", html: L(["<b>Know:</b> Password/PIN.", "<b>Have:</b> Phone/Token.", "<b>Are:</b> Biometrics (Fingerprint/Face)."]) },
            { tag: "Backup", title: "Backup & Recovery", html: L(["<b>Full:</b> All data.", "<b>Incremental:</b> Changes only.", "<b>Cloud/External:</b> Off-site/Physical."]) },
            { tag: "Principle", title: "Least Privilege", html: "<p>Give users only the access they strictly need.</p>" }
        ],
        cards: [
            ["What does a Firewall do?", "Controls incoming/outgoing network traffic."],
            ["What does Encryption do?", "Converts readable info into unreadable form."],
            ["IDS vs IPS?", "IDS detects/alerts; IPS detects/blocks."],
            ["Three authentication factors?", "Something You Know, Have, Are."],
            ["Principle of Least Privilege?", "Give users only the access they strictly need."]
        ],
        quiz: [
            { q: "Firewall function?", o: ["Encrypt", "Control traffic", "Backup", "Verify ID"], a: 1, w: "Controls network traffic." },
            { q: "Encryption function?", o: ["Readable to unreadable", "Delete", "Speed up", "Block"], a: 0, w: "Protects data by making it unreadable." },
            { q: "IDS vs IPS?", o: ["IDS blocks", "Same", "HW/SW", "IDS alerts; IPS blocks"], a: 3, w: "IPS actively blocks threats." },
            { q: "Auth factors?", o: ["Firewall/Anti/VPN", "IDS/IPS/SIEM", "Know/Have/Are", "Full/Inc/Cloud"], a: 2, w: "Know, Have, Are." },
            { q: "Least Privilege?", o: ["Only strict access", "Admin all", "No passwords", "Share creds"], a: 0, w: "Minimal necessary access." }
        ]
    }
];

/* --- MODULE 4: Overview of Industry (Existing) --- */
var M4_TOPICS = [
    {
        id: "t1 ", no: 1, short: "T1 ", title: "Current Trends in Computing Technology ", sub: "Major ICT trends, applications and societal impact ", tone: "t1 ",
        keywords: "ai cloud cybersecurity big data iot edge ar vr robotics quantum blockchain 5g digital twin green ",
        notes: [
            { tag: "Foundations ", title: "What are current trends in computing? ", html: " <p >Technologies, methods and practices gaining adoption and changing how people and organizations use computers. </p > " + DUO(["Already widely adopted and heavily relied on in daily operations ", "Examples: cloud computing, enterprise databases "], "Current technologies ", ["Developing or expanding into new domains ", "Examples: quantum computing, advanced neural systems "], "Emerging technologies ", "g ") + CALL(" <b >Key note: </b > a technology can be both current and emerging, depending on the application domain. ") },
            { tag: "Objectives ", title: "Learning objectives ", html: L(["Define current trends in computing technology. ", "Identify major technologies used in industry. ", "Explain practical applications of these technologies. ", "Distinguish established technologies from emerging ones. ", "Evaluate potential benefits, risks and social impacts. "]) },
            { tag: "Major trend 1 ", title: "Artificial Intelligence (AI) and Generative AI ", html: " <p >Enables computer systems to perform tasks requiring human-like intelligence, pattern recognition and content creation. </p > " + TRIO(["Chatbots and virtual assistants ", "AI-assisted programming ", "Personalized recommendations ", "Image and content generation "], ["Increased productivity ", "Workflow automation ", "Faster information processing "], ["Incorrect outputs and hallucinations ", "Algorithmic bias ", "Privacy and overreliance "]) },
            { tag: "Major trend 2 ", title: "Cloud Computing ", html: " <p >Delivering storage, servers, databases and software over the internet (for example Google Drive and Microsoft 365). </p > " + TRIO(["File sharing and remote work ", "Application hosting ", "Automated data backup ", "Real-time team collaboration "], ["Access from anywhere ", "Flexible, scalable capacity ", "No physical server upkeep "], ["Internet dependence ", "Subscription costs ", "Privacy and service outages "]) },
            { tag: "Major trend 3 ", title: "Cybersecurity and Data Privacy ", html: " <p >Protecting systems, networks and data from attacks, while ensuring responsible collection and use of personal information. </p > " + DUO(["Phishing and social engineering ", "Malware and ransomware ", "Multi-factor authentication ", "Encryption and secure backups "], "Key concepts ", ["Banking and fintech ", "Healthcare records ", "Government systems ", "E-commerce and education "], "Industry applications ", " ") },
            { tag: "Major trend 4 ", title: "Big Data and Data Analytics ", html: " <p >Examining large, complex, rapidly generated datasets to discover patterns, answer questions and support decisions. </p > " + TRIO(["Predicting customer behavior ", "Monitoring business performance ", "Detecting fraudulent transactions ", "Analyzing student performance "], ["Evidence-based decisions ", "Improved operational efficiency "], ["Poor data quality ", "Biased conclusions ", "Privacy risks "]) },
            { tag: "Major trend 5 ", title: "Internet of Things (IoT) ", html: " <p >A network of physical objects equipped with sensors, software and connectivity to collect and exchange data. </p > " + TRIO(["Smartwatches and wearables ", "Smart homes and appliances ", "Precision agriculture ", "Healthcare remote monitoring "], ["High-level automation ", "Real-time monitoring ", "Improved resource management "], ["Security vulnerabilities ", "Connectivity problems ", "Maintenance costs "], "Examples ") },
            { tag: "Major trend 6 ", title: "Edge Computing ", html: " <p >Processing data near the device or location where it is generated, instead of sending everything to a distant cloud server. </p > " + TRIO(["Smart security cameras ", "Factory machine sensors ", "Autonomous vehicles "], ["Faster response times ", "Reduced network traffic ", "Improved local privacy "], ["Limited device resources ", "Distributed maintenance ", "Security management "], "Examples ") },
            { tag: "Major trend 7 ", title: "AR, VR and Extended Reality (XR) ", html: " <p > <b >AR </b > adds digital information to the real world.  <b >VR </b > places users in computer-generated environments.  <b >XR </b > covers both. </p > " + TRIO(["Virtual labs and training ", "Architecture and simulation ", "Interactive entertainment "], ["Immersive learning ", "Safer practice environments "], ["High equipment costs ", "Motion discomfort ", "Accessibility issues "]) },
            { tag: "Major trend 8 ", title: "Robotics and Intelligent Automation ", html: " <p >Combines hardware, sensors and software to perform physical tasks and automate digital workflows. </p > " + TRIO(["Manufacturing and warehousing ", "Healthcare assistance ", "Repetitive office processes "], ["High consistency and productivity ", "Execution of hazardous tasks "], ["Job displacement risks ", "Oversight and implementation costs "]) },
            { tag: "Emerging ", title: "Quantum computing ", html: " <p >Uses quantum-mechanical properties ( <b >qubits </b >) to process information fundamentally differently from classical bits. </p > " + DUO(["Advanced chemistry and materials science ", "Complex logistics optimization ", "Next-generation cryptography "], "Potential applications ", ["High error rates ", "Extreme hardware complexity ", "Difficulty scaling stable systems "], "Current limitations ") },
            { tag: "Emerging ", title: "Digital twins and smart systems ", html: " <p >A digital representation of a real-world object or process, updated with real-time data from its physical counterpart. </p > " + DUO(["Factory equipment and predictive maintenance ", "Urban infrastructure and flood planning ", "Testing scenarios virtually before real-world trial "], "Applications and benefits ", ["Data accuracy and sensor reliability ", "High integration and maintenance costs ", "Keeping models synchronized with reality "], "Challenges ") },
            { tag: "Emerging ", title: "Green computing and sustainable IT ", html: " <p >Designing, using and disposing of technology to reduce energy consumption, environmental damage and e-waste. </p > " + DUO(["Energy-efficient data centers ", "Hardware repair, reuse and recycling ", "Efficient software workloads ", "Responsible e-waste management "], "Key practices ", ["Computing infrastructure consumes massive electricity and rare earth minerals ", "Growing digital demand makes sustainability an urgent ethical and operational priority "], "Why it matters ", " ") },
            { tag: "Emerging ", title: "Blockchain and decentralized apps ", html: " <p >Distributed ledgers recording transactions in cryptographically protected, linked blocks. </p > " + DUO(["Digital asset transactions and tracking ", "Supply-chain traceability ", "Tamper-resistant shared records "], "Applications and advantages ", ["Scalability and energy use ", "Regulatory uncertainty ", "Not every database needs blockchain "], "Challenges and limits ") },
            { tag: "Emerging ", title: "5G and advanced connectivity ", html: " <p >Mobile network technology designed for high data rates, ultra-low latency and massive device density. </p > " + DUO(["High-speed mobile broadband ", "Industrial IoT and automation ", "Remote medical monitoring services "], "Applications and benefits ", ["High infrastructure costs ", "Coverage gaps and the rural divide ", "Cybersecurity threats "], "Challenges ") },
            { tag: "Synthesis ", title: "Comparing the technologies ", html: " <div class= \"tbl-wrap\" > <table > <tr > <th >Technology </th > <th >Main purpose </th > <th >Example </th > </tr > <tr > <td > <b >AI </b > </td > <td >Recognize patterns, generate content </td > <td >AI coding assistant </td > </tr > <tr > <td > <b >Cloud </b > </td > <td >Provide computing resources over the internet </td > <td >Online file storage </td > </tr > <tr > <td > <b >Cybersecurity </b > </td > <td >Protect systems and information </td > <td >Multi-factor authentication </td > </tr > <tr > <td > <b >Big Data </b > </td > <td >Find insights in massive data </td > <td >Sales forecasting </td > </tr > <tr > <td > <b >IoT </b > </td > <td >Connect physical devices </td > <td >Smart irrigation </td > </tr > <tr > <td > <b >Edge </b > </td > <td >Process data near the source </td > <td >Local camera analytics </td > </tr > <tr > <td > <b >AR/VR </b > </td > <td >Enhance or simulate experiences </td > <td >Virtual laboratory </td > </tr > <tr > <td > <b >Robotics </b > </td > <td >Automate physical tasks </td > <td >Industrial robot </td > </tr > </table > </div > " },
            { tag: "Integration ", title: "How technologies work together: smart agriculture ", html: " <p >Real systems combine several trends. Example: smart agriculture in the Philippines. </p > " + L([" <b >1. IoT sensors: </b > measure soil moisture and temperature. ", " <b >2. Cloud / 5G: </b > transmit and store sensor readings securely. ", " <b >3. AI and analytics: </b > estimate irrigation and crop needs. ", " <b >4. Smart control: </b > automatically water with safety safeguards. "]) + CALL(" <b >Discussion: </b > which part might fail if internet connectivity is lost? ") },
            { tag: "Societal impact ", title: "Benefits, challenges and responsible use ", html: DUO(["Faster communication and access to education ", "Increased productivity and data-driven decisions ", "New career opportunities and resource efficiency "], "Benefits ", ["Misinformation and cyber threats ", "Job displacement and digital divide ", "Privacy concerns and high e-waste "], "Challenges ", " ") + " <p > <b >Three pillars of responsible use: </b > Privacy and Security (protect personal info and systems), Fairness and Accuracy (reduce algorithmic bias, verify AI content), Sustainability (energy, accessibility, e-waste). </p > " + CALL(" <b >Key message: </b > technology is not automatically good or bad. Its impact depends on human design and governance. ") },
            { tag: "Looking ahead ", title: "The future of computing ", html: L([" <b >Capable AI systems: </b > multi-step tasks that demand strict human supervision. ", " <b >Efficient hardware: </b > hardware and software efficiency for intensive AI workloads. ", " <b >Quantum-ready security: </b > preparing cryptographic systems for quantum threats. "]) }
        ],
        cards: [
            ["What is a current trend in computing technology? ", "Technologies, methods and practices gaining adoption and changing how people and organizations use computers. "],
            ["Current vs emerging technologies? ", "Current: already widely adopted (cloud, enterprise databases). Emerging: still developing or expanding into new domains (quantum computing, advanced neural systems). One technolog y can be both. "],
            ["Cloud computing ", "Delivering storage, servers, databases and software over the internet (Google Drive, Microsoft 365). "],
            ["Edge computing ", "Processing data near the device or location where it is generated, instead of sending it all to a distant cloud server. "],
            ["Internet of Things (IoT) ", "A network of physical objects with sensors, software and connectivity that collect and exchange data. "],
            ["AR vs VR vs XR ", "AR adds digital info to the real world. VR places users in computer-generated environments. XR covers both. "],
            ["Big data and data analytics ", "Examining large, complex, rapidly generated datasets to find patterns, answer questions and support decisions. "],
            ["Cybersecurity and data privacy ", "Protecting systems, networks and data from attacks while ensuring responsible collection and use of personal information. "],
            ["Quantum computing ", "Uses quantum-mechanical properties (qubits) to process information differently from classical bits. "],
            ["Digital twin ", "A digital representation of a real-world object or process, updated with real-time data from its physical counterpart. "],
            ["Green computing ", "Designing, using and disposing of technology to reduce energy use, environmental damage and e-waste. "],
            ["Blockchain ", "Distributed ledgers recording transactions in cryptographically protected linked blocks. "],
            ["5G ", "Mobile network technology for high data rates, ultra-low latency and massive device density. "],
            ["Three pillars of responsible technology use ", "Privacy and Security, Fairness and Accuracy, Sustainability. "],
            ["Key message of Topic 1 ", "Technology is not automatically good or bad. Its impact depends on human design and governance. "]
        ],
        quiz: [
            { q: "Which statement best describes a technology that is both current and emerging? ", o: ["It cannot exist ", "Its status depends on the application domain ", "It is only used in labs ", "It has no risks "], a: 1, w: "A technology can be both current and emerging depending on the specific application domain. " },
            { q: "Which is a challenge of cloud computing listed in the module? ", o: ["Needs physical server upkeep ", "Internet dependence ", "Cannot scale ", "No remote access "], a: 1, w: "Cloud challenges are internet dependence, subscription costs, privacy and service outages. " },
            { q: "Edge computing mainly processes data… ", o: ["Only in a distant data center ", "Near the device where it is generated ", "Only offline on paper ", "In quantum processors "], a: 1, w: "Edge computing processes data near its source, giving faster response times and less network traffic. " },
            { q: "A network of physical objects with sensors and connectivity is called… ", o: ["Big Data ", "Blockchain ", "Internet of Things ", "Digital twin "], a: 2, w: "IoT connects physical objects that collect and exchange data. " },
            { q: "Which is a common AI challenge? ", o: ["Hallucinations and algorithmic bias ", "Faster information processing ", "Workflow automation ", "Increased productivity "], a: 0, w: "The last three are advantages. Hallucinations, bias and overreliance are challenges. " },
            { q: "VR differs from AR because VR… ", o: ["Adds information to the real world ", "Places users in a computer-generated environment ", "Needs no equipment ", "Is a type of 5G "], a: 1, w: "AR overlays digital info on the real world. VR immerses users in a generated environment. " },
            { q: "Which technology uses qubits? ", o: ["Edge computing ", "Blockchain ", "Quantum computing ", "Green computing "], a: 2, w: "Quantum computing uses qubits, which behave differently from classical bits. " },
            { q: "In the smart agriculture example, which step estimates irrigation and crop needs? ", o: ["IoT sensors ", "Cloud / 5G ", "AI and analytics ", "Smart control "], a: 2, w: "IoT senses, cloud/5G transmits and stores, AI and analytics estimates, smart control waters. " },
            { q: "Which is NOT one of the three pillars of responsible use? ", o: ["Privacy and security ", "Fairness and accuracy ", "Sustainability ", "Maximum profit "], a: 3, w: "The pillars are Privacy and Security, Fairness and Accuracy, and Sustainability. " },
            { q: "A digital twin is best described as… ", o: ["A backup copy of a hard drive ", "A digital representation of a real object updated with real-time data ", "A pair of identical servers ", "A VR headset "], a: 1, w: "Digital twins mirror a physical object or process using real-time data. " }
        ]
    },
    {
        id: "t2 ", no: 2, short: "T2 ", title: "Career Opportunities in the Computing Industry ", sub: "Roles, skills, preparation and career paths ", tone: "t2 ",
        keywords: "career developer web mobile ui ux database network cybersecurity data scientist ai ml cloud devops qa skills ",
        notes: [
            { tag: "Overview ", title: "What is the computing industry? ", html: " <p >Organizations and professionals that develop, maintain, secure and support computer systems, software, networks, data and digital services. </p > " + DUO(["Software and application development ", "IT infrastructure and cybersecurity ", "Data science and AI / machine learning ", "Cloud computing and networking "], "Major areas ", ["Education, healthcare, banking, government, agriculture, retail and entertainment "], "Where do they work? ", "g ") + CALL(" <b >Key point: </b > they do not all work for technology companies. ") },
            { tag: "Objectives ", title: "Learning objectives ", html: L(["Define a career in the computing industry. ", "Identify different career opportunities in computing. ", "Explain roles, responsibilities and essential technical and soft skills. ", "Match personal interests to career paths and preparation steps. "]) },
            { tag: "Career 01 ", title: "Software Developer / Software Engineer ", html: " <p > <b >What they do: </b > design, develop, test and maintain software applications and systems. </p > " + L([" <b >Responsibilities: </b > write and review code, identify and fix bugs, test for reliability, collaborate with designers and developers. ", " <b >Skills: </b > programming, problem-solving, debugging, teamwork. ", " <b >Example: </b > developing a student enrollment system or an online shopping application. "]) },
            { tag: "Career 02 ", title: "Web Developer ", html: " <p > <b >What they do: </b > build and maintain websites and web applications. </p > " + L([" <b >Front-end: </b > builds user-facing visual elements and interactions. ", " <b >Back-end: </b > develops server-side logic, APIs and data processing. ", " <b >Full-stack: </b > works across both front-end and back-end. ", " <b >Skills: </b > HTML, CSS, JavaScript, databases, web frameworks. ", " <b >Example: </b > a responsive university website with a secure student login. "]) },
            { tag: "Career 03 and 04 ", title: "Mobile App Developer and Computer Programmer ", html: L([" <b >Mobile App Developer: </b > develops applications for smartphones and tablets. Skills: programming, mobile UI, API integration, testing. Example: campus navigation or appointment-booking app. ", " <b >Computer Programmer: </b > writes code to solve problems. Skills: programming languages, logic, debugging. Example: a program that automatically calculates student grades. "]) },
            { tag: "Career 05 and 06 ", title: "UI/UX Designer and Database Administrator ", html: L([" <b >UI/UX Designer: </b > designs usable, understandable, visually appropriate digital products. Skills: wireframing, prototyping, user research. Example: an intuitive student enrollment portal. ", " <b >Database Administrator: </b > manages and secures data. Skills: SQL, database management, security. Example: managing student records and institutional data safety. "]) },
            { tag: "Career 07 and 08 ", title: "Network Administrator and Cybersecurity Analyst ", html: L([" <b >Network Administrator / Engineer: </b > builds, configures, monitors and maintains computer networks. Skills: TCP/IP, routing, switching, troubleshooting. Example: maintaining university lab Wi-Fi and wired networks. ", " <b >Cybersecurity Analyst: </b > protects systems and information. Skills: networking, OS security, analytical thinking. Example: investigating phishing attacks and securing employee accounts. "]) },
            { tag: "Career 09 and 10 ", title: "Data Analyst / Scientist and AI/ML Engineer ", html: L([" <b >Data Analyst / Scientist: </b > examines data to answer questions and build predictive models. Skills: SQL, Python/R, statistics, visualization. Example: analyzing student performance data. ", " <b >AI/ML Engineer: </b > builds intelligent systems. Skills: Python, mathematics, ML algorithms. Example: transaction fraud detection or image recognition models. "]) },
            { tag: "Broader industry ", title: "Other career paths beyond programming ", html: L([" <b >IT Support Specialist: </b > troubleshoots hardware and software issues. ", " <b >Cloud Engineer: </b > builds and manages cloud infrastructure. ", " <b >DevOps Engineer: </b > improves software delivery and reliability. ", " <b >QA / Tester: </b > checks software requirements and defects. ", " <b >Game Developer: </b > builds game mechanics and experiences. ", " <b >IT Project Manager: </b > coordinates schedules, teams and budgets. "]) },
            { tag: "Competencies ", title: "Technical skills vs soft skills ", html: DUO(["Programming and databases ", "Networking and cybersecurity fundamentals ", "Web development and data analysis "], "Technical skills ", ["Communication and teamwork ", "Critical thinking and problem-solving ", "Adaptability and time management "], "Soft skills ", "g ") + CALL(" <b >Key message: </b > technical skills help you perform work. Soft skills help you collaborate effectively with others. ") },
            { tag: "Preparation ", title: "Educational preparation and qualifications ", html: DUO(["Earn a relevant degree or diploma ", "Complete personal and academic projects ", "Build a professional portfolio ", "Participate in internships and certifications "], "Ways to prepare ", [" <b >Web dev: </b > build and publish websites ", " <b >Software: </b > create apps and practice coding ", " <b >Networking: </b > configure networks and troubleshoot ", " <b >Cybersecurity: </b > learn OS and security fundamentals "], "Preparation by career ", "g ") },
            { tag: "Career pathway ", title: "Building your career path ", html: L([" <b >01 Explore: </b > identify your interests and problems you enjoy solving. ", " <b >02 Learn: </b > develop foundational technical and professional skills. ", " <b >03 Practice: </b > complete exercises, projects and practical activities. ", " <b >04 Portfolio: </b > show evidence of your work, skills and progress. ", " <b >05 Experience: </b > pursue internships or entry-level roles. "]) },
            { tag: "Local context ", title: "Career opportunities in the Philippines ", html: DUO(["BPO and IT-enabled services ", "Banks and fintech companies ", "Government offices and public institutions ", "Retail, logistics, e-commerce and remote work "], "Employment sectors ", ["Junior web / software developer ", "IT support technician / help desk analyst ", "QA tester and junior data analyst "], "Entry-level roles ", "g ") },
            { tag: "Self-discovery ", title: "Choosing a career based on your interests ", html: " <div class= \"tbl-wrap\" > <table > <tr > <th >If you enjoy… </th > <th >Consider </th > </tr > <tr > <td >Logic and problem solving </td > <td >Software development, programming or QA testing </td > </tr > <tr > <td >Creativity and design </td > <td >UI/UX design, web design or game development </td > </tr > <tr > <td >Troubleshooting and hardware </td > <td >IT support, systems administration or networking </td > </tr > <tr > <td >Analyzing patterns and data </td > <td >Data analytics, data science or AI/ML </td > </tr > </table > </div > " },
            { tag: "Professional reality ", title: "Challenges and mindset ", html: DUO(["Keeping up with rapidly changing technology ", "Solving complex and unfamiliar problems ", "Meeting deadlines and protecting sensitive data ", "Maintaining professional and ethical standards "], "Common challenges ", ["Technical competence, patience, adaptability, communication and a continuous willingness to learn "], "Essential mindset ", "g ") }
        ],
        cards: [
            ["What is the computing industry? ", "Organizations and professionals that develop, maintain, secure and support computer systems, software, networks, data and digital services. "],
            ["Where do computing professionals work? ", "Education, healthcare, banking, government, agriculture, retail and entertainment. They do not all work for technology companies. "],
            ["Software Developer / Engineer ", "Designs, develops, tests and maintains software. Skills: programming, problem-solving, debugging, teamwork. "],
            ["Front-end vs back-end vs full-stack ", "Front-end: user-facing visuals and interactions. Back-end: server logic, APIs, data processing. Full-stack: both. "],
            ["Web Developer skills ", "HTML, CSS, JavaScript, databases and web frameworks. "],
            ["Mobile App Developer ", "Develops applications for smartphones and tablets. Skills: programming, mobile UI, API integration, testing. "],
            ["UI/UX Designer ", "Designs usable, understandable, visually appropriate digital products. Skills: wireframing, prototyping, user research. "],
            ["Database Administrator ", "Manages and secures data. Skills: SQL, database management, security. "],
            ["Network Administrator / Engineer ", "Builds, configures, monitors and maintains networks. Skills: TCP/IP, routing, switching, troubleshooting. "],
            ["Cybersecurity Analyst ", "Protects systems and information. Skills: networking, OS security, analytical thinking. "],
            ["Data Analyst / Scientist ", "Examines data to answer questions and build predictive models. Skills: SQL, Python/R, statistics, visualization. "],
            ["AI/ML Engineer ", "Builds intelligent systems. Skills: Python, mathematics, ML algorithms. "],
            ["Cloud Engineer vs DevOps Engineer ", "Cloud Engineer builds and manages cloud infrastructure. DevOps Engineer improves software delivery and reliability. "],
            ["Technical vs soft skills ", "Technical skills help you perform work. Soft skills help you collaborate effectively with others. "],
            ["The five steps of building a career path ", "Explore, Learn, Practice, Portfolio, Experience. "],
            ["Entry-level roles in the Philippines ", "Junior web/software developer, IT support technician / help desk analyst, QA tester and junior data analyst. "]
        ],
        quiz: [
            { q: "Which role develops server-side logic, APIs and data processing? ", o: ["Front-end developer ", "Back-end developer ", "UI/UX designer ", "Network administrator "], a: 1, w: "Back-end developers handle server-side logic, APIs and data processing. " },
            { q: "Which pair of skills does a Database Administrator need? ", o: ["Wireframing and prototyping ", "SQL and database management ", "TCP/IP and routing ", "Python and ML algorithms "], a: 1, w: "Database Administrators need SQL, database management and security. " },
            { q: "Investigating phishing attacks and securing employee accounts is the work of a… ", o: ["Cybersecurity Analyst ", "Game Developer ", "QA Tester ", "IT Project Manager "], a: 0, w: "This is the example given for the Cybersecurity Analyst. " },
            { q: "True or false: all computing professionals work for technology companies. ", o: ["True ", "False "], a: 1, w: "They work in many sectors, such as education, healthcare, banking and government. " },
            { q: "Which is a soft skill? ", o: ["SQL ", "Networking ", "Communication and teamwork ", "Web frameworks "], a: 2, w: "Communication, teamwork, critical thinking, adaptability and time management are soft skills. " },
            { q: "A student who enjoys creativity and design should consider… ", o: ["Data science ", "UI/UX design or game development ", "Network administration ", "Help desk support "], a: 1, w: "Creativity and design points to UI/UX design, web design or game development. " },
            { q: "What is the correct order of the career pathway? ", o: ["Learn, Explore, Portfolio, Practice, Experience ", "Explore, Learn, Practice, Portfolio, Experience ", "Practice, Learn, Explore, Experience, Portfolio ", "Experience, Explore, Learn, Practice, Portfolio "], a: 1, w: "Explore, Learn, Practice, Portfolio, Experience. " },
            { q: "Which role coordinates schedules, teams and budgets? ", o: ["DevOps Engineer ", "QA / Tester ", "IT Project Manager ", "Programmer "], a: 2, w: "The IT Project Manager coordinates schedules, teams and budgets. " },
            { q: "Which is an entry-level role mentioned for the Philippines? ", o: ["Chief technology officer ", "IT support technician / help desk analyst ", "Quantum physicist ", "Data center architect "], a: 1, w: "Entry-level roles include junior developer, IT support / help desk, QA tester and junior data analyst. " },
            { q: "The “Essential mindset” for computing professionals includes… ", o: ["Avoiding change ", "Continuous willingness to learn ", "Working alone ", "Memorizing one tool "], a: 1, w: "Technical competence, patience, adaptability, communication and continuous learning. " }
        ]
    },
    {
        id: "t3 ", no: 3, short: "T3 ", title: "Impact of Computing in Society ", sub: "Positive and negative impacts, the digital divide ", tone: "t3 ",
        keywords: "society communication education business healthcare government agriculture privacy cybercrime misinformation automation mental health digital divide ",
        notes: [
            { tag: "Core concept ", title: "What is the impact of computing? ", html: " <p >Digital systems influence people’s behavior, relationships, opportunities and institutions. </p > " + L(["Changes how people communicate. ", "Influences how people learn and work. ", "Creates new opportunities and challenges. "]) + CALL(" <b >Example: </b > online learning expands educational access, but students without reliable internet may struggle to participate. ") },
            { tag: "Objectives ", title: "Learning objectives ", html: L(["Explain how computing affects individuals, communities and society. ", "Identify the positive and negative impacts of computing technologies. ", "Discuss how society influences the development and use of technology. ", "Recognize social responsibilities of computing professionals and users. "]) },
            { tag: "Positive impact ", title: "Communication and connectivity ", html: L([" <b >Instant messaging: </b > video calls and real-time messaging across long distances. ", " <b >Fast information: </b > rapid sharing of news, data and academic resources. ", " <b >Collaboration: </b > seamless teamwork across distributed locations. "]) },
            { tag: "Positive impact ", title: "Education and learning ", html: DUO(["Access to online learning resources and video tutorials ", "Virtual classrooms and self-paced platforms ", "Google Classroom streamlines assignments and feedback "], "Key benefits ", ["Distractions from games and social media ", "Overreliance on AI answers and plagiarism ", "Unreliable internet or lack of hardware "], "Associated challenges ") },
            { tag: "Positive impact ", title: "Business and employment ", html: L([" <b >E-commerce: </b > online shopping and secure digital banking transactions. ", " <b >Remote work: </b > new IT career opportunities and automated inventory systems. ", " <b >Workforce shifts: </b > automation shifts job roles. Workers must learn new digital skills. "]) },
            { tag: "Positive impact ", title: "Healthcare and medical services ", html: DUO(["Electronic medical records and online appointments ", "Telemedicine and remote consultations ", "Computer-assisted procedures and data research "], "Key advances ", ["Patient data confidentiality must remain secure ", "Technology failures can disrupt hospital operations ", "Digital healthcare access gaps across demographics "], "Critical challenges ") },
            { tag: "Positive impact ", title: "Government and public services ", html: DUO(["Online government applications and digital documents ", "Faster public service announcements and alerts ", "Official information portals and online appointments "], "Digital services ", ["Accessibility barriers for citizens with low tech literacy ", "Personal data protection requirements ", "Misleading citizens through outdated online info "], "Risks and barriers ") },
            { tag: "Positive impact ", title: "Science, agriculture and environment ", html: L([" <b >Smart agriculture: </b > sensors monitor soil moisture and crop hydration needs. ", " <b >Weather forecasting: </b > helps communities prepare for severe weather. ", " <b >Environmental tracking: </b > tracks pollution levels and manages natural resources. "]) },
            { tag: "Negative impact ", title: "Privacy and data security ", html: " <p >Personal information can be collected, stored, shared or misused. </p > " + DUO(["Data breaches and identity theft ", "Unauthorized access to accounts ", "Tracking online activities without consent "], "Common risks ", ["Use strong, unique passwords and MFA ", "Check app permissions and privacy settings ", "Avoid suspicious links and messages "], "Protection strategies ", "g ") },
            { tag: "Negative impact ", title: "Cybercrime and online threats ", html: DUO(["Phishing and fraudulent online scams ", "Malware and ransomware infections ", "Cyberbullying and online harassment "], "Common threats ", ["Verify senders, URLs and official websites ", "Never share passwords or verification codes ", "Use trusted security software and keep devices updated "], "How to stay safe ", "g ") },
            { tag: "Negative impact ", title: "Misinformation and fake news ", html: L([" <b >Misinformation: </b > false information shared without intent to deceive. ", " <b >Disinformation: </b > deliberately misleading information. ", " <b >Verify: </b > check the source, author and date. Compare with reliable news sources. Read beyond the headline and verify media. "]) + CALL(" <b >Key message: </b > popularity (likes and shares) is not proof of accuracy. ") },
            { tag: "Negative impact ", title: "Automation and employment ", html: DUO(["Faster completion of repetitive tasks ", "Improved consistency and productivity ", "More time for complex, creative work "], "Possible benefits ", ["Some traditional jobs may be reduced or altered ", "Workers require retraining and new digital skills ", "Economic benefits may not be distributed equally "], "Disadvantages and shifts ") },
            { tag: "Negative impact ", title: "Mental health and social well-being ", html: DUO(["Excessive screen time and disrupted sleep ", "Social media pressure and comparison ", "Reduced face-to-face interaction "], "Concerns ", ["Set reasonable screen-time boundaries ", "Take regular breaks and protect sleep schedules ", "Prioritize face-to-face relationships "], "Healthy digital habits ", "g ") },
            { tag: "Equity and access ", title: "The digital divide ", html: " <p >The gap between those with adequate access to digital technology and those without. </p > " + DUO(["Lack of reliable internet access ", "High cost of devices and connectivity ", "Geographic barriers and limited digital literacy "], "Contributing factors ", ["Affordable internet and public computer labs ", "Digital literacy and training programs ", "Accessible website design for underserved communities "], "Possible solutions ", "g ") },
            { tag: "Two-way relationship ", title: "How computing and society interact ", html: L([" <b >Society influences tech: </b > human needs, values, laws and problems dictate which technologies are developed and adopted. ", " <b >Tech influences society: </b > new inventions alter behavior, work styles, communication habits and expectations. "]) + CALL(" <b >Example: </b > flexible education needs sparked online learning platforms, which transformed teaching. ") },
            { tag: "Ethics and responsibility ", title: "Responsible use of technology ", html: DUO(["Respect privacy and verify info before sharing ", "Avoid cyberbullying and respect intellectual property ", "Protect personal data and use AI tools honestly "], "As users ", ["Design systems with security and accessibility in mind ", "Test systems carefully and communicate limitations ", "Take responsibility for the consequences of our work "], "As IT professionals ", "g ") + CALL(" <b >Closing idea: </b > computing is not automatically good or bad. As IT professionals, you will create the systems that shape society. ") }
        ],
        cards: [
            ["Impact of computing ", "Digital systems influence people’s behavior, relationships, opportunities and institutions. "],
            ["Misinformation vs disinformation ", "Misinformation: false info shared without intent to deceive. Disinformation: deliberately misleading information. "],
            ["Is popularity proof of accuracy? ", "No. Likes and shares are not proof of accuracy. Check the source, author and date, and compare with reliable sources. "],
            ["Digital divide ", "The gap between those with adequate access to digital technology and those without. "],
            ["Causes of the digital divide ", "Lack of reliable internet, high cost of devices and connectivity, geographic barriers and limited digital literacy. "],
            ["Solutions to the digital divide ", "Affordable internet and public computer labs, digital literacy training, accessible website design for underserved communities. "],
            ["Two-way relationship of society and technology ", "Society shapes technology (needs, values, laws). Technology shapes society (behavior, work, communication). "],
            ["Privacy protection strategies ", "Strong unique passwords and MFA, check app permissions and privacy settings, avoid suspicious links and messages. "],
            ["How to stay safe from cybercrime ", "Verify senders, URLs and official sites. Never share passwords or verification codes. Use trusted security software and keep devices updated. "],
            ["Common cyber threats ", "Phishing and scams, malware and ransomware, cyberbullying and online harassment. "],
            ["Education: benefits and challenges ", "Benefits: online resources, virtual classrooms, Google Classroom. Challenges: distractions, AI overreliance and plagiarism, unreliable internet or hardware. "],
            ["Healthcare: advances and challenges ", "Advances: electronic records, telemedicine, computer-assisted procedures. Challenges: data confidentiality, technology failures, access gaps. "],
            ["Automation: benefits and shifts ", "Benefits: faster repetitive tasks, consistency, more time for creative work. Shifts: jobs altered, retraining needed, unequal economic benefits. "],
            ["Healthy digital habits ", "Set screen-time boundaries, take regular breaks, protect sleep and prioritize face-to-face relationships. "],
            ["Responsibility of users vs IT professionals ", "Users: respect privacy, verify info, honest AI use. IT professionals: secure and accessible design, careful testing, accept responsibility for consequences. "]
        ],
        quiz: [
            { q: "False info shared WITHOUT intent to deceive is called… ", o: ["Disinformation ", "Misinformation ", "Propaganda ", "Phishing "], a: 1, w: "Misinformation is unintentional. Disinformation is deliberate. " },
            { q: "Which best shows that society influences technology? ", o: ["Phones change how we talk ", "Flexible education needs led to online learning platforms ", "Social media causes stress ", "Robots replace workers "], a: 1, w: "Human needs and problems drive which technologies are built. " },
            { q: "Which is a contributing factor to the digital divide? ", o: ["Public computer labs ", "Digital literacy programs ", "High cost of devices and connectivity ", "Accessible website design "], a: 2, w: "The other options are solutions. " },
            { q: "Which is a protection strategy for privacy? ", o: ["Reuse one password everywhere ", "Accept all app permissions ", "Use strong, unique passwords and MFA ", "Click links to verify them "], a: 2, w: "Strong unique passwords, MFA and checking permissions protect privacy. " },
            { q: "Likes and shares on a post prove that it is… ", o: ["Accurate ", "Verified ", "Not necessarily accurate ", "Official "], a: 2, w: "Popularity is not proof of accuracy. " },
            { q: "Which is a critical healthcare challenge from the slides? ", o: ["Telemedicine ", "Patient data confidentiality ", "Electronic medical records ", "Online appointment scheduling "], a: 1, w: "Confidentiality, technology failures and access gaps are the challenges. " },
            { q: "Which habit supports mental health and well-being? ", o: ["Checking notifications all night ", "Setting screen-time boundaries ", "Replacing all face-to-face contact ", "Comparing yourself on social media "], a: 1, w: "Healthy habits: boundaries, regular breaks, protected sleep, face-to-face time. " },
            { q: "Smart agriculture in this topic relies on… ", o: ["Sensors monitoring soil moisture ", "Paper records ", "Manual weather guessing ", "Printed maps "], a: 0, w: "Sensors monitor soil moisture and crop hydration needs. " },
            { q: "As IT professionals, which is a responsibility? ", o: ["Hide system limitations ", "Test systems carefully and communicate limitations ", "Skip accessibility ", "Avoid accountability "], a: 1, w: "IT professionals design for security and accessibility, test carefully and take responsibility. " },
            { q: "Automation’s risk to employment includes… ", o: ["Faster repetitive tasks ", "Workers needing retraining and new digital skills ", "More creative time ", "Higher consistency "], a: 1, w: "The other options are benefits. " }
        ]
    },
    {
        id: "t4 ", no: 4, short: "T4 ", title: "Appreciation of Computing in Society ", sub: "Professional responsibility and computing ethics ", tone: "t4 ",
        keywords: "ethics privacy intellectual property academic integrity ai responsible professional responsibilities accountability fairness accessibility ",
        notes: [
            { tag: "Core concept ", title: "What does it mean to appreciate computing? ", html: L(["Recognizing the value of digital technologies in improving lives, solving problems and supporting society. ", "Understanding that powerful technology must always be used responsibly and ethically. ", " <b >Examples: </b > valuing online learning accessibility, appreciating convenience in digital banking, protecting personal data and privacy. "]) },
            { tag: "Objectives ", title: "Learning objectives ", html: L(["Explain the importance of computing in modern society. ", "Describe the role of computing professionals in solving real-world problems. ", "Identify professional responsibilities and ethical standards in computing. ", "Demonstrate appreciation for responsible and ethical digital practices. "]) },
            { tag: "Societal impact ", title: "Why computing is important to society ", html: L([" <b >Education: </b > online learning resources, digital classrooms and modern educational tools. ", " <b >Healthcare: </b > patient records management, medical research and enhanced care delivery. ", " <b >Business and employment: </b > online commerce, digital payments, global communication and operations. ", " <b >Public services: </b > government record management, citizen information access and service delivery. "]) + CALL(" <b >Imagine no computing: </b > no smartphones or internet, banks unable to process digital transactions, hospitals locked out of records, schools without online platforms, businesses halted. ") },
            { tag: "Industry roles ", title: "The role of computing professionals ", html: " <div class= \"tbl-wrap\" > <table > <tr > <th >Role </th > <th >Contribution </th > </tr > <tr > <td > <b >Software Developer </b > </td > <td >Creates applications that solve everyday human problems </td > </tr > <tr > <td > <b >Cybersecurity Analyst </b > </td > <td >Protects critical systems and data from cyber threats </td > </tr > <tr > <td > <b >Data Analyst </b > </td > <td >Studies data trends to help organizations make informed decisions </td > </tr > <tr > <td > <b >Network Engineer </b > </td > <td >Maintains reliable, high-speed computer networks </td > </tr > <tr > <td > <b >AI/ML Engineer </b > </td > <td >Develops intelligent systems that learn from data and assist tasks </td > </tr > </table > </div > " },
            { tag: "Problem solving ", title: "Computing professionals as problem-solvers ", html: L([" <b >Problem: </b > deadline tracking.  <b >Solution: </b > task management app. ", " <b >Problem: </b > inventory monitoring.  <b >Solution: </b > inventory management system. ", " <b >Problem: </b > fraudulent messages.  <b >Solution: </b > security tools and literacy. "]) + CALL(" <b >Key message: </b > a good computing solution must be useful, reliable, secure and appropriate for users. ") },
            { tag: "Professional duty ", title: "Responsibilities of computing professionals ", html: L([" <b >Accuracy and reliability: </b > develop and maintain systems that work correctly under all conditions. ", " <b >Security and privacy: </b > protect sensitive personal data from unauthorized access or breaches. ", " <b >Quality and safety: </b > rigorously test systems and address errors that could harm users. ", " <b >Honesty and transparency: </b > communicate software limitations, risks and problems truthfully. ", " <b >Respect for users: </b > consider users’ diverse needs, abilities and daily circumstances. ", " <b >Accountability: </b > accept responsibility for technical decisions and correct mistakes promptly. "]) },
            { tag: "Moral principles ", title: "What is computing ethics? ", html: " <p >Moral principles guiding how people design, develop, use and manage digital technologies. </p > " + L(["Asking permission before accessing private files. ", "Giving proper credit when using someone else’s work. ", "Being completely honest about software limitations. ", "Avoiding technology designed to intentionally deceive. "]) + CALL(" <b >Remember: </b > something can be technically possible without being ethical or appropriate. ") },
            { tag: "Ethics standards ", title: "Core ethical principles in computing ", html: L([" <b >Privacy and confidentiality: </b > access and share personal information only when properly authorized. ", " <b >Fairness: </b > avoid unfair discrimination and analyze technology impact on all groups. ", " <b >Honesty and integrity: </b > do not falsify results, mislead users or steal another person’s work. ", " <b >Accessibility and inclusion: </b > design technology usable by people with different needs and abilities. "]) },
            { tag: "Data protection ", title: "Respecting privacy and protecting data ", html: L(["Access only information strictly needed for work. ", "Use strong security measures and access controls. ", "Report security incidents through proper channels. "]) + CALL(" <b >Scenario: </b > a school IT staff member should never share a student’s grades or personal records with unauthorized individuals. ") },
            { tag: "Academic honesty ", title: "Intellectual property and academic integrity ", html: L(["Cite sources when using external information or materials. ", "Follow software licenses and respect copyright permissions. ", "Be transparent about assistance received from AI tools. ", "Using online code samples requires acknowledging the source and understanding the code rather than blindly claiming it as original work. "]) },
            { tag: "AI ethics ", title: "Responsible use of artificial intelligence ", html: L(["Verify AI-generated info before relying on it. ", "Follow workplace or school rules regarding AI assistance. ", "Recognize that humans remain responsible for decisions. "]) + CALL(" <b >Scenario: </b > a student has AI complete an entire assignment without review. This is unethical because the work is not their own and was not checked. AI can be used responsibly to assist, with  review and disclosure. ") },
            { tag: "Broader impact ", title: "Social and environmental responsibility ", html: DUO(["Design safe and accessible systems ", "Support users with limited digital skills ", "Avoid designs that manipulate users "], "Social responsibility ", ["Reduce unnecessary energy consumption ", "Extend the useful life of hardware ", "Encourage responsible electronic recycling "], "Environmental responsibility ", "g ") },
            { tag: "Consequences ", title: "What happens when ethics are ignored? ", html: " <div class= \"tbl-wrap\" > <table > <tr > <th >Failure </th > <th >Result </th > </tr > <tr > <td > <b >Weak data protection </b > </td > <td >Personal and sensitive information gets exposed </td > </tr > <tr > <td > <b >Biased algorithms </b > </td > <td >Certain groups receive unfair or discriminatory treatment </td > </tr > <tr > <td > <b >Untested software release </b > </td > <td >Severe errors, financial loss or safety risks </td > </tr > <tr > <td > <b >Plagiarism and piracy </b > </td > <td >Copyright disputes and academic or professional penalties </td > </tr > </table > </div > " },
            { tag: "Student action ", title: "How students can appreciate computing ", html: L(["Develop technical skills and continue learning. ", "Use technology to solve real-world problems. ", "Respect privacy, copyright and peer work. ", "Verify information before sharing online. "]) },
            { tag: "Class activity ", title: "Ethical or unethical? ", html: L(["Asking permission before accessing confidential records:  <b >ethical </b >. ", "Copying a classmate’s project and submitting it as your own:  <b >unethical </b >. ", "Reporting security vulnerabilities through proper channels:  <b >ethical </b >. ", "Releasing software with known severe security flaws:  <b >unethical </b >. "]) }
        ],
        cards: [
            ["What does it mean to appreciate computing? ", "Recognizing the value of digital technologies in improving lives, solving problems and supporting society, while understanding that powerful technology must be used responsibly an d ethically. "],
            ["Computing ethics ", "Moral principles guiding how people design, develop, use and manage digital technologies. "],
            ["Technically possible vs ethical ", "Something can be technically possible without being ethical or appropriate. "],
            ["The four core ethical principles ", "Privacy and confidentiality, Fairness, Honesty and integrity, Accessibility and inclusion. "],
            ["Six responsibilities of computing professionals ", "Accuracy and reliability, Security and privacy, Quality and safety, Honesty and transparency, Respect for users, Accountability. "],
            ["A good computing solution is… ", "Useful, reliable, secure and appropriate for users. "],
            ["Privacy practice for IT staff ", "Access only information strictly needed, use strong security and access controls, report security incidents through proper channels. "],
            ["Intellectual property and academic integrity ", "Cite sources, follow software licenses and respect copyright, be transparent about AI assistance. "],
            ["Responsible AI use ", "Verify AI info, follow school or workplace rules on AI, and remember humans remain responsible for decisions. "],
            ["Social responsibility ", "Design safe and accessible systems, support users with limited digital skills, avoid manipulative designs. "],
            ["Environmental responsibility ", "Reduce unnecessary energy use, extend hardware life, encourage responsible electronic recycling. "],
            ["What happens with weak data protection? ", "Personal and sensitive information gets exposed. "],
            ["What do biased algorithms cause? ", "Certain groups receive unfair or discriminatory treatment. "],
            ["What happens when untested software is released? ", "Users face severe errors, financial loss or safety risks. "],
            ["Role of an AI/ML Engineer ", "Develops intelligent systems that learn from data and assist tasks. "],
            ["Four ways students can appreciate computing ", "Develop technical skills and keep learning, solve real-world problems, respect privacy, copyright and peer work, verify information before sharing. "]
        ],
        quiz: [
            { q: "Computing ethics refers to… ", o: ["Laws about hardware prices ", "Moral principles guiding how digital technologies are designed, used and managed ", "Rules for programming syntax ", "Company marketing policies "], a: 1, w: "Computing ethics is the set of moral principles guiding technology design and use. " },
            { q: "Copying a classmate’s project and submitting it as your own is… ", o: ["Ethical ", "Unethical ", "Acceptable with a different title ", "A form of collaboration "], a: 1, w: "It violates honesty and integrity and is plagiarism. " },
            { q: "Which is NOT one of the four core ethical principles? ", o: ["Privacy and confidentiality ", "Fairness ", "Speed and profit ", "Accessibility and inclusion "], a: 2, w: "Core principles: Privacy, Fairness, Honesty and Integrity, Accessibility and Inclusion. " },
            { q: "Releasing software with known severe security flaws is… ", o: ["Ethical ", "Unethical ", "Required by law ", "Neutral "], a: 1, w: "It breaks quality and safety, and honesty responsibilities. " },
            { q: "Biased algorithms lead to… ", o: ["Unfair or discriminatory treatment of certain groups ", "Faster software ", "Lower costs only ", "Better privacy "], a: 0, w: "Ignoring fairness leads to discriminatory outcomes. " },
            { q: "Which responsibility means accepting responsibility for decisions and correcting mistakes? ", o: ["Accuracy ", "Accountability ", "Respect for users ", "Quality "], a: 1, w: "Accountability: accept responsibility for technical decisions and correct mistakes promptly. " },
            { q: "A school IT staff member should… ", o: ["Share grades with any friend ", "Never share student records with unauthorized individuals ", "Post records publicly ", "Ignore access controls "], a: 1, w: "Confidential records must stay protected from unauthorized access. " },
            { q: "Responsible use of AI includes… ", o: ["Submitting AI output without review ", "Verifying AI info and following school rules ", "Hiding AI use ", "Letting AI make final decisions alone "], a: 1, w: "Verify, follow rules, be transparent, and remember humans stay responsible. " },
            { q: "Which is an environmental responsibility? ", o: ["Avoid manipulative designs ", "Extend the useful life of hardware ", "Support users with limited skills ", "Cite sources "], a: 1, w: "Reduce energy use, extend hardware life and recycle responsibly. " },
            { q: "“A good computing solution must be…” ", o: ["Fast only ", "Useful, reliable, secure and appropriate for users ", "Cheap only ", "Complicated "], a: 1, w: "This is the key message of the problem-solving slide. " }
        ]
    }
];

var TOPICS = [].concat(M1_TOPICS, M2_TOPICS, M3_TOPICS, M4_TOPICS);

var SUBJECTS = [{
    id: "it111", name: "IT111", sub: "Introduction to Computing", modules: [
        { id: "m1", name: "Module 1", sub: "History of Computing", topics: M1_TOPICS },
        { id: "m2", name: "Module 2", sub: "Computer Systems", topics: M2_TOPICS },
        { id: "m3", name: "Module 3", sub: "Networks & Cybersecurity", topics: M3_TOPICS },
        { id: "m4", name: "Module 4", sub: "Overview of the Computing Industry and Profession", topics: M4_TOPICS }
    ]
}];