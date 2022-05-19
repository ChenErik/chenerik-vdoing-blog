// import vue from 'vue/dist/vue.esm.browser'
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  /**
   * 私密文章模块
   */
   if (!isServer) {
    router.beforeEach((to, from, next) => {
      siteData.pages.forEach((item) => {
        if (item.path == to.path) {
          if (item.frontmatter.private && item.frontmatter.private == true && siteData.themeConfig.privatePage) {
            let { username, password, loginPath, loginKey, expire, loginSession } = siteData.themeConfig.privatePage;
            if (!expire) {
              expire = 86400000;  // 一天
            }
            if (!loginKey) {
              loginKey = 'vdoing_login';
            }
            // 网站关闭或者刷新后，清除登录状态（不针对单个私密文章）
            if (loginSession) {
              window.addEventListener('unload', function () {
                localStorage.removeItem(loginKey);
              });
            }
            // 单个文章私密验证
            if (item.frontmatter.username && item.frontmatter.password) {
              let loginInfo = JSON.parse(localStorage.getItem(item.frontmatter.title));
              if (!loginInfo || (loginInfo.username !== item.frontmatter.username && loginInfo.password !== item.frontmatter.password)) {
                router.push({
                  path: loginPath,
                  query: {
                    toPath: to.path,
                    singlePage: true,  // 代表单个文章
                  }
                });
              }
            }
            // 全局私密验证
            else {
              let loginInfo = JSON.parse(localStorage.getItem(loginKey));
              // 没有登录过
              if (!loginInfo || (loginInfo.username !== username && loginInfo.password !== password)) {
                router.push({
                  path: loginPath,
                  query: {
                    toPath: to.path
                  }
                });
              }
              // 登录状态过期
              else if (new Date() - loginInfo.time > loginInfo.expire) {
                localStorage.removeItem(loginKey);
                router.push({
                  path: loginPath,
                  query: {
                    toPath: to.path
                  }
                });
              }
            }
          }
        }
      });
      next();
    })
  }
}
