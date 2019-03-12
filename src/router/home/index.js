// const Home = r => require(['@/pages/home/Index.vue'],r);
const Home = () => import('@/pages/home/Index.vue');
export default[
  {
    path:'/home',
    component:Home,
    meta:{
      tab:true
    }
  }
]