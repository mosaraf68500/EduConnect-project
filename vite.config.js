import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})


// // tailwind.config.js
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         marquee: "marquee 30s linear infinite",
//       },
//       keyframes: {
//         marquee: {
//           "0%": { transform: "translateX(100%)" },
//           "100%": { transform: "translateX(-100%)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };