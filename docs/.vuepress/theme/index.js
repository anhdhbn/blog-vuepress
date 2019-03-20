const path = require('path');

module.exports = ({ comments = {} }) => ({
  layoutDir: 'layouts',
  plugins: [
    ['@vuepress/google-analytics'],
    ['@vuepress/back-to-top'],
    ['@vuepress/medium-zoom'],
    ['@vutex/vuepress-plugin-math'],
    // ['vue-disqus/VueDisqus.vue'],
    ['@vssue/vuepress-plugin-vssue', Object.assign({
      platform: 'github',
    }, comments)],
    ['@vuepress/register-components', {
      componentsDir: [
        path.resolve(__dirname, 'components')
      ]
    }],
    ['@yubisaki/blog', {
      pageEnhancers: [
        {
          when: ({ frontmatter }) => frontmatter.layout === 'Activity',
          frontmatter: { layout: 'Activity' }
        }
      ]
    }],
    ['@yubisaki/pagination'],
    'flowchart'
  ]
})
