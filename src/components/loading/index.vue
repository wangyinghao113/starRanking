<template>
  <div class="loading" v-show="loading">
    <div class="load">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "loading",
  data() {
    return {
      loading: false
    };
  },
  created() {
    var that = this;
    this.bus.$on("loading", function(data) {
      that.loading = !!data;
    });
  }
};
</script>
<style scoped lang="scss">
.loading {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  color: #fff;
  //background-color: rgba(0, 0, 0, 0.4);
  p {
    padding: 0.15rem 0.15rem 0.2rem;
    color: #fff;
    font-size: 0.16rem;
  }
  img {
    width: 0.4rem;
    height: 0.4rem;
  }
  .load {
    width: 80px;
    height: 40px;
    margin: 0 auto;
    margin-top: 100px;
    span {
      display: inline-block;
      width: 8px;
      height: 100%;
      border-radius: 4px;
      background: lightgreen;
      -webkit-animation: load 1s ease infinite;
    }
  }
}

@-webkit-keyframes load {
  0%,100% {
    height: 40px;
    background: lightgreen;
  }
  50% {
    height: 70px;
    margin: -15px 0;
    background: lightblue;
  }
}
.load span:nth-child(2) {
  -webkit-animation-delay: 0.2s;
}
.load span:nth-child(3) {
  -webkit-animation-delay: 0.4s;
}
.load span:nth-child(4) {
  -webkit-animation-delay: 0.6s;
}
.load span:nth-child(5) {
  -webkit-animation-delay: 0.8s;
}
</style>
