<template>
    <section class="topmenu">
        <div class="contain flexbox">
            <div class="logo"><img src="@/assets/images/logo.jpg"></div>
            <ul class="nav flexbox" >
            <li v-for="item in tagNames" :key='item.id' active-class="active">
                <router-link :to='item.tabLink'>{{item.name}}</router-link>
            </li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            tagNames:[
            {name:'艺人',tabLink:'/'},
            {name:'明星首页',tabLink:'/detail'},
            // {name:'A',tabLink:'/componentsA'},
            // {name:'B',tabLink:'/componentsB'},
            // {name:'明星主页',tabLink:'/myhomepage'},
        ],
      
      
        }
    },
    methods:{
    },
    
}
</script>

<style lang="scss" scoped>
.topmenu{
    width: 100%;
    background: url('../../assets/images/head_bg.jpg') repeat-x center;
    color:#fff;
    height: 80px;
    margin: 0 auto;
    .contain{
        max-width: 1020px;
        margin:auto;
        .logo{
        width: 60px;
        height:60px;
        margin: auto 20px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 100%;
        }
    }
    .nav{
        max-width: 980px;
        height: 80px;
        line-height: 80px;
    
        li{
            a{
                padding:0 30px;
                color:#fff;
                display: inline-block;
            }
        }
        .active ,.router-link-exact-active {
             padding:0 30px;
            text-align: center;
            display: inline-block;
            color: hsl(0, 0%, 100%);
            background-color: hsl(1, 100%, 65%);
        }
    }
    }
    
}
</style>

