export type Lang = 'en' | 'zh' | 'ja';

export const langs: { id: Lang; label: string; html: string; path: string }[] = [
  { id: 'en', label: 'EN', html: 'en', path: '/' },
  { id: 'zh', label: '中文', html: 'zh-Hant-TW', path: '/zh/' },
  { id: 'ja', label: '日本語', html: 'ja', path: '/ja/' },
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
      { when: 'Jun 2023 to May 2024', role: 'IT helpdesk assistant engineer, Welltake', where: 'Onsite at Synopsys and Realtek', did: 'Set up new-hire laptops, fixed hardware, network and VPN faults, kept the inventory.' },
      { when: 'Coursework', role: 'Computer science and information engineering', where: 'National Quemoy University', did: 'Programming, databases and web development.' },
      { when: '2020', role: 'Vocational program in data processing', where: 'Hsiang Shan Senior High School', did: 'Where the computers started.' },
    ],
    contactH: 'Need someone on the desk?',
    contactLead: 'Open to IT support and junior developer roles, in Mandarin, English or some Japanese.',
    copy: 'Copy address', copied: 'Copied', copyOk: 'The address is on your clipboard.', copyFail: 'Copying is blocked here. Select the address above instead.',
    foot: { email: 'Email', top: 'Back to top', legal: '© 2026 Eli Lin. Hsinchu, Taiwan.' },
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
      { when: '2023.06 至 2024.05', role: 'IT 服務台助理工程師，Welltake', where: '派駐 Synopsys 與 Realtek', did: '準備新進同仁的筆電，處理硬體、網路與 VPN 故障，維護設備清冊。' },
      { when: '修課', role: '資訊工程學系', where: '國立金門大學', did: '程式設計、資料庫與網頁開發。' },
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
      { when: '2023年6月から2024年5月', role: 'IT ヘルプデスク アシスタントエンジニア、Welltake', where: 'Synopsys と Realtek に常駐', did: '新入社員用 PC のセットアップ、ハードウェア・ネットワーク・VPN 障害の対応、機器台帳の管理。' },
      { when: '履修', role: '資訊工程学系（情報工学）', where: '国立金門大学', did: 'プログラミング、データベース、Web 開発。' },
      { when: '2020年', role: '資料処理科（職業課程）', where: '新竹市立香山高級中学', did: 'パソコンとの出会い。' },
    ],
    contactH: 'ヘルプデスクの人材をお探しですか？',
    contactLead: 'IT サポートとジュニア開発のポジションを探しています。中国語、英語、日常会話レベルの日本語で対応できます。',
    copy: 'アドレスをコピー', copied: 'コピーしました', copyOk: 'アドレスをクリップボードにコピーしました。', copyFail: 'ここではコピーできません。上のアドレスを選択してください。',
    foot: { email: 'メール', top: 'ページの先頭へ', legal: '© 2026 Eli Lin。台湾・新竹。' },
  },
};
