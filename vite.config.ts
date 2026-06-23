import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from "@prerenderer/rollup-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: ["/", "/submission", "/about", "/demo", "/about"],
      renderer: "@prerenderer/renderer-puppeteer",
      server: {
        port: 5173,
        host: "localhost",
      },
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterDocumentEvent: "render-event",
        renderAfterTime: 500,
        timeout: 120000,
        skipThirdPartyRequests: true,
        launchOptions: {
          args: ['--disable-dev-shm-usage', '--no-sandbox', '--disable-setuid-sandbox'],
        },
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/http:/i, "https:")
          .replace(
            /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i,
            "https://island-ids.netlify.app/"
          );
      },
    }),
  ],
});