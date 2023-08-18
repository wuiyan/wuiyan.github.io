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
      title: "WUYAN的博客",
      description:"众里寻他千百度，蓦然回首，那人却在灯火阑珊处",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
