<template>
    <section>
        <ul class="tabs flexbox">
            <li
            v-for="(item,index) in tabs"
            :class="{active:index == num}"
            @click="tab(index)"
            v-bind:key="item.id"
            >{{item}}</li>
        </ul>
    </section>
</template>
<script>
export default {
    data(){
        return{
             tabs: [
                "商业价值榜",
                "活跃粉丝榜",
                "全网热议榜",
                "媒体曝光榜",
                "名人榜",
                "以团之名"
            ],
              num: 0,
        }
    },
    methods:{
        tab(index) {
            this.num = index;
            // this.currentPage = 1;
            // this.numhov = 0;
            // this.getdata();
            this.$emit('tab', this.num)
        },
    }
    
}
</script>
