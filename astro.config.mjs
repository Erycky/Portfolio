import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // Importa o adaptador da Vercel

export default defineConfig({
  // Modifica a saída para 'server' (tudo roda no servidor) ou 'hybrid'
  output: 'server', 
  adapter: vercel(),
});