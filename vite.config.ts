import vue from "@vitejs/plugin-vue";
import path = require("path")

export default {
  base: "./",
  plugins: [vue()],
  optimizeDeps: {
    include: ["schart.js"],
  },
  server: {
    // ← ← ← ← ← ←
    host: "0.0.0.0", // ← 新增内容 ←
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
    }
  },
};
