import Vue from 'vue'
import Router from 'vue-router'
const Index = (resolve) => {
  import('components/Index/Index.vue').then((module) => {
    resolve(module)
  })
}
const Read = (resolve) => {
  import('components/Read/Read.vue').then((module) => {
    resolve(module)
  })
}

const BackEnd = (resolve) => {
  import('components/BackEnd/BackEnd.vue').then((module) => {
    resolve(module)
  })
}
const Technology = (resolve) => {
  import('components/Technology/Technology.vue').then((module) => {
    resolve(module)
  })
}
const FontEnd = (resolve) => {
  import('components/FontEnd/FontEnd.vue').then((module) => {
    resolve(module)
  })
}
const Article = (resolve) => {
  import('components/Article/Article.vue').then((module) => {
    resolve(module)
  })
}


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: './',
  routes: [
    {
      path: '/',
      redirect: '/read'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/technology',
      name: 'Technology',
      component: Technology,
      children: [
        {
          path: ':id',
          component: FontEnd
        }
      ]
    },
    {
      path: '/read',
      name: 'Read',
      component: Read
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/前端',
      name: 'FontEnd',
      component: FontEnd
    },
    {
      path: '/后端',
      name: 'BackEnd',
      component:BackEnd
    }
  ]
})
