# elilin.dev

The personal site of Eli Lin, IT support specialist and junior developer in Hsinchu, Taiwan. One page, in five languages.

**Live:** [elilin.dev](https://elilin.dev) · [Deutsch](https://elilin.dev/de/) · [中文](https://elilin.dev/zh/) · [日本語](https://elilin.dev/ja/) · [한국어](https://elilin.dev/ko/)

[中文說明](#中文說明)

## What's on it

- A hero that reads like a network trace: four hops from laptop to ISP, with the fault found at the last one.
- A worked case, step by step, from the first symptom to the cause.
- Projects you can filter by kind (web, data, desktop).
- Toolkit, experience and contact, with a one-click button that copies the email address.

## How it's built

| | |
|---|---|
| Framework | [Astro 7](https://astro.build), static output, almost no client JavaScript |
| Languages | Astro i18n routing: English at `/`, German at `/de/`, Chinese at `/zh/`, Japanese at `/ja/`, Korean at `/ko/`, linked with `hreflang` |
| Language choice | First visit follows the browser language; a language picked in the switcher is remembered |
| Motion | Scroll-driven animations (`animation-timeline: view()`), pure CSS |
| Transitions | View Transitions API for the project filter, plus cross-document view transitions when switching language |
| Look | Street-poster: heavy Archivo, black hairlines, square corners, one bright blue, a charcoal hero band |
| Layout | Container queries, `dvh`, `text-wrap: balance` and `pretty` |
| CJK type | Noto Sans TC and Noto Sans JP, loaded only on their own pages; `word-break: auto-phrase` for Japanese |
| Accessibility | Full keyboard use, skip link, visible focus, every animation off under `prefers-reduced-motion` |

## Run it locally

Needs Node 22 or newer.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the built site
```

## Where things live

```
src/
  i18n/strings.ts        all copy for all five languages, plus email, LinkedIn, GitHub
  components/Home.astro  the page itself, shared by every language
  pages/                 index.astro, de/index.astro, zh/index.astro, ja/index.astro, ko/index.astro
  styles/
    tokens.css           colours, fonts, spacing (per-language font stacks at the end)
    base.css             reset, focus ring, reduced motion
    site.css             the page's layout, components and animations
public/favicon.svg
```

To change any text, edit `src/i18n/strings.ts`. The `Strings` type makes a missing translation a build error.

## Deploy

Hosted on Cloudflare Pages from the `main` branch. Every push builds with `npm run build` and publishes `dist/`.

---

## 中文說明

Eli Lin 的個人網站，提供英文、德文、中文、日文、韓文五種語言。

- **技術**：Astro 7 靜態網站；用捲動驅動動畫、View Transitions API、OKLCH 色彩、Container queries 等新的 CSS 功能。
- **語言**：英文在 `/`，德文在 `/de/`，中文在 `/zh/`，日文在 `/ja/`，韓文在 `/ko/`。第一次造訪會依瀏覽器語言自動切換，手動選過的語言會被記住。
- **修改文字**：所有文字都在 `src/i18n/strings.ts`。
- **本機執行**：`npm install` 後執行 `npm run dev`。
- **部署**：推送到 `main` 後，Cloudflare Pages 會自動建置並上線。
