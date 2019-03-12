<template>
  <section class="home">
    <Mrtopmenu></Mrtopmenu>
    <section class="contain">
      <ul class="tabs flexbox">
        <li
          v-for="(item,index) in tabs"
          :class="{active:index == num}"
          @click="tab(index)"
          v-bind:key="item.id"
        >{{item}}</li>
      </ul>
      <div class="tabCon">
        <div class="select" v-on:click="toggle()">
          <div class="label">
            {{Timed}}
            <span class="arrowbottom"></span>
          </div>
          <ul class="rank-list" v-show="isShow">
            <li
              v-for="(item,index) in Times"
              v-bind:key="item.id"
              @click="selectT(index)"
            >{{item.name}}</li>
          </ul>
        </div>
        <!-- <div v-if="rankData[1] && rankData[1].fansRankingID">
               <MrDataPicker v-model="days" v-on:input="input" format="yyyy-MM-dd"></MrDataPicker>
        </div>-->
        <div
          class="grid-con"
          v-for="(itemCon,index) in tabContents"
          v-show=" index == num"
          v-bind:key="itemCon.id"
        >
          <div class="grid-header flexbox">
            <div class="cell" v-for="item in itemCon" v-bind:key="item.id">{{item}}</div>
          </div>

          <div
            class="grid"
            v-for="(item,index) in rankData"
            v-bind:key="item.id"
            v-on:mouseover="changeActive(index)"
            :class="{hover:index == numhov}"
          >
            <!--商业价值榜-->
            <div class="flexbox" v-if="item.commercialRankingID">
              <div class="cell">{{item.rankingIndex}}</div>
              <div class="cell">
                <div class="userImg">
                  <img :src="item.avator">
                </div>
                {{item.name}}
              </div>
              <div class="cell">{{item.commercialIndex}}</div>
              <div class="cell">{{item.hotIndex}}</div>
              <div class="cell">{{item.representIndex}}</div>
              <div class="cell">{{item.wordsIndex}}</div>
              <div class="cell">{{item.professionalIndex}}</div>
            </div>
            <!--活跃粉丝榜-->
            <div class="flexbox" v-if="item.fansRankingID">
              <div class="cell">{{item.rankingIndex}}</div>
              <div class="cell">
                <div class="userImg">
                  <img :src="item.avator">
                </div>
                {{item.name}}
              </div>
              <div class="cell">{{item.activeFansCount}}</div>
              <div class="cell">{{item.fansCount}}</div>
            </div>
            <!--全网热议榜-->
            <div class="flexbox" v-if="item.hotTopicRankingID">
              <div class="cell">{{item.rankingIndex}}</div>
              <div class="cell">
                <div class="userImg">
                  <img :src="item.avator">
                </div>
                {{item.name}}
              </div>
              <div class="cell">{{item.discussPercentage}}</div>
              <div class="cell">{{item.activeFans}}</div>
            </div>
            <!--媒体曝光榜-->
            <div class="flexbox" v-if="item.hotMediaRankingID">
              <div class="cell">{{item.rankingIndex}}</div>
              <div class="cell">
                <div class="userImg">
                  <img :src="item.avator">
                </div>
                {{item.name}}
              </div>
              <div class="cell">{{item.newsCount}}</div>
              <div class="cell">{{item.mediaCount}}</div>
            </div>
            <!--名人榜-->
            <div class="flexbox" v-if="item.celebrityRankingID">
              <div class="cell">{{item.rankingIndex}}</div>
              <div class="cell">
                <div class="userImg">
                  <img :src="item.avator">
                </div>
                {{item.name}}
              </div>
              <div class="cell">{{item.dailyActiveFans}}</div>
              <div class="cell">{{item.fansDifference}}</div>
            </div>
            <!--以团之名-->
            <div class="flexbox" v-if="item.weibo_id">
              <div class="cell">{{index+1}}</div>
              <div class="cell">{{item.name}}</div>
              <div class="cell">{{item.weibo_name}}</div>
              <div class="cell">{{item.tickets}}</div>
              <div class="cell">{{item.increased}}</div>
              <div class="cell twb" @click="toweibo(item)">微博地址</div>
            </div>
          </div>

          <div class="nogrid" v-if="count == 0">暂无排名信息</div>
          <div v-else-if="count != 0">
            <MrPages
              :page-index="currentPage"
              :total="count"
              :page-size="pageSize"
              @change="pageChange"
            ></MrPages>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import Mrtopmenu from "@/components/topmenu";
