import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig(({ command }) => ({
  base: "/bd-25/",
  server: {
    port: 4000,
    host: true,
    strictPort: true,
  },
  plugins: [
    command === "build" &&
      viteStaticCopy({
        targets: [
          {
            structured: true,
            src: "assets/*",
            dest: "assets",
          },
        ],
      }),
  ].filter(Boolean),
}));
