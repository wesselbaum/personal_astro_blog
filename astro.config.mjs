import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://wesselbaum.github.io/personal_astro_blog',
  base: '/personal_astro_blog',
  integrations: [preact()]
});