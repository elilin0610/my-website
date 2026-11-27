export type Lang = 'en' | 'de' | 'zh' | 'ja' | 'ko';

export const langs: { id: Lang; label: string; html: string; path: string }[] = [
  { id: 'en', label: 'English', html: 'en', path: '/' },
  { id: 'de', label: 'Deutsch', html: 'de', path: '/de/' },
  { id: 'zh', label: '中文（繁體）', html: 'zh-Hant-TW', path: '/zh/' },
  { id: 'ja', label: '日本語', html: 'ja', path: '/ja/' },
  { id: 'ko', label: '한국어', html: 'ko', path: '/ko/' },
];

export const email = 'elilin0610@gmail.com';
export const linkedin = 'https://www.linkedin.com/in/eli-you-sheng-lin-b1a168350';
// Fill in the GitHub profile URL; the links appear once it is set.
export const github = 'https://github.com/elilin0610';

type Hop = { name: string; status: string; note: string; fault?: boolean };
type Step = { act: string; tool: string; why: string };
type Project = { name: string; kind: 'web' | 'data' | 'desktop'; stack: string; did: string };
type Job = { when: string; role: string; where: string; did: string };

export type Strings = {
  title: string; description: string; skip: string; langLabel: string;
  nav: { case: string; work: string; toolkit: string; experience: string; email: string };
  traceCap: string; traceSub: string; hops: Hop[];
  h1: string; lead: string; ctaEmail: string; ctaCase: string;
  caseH: string; caseLead: string; trail: Step[];
  claim: string; claimLabel: string;
  workH: string; filterLegend: string; filters: { all: string; web: string; data: string; desktop: string };
  heads: [string, string, string]; projects: Project[]; count: string;
  toolH: string;
  tiles: { desktopH: string; desktopP: string; netH: string; net: string[]; codeH: string; code: string[]; dataH: string; data: string[]; langH: string; unit: string; langsP: string };
  expH: string; jobs: Job[];
  contactH: string; contactLead: string; copy: string; copied: string; copyOk: string; copyFail: string;
  foot: { email: string; top: string; legal: string };
};

const stack = { fastapi: 'Python, FastAPI', nodered: 'Node-RED, MySQL', wpf: 'C#, WPF' };

