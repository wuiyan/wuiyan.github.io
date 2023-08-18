import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://wuiyan.github.io/",
  author: {
    name: "WUYAN",
    url: "https://wuiyan.github.io/",
  },

  iconAssets: "iconfont",

  logo: "/logo.png",

  repo: "wuiyan/wuiyan.github.io",

  docsDir: "src",

  blog: {
    medias: {
      Email: "jia2997592709@163.com",
      GitHub: "https://github.com/wuiyan",
      Rss: "https://wuiyan.github.io/rss.xml",
      // YILS: ["https://yils.blog/", "/logo.svg"],
    },
  },

  locales: {
    // "/en/": {
    //   // navbar
    //   navbar: enNavbar,

    //   // sidebar
    //   sidebar: enSidebar,

    //   footer: "Default footer",

    //   displayFooter: true,

    //   blog: {
    //     description: "A FrontEnd programmer",
    //     intro: "/intro.html",
    //   },

    //   metaLocales: {
    //     editLink: "Edit this page on GitHub",
    //   },
    // },

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "WUYAN's Blog",

      copyright: "Copyright © 2022-present WUYAN",

      displayFooter: true,

      blog: {
        description: "众里寻他千百度，蓦然回首，那人却在灯火阑珊处",
        intro: "/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      // "/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      filter: (page) => {
        return page.path.indexOf('/posts/') !== -1 && Boolean(page.filePathRelative) && !page.frontmatter.home
      }
    },

    comment: {
      provider: "Waline",
      serverURL: "https://comment.yils.blog/",
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
      filter: (page) => {
        return page.path.indexOf('/posts/') !== -1 && Boolean(page.filePathRelative) && !page.frontmatter.home
      }
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
