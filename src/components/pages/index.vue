<template>
    <div class="pages">
        <div class="page">{{total}}</div>
        <!-- prev -->
        <div
        :class="['paging-item', 'paging-item--prev','page', {'paging-item--disabled' : index === 1}]"
        @click="prev">上一页</div>
        
        <!-- first -->
        <div
        :class="['paging-item', 'paging-item--first','page', {'paging-item--disabled' : index === 1}]"
        @click="first">首页</div>
        
        <div
        :class="['paging-item','page', 'paging-item--more']"
        v-if="showPrevMore">...</div>

        <div
        :class="['paging-item','page', {'paging-item--current' : index === pager}]"
        v-for="pager in pagers" :key='pager'
        @click="go(pager)">{{ pager }}</div>

        <div
        :class="['paging-item','page', 'paging-item--more']"
        v-if="showNextMore">...</div>
        
        <!-- last -->
        <div
        :class="['paging-item','page','paging-item--last', {'paging-item--disabled' : index === pages}]"
        @click="last">末页</div>

        <!-- next -->
        <div
        :class="['paging-item', 'page','paging-item--next', {'paging-item--disabled' : index === pages}]"
        @click="next">下一页</div>
    </div>
</template>

<script>
export default {
    name : 'MrPages',
    //通过props来接受从父组件传递过来的值
    props : {

        //页面中的可见页码，其他的以...替代, 必须是奇数
        perPages : { 
            type : Number,
            default : 5 
        },

        //当前页码
        pageIndex : {
            type : Number,
            default : 0
        },

        //每页显示条数
        pageSize : {
            type : Number,
            default : 30
        },

        //总记录数
        total : {
            type : Number,
            default : 1
        },

    },
    methods : {
        prev(){
            if (this.index > 1) {
                this.go(this.index - 1)
            }
        },
        next(){
            if (this.index < this.pages) {
                this.go(this.index + 1)
            }
        },
        first(){
            if (this.index !== 1) {
                this.go(1)
            }
        },
        last(){
            if (this.index != this.pages) {
                console.log(this.index,this.pages)
                this.go(this.pages)
            }
        },
        go (page) {
 
            if (this.index !== page) {
                this.index = page
                console.log(this.index)
                //父组件通过change方法来接受当前的页码
                this.$emit('change', this.index)
            }
        }
    },
    computed : {

        //计算总页码
        pages(){
            return Math.ceil(this.size / this.limit)
        },

        //计算页码，当count等变化时自动计算
        pagers () {
            const array = []
            const perPages = this.perPages 
            const pageCount = this.pages
            let current = this.index
            const _offset = (perPages - 1) / 2

            
            const offset = {
                start : current - _offset,
                end   : current + _offset
            }

            //-1, 3
            if (offset.start < 1) {
                offset.end = offset.end + (1 - offset.start)
                offset.start = 1
            }
            if (offset.end > pageCount) {
                offset.start = offset.start - (offset.end - pageCount)
                offset.end = pageCount
            }
            if (offset.start < 1) offset.start = 1

            this.showPrevMore = (offset.start > 1)
            this.showNextMore = (offset.end < pageCount)

            for (let i = offset.start; i <= offset.end; i++) {
                array.push(i)
            }

            return array
        }
    },
    data () {
        return {
            index : this.pageIndex, //当前页码
            limit : this.pageSize, //每页显示条数
            size : this.total || 1, //总记录数
            showPrevMore : false,
            showNextMore : false
        }
    },
    watch : {
        pageIndex(val) {
            this.index = val || 1
        },
        pageSize(val) {
            this.limit = val || 30
        },
        total(val) {
            this.size = val || 1
        }
    }
}
</script>

<style lang="scss" scoped>
.pages{
    text-align: center;
    margin: 30px auto;
    max-width: 1000px;
    .page{
        height: 30px;
        line-height: 30px;
        padding: 0 11px;
        background: hsl(0, 0%, 92%);
        margin-bottom: 15px;
        display: inline-block;
        margin-right: 10px;
        color: hsl(0, 0%, 40%);
        cursor: pointer;
        &:hover{
            background-color: hsl(0, 79%, 68%);
            color: hsl(0, 0%, 100%);
            margin-right: 10px;
            margin-bottom: 15px;
            display: inline-block;
            line-height: 30px;
            padding: 0 11px;
        }
    }
    .paging-item--current{
         background-color: hsl(0, 79%, 68%);
        color: hsl(0, 0%, 100%);
    }
}
</style>

