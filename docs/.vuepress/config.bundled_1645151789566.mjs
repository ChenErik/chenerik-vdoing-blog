var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// docs/.vuepress/config/themeConfig.js
var require_themeConfig = __commonJS({
  "docs/.vuepress/config/themeConfig.js"(exports, module) {
    module.exports = {
      nav: [
        { text: "\u9996\u9875", link: "/" },
        {
          text: "\u524D\u7AEF",
          link: "/web/",
          items: [
            {
              text: "\u5B66\u4E60\u7B14\u8BB0",
              items: [
                {
                  text: "\u300AGit\u300B",
                  link: "/note/git/"
                }
              ]
            },
            {
              text: "JavaScript",
              items: [
                {
                  text: "\u5B9E\u7528\u65B9\u6CD5",
                  link: "/javascript/computed/"
                }
              ]
            },
            {
              text: "Vite",
              items: [
                {
                  text: "\u914D\u7F6E",
                  link: "/web/vite/"
                }
              ]
            }
          ]
        },
        {
          text: "\u6280\u672F",
          link: "/technology/",
          items: [
            { text: "Nodejs", link: "/pages/117708e0af7f0bd9/" },
            { text: "Vscode\u914D\u7F6E", link: "/pages/130882/" },
            { text: "Github", link: "/pages/544a95/" }
          ]
        },
        {
          text: "\u66F4\u591A",
          link: "/more/",
          items: [
            {
              text: "\u5C0F\u73A9\u5177",
              items: [
                {
                  text: "EatWhat",
                  link: "/pages/b2c54c/"
                }
              ]
            }
          ]
        },
        {
          text: "\u6536\u85CF",
          link: "/pages/0419ee/"
        },
        {
          text: "\u7D22\u5F15",
          link: "/archives/",
          items: [
            { text: "\u5206\u7C7B", link: "/categories/" },
            { text: "\u6807\u7B7E", link: "/tags/" },
            { text: "\u5F52\u6863", link: "/archives/" }
          ]
        }
      ],
      sidebarDepth: 2,
      logo: "/img/logo.png",
      searchMaxSuggestions: 10,
      lastUpdated: "\u4E0A\u6B21\u66F4\u65B0",
      docsDir: "docs",
      editLinks: true,
      editLinkText: "\u7F16\u8F91",
      bodyBgImg: [
        "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg",
        "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg",
        "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg"
      ],
      bodyBgImgOpacity: 1,
      sidebar: "structuring",
      author: {
        name: "ChenErik",
        link: "https://github.com/ChenErik"
      },
      blogger: {
        avatar: "https://cdn.jsdelivr.net/gh/ChenErik/image-hosting@master/images/avatar.3z5pxxfxh860.webp",
        name: "Chen Erik",
        slogan: "Hello World"
      },
      social: {
        icons: [
          {
            iconClass: "icon-youjian",
            title: "\u53D1\u90AE\u4EF6",
            link: "mailto:894072666@qq.com"
          },
          {
            iconClass: "icon-github",
            title: "GitHub",
            link: "https://github.com/xugaoyi"
          },
          {
            iconClass: "icon-erji",
            title: "\u542C\u97F3\u4E50",
            link: "https://music.163.com/#/playlist?id=755597173"
          }
        ]
      },
      indexImg: {
        navColor: 2,
        switchNavColor: true,
        bgTimeColor: true,
        bgTimeColorArray: [
          "transparent",
          "rgba(255, 148, 48, .2)",
          "rgba(0, 0, 0, .3)",
          "rgba(0, 0, 0, .5)"
        ],
        descFade: false,
        descFontSize: "1.4rem",
        descFadeInTime: 200,
        descFadeOutTime: 100,
        descNextTime: 800,
        bubble: false,
        bubblePosition: 0,
        bubbleNum: 200
      },
      privatePage: {
        username: "ChenErik",
        password: "971115Scx",
        expire: 1e3 * 60 * 60 * 24,
        loginPath: "/vdoing/login/",
        loginKey: "vdoing_login",
        loginSession: false
      }
    };
  }
});

