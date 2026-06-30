// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    site: 'https://csmtec.netlify.app/',
  output: 'static',
  adapter: netlify(),
});