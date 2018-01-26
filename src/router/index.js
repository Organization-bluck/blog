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

const Life = (resolve) => {
  import('components/Life/Life.vue').then((module) => {
    resolve(module)
  })
}

const Jottings = (resolve) => {
  import('components/Jottings/Jottings.vue').then((module) => {
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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
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
      path: '/life',
      name: 'Life',
      component: Life
    },
    {
      path: '/jottings',
      name: 'Jottings',
      component: Jottings
    }
  ]
})
