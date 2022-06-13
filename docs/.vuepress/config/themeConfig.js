// import { resolve } from 'path'
module.exports = {
  // 导航配置
  nav: [
    { text: "首页", link: "/" },
    {
      text: "前端",
      link: "/web/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
      items: [
        // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
        {
          text: "学习笔记",
          items: [
            {
              link: "/note/git/",
              text: "《Git》",
            },
            {
              link: "/web/javascript/",
              text: "《JavaScript》",
            },
            {
              link: "/web/vue/",
              text: "《Vue》",
            },
            {
              link: "/web/vite/",
              text: "《Vite》",
            },
            {
              link: "/web/css/",
              text: "《Css》",
            },
            {
              link: "/web/echart/",
              text: "《Echart》",
            },
          ],
        },
      ],
    },
    {
      text: "技术",
      link: "/technology/",
      items: [
        { text: "Nodejs", link: "/pages/117708e0af7f0bd9/" },
        { text: "Vscode配置", link: "/pages/130882/" },
        { text: "Github", link: "/pages/544a95/" },
        { text: "Wiki", link: "/pages/506cc2/" },
        { text: "FFmpeg", link: "/pages/ea667e/" },
      ],
    },
    {
      text: "更多",
      link: "/more/",
      items: [
        {
          text: "小玩具",
          items: [
            {
              text: "EatWhat",
              link: "/pages/b2c54c/",
            },
          ],
        },
        {
          text: "HmiWeb",
          items: [
            {
              text: "问题修复",
              link: "/pages/591861/",
            },
          ],
        },
        {
          text: "Windows",
          items: [
            {
              text: "Oh-My-Posh",
              link: "/pages/6f8931/",
            },
          ],
        },
      ],
    },
    {
      text: "收藏",
      link: "/pages/0419ee/",
    },
    {
      text: "索引",
      link: "/archives/",
      items: [
        { text: "分类", link: "/categories/" },
        { text: "标签", link: "/tags/" },
        { text: "归档", link: "/archives/" },
      ],
    },
  ],
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: "/img/logo.png", // 导航栏logo
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: "上次更新", // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsDir: "docs", // 编辑的文件夹
  editLinks: true, // 启用编辑
  editLinkText: "编辑",

  //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

  // category: false, // 是否打开分类功能，默认true
  // tag: false, // 是否打开标签功能，默认true
  // archive: false, // 是否打开归档功能，默认true
  // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

  bodyBgImg: [
    'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
  ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
  // bodyBgImg: "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg",
  bodyBgImgOpacity: 1, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
  // titleBadge: false, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],
  //contentBgStyle: 6, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

  // updateBar: { // 最近更新栏
  //   showToArticle: false, // 显示到文章页底部，默认true
  //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
  // },
  // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
  // pageButton: false, // 是否显示快捷翻页按钮，默认true

  // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
  sidebar: "structuring",

  // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
  author: {
    name: "ChenErik", // 必需
    link: "https://github.com/ChenErik", // 可选的
  },

  // 博主信息 (显示在首页侧边栏)
  blogger: {
    avatar:
      "https://cdn.jsdelivr.net/gh/ChenErik/image-hosting@master/images/avatar.3z5pxxfxh860.webp",
    name: "Chen Erik",
    slogan: "Hello World",
  },
  social: {
    // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
    icons: [
      {
        iconClass: "icon-youjian",
        title: "发邮件",
        link: "mailto:894072666@qq.com",
      },
      {
        iconClass: "icon-github",
        title: "GitHub",
        link: "https://github.com/xugaoyi",
      },
      {
        iconClass: "icon-erji",
        title: "听音乐",
        link: "https://music.163.com/#/playlist?id=755597173",
      },
    ],
  },
  indexImg: {
    navColor: 2, // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
    switchNavColor: true, // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
    // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
    bgTimeColor: true, // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
    bgTimeColorArray: [
      "transparent",
      "rgba(255, 148, 48, .2)",
      "rgba(0, 0, 0, .3)",
      "rgba(0, 0, 0, .5)",
    ], // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效。提示：如果不想要这个效果，但是又想要时间窗口提示效果，则改为 ['transparent', 'transparent', 'transparent', 'transparent']
    descFade: false, // 是否开启图片中间描述的淡入效果，默认为 false
    // desc: ["Web前端技术博客，积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu", "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt", "这一生波澜壮阔或是不惊都没问题 —— 来自 Weibw"],  // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFadeIn 为 true 生效
    descFontSize: "1.4rem", // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
    descFadeInTime: 200, // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
    descFadeOutTime: 100, // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
    descNextTime: 800, // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
    bubble: false, // 是否开启图片的气泡效果，默认为 false
    bubblePosition: 0, // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
    bubbleNum: 200, // 气泡的个数，bubble 为 true 生效，默认 200 个
  },
  // 私密文章配置
  privatePage: {
    username: 'ChenErik',    // 用户名
    password: '971115Scx',    // 密码
    expire: 1000 * 60 * 60 * 24,   // 有效时间：毫秒(ms)。过期后访问私密文章重新输入用户名和密码。默认一天
    loginPath: "/vdoing/login/",    // 引用登录组件的 md 文章中 frontmatter 的 permalink。（必须），建议支持 /vdoing/login/，无默认值
    loginKey: 'vdoing_login',    // 存储用户名信息的 key，默认是 vdoing_login。系统通过该 key 验证是否登录、是否过期。（请不要与任意文章中 frontmatter 的 title 冲突）
    loginSession: false,     // 是否开启在文章页面关闭或刷新后，清除登录状态。这样再次访问任何私密文章，都需要重新验证登录，默认为 false（不开启）
  },
};