import MrPages from "@/components/pages";
import MrDataPicker from "@/components/datapicker";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      isShow: false,
      Times: [
        { time: "2019/02", name: "2019年2月榜单" },
        { time: "2019/01", name: "2019年1月榜单" },
        { time: "2018/12", name: "2018年12月榜单" }
      ],
      Timed: "",
      tabs: [
        "商业价值榜",
        "活跃粉丝榜",
        "全网热议榜",
        "媒体曝光榜",
        "名人榜",
        "以团之名"
      ],
      tabContents: [
        [
          "排名",
          "艺人",
          "商业价值指数 ",
          "热度指数",
          "代言指数",
          "口碑指数",
          "专业指数"
        ],
        ["排名", "姓名", "日活跃粉丝", "粉丝总数"],
        ["排名", "姓名", "论占比", "粉丝总数"],
        ["排名", "姓名", "新闻数量", "媒体数量"],
        ["排名", "社会名人", "日活跃粉丝", "粉丝变化"],
        ["排名", "名称", "微博名称", "当前票数", "增长票数", "微博地址"]
      ],
      num: 0,
      numhov: 0,
      rankData: [],
      pageSize: 15, //每页显示20条数据
      currentPage: 1, //当前页码
      count: 0 //总记录数
    };
  },
  components: {
    Mrtopmenu,
    MrPages,
    MrDataPicker
  },
  mounted() {
    this.Timed = this.Times[0].name;
    this.Timedtimes = this.Times[0].time;
    this.getdata();
    // this.days = this.timestampToTime(new Date() - 1)
  },
  methods: {
    tab(index) {
      this.num = index;
      this.currentPage = 1;
      this.numhov = 0;
      this.getdata();
    },
    async getdata() {
      let that = this;
      that.bus.$emit("loading", true);
      let take = that.pageSize * (that.currentPage - 1);
      let http = [
        "Rankings/Commercial",
        "Rankings/Fans",
        "Rankings/HotTopic",
        "Rankings/HotMedia",
        "Rankings/Celebrity",
        "Rankings/YTZM"
      ];
      let httpName = http[that.num];
      var data = await that.$api.article.rankList(httpName, {
        params: {
          "q.StagesFlag": that.Timedtimes,
          asc: true,
          skip: take,
          take: that.pageSize
        }
      });
      that.bus.$emit("loading", false);
      that.count = data.data.total;
      that.rankData = data.data.data;
      if (that.num == 5) {
        let arr = that.rankData;
        arr.sort(function(a, b) {
          return b.tickets - a.tickets;
        });
      }
    },
    toggle() {
      this.isShow = !this.isShow;
    },
    selectT(time) {
      this.Timed = this.Times[time].name;
      this.Timedtimes = this.Times[time].time;
      this.getdata();
    },
    pageChange(page) {
      this.currentPage = page;
      this.getdata();
    },
    changeActive(index) {
      this.numhov = index;
    },
    toweibo(item) {
      window.open(`https://weibo.com/${item.weibo_id}`);
    }
    // timestampToTime(timestamp) {
    //     var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    //     var Y = date.getFullYear() + '-';
    //     var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    //     var D = date.getDate() + ' ';
    //     //var h = date.getHours() + ':';
    //     // var m = date.getMinutes() + ':';
    //     // var s = date.getSeconds();
    //     return Y+M+D;
    // },
    // input(el){
    //   this.days =  this.timestampToTime(el)
    //    console.log(this.timestampToTime(el))
    // }
  }
};
</script>
<style lang="scss" scoped>
.home {
  .contain {
    max-width: 1000px;
    margin: 30px auto;
    padding: 20px;
    background: #fff;
    .tabs {
      border-bottom: 1px #ddd solid;
      margin-bottom: 30px;
      padding-bottom: 18px;
      font-size: 18px;
      li {
        padding: 0 30px;
        border-right: 1px #ddd solid;
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
      .active {
        color: red;
      }
    }
    .tabCon {
      .select {
        position: relative;
        z-index: 2;
        width: 304px;
        min-height: 30px;
        line-height: 30px;
        margin: 15px 0;
        vertical-align: middle;
        font-size: 16px;
        margin-top: 20px;
        background: hsl(0, 0%, 100%);
        .label {
          border: 1px solid hsl(0, 0%, 87%);
          height: 28px;
          line-height: 28px;
          margin-left: 10px;
          width: 292px;
          text-align: center;
          border-radius: 2px;
          position: relative;
          z-index: 2;
          cursor: pointer;
          span {
            content: "";
            width: 0;
            height: 0;
            line-height: 0;
            border: 6px solid hsla(0, 0%, 0%, 0);
            border-top: 8px solid hsl(0, 0%, 0%);
            position: absolute;
            top: 11px;
            left: 272px;
            font-size: 0;
            z-index: 0;
          }
        }
        .rank-list {
          width: 292px;
          background: hsl(0, 0%, 100%);
          position: absolute;
          top: 29px;
          margin: 0;
          margin-left: 10px;
          list-style: none;
          border: 1px solid hsl(0, 0%, 87%);
          li {
            border-bottom: 1px solid hsl(0, 0%, 87%);
            text-align: center;
            cursor: pointer;
            &:hover {
              background: #ddd;
            }
          }
        }
      }
      .grid-con{
        .grid-header {
            background: hsl(0, 0%, 94%);
            height: 40px;
            line-height: 40px;
            div {
                flex: 1;
                font-weight: bold;
                display: inline-block;
                border-right: 1px #fff solid;
            }
        }
        .grid {
            height: 60px;
            line-height: 60px;
            div {
                display: inline-block;
                .userImg {
                width: 48px;
                height: 48px;
                margin-right: 20px;
                display: none;
                img {
                    vertical-align: middle;
                }
                }
            }
            &:hover {
                height: 80px;
                line-height: 80px;
                color: red;
                font-weight: bold;
                img {
                width: 60px;
                height: 60px;
                vertical-align: middle;
                }
            }
            &:nth-child(odd) {
                background: hsla(0, 0%, 0%, 0.02);
            }
            .twb {
                cursor: pointer;
                color: hsl(240, 100%, 47%);
                text-decoration: underline;
            }
        }
        .hover {
            .userImg {
                display: inline-block !important;
            }
        }
        .nogrid {
            padding: 30px;
            font-size: 0.28rem;
            text-align: center;
        }
      }
    }
  }
}



</style>
