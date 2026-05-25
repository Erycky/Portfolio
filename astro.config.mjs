import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // <- REMOVA o "/serverless" daqui, deixe só assim

export default defineConfig({
  output: 'server', 
  adapter: vercel(),
});