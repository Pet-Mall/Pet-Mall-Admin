import { defineConfig, loadEnv } from 'vite'
import vue from "@vitejs/plugin-vue";
import path = require("path")
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)
  return {
    plugins: [vue()],
    optimizeDeps: {
      include: ["schart.js"],
    },
    server: {
      // ← ← ← ← ← ←
      host: "0.0.0.0", // ← 新增内容 ←
      proxy: {
        "^/api": {
          //本地服务接口地址
          target: env.VITE_APP_BASE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      },
    },
    css: {
      //css预处理
      preprocessorOptions: {
        scss: {
          /*
          引入var.scss全局预定义变量，
          如果引入多个文件，
          可以使用
          '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
          这种格式
           */
          // additionalData: '@import "@/assets/scss/globalVariable.scss";'
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'public': path.resolve(__dirname, 'public'),
      }
    },
  }
})
