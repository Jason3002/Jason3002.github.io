import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * @description Vite engine configuration.
 *
 * For more information on Vite configuration options:
 * @see https://vite.dev/config/
 *
 * For more information on how to integrate Tailwind CSS with Vite:
 * @see https://tailwindcss.com/docs/installation/using-vite
 *
 * For more information on rolldownOptions:
 * @see https://rolldown.rs/reference/
 */
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /node_modules[\\/](react|react-dom)[\\/]/,
            },
          ],
        },
      },
    },
  },
  resolve: { tsconfigPaths: true },
}) satisfies UserConfig
