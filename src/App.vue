<template>
  <div id="app">
    <router-view/>
    <MrLoading></MrLoading>
  </div>
</template>

<script>
import MrLoading from '@/components/loading'
export default {
  name: 'App',
  components:{
    MrLoading
  },
  
}
</script>

<style>

</style>
