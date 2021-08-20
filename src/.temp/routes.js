const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/dongbo/Desktop/学习dom/gridsome-拉勾作业/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/dongbo/Desktop/学习dom/gridsome-拉勾作业/src/templates/Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--journal-vue" */ "/Users/dongbo/Desktop/学习dom/gridsome-拉勾作业/src/pages/Journal.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--detail-vue" */ "/Users/dongbo/Desktop/学习dom/gridsome-拉勾作业/src/pages/Detail.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/dongbo/Desktop/学习dom/gridsome-拉勾作业/src/pages/Contact.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/dongbo/Desktop/学习dom/gridsome-拉勾作业/src/pages/About.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/dongbo/Desktop/学习dom/gridsome-拉勾作业/node_modules/gridsome/app/pages/404.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/dongbo/Desktop/学习dom/gridsome-拉勾作业/src/pages/Index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/post/:id/",
    component: c2
  },
  {
    path: "/journal/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/detail/",
    component: c4
  },
  {
    path: "/contact/",
    component: c5
  },
  {
    path: "/about/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
