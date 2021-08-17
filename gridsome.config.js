// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    //读取本地文件，转换md
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },
    //读取strapi中的GraphQL数据
    {
      use: '@travisreynolds/gridsome-source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        // 设置集合
        contentTypes: ['post','tag'],
        // typeName:'Strapi'
        //设置单个标题
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // },
        // images: { // Optional
        //   paths: ['article.image', 'article.writer.picture', 'author.picture'], // Required
        //   dir: './src/assets/strapi', // Optional, default
        //   key: 'downloaded', // Optional, default
        //   cache: true // Optional, default
        // }
      }
    }
  ],
  templates:{
    //此处写集合的名字.就是上面的插件的contentTypes + typeName的名字就是
    StrapiPost:[
      {
        path:'/post/:id',
        component:'./src/templates/Post.vue'
      }
    ],
    StrapiTag:[
      {
        path:'/tag/:id',
        component:'./src/templates/Tag.vue'
      }
    ]
  }
}
