import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';
import robotsTxt from "astro-robots-txt";


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
  integrations: [tailwind(), robotsTxt()],
  site: 'http://127.0.0.1:4321/'
});