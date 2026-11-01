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
 * For more information on how to create custom Vite plugin API:
 * @see https://vite.dev/guide/api-plugin
 * @see https://rolldown.rs/apis/plugin-api
 *
 * For more information on rolldownOptions:
 * @see https://rolldown.rs/reference/
 */
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'Security Headers Injection',
      apply: 'build',
      transformIndexHtml: {
        order: 'post',
        handler(html: string) {
          return {
            html: html.replaceAll(
              / crossorigin(?=[\s>])/g,
              ' crossorigin="anonymous" referrerpolicy="no-referrer"'
            ),
            tags: [
              {
                tag: 'meta',
                attrs: {
                  'http-equiv': 'Content-Security-Policy',
                  content: [
                    "default-src 'none'",
                    "script-src 'self'",
                    "style-src 'self'",
                    "img-src 'self'",
                    "base-uri 'none'",
                    "form-action 'none'",
                  ].join('; '),
                },
                injectTo: 'head-prepend',
              },
            ],
          }
        },
      },
    },
  ],
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
