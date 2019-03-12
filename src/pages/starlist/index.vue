<template>
  <section>
    <Mrtopmenu></Mrtopmenu>
    <section class="main">
      <section class="filter">
        <div class="list flexbox" v-for="(item,index) in screenData" :key="index">
          <div class="label">{{screenData[index].title}}</div>
          <div
            class="option"
            v-for="(arr,i) in screenData[index].array"
            :key="arr"
            @click="changeIndex(index,i,arr)"
            :class="{active:i == screenData[index].selectedIndex}"
          >{{arr}}</div>
        </div>
      </section>
      <section class="fContent">
        <div
          class="list"
          v-for="item in starData"
          :key="item.id"
          @click="tohomepage(item.xingBanStarID)"
        >
          <div class="Img">
            <img :src="item.avator">
          </div>
          <div class="bg">{{item.name}}</div>
        </div>
      </section>
      <section v-if="starData.length == 0" class="noData">暂无筛选条件</section>
      <section v-else>
        <MrPages
          :page-index="currentPage"
          :total="count"
          :page-size="pageSize"
          @change="pageChange"
        ></MrPages>
      </section>
    </section>
  </section>
</template>
<script>
import Mrtopmenu from "@/components/topmenu";
import MrPages from "@/components/pages";
export default {
  data() {
    return {
      starData: "",
      pageSize: 30, //每页显示20条数据
      currentPage: 1, //当前页码
      count: 0, //总记录数
      screenData: {
        area: {
          selectedIndex: 0,
          title: "地区",
          array: ["全部", "内地明星", "港台明星", "日韩明星", "欧美明星",'网络红人']
        },
        gender: {
          selectedIndex: 0,
          title: "性别",
          array: ["全部", "男性", "女性", "组合"]
        },
        job: {
          selectedIndex: 0,
          title: "职业",
          array: [
            "全部",
            "演员",
            "歌手",
            "制片人",
            "主持人",
            "导演",
            "编剧",
            "模特",
            "网络红人"
          ]
        },
        blood: {
          selectedIndex: 0,
          title: "血型",
          array: ["全部", "A型", "B型", "AB型", "O型"]
        },
        constellation: {
          selectedIndex: 0,
          title: "星座",
          array: [
            "全部",
            "白羊座",
            "金牛座",
            "双子座",
            "巨蟹座",
            "狮子座",
            "处女座",
            "天秤座",
            "天蝎座",
            "射手座",
            "摩羯座",
            "水瓶座",
            "双鱼座"
          ]
        }
      },
      activeArea: "",
      activeGender: "",
      activeJob: "",
      activeBlood: "",
      activeConstellation: ""
    };
  },
  components: {
    Mrtopmenu,
    MrPages
  },
  mounted() {
    this.getdata();
  },
  methods: {
    async getdata() {
      let that = this;
      that.bus.$emit("loading", true);
      var data = await that.$api.article.starData({
        params: {
          "q.area": this.activeArea == "全部" ? "" : this.activeArea, //地区
          "q.name": "", //艺名
          "q.gender": this.activeGender == "全部" ? "" : this.activeGender, //性别
          "q.blood": this.activeBlood == "全部" ? "" : this.activeBlood, //血型
          "q.constellation":
            this.activeConstellation == "全部" ? "" : this.activeConstellation, //星座
          "q.job": this.activeJob == "全部" ? "" : this.activeJob, //职业
          "q.nickname": "", //昵称
          "q.stature": "", //身高
          "q.weight": "", //体重
          orderby: "",
          asc: true,
          skip: that.pageSize * (that.currentPage - 1),
          take: that.pageSize
        }
      });
      that.bus.$emit("loading", false);
      that.count = data.data.total;
      that.starData = data.data.data;
    },
    changeIndex: function(itemkey, index, active) {
      
      this.screenData[itemkey].selectedIndex = index;
      switch (itemkey) {
        case "area":
          this.activeArea = active;
          break;
        case "gender":
          this.activeGender = active;
          break;
        case "job":
          this.activeJob = active;
          break;
        case "blood":
          this.activeBlood = active;
          break;
        case "constellation":
          this.activeConstellation = active;
          break;
      }
      this.getdata();
    },
    tohomepage(id) {
      this.$router.push({ path: `/detail/${id}` });
    },
    pageChange(page) {
      this.currentPage = page;
      this.getdata();
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  max-width: 1000px;
  margin: 30px auto;
  .filter {
    padding: 0 10px;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    .list {
      border-bottom: 1px dotted #ccc;
      line-height: 40px;
      overflow: hidden;
      .label {
        width: 42px;
        color: #999;
      }
      .option {
        margin: 5px;
        padding: 0 6px;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        &:hover {
          background-color: #ee6b6b;
          border-radius: 3px;
          color: #fff;
        }
      }
      .active {
        background-color: #ee6b6b;
        border-radius: 3px;
        color: #fff;
        text-decoration: none;
      }
    }
  }
  .fContent {
    margin-top: 30px;
    max-width: 1020px;
    width: 1020px;
    overflow: hidden;
    .list {
      width: 150px;
      height: 200px;
      overflow: hidden;
      float: left;
      margin-right: 20px;
      position: relative;
      margin-bottom: 50px;
      cursor: pointer;
      .Img {
        width: 150px;
        height: 200px;
      }
      .bg {
        width: 150px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        overflow: hidden;
        left: 0;
        bottom: 0;
        z-index: 999;
        position: absolute;
        font-weight: normal;
        font-size: 14px;
        background: rgba(255, 255, 255, 0.7);
      }
      &:hover img {
        opacity: 0.8;
      }
    }
  }
  .noData {
    color: #999;
    font-size: 18px;
    text-align: center;
  }
}
</style>
