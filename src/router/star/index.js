const StarList = () => import('@/pages/starlist/index.vue');
const MyHomepage = () => import('@/pages/myhomepage/index.vue');
// const StarList = r => require(['@/pages/starlist/Index.vue'],r);
// const MyHomepage = r => require(['@/pages/myhomepage/Index.vue'],r);
export default[
  {
    path:'/starlist',
    component:StarList,
    meta:{
      title:'列表',
      tab:true
    },
  },
  {
    path:'/myhomepage/:id',
    component:MyHomepage,
    meta:{
      title:'详情'
    },
  }
]