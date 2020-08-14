const c1 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/andreas.koutsoukos/Documents/Henkilokohtaiset/_projekti-aloituspaketit/gridsome-starter-theme/src/pages/About.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/andreas.koutsoukos/Documents/Henkilokohtaiset/_projekti-aloituspaketit/gridsome-starter-theme/node_modules/gridsome/app/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/andreas.koutsoukos/Documents/Henkilokohtaiset/_projekti-aloituspaketit/gridsome-starter-theme/src/pages/Index.vue")

export default [
  {
    path: "/about/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
