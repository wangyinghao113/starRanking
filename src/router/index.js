// import Vue from 'vue'
// import Router from 'vue-router'

// // const Home = r => require(['@/pages/home/index.vue'],r);
// // const StarList = r => require(['@/pages/starlist/index.vue'],r);
// // const MyHomepage = r => require(['@/pages/myhomepage/index.vue'],r);

// // const Home = r => require.ensure([], () => r(require('@/pages/home/index.vue')), 'chunkname1')
// // const StarList = r => require.ensure([], () => r(require('@/pages/starlist/index.vue')), 'chunkname1')
// // const MyHomepage = r => require.ensure([], () => r(require('@/pages/myhomepage/index.vue')), 'chunkname1')



import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index.vue'
import StarList from '@/pages/starlist/index.vue'
import MyHomepage from '@/pages/myhomepage/index.vue'
import util from '@/assets/js/utils'
Vue.use(Router)





var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: StarList
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: MyHomepage
    },
    // {
    //   path: '/componentsA',
    //   name: 'componentsA',
    //   component: componentsA
    // },
    // {
    //   path: '/componentsB',
    //   name: 'componentsB',
    //   component: componentsB
    // },
  ],

})


router.beforeEach((to, from, next) => {

  if(util.utils.isMobile()){
    if(to.path == '/'){
        location.href='http://games.ixingban.com/ylq/#/index'
    }
    if(to.name == 'detail'){
      location.href='http://games.ixingban.com/ylq/#'+ to.path
    }
    }else{
      next()
  }
  
  })
export default router


