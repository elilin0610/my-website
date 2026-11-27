// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://elilin.dev',
  i18n: {
    locales: ['en', 'de', 'zh', 'ja', 'ko'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
