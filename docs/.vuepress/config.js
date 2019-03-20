module.exports = {
	// theme: 'yubisaki',
	base: "/",
  title: "AnhDH's Blog",
  description: "AnhDH's Blog",
  head: [['link', { rel: 'icon', href: `/favicon.ico` }]],
  port: 3000,
  // Google Analytics ID
  ga: 'UA-136575441-1',
  serviceWorker: true,
  evergreen: true,
  markdown: {
    anchor: { permalink: true },
    toc: { includeLevel: [1, 2, 3, 4] },
    config: md => {
      md
        // .use(require("markdown-it-katex"))
        .use(require('markdown-it-task-lists'))
        .use(require('markdown-it-imsize'), { autofill: true })
        .use(require('@iktakahiro/markdown-it-katex'))
      //   .use(require('markdown-it-math'), {
      //     inlineOpen: '\\(',
      //     inlineClose: '\\)',
      //     blockOpen: '\\[',
      //     blockClose: '\\]'
      // })
      //   .use(require('markdown-it-texmath').use(require('katex')), {delimiters:'dollars',macros:{"\\RR": "\\mathbb{R}"}})
    }
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule('markdown-latex')
  //     .test(/\.(md|markdown|markdown-latex)$/)
  //     .use('markdown-latex-loader')
  //       .loader('markdown-latex-loader')
  //       .tap(options => { return {div: true} })
  //       .end()
  // },
  plugins: [
    ['@vuepress/pwa', { serviceWorker: true, updatePopup: { message: 'New Posts', buttonText: 'Refresh' } }],
  ],
  themeConfig: {
    // background: `/static/background.jpg`,
    github: 'anhdhbn',
    logo: '/favicon.ico',
    footer: "AnhDH's Blog",
    perPagePosts: 10,
    date_format: 'yyyy-MM-dd HH:mm:ss',
    comment: {
      useDisqus: true,
      shortname: 'anhdhbn',
      // url: 'https://anhdh.com',
      // clientId: 'aabede603896c0f4c242',
      // clientSecret: '39e73910a24eea6becd38a831ff1952e68f8c0eb',
      // repo: 'blog',
      // owner: 'anhdhbn',
      // locale: 'en',
      // perPage: 5,
      // distractionFreeMode: false
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tags', link: '/tag/' },
      { text: 'Github', link: 'https://github.com/anhdhbn' },
      // { text: 'InterviewMap', link: '/interview/' },
      { text: 'About', link: '/about/' }
    ]
  }
};