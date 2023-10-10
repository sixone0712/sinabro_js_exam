import { resolve } from "path";
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./src/setupTests.js"],
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/main.ts"),
      name: "MiniQuery",
      // the proper extensions will be added
      fileName: "mini-query",
    },
  },
});


// import { resolve } from "path";
// import { defineConfig } from 'vite'

// export default defineConfig({
//   build: {
//     lib: {
//       // Could also be a dictionary or array of multiple entry points
//       entry: resolve(__dirname, "src/main.ts"),
//       name: "MiniQuery",
//       // the proper extensions will be added
//       fileName: "mini-query",
//     },
//   },
// });