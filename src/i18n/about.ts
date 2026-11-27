import type { Lang } from './strings';

export const stream = 'https://stream.elilin.dev';

type Fact = { k: string; v: string };
export type About = {
  hello: string; photoAlt: string; socialsLabel: string;
  aboutNav: string; aboutH: string; aboutP: string[]; facts: Fact[];
  streamLabel: string; streamNote: string;
};

export const about: Record<Lang, About> = {
  en: {
    hello: 'Hi, I’m Eli Lin',
    photoAlt: 'Eli Lin',
    socialsLabel: 'Elsewhere',
    aboutNav: 'About',
    aboutH: 'About me',
    aboutP: [
      'I’m an IT support specialist and junior developer from Hsinchu, Taiwan.',
      'For a year I worked the help desk for Synopsys and Realtek through Welltake: getting laptops ready for new hires, and tracking network and VPN faults down to their source. On the side I build small tools and web apps in Python, C# and Node-RED.',
    ],
    facts: [
      { k: 'Based in', v: 'Hsinchu, Taiwan' },
      { k: 'Languages', v: 'Mandarin, English, Japanese' },
      { k: 'Looking for', v: 'IT support or junior developer roles' },
    ],
    streamLabel: 'Stream', streamNote: 'I also stream Apex, LoL and Valorant',
  },
  zh: {
    hello: '嗨，我是 Eli Lin',
    photoAlt: 'Eli Lin',
    socialsLabel: '其他平台',
    aboutNav: '關於我',
    aboutH: '關於我',
    aboutP: [
      '我是 IT 支援人員，也是初階開發者，住在台灣新竹。',
      '我透過 Welltake 派駐在 Synopsys 和 Realtek 做了一年的服務台：幫新人準備筆電，也一路追查網路和 VPN 的問題，直到找出根本原因。平常也會用 Python、C# 和 Node-RED 寫一些小工具和網頁應用。',
    ],
    facts: [
      { k: '所在地', v: '台灣新竹' },
      { k: '語言', v: '中文、英文、日文' },
      { k: '正在找', v: 'IT 支援或初階開發的工作' },
    ],
    streamLabel: '實況', streamNote: '我也有在實況 Apex、LoL、瓦',
  },
  ja: {
    hello: 'こんにちは、Eli Lin です',
    photoAlt: 'Eli Lin',
    socialsLabel: 'リンク',
    aboutNav: '自己紹介',
    aboutH: '自己紹介',
    aboutP: [
      '台湾・新竹の IT サポート兼ジュニア開発者です。',
      'Welltake から Synopsys と Realtek に常駐し、1年間ヘルプデスクを担当しました。新入社員のノートPCを準備し、ネットワークや VPN の障害を原因まで追いかけてきました。Python、C#、Node-RED で小さなツールや Web アプリも作っています。',
    ],
    facts: [
      { k: '拠点', v: '台湾・新竹' },
      { k: '言語', v: '中国語、英語、日本語' },
      { k: '希望', v: 'IT サポートまたはジュニア開発職' },
    ],
    streamLabel: '配信', streamNote: 'Apex、LoL、VALORANT の配信もしています',
  },
};
