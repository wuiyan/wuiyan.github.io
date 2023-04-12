import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    // "/en/": {
    //   lang: "en-US",
    //   title: "Blog Demo",
    //   description: "A blog demo for vuepress-theme-hope",
    // },
    "/": {
      lang: "zh-CN",
      title: "YILS's Blog",
      description: "YILS 的自留地，学习技术，提升认知，构建被动收入",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