export const strings: Record<Lang, Strings> = {
  en: {
    title: 'Eli',
    description: 'Eli Lin is an IT support specialist and junior developer in Hsinchu, Taiwan. Help desk at Synopsys and Realtek, projects in Python, C# and Node-RED.',
    skip: 'Skip to content', langLabel: 'Language',
    nav: { case: 'The case', work: 'Projects', toolkit: 'Toolkit', experience: 'Experience', email: 'Email me' },
    traceCap: 'Synopsys VPN outage', traceSub: 'traced from the help desk',
    hops: [
      { name: 'Laptop', status: 'Ruled out', note: 'A second device failed the same way' },
      { name: 'Okta sign-in', status: 'Ruled out', note: 'Accounts signed in normally' },
      { name: 'One office', status: 'Ruled out', note: 'Every site saw the outage' },
      { name: 'ISP', status: 'Fault', note: 'Isolated with ping and traceroute', fault: true },
    ],
    h1: 'I find where it breaks.', lead: 'Eli Lin, IT support and junior developer in Hsinchu, Taiwan.',
    ctaEmail: 'Email Eli', ctaCase: 'Read the VPN case',
    caseH: 'The outage, step by step', caseLead: 'Each check removed one suspect.',
    trail: [
      { act: 'Checked Okta', tool: 'Okta', why: 'Sign-in worked, so accounts were not the cause.' },
      { act: 'Tested from a separate device', tool: 'Second laptop', why: 'Same failure, so not one machine.' },
      { act: 'Confirmed the impact across sites', tool: 'Site reports', why: 'Not one office either.' },
      { act: 'Ran ping and traceroute', tool: 'ping, tracert', why: 'Sent the results to the network team as evidence.' },
      { act: 'Handed over with proof', tool: 'Network team', why: 'The fault sat with the ISP, not the company network.' },
    ],
    claim: 'Rule it out on a second device before you call it fixed.', claimLabel: 'How I work',
    workH: 'Things I have built', filterLegend: 'Show projects',
    filters: { all: 'All', web: 'Web', data: 'Data', desktop: 'Desktop' },
    heads: ['Project', 'Stack', 'What I did'],
    projects: [
      { name: 'NemoClaw web application', kind: 'web', stack: 'AI document app', did: 'Moved API key configuration out of the client and into backend environment variables.' },
      { name: 'Backend API', kind: 'web', stack: stack.fastapi, did: 'Built and tested REST endpoints.' },
      { name: 'Data integration', kind: 'data', stack: stack.nodered, did: 'A flow that writes incoming data to a MySQL database.' },
      { name: 'Desktop game', kind: 'desktop', stack: stack.wpf, did: 'A small Windows game.' },
    ],
    count: '{n} of {t} projects shown',
    toolH: 'The toolkit',
    tiles: {
      desktopH: 'Desktop support',
      desktopP: 'Windows 10 and 11 installs and imaging. HP and Dell laptops ready on a new hire’s first day. Printers, peripherals, battery swaps, antivirus scans, meeting rooms checked before the meeting.',
      netH: 'Connectivity', net: ['VPN and Okta', 'TCP/IP, DNS, DHCP', 'ping and traceroute'],
      codeH: 'Code', code: ['Python, JavaScript', 'C#, C/C++, Java', 'Visual Basic'],
      dataH: 'Data and tools', data: ['SQL, MySQL', 'Node-RED, Deno', 'Spring, WPF'],
      langH: 'Languages', unit: 'TOEIC, 2025', langsP: 'Mandarin native. Japanese conversational.',
    },
    expH: 'Where I have worked',
    jobs: [
      { when: '2026', role: 'Contract equipment maintenance technician', where: 'TSMC fab, Hsinchu', did: 'Inspected and troubleshot load ports for FOUP and FOSB wafer carriers.' },
      { when: 'Sep 2024 to Jun 2026', role: 'Computer science and information engineering', where: 'National Quemoy University', did: 'Programming, databases and web development.' },
      { when: 'Jun 2023 to May 2024', role: 'IT helpdesk assistant engineer, Welltake', where: 'Onsite at Synopsys and Realtek', did: 'Set up new-hire laptops, fixed hardware, network and VPN faults, kept the inventory.' },
      { when: '2020', role: 'Vocational program in data processing', where: 'Hsiang Shan Senior High School', did: 'Where the computers started.' },
    ],
    contactH: 'Need someone on the desk?',
    contactLead: 'Open to IT support and junior developer roles, in Mandarin, English or some Japanese.',
    copy: 'Copy address', copied: 'Copied', copyOk: 'The address is on your clipboard.', copyFail: 'Copying is blocked here. Select the address above instead.',
    foot: { email: 'Email', top: 'Back to top', legal: '© 2026 Eli Lin. Hsinchu, Taiwan.' },
  },

  de: {
    title: 'Eli',
    description: 'Eli Lin ist IT-Support-Spezialist und Junior-Entwickler in Hsinchu, Taiwan. Helpdesk bei Synopsys und Realtek, Projekte in Python, C# und Node-RED.',
    skip: 'Zum Inhalt springen', langLabel: 'Sprache',
    nav: { case: 'Der Fall', work: 'Projekte', toolkit: 'Werkzeuge', experience: 'Erfahrung', email: 'E-Mail' },
    traceCap: 'VPN-Ausfall bei Synopsys', traceSub: 'vom Helpdesk aus verfolgt',
    hops: [
      { name: 'Laptop', status: 'Ausgeschlossen', note: 'Ein zweites Gerät scheiterte genauso' },
      { name: 'Okta-Anmeldung', status: 'Ausgeschlossen', note: 'Konten meldeten sich normal an' },
      { name: 'Ein Standort', status: 'Ausgeschlossen', note: 'Alle Standorte waren betroffen' },
      { name: 'ISP', status: 'Fehler', note: 'Mit ping und traceroute eingegrenzt', fault: true },
    ],
    h1: 'Ich finde, wo es hakt.', lead: 'Eli Lin, IT-Support und Junior-Entwickler in Hsinchu, Taiwan.',
    ctaEmail: 'E-Mail an Eli', ctaCase: 'Zum VPN-Fall',
    caseH: 'Der Ausfall, Schritt für Schritt', caseLead: 'Jede Prüfung schloss einen Verdacht aus.',
    trail: [
      { act: 'Okta geprüft', tool: 'Okta', why: 'Die Anmeldung funktionierte, die Konten waren also nicht schuld.' },
      { act: 'Mit einem zweiten Gerät getestet', tool: 'Zweiter Laptop', why: 'Gleicher Fehler, also nicht ein einzelner Rechner.' },
      { act: 'Ausmaß über alle Standorte bestätigt', tool: 'Standortmeldungen', why: 'Auch nicht ein einzelnes Büro.' },
      { act: 'ping und traceroute ausgeführt', tool: 'ping, tracert', why: 'Die Ergebnisse als Beleg an das Netzwerkteam geschickt.' },
      { act: 'Mit Nachweis übergeben', tool: 'Netzwerkteam', why: 'Der Fehler lag beim ISP, nicht im Firmennetz.' },
    ],
    claim: 'Erst auf einem zweiten Gerät ausschließen, dann „gelöst“ sagen.', claimLabel: 'Wie ich arbeite',
    workH: 'Was ich gebaut habe', filterLegend: 'Projekte anzeigen',
    filters: { all: 'Alle', web: 'Web', data: 'Daten', desktop: 'Desktop' },
    heads: ['Projekt', 'Technik', 'Was ich gemacht habe'],
    projects: [
      { name: 'NemoClaw-Webanwendung', kind: 'web', stack: 'KI-Dokumenten-App', did: 'API-Schlüssel aus dem Client in Umgebungsvariablen im Backend verlegt.' },
      { name: 'Backend-API', kind: 'web', stack: stack.fastapi, did: 'REST-Endpunkte gebaut und getestet.' },
      { name: 'Datenintegration', kind: 'data', stack: stack.nodered, did: 'Ein Flow, der eingehende Daten in eine MySQL-Datenbank schreibt.' },
      { name: 'Desktop-Spiel', kind: 'desktop', stack: stack.wpf, did: 'Ein kleines Windows-Spiel.' },
    ],
    count: '{n} von {t} Projekten',
    toolH: 'Werkzeugkasten',
    tiles: {
      desktopH: 'Desktop-Support',
      desktopP: 'Installation und Imaging von Windows 10 und 11. HP- und Dell-Laptops, die am ersten Arbeitstag bereitstehen. Drucker, Peripherie, Akkutausch, Virenscans und Besprechungsräume, die vor dem Meeting geprüft sind.',
      netH: 'Netzwerk', net: ['VPN und Okta', 'TCP/IP, DNS, DHCP', 'ping und traceroute'],
      codeH: 'Code', code: ['Python, JavaScript', 'C#, C/C++, Java', 'Visual Basic'],
      dataH: 'Daten und Tools', data: ['SQL, MySQL', 'Node-RED, Deno', 'Spring, WPF'],
      langH: 'Sprachen', unit: 'TOEIC, 2025', langsP: 'Mandarin als Muttersprache. Japanisch im Alltag.',
    },
    expH: 'Wo ich gearbeitet habe',
    jobs: [
      { when: '2026', role: 'Wartungstechniker für Anlagen (Vertrag)', where: 'TSMC-Fab, Hsinchu', did: 'Loadports für FOUP- und FOSB-Waferträger geprüft und Fehler behoben.' },
      { when: 'Sept. 2024 bis Juni 2026', role: 'Informatik und Informationstechnik', where: 'National Quemoy University', did: 'Programmierung, Datenbanken und Webentwicklung.' },
      { when: 'Juni 2023 bis Mai 2024', role: 'IT-Helpdesk-Assistenzingenieur, Welltake', where: 'Vor Ort bei Synopsys und Realtek', did: 'Laptops für neue Mitarbeitende eingerichtet, Hardware-, Netzwerk- und VPN-Fehler behoben, das Inventar geführt.' },
      { when: '2020', role: 'Berufsausbildung Datenverarbeitung', where: 'Hsiang Shan Senior High School', did: 'Wo es mit Computern anfing.' },
    ],
    contactH: 'Jemand für den Helpdesk gesucht?',
    contactLead: 'Offen für Stellen im IT-Support und als Junior-Entwickler, auf Mandarin, Englisch oder etwas Japanisch.',
    copy: 'Adresse kopieren', copied: 'Kopiert', copyOk: 'Die Adresse ist in der Zwischenablage.', copyFail: 'Kopieren ist hier blockiert. Markiere die Adresse oben stattdessen.',
    foot: { email: 'E-Mail', top: 'Nach oben', legal: '© 2026 Eli Lin. Hsinchu, Taiwan.' },
  },

  zh: {
    title: 'Eli',
    description: 'Eli Lin，台灣新竹的 IT 支援人員與初階開發者。曾派駐 Synopsys、Realtek 服務台，做過 Python、C#、Node-RED 專案。',
    skip: '跳到主要內容', langLabel: '語言',
    nav: { case: '案例', work: '作品', toolkit: '技能', experience: '經歷', email: '寄信給我' },
    traceCap: 'Synopsys VPN 斷線事件', traceSub: '從服務台一路追查',
    hops: [
      { name: '筆電', status: '已排除', note: '換一台裝置也一樣失敗' },
      { name: 'Okta 登入', status: '已排除', note: '帳號可以正常登入' },
      { name: '單一辦公室', status: '已排除', note: '所有據點都受到影響' },
      { name: 'ISP', status: '故障點', note: '用 ping 與 traceroute 定位', fault: true },
    ],
    h1: '我找Bug', lead: 'Eli Lin，IT 支援與初階開發者，在台灣新竹。',
    ctaEmail: '寄信給 Eli', ctaCase: '看 VPN 案例',
    caseH: '一步一步排除', caseLead: '每做一次檢查，就排除一個嫌疑。',
    trail: [
      { act: '檢查 Okta', tool: 'Okta', why: '登入正常，問題不在帳號。' },
      { act: '換另一台裝置測試', tool: '第二台筆電', why: '一樣失敗，不是單一電腦的問題。' },
      { act: '確認各據點的影響範圍', tool: '各據點回報', why: '也不是單一辦公室的問題。' },
      { act: '執行 ping 與 traceroute', tool: 'ping, tracert', why: '把結果交給網路團隊當作證據。' },
      { act: '附上證據交接', tool: '網路團隊', why: '問題出在 ISP，不在公司網路。' },
    ],
    claim: '換一台裝置確認過，才算真的修好。', claimLabel: '我的做事方式',
    workH: '我做過的東西', filterLegend: '篩選專案',
    filters: { all: '全部', web: '網頁', data: '資料', desktop: '桌面' },
    heads: ['專案', '技術', '我做了什麼'],
    projects: [
      { name: 'NemoClaw 網頁應用', kind: 'web', stack: 'AI 文件應用', did: '把 API 金鑰設定從前端移到後端的環境變數。' },
      { name: '後端 API', kind: 'web', stack: stack.fastapi, did: '建立並測試 REST 端點。' },
      { name: '資料整合', kind: 'data', stack: stack.nodered, did: '把資料寫進 MySQL 資料庫的流程。' },
      { name: '桌面遊戲', kind: 'desktop', stack: stack.wpf, did: '一款小型 Windows 遊戲。' },
    ],
    count: '顯示 {n} / {t} 個專案',
    toolH: '工具箱',
    tiles: {
      desktopH: '桌面支援',
      desktopP: 'Windows 10、11 安裝與映像部署。新進同仁第一天就能用的 HP、Dell 筆電。印表機、周邊設備、更換電池、防毒掃描，會議開始前先把會議室設備檢查好。',
      netH: '網路連線', net: ['VPN 與 Okta', 'TCP/IP、DNS、DHCP', 'ping 與 traceroute'],
      codeH: '程式', code: ['Python、JavaScript', 'C#、C/C++、Java', 'Visual Basic'],
      dataH: '資料與工具', data: ['SQL、MySQL', 'Node-RED、Deno', 'Spring、WPF'],
      langH: '語言', unit: 'TOEIC，2025 年', langsP: '中文母語，日文可日常會話。',
    },
    expH: '工作經歷',
    jobs: [
      { when: '2026', role: '設備維護技術員（約聘）', where: '台積電晶圓廠，新竹', did: '檢查並排除 FOUP、FOSB 晶圓載具 load port 的問題。' },
      { when: '2024.09 至 2026.06', role: '資訊工程學系', where: '國立金門大學', did: '程式設計、資料庫與網頁開發。' },
      { when: '2023.06 至 2024.05', role: 'IT 服務台助理工程師，Welltake', where: '派駐 Synopsys 與 Realtek', did: '準備新進同仁的筆電，處理硬體、網路與 VPN 故障，維護設備清冊。' },
      { when: '2020', role: '資料處理科', where: '新竹市立香山高級中學', did: '和電腦結緣的起點。' },
    ],
    contactH: '需要服務台的人手嗎？',
    contactLead: '正在找 IT 支援與初階開發的工作，可以用中文、英文或簡單的日文溝通。',
    copy: '複製地址', copied: '已複製', copyOk: '地址已複製到剪貼簿。', copyFail: '這裡無法複製，請直接選取上面的地址。',
    foot: { email: 'Email', top: '回到頂端', legal: '© 2026 Eli Lin。台灣新竹。' },
  },

  ja: {
    title: 'Eli',
    description: 'Eli Lin は台湾・新竹の IT サポート兼ジュニア開発者です。Synopsys と Realtek のヘルプデスクに常駐し、Python、C#、Node-RED のプロジェクト経験があります。',
    skip: '本文へスキップ', langLabel: '言語',
    nav: { case: '事例', work: '制作物', toolkit: 'スキル', experience: '経歴', email: 'メールする' },
    traceCap: 'Synopsys の VPN 障害', traceSub: 'ヘルプデスクから原因を追跡',
    hops: [
      { name: 'ノートPC', status: '除外', note: '別の端末でも同じ症状' },
      { name: 'Okta サインイン', status: '除外', note: 'アカウントは正常にサインインできた' },
      { name: '一つの拠点', status: '除外', note: 'すべての拠点で発生していた' },
      { name: 'ISP', status: '障害箇所', note: 'ping と traceroute で特定', fault: true },
    ],
    h1: '壊れた場所を、\n見つけます。', lead: 'Eli Lin。台湾・新竹の IT サポート兼ジュニア開発者です。',
    ctaEmail: 'Eli にメール', ctaCase: 'VPN の事例を読む',
    caseH: '一つずつ切り分ける', caseLead: '確認するたびに、疑いを一つ消していく。',
    trail: [
      { act: 'Okta を確認', tool: 'Okta', why: 'サインインは正常。アカウントは原因ではない。' },
      { act: '別の端末でテスト', tool: '2台目のPC', why: '同じ症状。一台だけの問題ではない。' },
      { act: '拠点ごとの影響を確認', tool: '各拠点の報告', why: '一つのオフィスの問題でもない。' },
      { act: 'ping と traceroute を実行', tool: 'ping, tracert', why: '結果を証拠としてネットワークチームに共有。' },
      { act: '証拠を添えて引き継ぎ', tool: 'ネットワークチーム', why: '原因は社内ネットワークではなく ISP だった。' },
    ],
    claim: '別の端末で確かめるまで、直ったとは言わない。', claimLabel: '仕事の進め方',
    workH: '作ったもの', filterLegend: 'プロジェクトを絞り込む',
    filters: { all: 'すべて', web: 'Web', data: 'データ', desktop: 'デスクトップ' },
    heads: ['プロジェクト', '技術', 'やったこと'],
    projects: [
      { name: 'NemoClaw Web アプリ', kind: 'web', stack: 'AI ドキュメントアプリ', did: 'API キーの設定をクライアントからバックエンドの環境変数へ移した。' },
      { name: 'バックエンド API', kind: 'web', stack: stack.fastapi, did: 'REST エンドポイントを構築し、テストした。' },
      { name: 'データ連携', kind: 'data', stack: stack.nodered, did: 'データを MySQL に書き込むフロー。' },
      { name: 'デスクトップゲーム', kind: 'desktop', stack: stack.wpf, did: '小さな Windows ゲーム。' },
    ],
    count: '{t} 件中 {n} 件を表示',
    toolH: 'ツールキット',
    tiles: {
      desktopH: 'デスクトップサポート',
      desktopP: 'Windows 10・11 のインストールとイメージ展開。新入社員が初日から使える HP・Dell のノートPC。プリンター、周辺機器、バッテリー交換、ウイルススキャン、会議前の会議室機器チェック。',
      netH: 'ネットワーク', net: ['VPN と Okta', 'TCP/IP、DNS、DHCP', 'ping と traceroute'],
      codeH: 'コード', code: ['Python、JavaScript', 'C#、C/C++、Java', 'Visual Basic'],
      dataH: 'データとツール', data: ['SQL、MySQL', 'Node-RED、Deno', 'Spring、WPF'],
      langH: '言語', unit: 'TOEIC（2025年）', langsP: '中国語はネイティブ。日本語は日常会話レベル。',
    },
    expH: '経歴',
    jobs: [
      { when: '2026年', role: '設備保守技術者（契約）', where: 'TSMC 工場、新竹', did: 'FOUP・FOSB ウェーハキャリアのロードポートの点検とトラブル対応。' },
      { when: '2024年9月から2026年6月', role: '資訊工程学系（情報工学）', where: '国立金門大学', did: 'プログラミング、データベース、Web 開発。' },
      { when: '2023年6月から2024年5月', role: 'IT ヘルプデスク アシスタントエンジニア、Welltake', where: 'Synopsys と Realtek に常駐', did: '新入社員用 PC のセットアップ、ハードウェア・ネットワーク・VPN 障害の対応、機器台帳の管理。' },
      { when: '2020年', role: '資料処理科（職業課程）', where: '新竹市立香山高級中学', did: 'パソコンとの出会い。' },
    ],
    contactH: 'ヘルプデスクの人材をお探しですか？',
    contactLead: 'IT サポートとジュニア開発のポジションを探しています。中国語、英語、日常会話レベルの日本語で対応できます。',
    copy: 'アドレスをコピー', copied: 'コピーしました', copyOk: 'アドレスをクリップボードにコピーしました。', copyFail: 'ここではコピーできません。上のアドレスを選択してください。',
    foot: { email: 'メール', top: 'ページの先頭へ', legal: '© 2026 Eli Lin。台湾・新竹。' },
  },

  ko: {
    title: 'Eli',
    description: 'Eli Lin은 대만 신주의 IT 지원 담당자이자 주니어 개발자입니다. Synopsys와 Realtek에서 헬프데스크를 맡았고, Python, C#, Node-RED로 프로젝트를 만들었습니다.',
    skip: '본문으로 건너뛰기', langLabel: '언어',
    nav: { case: '사례', work: '프로젝트', toolkit: '기술', experience: '경력', email: '이메일' },
    traceCap: 'Synopsys VPN 장애', traceSub: '헬프데스크에서 원인 추적',
    hops: [
      { name: '노트북', status: '제외', note: '다른 기기에서도 같은 증상' },
      { name: 'Okta 로그인', status: '제외', note: '계정은 정상적으로 로그인됨' },
      { name: '한 사무실', status: '제외', note: '모든 지점에서 장애 발생' },
      { name: 'ISP', status: '장애 지점', note: 'ping과 traceroute로 특정', fault: true },
    ],
    h1: '고장 난 곳을\n찾아냅니다.', lead: 'Eli Lin, 대만 신주의 IT 지원 담당자이자 주니어 개발자입니다.',
    ctaEmail: 'Eli에게 메일 보내기', ctaCase: 'VPN 사례 보기',
    caseH: '장애, 단계별로', caseLead: '확인할 때마다 용의자가 하나씩 줄었습니다.',
    trail: [
      { act: 'Okta 확인', tool: 'Okta', why: '로그인이 되었으니 계정 문제는 아니었습니다.' },
      { act: '다른 기기로 테스트', tool: '두 번째 노트북', why: '같은 증상이라 특정 기기의 문제가 아니었습니다.' },
      { act: '전 지점 영향 확인', tool: '지점 보고', why: '한 사무실만의 문제도 아니었습니다.' },
      { act: 'ping과 traceroute 실행', tool: 'ping, tracert', why: '결과를 증거로 네트워크 팀에 전달했습니다.' },
      { act: '증거와 함께 이관', tool: '네트워크 팀', why: '원인은 회사 네트워크가 아니라 ISP에 있었습니다.' },
    ],
    claim: '해결됐다고 하기 전에, 다른 기기에서 먼저 확인합니다.', claimLabel: '일하는 방식',
    workH: '만든 것들', filterLegend: '프로젝트 보기',
    filters: { all: '전체', web: '웹', data: '데이터', desktop: '데스크톱' },
    heads: ['프로젝트', '기술', '한 일'],
    projects: [
      { name: 'NemoClaw 웹 애플리케이션', kind: 'web', stack: 'AI 문서 앱', did: 'API 키 설정을 클라이언트에서 백엔드 환경 변수로 옮겼습니다.' },
      { name: '백엔드 API', kind: 'web', stack: stack.fastapi, did: 'REST 엔드포인트를 만들고 테스트했습니다.' },
      { name: '데이터 연동', kind: 'data', stack: stack.nodered, did: '들어오는 데이터를 MySQL 데이터베이스에 기록하는 플로우.' },
      { name: '데스크톱 게임', kind: 'desktop', stack: stack.wpf, did: '작은 Windows 게임.' },
    ],
    count: '프로젝트 {t}개 중 {n}개 표시',
    toolH: '툴킷',
    tiles: {
      desktopH: '데스크톱 지원',
      desktopP: 'Windows 10·11 설치와 이미징. 신입 사원의 첫 출근일에 맞춰 준비한 HP·Dell 노트북. 프린터, 주변기기, 배터리 교체, 바이러스 검사, 회의 전에 미리 점검한 회의실.',
      netH: '네트워크', net: ['VPN과 Okta', 'TCP/IP, DNS, DHCP', 'ping과 traceroute'],
      codeH: '코드', code: ['Python, JavaScript', 'C#, C/C++, Java', 'Visual Basic'],
      dataH: '데이터와 도구', data: ['SQL, MySQL', 'Node-RED, Deno', 'Spring, WPF'],
      langH: '언어', unit: 'TOEIC, 2025년', langsP: '중국어는 모국어, 일본어는 일상 회화 수준.',
    },
    expH: '경력',
    jobs: [
      { when: '2026년', role: '장비 유지보수 기술자 (계약직)', where: 'TSMC 팹, 신주', did: 'FOUP·FOSB 웨이퍼 캐리어용 로드포트를 점검하고 고장을 해결했습니다.' },
      { when: '2024년 9월 ~ 2026년 6월', role: '컴퓨터공학 및 정보공학', where: '국립 진먼 대학교', did: '프로그래밍, 데이터베이스, 웹 개발.' },
      { when: '2023년 6월 ~ 2024년 5월', role: 'IT 헬프데스크 보조 엔지니어, Welltake', where: 'Synopsys, Realtek 상주', did: '신입 사원 노트북 세팅, 하드웨어·네트워크·VPN 장애 처리, 자산 관리.' },
      { when: '2020년', role: '데이터 처리과 (직업 과정)', where: '신주시립 샹산 고등학교', did: '컴퓨터와의 인연이 시작된 곳.' },
    ],
    contactH: '헬프데스크 인재를 찾고 계신가요?',
    contactLead: 'IT 지원과 주니어 개발 직무를 찾고 있습니다. 중국어, 영어, 간단한 일본어로 소통할 수 있습니다.',
    copy: '주소 복사', copied: '복사됨', copyOk: '주소가 클립보드에 복사되었습니다.', copyFail: '여기서는 복사가 막혀 있습니다. 위의 주소를 직접 선택해 주세요.',
    foot: { email: '이메일', top: '맨 위로', legal: '© 2026 Eli Lin. 대만 신주.' },
  },
};