// docs/.vuepress/config.ts
import { defineConfig4CustomTheme } from "vuepress/config";
import dayjs from "dayjs";
var themeConfig = require_themeConfig();
var config_default = defineConfig4CustomTheme({
  theme: "vdoing",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Chen's blog",
      description: "web\u524D\u7AEF\u6280\u672F\u535A\u5BA2,\u4E13\u6CE8web\u524D\u7AEF\u5B66\u4E60\u4E0E\u603B\u7ED3\u3002JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github\u7B49\u6280\u672F\u6587\u7AE0\u3002"
    }
  },
  themeConfig,
  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content: "\u524D\u7AEF\u535A\u5BA2,\u4E2A\u4EBA\u6280\u672F\u535A\u5BA2,\u524D\u7AEF,\u524D\u7AEF\u5F00\u53D1,\u524D\u7AEF\u6846\u67B6,web\u524D\u7AEF,\u524D\u7AEF\u9762\u8BD5\u9898,\u6280\u672F\u6587\u6863,\u5B66\u4E60,\u9762\u8BD5,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown"
      }
    ],
    ["meta", { name: "theme-color", content: "#11a8cd" }],
    ["link", { rel: "stylesheet", href: "https://at.alicdn.com/t/font_3129839_xft6cqs5gc.css" }],
    ["noscript", {}, '<meta http-equiv="refresh" content="0; url=https://www.youngkbt.cn/noscript/"><style>.theme-vdoing-content { display:none }']
  ],
  plugins: {
    "cursor-effects": {},
    "fulltext-search": {},
    "one-click-copy": {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
      copyMessage: "\u590D\u5236\u6210\u529F",
      duration: 1e3,
      showInMobile: false
    },
    "demo-block": {
      settings: {
        jsfiddle: false,
        codepen: true,
        horizontal: false
      }
    },
    "vuepress-plugin-zooming": {
      selector: ".theme-vdoing-content img:not(.no-zoom)",
      options: {
        bgColor: "rgba(0,0,0,0.6)"
      }
    },
    "@vuepress/last-updated": {
      transformer: (timestamp, lang) => {
        return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
      }
    }
  },
  markdown: {
    lineNumbers: true
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnL3RoZW1lQ29uZmlnLmpzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIC8vIFx1NUJGQ1x1ODIyQVx1OTE0RFx1N0Y2RVxyXG4gIG5hdjogW1xyXG4gICAgeyB0ZXh0OiBcIlx1OTk5Nlx1OTg3NVwiLCBsaW5rOiBcIi9cIiB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1NTI0RFx1N0FFRlwiLFxyXG4gICAgICBsaW5rOiBcIi93ZWIvXCIsIC8vXHU3NkVFXHU1RjU1XHU5ODc1XHU5NEZFXHU2M0E1XHVGRjBDXHU2QjY0XHU1OTA0bGlua1x1NjYyRnZkb2luZ1x1NEUzQlx1OTg5OFx1NjVCMFx1NTg5RVx1NzY4NFx1OTE0RFx1N0Y2RVx1OTg3OVx1RkYwQ1x1NjcwOVx1NEU4Q1x1N0VBN1x1NUJGQ1x1ODIyQVx1NjVGNlx1RkYwQ1x1NTNFRlx1NEVFNVx1NzBCOVx1NTFGQlx1NEUwMFx1N0VBN1x1NUJGQ1x1ODIyQVx1OERGM1x1NTIzMFx1NzZFRVx1NUY1NVx1OTg3NVxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIC8vIFx1OEJGNFx1NjYwRVx1RkYxQVx1NEVFNVx1NEUwQlx1NjI0MFx1NjcwOWxpbmtcdTc2ODRcdTUwM0NcdTUzRUFcdTY2MkZcdTU3MjhcdTc2RjhcdTVFOTRtZFx1NjU4N1x1NEVGNlx1NTkzNFx1OTBFOFx1NUI5QVx1NEU0OVx1NzY4NFx1NkMzOFx1NEU0NVx1OTRGRVx1NjNBNVx1RkYwOFx1NEUwRFx1NjYyRlx1NEVDMFx1NEU0OFx1NzI3OVx1NkI4QVx1N0YxNlx1NzgwMVx1RkYwOVx1MzAwMlx1NTNFNlx1NTkxNlx1RkYwQ1x1NkNFOFx1NjEwRlx1N0VEM1x1NUMzRVx1NjYyRlx1NjcwOVx1NjU5Q1x1Njc2MFx1NzY4NFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiXHU1QjY2XHU0RTYwXHU3QjE0XHU4QkIwXCIsXHJcbiAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTMwMEFHaXRcdTMwMEJcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcIi9ub3RlL2dpdC9cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIkphdmFTY3JpcHRcIixcclxuICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1NUI5RVx1NzUyOFx1NjVCOVx1NkNENVwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwiL2phdmFzY3JpcHQvY29tcHV0ZWQvXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJWaXRlXCIsXHJcbiAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTkxNERcdTdGNkVcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcIi93ZWIvdml0ZS9cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU2MjgwXHU2NzJGXCIsXHJcbiAgICAgIGxpbms6IFwiL3RlY2hub2xvZ3kvXCIsXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgeyB0ZXh0OiBcIk5vZGVqc1wiLCBsaW5rOiBcIi9wYWdlcy8xMTc3MDhlMGFmN2YwYmQ5L1wiIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcIlZzY29kZVx1OTE0RFx1N0Y2RVwiLCBsaW5rOiBcIi9wYWdlcy8xMzA4ODIvXCIgfSxcclxuICAgICAgICB7IHRleHQ6IFwiR2l0aHViXCIsIGxpbms6IFwiL3BhZ2VzLzU0NGE5NS9cIiB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTY2RjRcdTU5MUFcIixcclxuICAgICAgbGluazogXCIvbW9yZS9cIixcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1NUMwRlx1NzNBOVx1NTE3N1wiLFxyXG4gICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiRWF0V2hhdFwiLFxyXG4gICAgICAgICAgICAgIGxpbms6IFwiL3BhZ2VzL2IyYzU0Yy9cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU2NTM2XHU4NUNGXCIsXHJcbiAgICAgIGxpbms6IFwiL3BhZ2VzLzA0MTllZS9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU3RDIyXHU1RjE1XCIsXHJcbiAgICAgIGxpbms6IFwiL2FyY2hpdmVzL1wiLFxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHsgdGV4dDogXCJcdTUyMDZcdTdDN0JcIiwgbGluazogXCIvY2F0ZWdvcmllcy9cIiB9LFxyXG4gICAgICAgIHsgdGV4dDogXCJcdTY4MDdcdTdCN0VcIiwgbGluazogXCIvdGFncy9cIiB9LFxyXG4gICAgICAgIHsgdGV4dDogXCJcdTVGNTJcdTY4NjNcIiwgbGluazogXCIvYXJjaGl2ZXMvXCIgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBzaWRlYmFyRGVwdGg6IDIsIC8vIFx1NEZBN1x1OEZCOVx1NjgwRlx1NjYzRVx1NzkzQVx1NkRGMVx1NUVBNlx1RkYwQ1x1OUVEOFx1OEJBNDFcdUZGMENcdTY3MDBcdTU5MjcyXHVGRjA4XHU2NjNFXHU3OTNBXHU1MjMwaDNcdTY4MDdcdTk4OThcdUZGMDlcclxuICBsb2dvOiBcIi9pbWcvbG9nby5wbmdcIiwgLy8gXHU1QkZDXHU4MjJBXHU2ODBGbG9nb1xyXG4gIHNlYXJjaE1heFN1Z2dlc3Rpb25zOiAxMCwgLy8gXHU2NDFDXHU3RDIyXHU3RUQzXHU2NzlDXHU2NjNFXHU3OTNBXHU2NzAwXHU1OTI3XHU2NTcwXHJcbiAgbGFzdFVwZGF0ZWQ6IFwiXHU0RTBBXHU2QjIxXHU2NkY0XHU2NUIwXCIsIC8vIFx1NUYwMFx1NTQyRlx1NjZGNFx1NjVCMFx1NjVGNlx1OTVGNFx1RkYwQ1x1NUU3Nlx1OTE0RFx1N0Y2RVx1NTI0RFx1N0YwMFx1NjU4N1x1NUI1NyAgIHN0cmluZyB8IGJvb2xlYW4gKFx1NTNENlx1NTAzQ1x1NEUzQWdpdFx1NjNEMFx1NEVBNFx1NjVGNlx1OTVGNClcclxuICBkb2NzRGlyOiBcImRvY3NcIiwgLy8gXHU3RjE2XHU4RjkxXHU3Njg0XHU2NTg3XHU0RUY2XHU1OTM5XHJcbiAgZWRpdExpbmtzOiB0cnVlLCAvLyBcdTU0MkZcdTc1MjhcdTdGMTZcdThGOTFcclxuICBlZGl0TGlua1RleHQ6IFwiXHU3RjE2XHU4RjkxXCIsXHJcblxyXG4gIC8vKioqIFx1NEVFNVx1NEUwQlx1NjYyRlZkb2luZ1x1NEUzQlx1OTg5OFx1NzZGOFx1NTE3M1x1OTE0RFx1N0Y2RVx1RkYwQ1x1NjU4N1x1Njg2M1x1RkYxQWh0dHBzOi8vZG9jLnh1Z2FveWkuY29tL3BhZ2VzL2EyMGNlOC8gKioqLy9cclxuXHJcbiAgLy8gY2F0ZWdvcnk6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTUyMDZcdTdDN0JcdTUyOUZcdTgwRkRcdUZGMENcdTlFRDhcdThCQTR0cnVlXHJcbiAgLy8gdGFnOiBmYWxzZSwgLy8gXHU2NjJGXHU1NDI2XHU2MjUzXHU1RjAwXHU2ODA3XHU3QjdFXHU1MjlGXHU4MEZEXHVGRjBDXHU5RUQ4XHU4QkE0dHJ1ZVxyXG4gIC8vIGFyY2hpdmU6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTVGNTJcdTY4NjNcdTUyOUZcdTgwRkRcdUZGMENcdTlFRDhcdThCQTR0cnVlXHJcbiAgLy8gY2F0ZWdvcnlUZXh0OiAnXHU5NjhGXHU3QjE0JywgLy8gXHU3ODhFXHU3MjQ3XHU1MzE2XHU2NTg3XHU3QUUwXHVGRjA4X3Bvc3RzXHU2NTg3XHU0RUY2XHU1OTM5XHU3Njg0XHU2NTg3XHU3QUUwXHVGRjA5XHU5ODg0XHU4QkJFXHU3NTFGXHU2MjEwXHU3Njg0XHU1MjA2XHU3QzdCXHU1MDNDXHVGRjBDXHU5RUQ4XHU4QkE0J1x1OTY4Rlx1N0IxNCdcclxuXHJcbiAgYm9keUJnSW1nOiBbXHJcbiAgICAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3h1Z2FveWkvaW1hZ2Vfc3RvcmUvYmxvZy8yMDIwMDUwNzE3NTgyOC5qcGVnJyxcclxuICAgICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gveHVnYW95aS9pbWFnZV9zdG9yZS9ibG9nLzIwMjAwNTA3MTc1ODQ1LmpwZWcnLFxyXG4gICAgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC94dWdhb3lpL2ltYWdlX3N0b3JlL2Jsb2cvMjAyMDA1MDcxNzU4NDYuanBlZydcclxuICBdLCAvLyBib2R5XHU4MENDXHU2NjZGXHU1OTI3XHU1NkZFXHVGRjBDXHU5RUQ4XHU4QkE0XHU2NUUwXHUzMDAyIFx1NTM1NVx1NUYyMFx1NTZGRVx1NzI0NyBTdHJpbmcgfCBcdTU5MUFcdTVGMjBcdTU2RkVcdTcyNDcgQXJyYXksIFx1NTkxQVx1NUYyMFx1NTZGRVx1NzI0N1x1NjVGNlx1NkJDRlx1OTY5NDE1XHU3OUQyXHU2MzYyXHU0RTAwXHU1RjIwXHUzMDAyXHJcbiAgLy8gYm9keUJnSW1nOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC94dWdhb3lpL2ltYWdlX3N0b3JlL2Jsb2cvMjAyMDA1MDcxNzU4NDYuanBlZ1wiLFxyXG4gIGJvZHlCZ0ltZ09wYWNpdHk6IDEsIC8vIGJvZHlcdTgwQ0NcdTY2NkZcdTU2RkVcdTkwMEZcdTY2MEVcdTVFQTZcdUZGMENcdTkwMDlcdTUwM0MgMC4xfiAxLjAsIFx1OUVEOFx1OEJBNDAuNVxyXG4gIC8vIHRpdGxlQmFkZ2U6IGZhbHNlLCAvLyBcdTY1ODdcdTdBRTBcdTY4MDdcdTk4OThcdTUyNERcdTc2ODRcdTU2RkVcdTY4MDdcdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0FcdUZGMENcdTlFRDhcdThCQTR0cnVlXHJcbiAgLy8gdGl0bGVCYWRnZUljb25zOiBbIC8vIFx1NjU4N1x1N0FFMFx1NjgwN1x1OTg5OFx1NTI0RFx1NTZGRVx1NjgwN1x1NzY4NFx1NTczMFx1NTc0MFx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQlx1OTg5OFx1NTE4NVx1N0Y2RVx1NTZGRVx1NjgwN1xyXG4gIC8vICAgJ1x1NTZGRVx1NjgwN1x1NTczMFx1NTc0MDEnLFxyXG4gIC8vICAgJ1x1NTZGRVx1NjgwN1x1NTczMFx1NTc0MDInXHJcbiAgLy8gXSxcclxuICAvL2NvbnRlbnRCZ1N0eWxlOiA2LCAvLyBcdTY1ODdcdTdBRTBcdTUxODVcdTVCQjlcdTU3NTdcdTc2ODRcdTgwQ0NcdTY2NkZcdTk4Q0VcdTY4M0NcdUZGMENcdTlFRDhcdThCQTRcdTY1RTAuIDEgXHU2NUI5XHU2ODNDIHwgMiBcdTZBMkFcdTdFQkYgfCAzIFx1N0FENlx1N0VCRiB8IDQgXHU1REU2XHU2NTlDXHU3RUJGIHwgNSBcdTUzRjNcdTY1OUNcdTdFQkYgfCA2IFx1NzBCOVx1NzJCNlxyXG5cclxuICAvLyB1cGRhdGVCYXI6IHsgLy8gXHU2NzAwXHU4RkQxXHU2NkY0XHU2NUIwXHU2ODBGXHJcbiAgLy8gICBzaG93VG9BcnRpY2xlOiBmYWxzZSwgLy8gXHU2NjNFXHU3OTNBXHU1MjMwXHU2NTg3XHU3QUUwXHU5ODc1XHU1RTk1XHU5MEU4XHVGRjBDXHU5RUQ4XHU4QkE0dHJ1ZVxyXG4gIC8vICAgbW9yZUFydGljbGU6ICcvYXJjaGl2ZXMnIC8vIFx1MjAxQ1x1NjZGNFx1NTkxQVx1NjU4N1x1N0FFMFx1MjAxRFx1OERGM1x1OEY2Q1x1NzY4NFx1OTg3NVx1OTc2Mlx1RkYwQ1x1OUVEOFx1OEJBNCcvYXJjaGl2ZXMnXHJcbiAgLy8gfSxcclxuICAvLyByaWdodE1lbnVCYXI6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0FcdTUzRjNcdTRGQTdcdTY1ODdcdTdBRTBcdTU5MjdcdTdFQjJcdTY4MEZcdUZGMENcdTlFRDhcdThCQTR0cnVlIChcdTVDNEZcdTVCQkRcdTVDMEZcdTRFOEUxMzAwcHhcdTRFMEJcdTY1RTBcdThCQkFcdTU5ODJcdTRGNTVcdTkwRkRcdTRFMERcdTY2M0VcdTc5M0EpXHJcbiAgLy8gc2lkZWJhck9wZW46IGZhbHNlLCAvLyBcdTUyMURcdTU5Q0JcdTcyQjZcdTYwMDFcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTVERTZcdTRGQTdcdThGQjlcdTY4MEZcdUZGMENcdTlFRDhcdThCQTR0cnVlXHJcbiAgLy8gcGFnZUJ1dHRvbjogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1NUZFQlx1NjM3N1x1N0ZGQlx1OTg3NVx1NjMwOVx1OTRBRVx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcclxuXHJcbiAgLy8gXHU0RkE3XHU4RkI5XHU2ODBGICAnc3RydWN0dXJpbmcnIHwgeyBtb2RlOiAnc3RydWN0dXJpbmcnLCBjb2xsYXBzYWJsZTogQm9vbGVhbn0gfCAnYXV0bycgfCA8XHU4MUVBXHU1QjlBXHU0RTQ5PiAgICBcdTZFMjlcdTk5QThcdTYzRDBcdTc5M0FcdUZGMUFcdTc2RUVcdTVGNTVcdTk4NzVcdTY1NzBcdTYzNkVcdTRGOURcdThENTZcdTRFOEVcdTdFRDNcdTY3ODRcdTUzMTZcdTc2ODRcdTRGQTdcdThGQjlcdTY4MEZcdTY1NzBcdTYzNkVcdUZGMENcdTU5ODJcdTY3OUNcdTRGNjBcdTRFMERcdThCQkVcdTdGNkVcdTRFM0Enc3RydWN0dXJpbmcnLFx1NUMwNlx1NjVFMFx1NkNENVx1NEY3Rlx1NzUyOFx1NzZFRVx1NUY1NVx1OTg3NVxyXG4gIHNpZGViYXI6IFwic3RydWN0dXJpbmdcIixcclxuXHJcbiAgLy8gXHU2NTg3XHU3QUUwXHU5RUQ4XHU4QkE0XHU3Njg0XHU0RjVDXHU4MDA1XHU0RkUxXHU2MDZGXHVGRjBDKFx1NTNFRlx1NTcyOG1kXHU2NTg3XHU0RUY2XHU0RTJEXHU1MzU1XHU3MkVDXHU5MTREXHU3RjZFXHU2QjY0XHU0RkUxXHU2MDZGKSBzdHJpbmcgfCB7bmFtZTogc3RyaW5nLCBsaW5rPzogc3RyaW5nfVxyXG4gIGF1dGhvcjoge1xyXG4gICAgbmFtZTogXCJDaGVuRXJpa1wiLCAvLyBcdTVGQzVcdTk3MDBcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0NoZW5FcmlrXCIsIC8vIFx1NTNFRlx1OTAwOVx1NzY4NFxyXG4gIH0sXHJcblxyXG4gIC8vIFx1NTM1QVx1NEUzQlx1NEZFMVx1NjA2RiAoXHU2NjNFXHU3OTNBXHU1NzI4XHU5OTk2XHU5ODc1XHU0RkE3XHU4RkI5XHU2ODBGKVxyXG4gIGJsb2dnZXI6IHtcclxuICAgIGF2YXRhcjpcclxuICAgICAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvQ2hlbkVyaWsvaW1hZ2UtaG9zdGluZ0BtYXN0ZXIvaW1hZ2VzL2F2YXRhci4zejVweHhmeGg4NjAud2VicFwiLFxyXG4gICAgbmFtZTogXCJDaGVuIEVyaWtcIixcclxuICAgIHNsb2dhbjogXCJIZWxsbyBXb3JsZFwiLFxyXG4gIH0sXHJcbiAgc29jaWFsOiB7XHJcbiAgICAvLyBpY29uZm9udENzc0ZpbGU6ICcvL2F0LmFsaWNkbi5jb20vdC94eHguY3NzJywgLy8gXHU1M0VGXHU5MDA5XHVGRjBDXHU5NjNGXHU5MUNDXHU1NkZFXHU2ODA3XHU1RTkzXHU1NzI4XHU3RUJGY3NzXHU2NTg3XHU0RUY2XHU1NzMwXHU1NzQwXHVGRjBDXHU1QkY5XHU0RThFXHU0RTNCXHU5ODk4XHU2Q0ExXHU2NzA5XHU3Njg0XHU1NkZFXHU2ODA3XHU1M0VGXHU4MUVBXHU1REYxXHU2REZCXHU1MkEwXHUzMDAyXHU5NjNGXHU5MUNDXHU1NkZFXHU3MjQ3XHU1RTkzXHVGRjFBaHR0cHM6Ly93d3cuaWNvbmZvbnQuY24vXHJcbiAgICBpY29uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbkNsYXNzOiBcImljb24teW91amlhblwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlx1NTNEMVx1OTBBRVx1NEVGNlwiLFxyXG4gICAgICAgIGxpbms6IFwibWFpbHRvOjg5NDA3MjY2NkBxcS5jb21cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb25DbGFzczogXCJpY29uLWdpdGh1YlwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkdpdEh1YlwiLFxyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3h1Z2FveWlcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGljb25DbGFzczogXCJpY29uLWVyamlcIixcclxuICAgICAgICB0aXRsZTogXCJcdTU0MkNcdTk3RjNcdTRFNTBcIixcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vbXVzaWMuMTYzLmNvbS8jL3BsYXlsaXN0P2lkPTc1NTU5NzE3M1wiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIGluZGV4SW1nOiB7XHJcbiAgICBuYXZDb2xvcjogMiwgLy8gXHU1QkZDXHU4MjJBXHU2ODBGXHU1REU2XHU0RkE3XHU1NDBEXHU1QjU3XHUzMDAxXHU0RTJEXHU5NUY0XHU2NDFDXHU3RDIyXHU2ODQ2XHUzMDAxXHU1M0YzXHU0RkE3XHU1QjU3XHU0RjUzXHU3Njg0XHU5ODlDXHU4MjcyXHVGRjBDMSBcdTY2MkZcdTlFRDFcdTgyNzJcdUZGMEMyIFx1NjYyRlx1NzY3RFx1ODI3Mlx1MzAwMlx1OUVEOFx1OEJBNFx1NjYyRiAxXHJcbiAgICBzd2l0Y2hOYXZDb2xvcjogdHJ1ZSwgLy8gXHU5ODc1XHU5NzYyXHU3OUZCXHU1MUZBXHU1OTI3XHU1NkZFXHU3MjQ3XHU3Njg0XHU0RjREXHU3RjZFXHU1NDBFXHVGRjBDbmF2Q29sb3IgXHU2NjJGXHU1NDI2XHU1M0Q4XHU2MzYyXHVGRjBDXHU1OTgyXHU3NTMxXHU3NjdEXHU4MjcyXHU1M0Q4XHU5RUQxXHU4MjcyXHVGRjBDXHU5RUQxXHU4MjcyXHU1M0Q4XHU3NjdEXHU4MjcyXHUzMDAyXHU5RUQ4XHU4QkE0XHU2NjJGIGZhbHNlXHJcbiAgICAvLyBcdTU2RTBcdTRFM0FcdTY3MkNcdTRFM0JcdTk4OThcdTc2ODRcdTlFRDhcdThCQTRcdTgwQ0NcdTY2NkZcdTgyNzJcdTUwNEZcdTU0MTFcdTc2N0RcdTgyNzJcdUZGMENcdTU5ODJcdTY3OUMgbmF2Q29sb3IgXHU2NjJGIDJcdUZGMENcdTVFRkFcdThCQUVcdTk3MDBcdTg5ODFcdTVGMDBcdTU0MkYodHJ1ZSlcdUZGMENcdTU0MjZcdTUyMTlcdTc2N0RcdTgwQ0NcdTY2NkYgKyBcdTc2N0RcdTVCNTdcdTRGNTMgPSBcdTc3MEJcdTRFMERcdTg5QzFcclxuICAgIGJnVGltZUNvbG9yOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTVGMDBcdTU0MkZcdTU2RkVcdTcyNDdcdTc2ODRcdTgwQ0NcdTY2NkZcdTgyNzJcdTk2OEZcdTRFMDBcdTU5MjlcdTc2ODRcdTRFMERcdTU0MENcdTY1RjZcdTk1RjRcdTgwMENcdTUzRDhcdTUzMTZcdUZGMENcdTVFNzZcdTRFMTRcdTVGMDBcdTU0MkZcdTY1RjZcdTk1RjRcdTdBOTdcdTUzRTNcdTYzRDBcdTc5M0FcdUZGMENcdTlFRDhcdThCQTRcdTY2MkYgZmFsc2VcdTMwMDJcdTY1RjZcdTk1RjRcdTUyMDZcdTRFM0FcdTU2REJcdTc5Q0RcdUZGMUFcdTc2N0RcdTU5MjlcdUZGMDhcdTUzOUZcdTU2RkVcdUZGMDlcdTMwMDFcdTlFQzRcdTY2MEZcdUZGMDhcdTUwNEZcdTlFQzRcdUZGMDlcdTMwMDFcdTY2NUFcdTRFMEFcdUZGMDhcdTUwNEZcdTlFRDFcdUZGMDlcdTMwMDFcdTZERjFcdTU5MUNcdUZGMDhcdTUwNEZcdTZERjFcdTlFRDFcdUZGMDlcclxuICAgIGJnVGltZUNvbG9yQXJyYXk6IFtcclxuICAgICAgXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBcInJnYmEoMjU1LCAxNDgsIDQ4LCAuMilcIixcclxuICAgICAgXCJyZ2JhKDAsIDAsIDAsIC4zKVwiLFxyXG4gICAgICBcInJnYmEoMCwgMCwgMCwgLjUpXCIsXHJcbiAgICBdLCAvLyBcdTdCMkNcdTRFMDBcdTRFMkFcdTY2MkZcdTc2N0RcdTU5MjlcdTc2ODRcdTk4OUNcdTgyNzJcdUZGMDhcdTlFRDhcdThCQTRcdTUzOUZcdTU2RkVcdUZGMDlcdUZGMENcdTdCMkNcdTRFOENcdTRFMkFcdTY2MkZcdTlFQzRcdTY2MEZcdTc2ODRcdTk4OUNcdTgyNzJcdUZGMENcdTdCMkNcdTRFMDlcdTRFMkFcdTY2MkZcdTY2NUFcdTRFMEFcdTc2ODRcdTk4OUNcdTgyNzJcdUZGMENcdTdCMkNcdTU2REJcdTRFMkFcdTY2MkZcdTZERjFcdTU5MUNcdTc2ODRcdTk4OUNcdTgyNzJcdTMwMDJiZ1RpbWVDb2xvciBcdTRFM0EgdHJ1ZSBcdTc1MUZcdTY1NDhcdTMwMDJcdTYzRDBcdTc5M0FcdUZGMUFcdTU5ODJcdTY3OUNcdTRFMERcdTYwRjNcdTg5ODFcdThGRDlcdTRFMkFcdTY1NDhcdTY3OUNcdUZGMENcdTRGNDZcdTY2MkZcdTUzQzhcdTYwRjNcdTg5ODFcdTY1RjZcdTk1RjRcdTdBOTdcdTUzRTNcdTYzRDBcdTc5M0FcdTY1NDhcdTY3OUNcdUZGMENcdTUyMTlcdTY1MzlcdTRFM0EgWyd0cmFuc3BhcmVudCcsICd0cmFuc3BhcmVudCcsICd0cmFuc3BhcmVudCcsICd0cmFuc3BhcmVudCddXHJcbiAgICBkZXNjRmFkZTogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NUYwMFx1NTQyRlx1NTZGRVx1NzI0N1x1NEUyRFx1OTVGNFx1NjNDRlx1OEZGMFx1NzY4NFx1NkRFMVx1NTE2NVx1NjU0OFx1Njc5Q1x1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQSBmYWxzZVxyXG4gICAgLy8gZGVzYzogW1wiV2ViXHU1MjREXHU3QUVGXHU2MjgwXHU2NzJGXHU1MzVBXHU1QkEyXHVGRjBDXHU3OUVGXHU4REVDXHU2QjY1XHU0RUU1XHU4MUYzXHU1MzQzXHU5MUNDXHVGRjBDXHU4MUY0XHU2NTZDXHU2QkNGXHU0RTJBXHU3MjMxXHU1QjY2XHU0RTYwXHU3Njg0XHU0RjYwIFx1MjAxNFx1MjAxNCBcdTY3NjVcdTgxRUEgRXZhbiBYdVwiLCBcIlx1NjU0NVx1NEU4Qlx1NzUzMVx1NjIxMVx1NEU2Nlx1NTE5OVx1RkYwQ1x1NjVDNVx1N0EwQlx1NzUzMVx1NEY2MFx1ODlDMVx1OEJDMVx1RkYwQ1x1NEYyMFx1NTk0N1x1NzUzMVx1NTk3OVx1ODA0Nlx1NTQyQyBcdTIwMTRcdTIwMTQgXHU2NzY1XHU4MUVBIFlvdW5nIEtidFwiLCBcIlx1OEZEOVx1NEUwMFx1NzUxRlx1NkNFMlx1NkY5Q1x1NThFRVx1OTYxNFx1NjIxNlx1NjYyRlx1NEUwRFx1NjBDQVx1OTBGRFx1NkNBMVx1OTVFRVx1OTg5OCBcdTIwMTRcdTIwMTQgXHU2NzY1XHU4MUVBIFdlaWJ3XCJdLCAgLy8gXHU1OTFBXHU0RTJBXHU2M0NGXHU4RkYwXHVGRjBDXHU1OTgyXHU2NzlDXHU1ODZCXHU1MTk5XHU1MjE5XHU4OTg2XHU3NkQ2IGNvbmZpZy5qcyBcdTc2ODQgZGVzY3JpcHRpb25cdUZGMENcdTRFMERcdTU4NkJcdTUxOTlcdTlFRDhcdThCQTRcdThCRkJcdTUzRDYgY29uZmlnLmpzIFx1NzY4NCBkZXNjcmlwdGlvblx1RkYwQ2Rlc2NGYWRlSW4gXHU0RTNBIHRydWUgXHU3NTFGXHU2NTQ4XHJcbiAgICBkZXNjRm9udFNpemU6IFwiMS40cmVtXCIsIC8vIGRlc2MgXHU3Njg0XHU1QjU3XHU0RjUzXHU1OTI3XHU1QzBGXHVGRjBDXHU5RUQ4XHU4QkE0IDEuNHJlbVx1MzAwMlx1NjNEMFx1NzkzQVx1RkYxQVx1NTM5Rlx1NEUzQlx1OTg5OFx1NjYyRiAxLjFyZW1cclxuICAgIGRlc2NGYWRlSW5UaW1lOiAyMDAsIC8vIFx1NjNDRlx1OEZGMFx1NzY4NFx1NkRFMVx1NTE2NVx1NjU0OFx1Njc5Q1x1NjMwMVx1N0VFRFx1NjVGNlx1OTVGNFx1RkYwQ2Rlc2NGYWRlIFx1NEUzQSB0cnVlIFx1NzUxRlx1NjU0OFx1RkYwQ1x1OUVEOFx1OEJBNCAyMDAgXHU2QkVCXHU3OUQyXHJcbiAgICBkZXNjRmFkZU91dFRpbWU6IDEwMCwgLy8gXHU2M0NGXHU4RkYwXHU3Njg0XHU2REUxXHU1MUZBXHU2NTQ4XHU2NzlDXHU2MzAxXHU3RUVEXHU2NUY2XHU5NUY0XHVGRjBDZGVzY0ZhZGUgXHU0RTNBIHRydWUgXHU3NTFGXHU2NTQ4XHVGRjBDXHU5RUQ4XHU4QkE0IDEwMCBcdTZCRUJcdTc5RDJcclxuICAgIGRlc2NOZXh0VGltZTogODAwLCAvLyBcdTVGNTNcdTVCNThcdTU3MjhcdTU5MUFcdTRFMkEgZGVzYyBcdTY1RjZcdUZGMENcdTRFMDBcdTRFMkEgZGVzYyBcdTVDNTVcdTc5M0FcdTVCOENcdTU0MEVcdTYyMTZcdTUxQzZcdTU5MDdcdTVGMDBcdTU5Q0JcdTY1RjZcdUZGMENcdTU5MUFcdTVDMTFcdTc5RDJcdTU0MEVcdTUxRkFcdTczQjBcdTRFMEJcdTRFMDBcdTRFMkEgZGVzY1x1RkYwQ1x1OUVEOFx1OEJBNCA4MDAgXHU2QkVCXHU3OUQyXHJcbiAgICBidWJibGU6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTVGMDBcdTU0MkZcdTU2RkVcdTcyNDdcdTc2ODRcdTZDMTRcdTZDRTFcdTY1NDhcdTY3OUNcdUZGMENcdTlFRDhcdThCQTRcdTRFM0EgZmFsc2VcclxuICAgIGJ1YmJsZVBvc2l0aW9uOiAwLCAvLyBcdTZDMTRcdTZDRTFcdTY1NDhcdTY3OUNcdTc2ODRcdTRGNERcdTdGNkVcdUZGMENcdTgzMDNcdTU2RjRcdUZGMUEwLTEwMFx1RkYwQ1x1NEUwRFx1NTQwQ1x1NjU3MFx1NTAzQ1x1NEVFM1x1ODg2OFx1NEUwRFx1NTQwQ1x1NzY4NFx1OEQ3N1x1NTlDQlx1NEY0RFx1N0Y2RVx1RkYwQzBcdTY2MkZcdTY1NzRcdTRFMkFcdTU2RkVcdTcyNDdcdUZGMEM1MFx1NjYyRlx1NTM0QVx1NUYyMFx1NTZGRVx1RkYwOFx1NEUwMFx1NTM0QVx1NzY4NFx1NEUwQlx1NjVCOVx1RkYwOVx1MzAwMmJ1YmJsZSBcdTRFM0EgdHJ1ZSBcdTc1MUZcdTY1NDhcdTMwMDJcdTlFRDhcdThCQTRcdTY2MkYgMFxyXG4gICAgYnViYmxlTnVtOiAyMDAsIC8vIFx1NkMxNFx1NkNFMVx1NzY4NFx1NEUyQVx1NjU3MFx1RkYwQ2J1YmJsZSBcdTRFM0EgdHJ1ZSBcdTc1MUZcdTY1NDhcdUZGMENcdTlFRDhcdThCQTQgMjAwIFx1NEUyQVxyXG4gIH0sXHJcbiAgLy8gXHU3OUMxXHU1QkM2XHU2NTg3XHU3QUUwXHU5MTREXHU3RjZFXHJcbiAgcHJpdmF0ZVBhZ2U6IHtcclxuICAgIHVzZXJuYW1lOiAnQ2hlbkVyaWsnLCAgICAvLyBcdTc1MjhcdTYyMzdcdTU0MERcclxuICAgIHBhc3N3b3JkOiAnOTcxMTE1U2N4JywgICAgLy8gXHU1QkM2XHU3ODAxXHJcbiAgICBleHBpcmU6IDEwMDAgKiA2MCAqIDYwICogMjQsICAgLy8gXHU2NzA5XHU2NTQ4XHU2NUY2XHU5NUY0XHVGRjFBXHU2QkVCXHU3OUQyKG1zKVx1MzAwMlx1OEZDN1x1NjcxRlx1NTQwRVx1OEJCRlx1OTVFRVx1NzlDMVx1NUJDNlx1NjU4N1x1N0FFMFx1OTFDRFx1NjVCMFx1OEY5M1x1NTE2NVx1NzUyOFx1NjIzN1x1NTQwRFx1NTQ4Q1x1NUJDNlx1NzgwMVx1MzAwMlx1OUVEOFx1OEJBNFx1NEUwMFx1NTkyOVxyXG4gICAgbG9naW5QYXRoOiBcIi92ZG9pbmcvbG9naW4vXCIsICAgIC8vIFx1NUYxNVx1NzUyOFx1NzY3Qlx1NUY1NVx1N0VDNFx1NEVGNlx1NzY4NCBtZCBcdTY1ODdcdTdBRTBcdTRFMkQgZnJvbnRtYXR0ZXIgXHU3Njg0IHBlcm1hbGlua1x1MzAwMlx1RkYwOFx1NUZDNVx1OTg3Qlx1RkYwOVx1RkYwQ1x1NUVGQVx1OEJBRVx1NjUyRlx1NjMwMSAvdmRvaW5nL2xvZ2luL1x1RkYwQ1x1NjVFMFx1OUVEOFx1OEJBNFx1NTAzQ1xyXG4gICAgbG9naW5LZXk6ICd2ZG9pbmdfbG9naW4nLCAgICAvLyBcdTVCNThcdTUwQThcdTc1MjhcdTYyMzdcdTU0MERcdTRGRTFcdTYwNkZcdTc2ODQga2V5XHVGRjBDXHU5RUQ4XHU4QkE0XHU2NjJGIHZkb2luZ19sb2dpblx1MzAwMlx1N0NGQlx1N0VERlx1OTAxQVx1OEZDN1x1OEJFNSBrZXkgXHU5QThDXHU4QkMxXHU2NjJGXHU1NDI2XHU3NjdCXHU1RjU1XHUzMDAxXHU2NjJGXHU1NDI2XHU4RkM3XHU2NzFGXHUzMDAyXHVGRjA4XHU4QkY3XHU0RTBEXHU4OTgxXHU0RTBFXHU0RUZCXHU2MTBGXHU2NTg3XHU3QUUwXHU0RTJEIGZyb250bWF0dGVyIFx1NzY4NCB0aXRsZSBcdTUxQjJcdTdBODFcdUZGMDlcclxuICAgIGxvZ2luU2Vzc2lvbjogZmFsc2UsICAgICAvLyBcdTY2MkZcdTU0MjZcdTVGMDBcdTU0MkZcdTU3MjhcdTY1ODdcdTdBRTBcdTk4NzVcdTk3NjJcdTUxNzNcdTk1RURcdTYyMTZcdTUyMzdcdTY1QjBcdTU0MEVcdUZGMENcdTZFMDVcdTk2NjRcdTc2N0JcdTVGNTVcdTcyQjZcdTYwMDFcdTMwMDJcdThGRDlcdTY4MzdcdTUxOERcdTZCMjFcdThCQkZcdTk1RUVcdTRFRkJcdTRGNTVcdTc5QzFcdTVCQzZcdTY1ODdcdTdBRTBcdUZGMENcdTkwRkRcdTk3MDBcdTg5ODFcdTkxQ0RcdTY1QjBcdTlBOENcdThCQzFcdTc2N0JcdTVGNTVcdUZGMENcdTlFRDhcdThCQTRcdTRFM0EgZmFsc2VcdUZGMDhcdTRFMERcdTVGMDBcdTU0MkZcdUZGMDlcclxuICB9LFxyXG59O1xyXG4iLCAiaW1wb3J0IHsgZGVmaW5lQ29uZmlnNEN1c3RvbVRoZW1lIH0gZnJvbSAndnVlcHJlc3MvY29uZmlnJ1xyXG5pbXBvcnQgeyBWZG9pbmdUaGVtZUNvbmZpZyB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLXZkb2luZy90eXBlcydcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xyXG4vLyBpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcclxuY29uc3QgdGhlbWVDb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy90aGVtZUNvbmZpZy5qcycpO1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWc0Q3VzdG9tVGhlbWU8VmRvaW5nVGhlbWVDb25maWc+KHtcclxuICB0aGVtZTogJ3Zkb2luZycsIC8vIFx1NEY3Rlx1NzUyOG5wbVx1NTMwNVx1NEUzQlx1OTg5OFxyXG4gIC8vIHRoZW1lOiByZXNvbHZlKFwiRDpcXFxcd29ya1xcXFxwcml2YXRlXFxcXGNoZW5lcmlrLXZkb2luZy1ibG9nXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXCIsICcuLi8uLi92ZG9pbmcnKSwgLy8gXHU0RjdGXHU3NTI4XHU2NzJDXHU1NzMwXHU0RTNCXHU5ODk4XHJcblxyXG4gIGxvY2FsZXM6IHtcclxuICAgICcvJzoge1xyXG4gICAgICBsYW5nOiAnemgtQ04nLFxyXG4gICAgICB0aXRsZTogXCJDaGVuJ3MgYmxvZ1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ3dlYlx1NTI0RFx1N0FFRlx1NjI4MFx1NjcyRlx1NTM1QVx1NUJBMixcdTRFMTNcdTZDRTh3ZWJcdTUyNERcdTdBRUZcdTVCNjZcdTRFNjBcdTRFMEVcdTYwM0JcdTdFRDNcdTMwMDJKYXZhU2NyaXB0LGpzLEVTNixUeXBlU2NyaXB0LHZ1ZSxSZWFjdCxweXRob24sY3NzMyxodG1sNSxOb2RlLGdpdCxnaXRodWJcdTdCNDlcdTYyODBcdTY3MkZcdTY1ODdcdTdBRTBcdTMwMDInLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gYmFzZTogJy8nLCAvLyBcdTlFRDhcdThCQTQnLydcdTMwMDJcdTU5ODJcdTY3OUNcdTRGNjBcdTYwRjNcdTVDMDZcdTRGNjBcdTc2ODRcdTdGNTFcdTdBRDlcdTkwRThcdTdGNzJcdTUyMzBcdTU5ODIgaHR0cHM6Ly9mb28uZ2l0aHViLmlvL2Jhci9cdUZGMENcdTkwQTNcdTRFNDggYmFzZSBcdTVFOTRcdThCRTVcdTg4QUJcdThCQkVcdTdGNkVcdTYyMTAgXCIvYmFyL1wiLFx1RkYwOFx1NTQyNlx1NTIxOVx1OTg3NVx1OTc2Mlx1NUMwNlx1NTkzMVx1NTNCQlx1NjgzN1x1NUYwRlx1N0I0OVx1NjU4N1x1NEVGNlx1RkYwOVxyXG5cclxuICAvLyBcdTRFM0JcdTk4OThcdTkxNERcdTdGNkVcclxuICB0aGVtZUNvbmZpZyxcclxuXHJcbiAgLy8gXHU2Q0U4XHU1MTY1XHU1MjMwXHU5ODc1XHU5NzYyPGhlYWQ+XHU0RTJEXHU3Njg0XHU2ODA3XHU3QjdFXHVGRjBDXHU2ODNDXHU1RjBGW3RhZ05hbWUsIHsgYXR0ck5hbWU6IGF0dHJWYWx1ZSB9LCBpbm5lckhUTUw/XVxyXG4gIGhlYWQ6IFtcclxuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvaW1nL2Zhdmljb24uaWNvJyB9XSwgLy9mYXZpY29uc1x1RkYwQ1x1OEQ0NFx1NkU5MFx1NjUzRVx1NTcyOHB1YmxpY1x1NjU4N1x1NEVGNlx1NTkzOVxyXG4gICAgW1xyXG4gICAgICAnbWV0YScsXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAna2V5d29yZHMnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICdcdTUyNERcdTdBRUZcdTUzNUFcdTVCQTIsXHU0RTJBXHU0RUJBXHU2MjgwXHU2NzJGXHU1MzVBXHU1QkEyLFx1NTI0RFx1N0FFRixcdTUyNERcdTdBRUZcdTVGMDBcdTUzRDEsXHU1MjREXHU3QUVGXHU2ODQ2XHU2N0I2LHdlYlx1NTI0RFx1N0FFRixcdTUyNERcdTdBRUZcdTk3NjJcdThCRDVcdTk4OTgsXHU2MjgwXHU2NzJGXHU2NTg3XHU2ODYzLFx1NUI2Nlx1NEU2MCxcdTk3NjJcdThCRDUsSmF2YVNjcmlwdCxqcyxFUzYsVHlwZVNjcmlwdCx2dWUscHl0aG9uLGNzczMsaHRtbDUsTm9kZSxnaXQsZ2l0aHViLG1hcmtkb3duJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICd0aGVtZS1jb2xvcicsIGNvbnRlbnQ6ICcjMTFhOGNkJyB9XSwgLy8gXHU3OUZCXHU1MkE4XHU2RDRGXHU4OUM4XHU1NjY4XHU0RTNCXHU5ODk4XHU5ODlDXHU4MjcyXHJcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiAnaHR0cHM6Ly9hdC5hbGljZG4uY29tL3QvZm9udF8zMTI5ODM5X3hmdDZjcXM1Z2MuY3NzJyB9XSwgLy8gXHU5NjNGXHU5MUNDXHU1NzI4XHU3RUJGXHU1NkZFXHU2ODA3XHJcbiAgICBbJ25vc2NyaXB0Jywge30sICc8bWV0YSBodHRwLWVxdWl2PVwicmVmcmVzaFwiIGNvbnRlbnQ9XCIwOyB1cmw9aHR0cHM6Ly93d3cueW91bmdrYnQuY24vbm9zY3JpcHQvXCI+PHN0eWxlPi50aGVtZS12ZG9pbmctY29udGVudCB7IGRpc3BsYXk6bm9uZSB9J11cclxuICAgIC8vIFtcclxuICAgIC8vICAgJ3NjcmlwdCcsXHJcbiAgICAvLyAgIHtcclxuICAgIC8vICAgICAnZGF0YS1hZC1jbGllbnQnOiAnY2EtcHViLTc4MjgzMzM3MjU5OTM1NTQnLFxyXG4gICAgLy8gICAgIGFzeW5jOiAnYXN5bmMnLFxyXG4gICAgLy8gICAgIHNyYzogJ2h0dHBzOi8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL2pzL2Fkc2J5Z29vZ2xlLmpzJyxcclxuICAgIC8vICAgfSxcclxuICAgIC8vIF0sIC8vIFx1N0Y1MVx1N0FEOVx1NTE3M1x1ODA1NEdvb2dsZSBBZFNlbnNlIFx1NEUwRSBodG1sXHU2ODNDXHU1RjBGXHU1RTdGXHU1NDRBXHU2NTJGXHU2MzAxXHVGRjA4XHU0RjYwXHU1M0VGXHU0RUU1XHU1M0JCXHU2Mzg5XHVGRjA5XHJcbiAgXSxcclxuXHJcbiAgLy8gXHU2M0QyXHU0RUY2XHU5MTREXHU3RjZFXHJcbiAgcGx1Z2luczoge1xyXG4gICAgLy8gXHU1QkZDXHU1MTY1XHU2NzJDXHU1NzMwXHU2M0QyXHU0RUY2XHVGRjA4XHU0RjlCXHU1QjY2XHU0RTYwXHU1M0MyXHU4MDAzXHVGRjA5XHJcbiAgICAvLyBbcmVzb2x2ZShcIkQ6XFxcXHdvcmtcXFxccHJpdmF0ZVxcXFxjaGVuZXJpay12ZG9pbmctYmxvZ1xcXFxkb2NzXFxcXC52dWVwcmVzc1wiLCAnLi9wbHVnaW5zL2xvdmUtbWUnKV06IHsgLy8gXHU5RjIwXHU2ODA3XHU3MEI5XHU1MUZCXHU3MjMxXHU1RkMzXHU3Mjc5XHU2NTQ4XHJcbiAgICAvLyAgIGNvbG9yOiAnIzExYThjZCcsIC8vIFx1NzIzMVx1NUZDM1x1OTg5Q1x1ODI3Mlx1RkYwQ1x1OUVEOFx1OEJBNFx1OTY4Rlx1NjczQVx1ODI3MlxyXG4gICAgLy8gICBleGNsdWRlQ2xhc3NOYW1lOiAndGhlbWUtdmRvaW5nLWNvbnRlbnQnIC8vIFx1ODk4MVx1NjM5Mlx1OTY2NFx1NTE0M1x1N0QyMFx1NzY4NGNsYXNzLCBcdTlFRDhcdThCQTRcdTdBN0EnJ1xyXG4gICAgLy8gfSxcclxuICAgIC8qIFx1OUYyMFx1NjgwN1x1NjU0OFx1Njc5QyAqL1xyXG4gICAgJ2N1cnNvci1lZmZlY3RzJzp7fSxcclxuICAgIC8vIFx1NTE2OFx1NjU4N1x1NjQxQ1x1N0QyMlxyXG4gICAgJ2Z1bGx0ZXh0LXNlYXJjaCc6IHt9LFxyXG5cclxuICAgIC8vIFx1NTNFRlx1NEVFNVx1NkRGQlx1NTJBMFx1N0IyQ1x1NEUwOVx1NjVCOVx1NjQxQ1x1N0QyMlx1OTRGRVx1NjNBNVx1NzY4NFx1NjQxQ1x1N0QyMlx1Njg0Nlx1RkYwOFx1N0VFN1x1NjI3Rlx1NTM5Rlx1NUI5OFx1NjVCOVx1NjQxQ1x1N0QyMlx1Njg0Nlx1NzY4NFx1OTE0RFx1N0Y2RVx1NTNDMlx1NjU3MFx1RkYwOVxyXG4gICAgLy8gJ3RoaXJkcGFydHktc2VhcmNoJzoge1xyXG4gICAgLy8gICB0aGlyZHBhcnR5OiBbXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgdGl0bGU6ICdcdTU3MjhNRE5cdTRFMkRcdTY0MUNcdTdEMjInLFxyXG4gICAgLy8gICAgICAgZnJvbnRVcmw6ICdodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy96aC1DTi9zZWFyY2g/cT0nLCAvLyBcdTY0MUNcdTdEMjJcdTk0RkVcdTYzQTVcdTc2ODRcdTUyNERcdTk3NjJcdTkwRThcdTUyMDZcclxuICAgIC8vICAgICAgIGJlaGluZFVybDogJycsIC8vIFx1NjQxQ1x1N0QyMlx1OTRGRVx1NjNBNVx1NzY4NFx1NTQwRVx1OTc2Mlx1OTBFOFx1NTIwNlx1RkYwQ1x1NTNFRlx1OTAwOVx1RkYwQ1x1OUVEOFx1OEJBNCAnJ1xyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgLy8ge1xyXG4gICAgLy8gICAgIC8vICAgdGl0bGU6ICdcdTU3MjhSdW5vb2JcdTRFMkRcdTY0MUNcdTdEMjInLFxyXG4gICAgLy8gICAgIC8vICAgZnJvbnRVcmw6ICdodHRwczovL3d3dy5ydW5vb2IuY29tLz9zPScsXHJcbiAgICAvLyAgICAgLy8gfSxcclxuICAgIC8vICAgICAvLyB7XHJcbiAgICAvLyAgICAgLy8gICB0aXRsZTogJ1x1NTcyOFZ1ZSBBUElcdTRFMkRcdTY0MUNcdTdEMjInLFxyXG4gICAgLy8gICAgIC8vICAgZnJvbnRVcmw6ICdodHRwczovL2NuLnZ1ZWpzLm9yZy92Mi9hcGkvIycsXHJcbiAgICAvLyAgICAgLy8gfSxcclxuICAgIC8vICAgICAvLyB7XHJcbiAgICAvLyAgICAgLy8gICB0aXRsZTogJ1x1NTcyOEJpbmdcdTRFMkRcdTY0MUNcdTdEMjInLFxyXG4gICAgLy8gICAgIC8vICAgZnJvbnRVcmw6ICdodHRwczovL2NuLmJpbmcuY29tL3NlYXJjaD9xPScsXHJcbiAgICAvLyAgICAgLy8gfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICB0aXRsZTogJ1x1OTAxQVx1OEZDN1x1NzY3RVx1NUVBNlx1NjQxQ1x1N0QyMicsXHJcbiAgICAvLyAgICAgICBmcm9udFVybDogJ2h0dHBzOi8vd3d3LmJhaWR1LmNvbS9zP3dkPSUyMCcsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgXSxcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gXHU0RUUzXHU3ODAxXHU1NzU3XHU1OTBEXHU1MjM2XHU2MzA5XHU5NEFFXHJcbiAgICAnb25lLWNsaWNrLWNvcHknOiB7XHJcbiAgICAgIGNvcHlTZWxlY3RvcjogWydkaXZbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHByZScsICdkaXZbY2xhc3MqPVwiYXNpZGUtY29kZVwiXSBhc2lkZSddLCAvLyBTdHJpbmcgb3IgQXJyYXlcclxuICAgICAgY29weU1lc3NhZ2U6ICdcdTU5MERcdTUyMzZcdTYyMTBcdTUyOUYnLCAvLyBkZWZhdWx0IGlzICdDb3B5IHN1Y2Nlc3NmdWxseSBhbmQgdGhlbiBwYXN0ZSBpdCBmb3IgdXNlLidcclxuICAgICAgZHVyYXRpb246IDEwMDAsIC8vIHByb21wdCBtZXNzYWdlIGRpc3BsYXkgdGltZS5cclxuICAgICAgc2hvd0luTW9iaWxlOiBmYWxzZSwgLy8gd2hldGhlciB0byBkaXNwbGF5IG9uIHRoZSBtb2JpbGUgc2lkZSwgZGVmYXVsdDogZmFsc2UuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIERFTU9cdTZGMTRcdTc5M0FcdTZBMjFcdTU3NTcsIEFQSTogaHR0cHM6Ly9naXRodWIuY29tL3hpZ3VheGlndWEvdnVlcHJlc3MtcGx1Z2luLWRlbW8tYmxvY2tcclxuICAgICdkZW1vLWJsb2NrJzoge1xyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIC8vIGpzTGliOiBbJ2h0dHA6Ly94eHgnXSwgLy8gXHU1NzI4XHU3RUJGXHU3OTNBXHU0RjhCKGpzZmlkZGxlLCBjb2RlcGVuKVx1NEUyRFx1NzY4NGpzXHU0RjlEXHU4RDU2XHJcbiAgICAgICAgLy8gY3NzTGliOiBbJ2h0dHA6Ly94eHgnXSwgLy8gXHU1NzI4XHU3RUJGXHU3OTNBXHU0RjhCXHU0RTJEXHU3Njg0Y3NzXHU0RjlEXHU4RDU2XHJcbiAgICAgICAgLy8gdnVlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS92dWUvZGlzdC92dWUubWluLmpzJywgLy8gXHU1NzI4XHU3RUJGXHU3OTNBXHU0RjhCXHU0RTJEXHU3Njg0dnVlXHU0RjlEXHU4RDU2XHJcbiAgICAgICAganNmaWRkbGU6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0EganNmaWRkbGUgXHU5NEZFXHU2M0E1XHJcbiAgICAgICAgY29kZXBlbjogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBIGNvZGVwZW4gXHU5NEZFXHU2M0E1XHJcbiAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NUM1NVx1NzkzQVx1NEUzQVx1NkEyQVx1NTQxMVx1NjgzN1x1NUYwRlxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBcdTY1M0VcdTU5MjdcdTU2RkVcdTcyNDdcclxuICAgICd2dWVwcmVzcy1wbHVnaW4tem9vbWluZyc6IHtcclxuICAgICAgc2VsZWN0b3I6ICcudGhlbWUtdmRvaW5nLWNvbnRlbnQgaW1nOm5vdCgubm8tem9vbSknLCAvLyBub3RcdTYzOTJcdTk2NjRjbGFzc1x1NjYyRm5vLXpvb21cdTc2ODRcdTU2RkVcdTcyNDdcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGJnQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNiknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBcIlx1NEUwQVx1NkIyMVx1NjZGNFx1NjVCMFwiXHU3Njg0XHU2NUY2XHU5NUY0XHU2ODNDXHU1RjBGXHJcbiAgICAnQHZ1ZXByZXNzL2xhc3QtdXBkYXRlZCc6IHtcclxuICAgICAgdHJhbnNmb3JtZXI6ICh0aW1lc3RhbXAsIGxhbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gZGF5anModGltZXN0YW1wKS5mb3JtYXQoJ1lZWVkvTU0vREQsIEhIOm1tOnNzJylcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgbWFya2Rvd246IHtcclxuICAgIGxpbmVOdW1iZXJzOiB0cnVlXHJcbiAg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