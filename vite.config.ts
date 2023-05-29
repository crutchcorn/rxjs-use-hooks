import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const getFileName = (prefix: string, format: string) => {
  switch (format) {
    case "es":
    case "esm":
    case "module":
      return `${prefix}.mjs`;
    case "cjs":
    case "commonjs":
    default:
      return `${prefix}.cjs`;
  }
};

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: resolve(__dirname, "./lib"),
    }),
  ],
  resolve: {
    alias: {
      "rxjs-use-hooks": resolve(__dirname, "./lib"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "RxJSUseHooks",
      fileName: (format, entryName) => getFileName("rxjs-use-hooks", format),
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "rxjs"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          rxjs: "rxjs",
        },
      },
    },
  },
});
