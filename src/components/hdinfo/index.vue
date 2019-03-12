<template>
  <section>
    <div class="main perBorder">
            <div class="perData">
              <div class="sLeft">
                <h1>
                  {{starInfo.name || '未知'}}
                  <span>{{starInfo.job}}</span>
                </h1>
                <ul>
                  <li>
                    <span>地区：</span>
                    {{starInfo.hometown || '未知'}}
                  </li>
                  <li>
                    <span>身高：</span>
                    {{starInfo.stature || '未知'}}
                  </li>
                  <li>
                    <span>体重：</span>
                    {{starInfo.weight || '未知'}}
                  </li>
                  <li>
                    <span>生日：</span>
                    {{starInfo.birthday || '未知'}}
                  </li>
                  <li>
                    <span>星座：</span>
                    {{starInfo.constellation || '未知'}}
                  </li>
                  <li>
                    <span>血型：</span>
                    {{starInfo.blood || '未知'}}
                  </li>
                </ul>
                <p class="intro">
                  <span v-html="des"></span>
                  <a href="javascript:void(0)" @click="childtoInfo()">详细 &gt;&gt;</a>
                </p>
              </div>
              <div class="sRight">
                <a>
                  <img :src="starInfo.avator" alt width="270" height="200">
                </a>
              </div>
            </div>
          </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      des: ""
    };
  },
  props: ["starInfo"],
  mounted() {
     
  },
   watch: {
    starInfo: {
      immediate: true,
      handler (val) {
          if (this.starInfo.description && this.starInfo.description.length > 260) {
       this.des = this.starInfo.description.slice(0, 260);
     }
      }
    }
  },
  methods:{
    childtoInfo: function () {
        this.$emit('toInfo', 1);
    }
  }
};
</script>
<style lang="scss" scoped>

.perBorder {
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;
  overflow: hidden;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.main .works {
  min-height: 500px;
}
.perBorder .perData {
  padding: 20px;
  overflow: hidden;
}
.perBorder .perData .sLeft {
  float: left;
  width: 640px;
  overflow: hidden;
}
.perBorder .perData .sLeft ul li a {
  color: #528fcc;
}
.perBorder .perData h1 {
  font-size: 36px;
  font-weight: normal;
  width: 480px;
}
.perBorder .perData h1 span {
  margin-left: 10px;
  font-size: 18px;
  color: #999;
}
.perBorder .perData .sLeft .cLike {
  height: 75px;
  float: right;
  overflow: hidden;
  text-align: center;
  font-size: 12px;
}
.perBorder .perData .sLeft .cLike span {
  color: #ee6b6b;
}
.perBorder .perData .weibo {
  width: 90px;
  height: 26px;
  background-color: #f5f5f5;
  border-radius: 3px;
  margin-right: 10px;
  display: inline-block;
  line-height: 26px;
  position: relative;
  margin-top: 10px;
}
.perBorder .perData .weibo .sinaWeibo,
.perBorder .perData .weibo .qqWeibo {
  width: 19px;
  height: 17px;
  display: inline-block;
  position: absolute;
  top: 5px;
  left: 5px;
}

.perBorder .perData .weibo a {
  margin-left: 29px;
  color: #528fcc;
}
.perBorder .perData .weibo a:visited,
.perBorder .perData .intro a:visited {
  color: #528fcc;
}
.perBorder .perData .sLeft ul {
  overflow: hidden;
  margin-top: 10px;
  width: 100%;
}
.perBorder .perData ul li {
  width: 170px;
  float: left;
  line-height: 30px;
}
.perBorder .perData ul li span {
  color: #999;
}
.perBorder .perData .intro {
  line-height: 30px;
  margin-top: 5px;
  float: left;
}
.perBorder .perData .intro a {
  color: #528fcc;
}
.perBorder .perData .sRight {
  float: right;
  width: 270px;
  overflow: hidden;
}
.perBorder .perData .sRight img {
  width: 270px;
  height: 200px;
  overflow: hidden;
  float: right;
}
.perBorder .perData .sRight .bdsharebuttonbox {
  margin-top: 15px;
  width: 60px;
  float: right;
  height: 16px;
  line-height: 16px;
  overflow: hidden;
}
.perBorder .perData .sRight .comment {
  width: 60px;
  float: right;
  margin-top: 15px;
  height: 16px;
  overflow: hidden;
  position: relative;
}
.perBorder .sideLeft {
  float: left;
  width: 660px;
  overflow: hidden;
}
.perBorder .sideLeft .hd {
  margin-top: 30px;
}
.perBorder .sideLeft .hd h3 {
  font-size: 18px;
  font-weight: normal;
  height: 20px;
  overflow: hidden;
  line-height: 20px;
  overflow: hidden;
  position: relative;
  text-indent: 20px;
}
.perBorder .sideLeft .hd h3 i {
  height: 18px;
  width: 8px;
  background-color: #ee6b6b;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
}
.perBorder .sideLeft .hd h3 span {
  float: right;
}
.perBorder .sideLeft .hd h3 span a {
  color: #bebebe;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
}
.perBorder .sideLeft .hd h3 span a:visited {
  color: #bebebe;
}
.perBorder .sideLeft .hd h3 span a:hover {
  color: #ee6b6b;
}
.perBorder .sideLeft .starRelation ul {
  margin-left: 20px;
  width: 675px;
  overflow: hidden;
  margin-top: 15px;
}
.perBorder .sideLeft .starRelation ul li {
  width: 100px;
  height: 160px;
  overflow: hidden;
  position: relative;
  margin-right: 35px;
  float: left;
}
.perBorder .sideLeft .starRelation ul li img {
  width: 100px;
  height: 130px;
  overflow: hidden;
}
.perBorder .sideLeft .starRelation ul li:hover img,
.perBorder .sideLeft .starRelation ul li:hover span {
  filter: alpha(opacity=80);
  opacity: 0.8;
  -moz-opacity: 0.8;
}
.perBorder .sideLeft .starRelation ul li span em {
  background-color: #ee6b6b;
  height: 20px;
  overflow: hidden;
  padding-left: 5px;
  line-height: 20px;
  font-size: 12px;
  display: inline-block;
  color: #fff;
}
.perBorder .sideLeft .starRelation ul li p {
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  text-align: center;
}
.perBorder .sideLeft .starRelation ul li a:hover {
  color: #ee6b6b;
  text-decoration: none;
}
.perBorder .sideLeft .starNews {
  margin-top: 50px;
}
.perBorder .sideLeft .starNews dl {
  background-color: #fafafa;
  padding-right: 15px;
  overflow: hidden;
  margin-bottom: 10px;
}
.perBorder .sideLeft .starNews dl dt {
  width: 175px;
  height: 130px;
  overflow: hidden;
  float: left;
  margin-right: 15px;
}
.perBorder .sideLeft .starNews dl dt img {
  width: 175px;
  height: 130px;
  overflow: hidden;
}
.perBorder .sideLeft .starNews dl dt:hover img {
  filter: alpha(opacity=80);
  opacity: 0.8;
  -moz-opacity: 0.8;
}
.perBorder .sideLeft .starNews .title {
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  padding-top: 10px;
  overflow: hidden;
}
.perBorder .sideLeft .starNews .title a:hover {
  color: #ee6b6b;
}
.perBorder .sideLeft .starNews .intro {
  font-family: "Segoe UI", "Tahoma", "Arial";
  font-size: 12px;
  color: #999;
  line-height: 24px;
  height: 48px;
  overflow: hidden;
}
.perBorder .sideLeft .starNews .date {
  font-family: "Segoe UI", "Tahoma", "Arial";
  font-size: 12px;
  color: #999;
  line-height: 24px;
}
.perBorder .sideLeft .starNews .intro a {
  color: #528fcc;
  margin-left: 12px;
}
.perBorder .sideLeft .starNews ul {
  margin: 20px 0 0 20px;
  overflow: hidden;
}
.perBorder .sideLeft .starNews ul li {
  line-height: 30px;
  position: relative;
}
.perBorder .sideLeft .starNews ul li a {
  margin-left: 20px;
}
.perBorder .sideLeft .starNews ul li a:hover {
  color: #ee6b6b;
  text-decoration: none;
}
.perBorder .sideLeft .starNews ul li span {
  margin-left: 28px;
  color: #999;
}
.perBorder .sideLeft .starVideo {
  margin-top: 50px;
  overflow: hidden;
}
.perBorder .sideLeft .starVideo dl {
  margin: 15px 0 0 20px;
  overflow: hidden;
  float: left;
  width: 300px;
  margin-right: 10px;
}
.perBorder .sideLeft .starVideo dl dt {
  width: 90px;
  height: 117px;
  overflow: hidden;
  float: left;
  margin-right: 10px;
  position: relative;
}
.perBorder .sideLeft .starVideo dl dt img {
  width: 90px;
  height: 117px;
  overflow: hidden;
}
.perBorder .sideLeft .starVideo .title {
  font-size: 16px;
  height: 36px;
  line-height: 36px;
  overflow: hidden;
}
.perBorder .sideLeft .starVideo dl dd {
  line-height: 26px;
  height: 26px;
  overflow: hidden;
}
.perBorder .sideLeft .starVideo dl dd a {
  color: #528fcc;
}
.perBorder .sideLeft .starVideo .sort {
  color: #999;
}
.perBorder .sideLeft .starPic {
  margin-top: 50px;
}
.perBorder .sideLeft .starPic ul {
  margin: 15px 0 0 20px;
  width: 660px;
  overflow: hidden;
}
.perBorder .sideLeft .starPic ul li,
.main .pic .p_content ul li {
  width: 200px;
  overflow: hidden;
  float: left;
  position: relative;
}
.perBorder .sideLeft .starPic ul li {
  margin-right: 20px;
}
.perBorder .sideLeft .starPic ul li img,
.main .pic .p_content ul li img {
  width: 200px;
  height: 265px;
  overflow: hidden;
}
.perBorder .sideLeft .starPic ul li p,
.main .pic .p_content ul li p {
  height: 48px;
  width: 178px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  padding: 6px 10px;
  line-height: 24px;
}
.perBorder .sideLeft .starPic ul li a:hover,
.main .pic .p_content ul li a:hover {
  color: #ee6b6b;
  text-decoration: none;
}
.perBorder .sideLeft .starPic ul li:hover img,
.main .pic .p_content ul li a:hover img {
  filter: alpha(opacity=80);
  opacity: 0.8;
  -moz-opacity: 0.8;
}
.perBorder .sideRight {
  width: 270px;
  float: right;
  margin-right: 20px;
}
.perBorder .sideRight .rStar {
  border: 1px solid #e0e0e0;
}
.perBorder .sideRight .rStar h3 {
  margin: 0 10px;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #e0e0e0;
}
.perBorder .sideRight .rStar ul {
  margin: 0 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
.perBorder .sideRight .rStar li {
  width: 100%;
  margin: 10px 0;
}
.perBorder .sideRight .rStar li img {
  width: 60px;
  height: 60px;
  border-radius: 60px;
  float: left;
  border: 2px solid #fff;
  margin-right: 10px;
}
.perBorder .sideRight .rStar li i {
  width: 25px;
  height: 25px;
  display: block;
  text-align: center;
  line-height: 25px;
  margin: 19px 5px 0 5px;
  float: left;
  font-style: normal;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #a0a0a0;
}
.perBorder .sideRight .rStar ul li h4 {
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
  height: 24px;
  overflow: hidden;
  font-weight: normal;
}
.perBorder .sideRight .rStar ul li h4 a:hover {
  color: #000;
  line-height: 24px;
  font-size: 16px;
}
.perBorder .sideRight .rStar ul li span {
  font-size: 12px;
  color: #999;
  line-height: 24px;
  height: 24px;
}
.perBorder .sideRight .rStar ul li:hover img {
  border: 2px solid #ee6b6b;
}
.perBorder .sideRight .rStar .numColor {
  color: #ee6b6b;
}
.perBorder .sideRight .rStar .tPage {
  height: 44px;
  overflow: hidden;
  text-align: center;
  line-height: 44px;
}
.perBorder .sideRight .rStar .tPage span {
  width: 18px;
  height: 18px;
  display: inline-block;
  margin-top: 13px;
}

.perBorder .sideRight .theSame h3 {
  font-size: 18px;
  font-weight: normal;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #e0e0e0;
}
.perBorder .sideRight .theSame h3 a {
  color: #bebebe;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  float: right;
  line-height: 40px;
  margin-top: 8px;
}
.perBorder .sideRight .theSame h3 a:hover {
  color: #ee6b6b;
}
.perBorder .sideRight .theSame h3 em {
  color: #ee6b6b;
}
.perBorder .sideRight .theSame ul {
  margin-top: 15px;
  width: 258px;
  overflow: hidden;
}
.perBorder .sideRight .theSame ul li {
  width: 76px;
  height: 102px;
  overflow: hidden;
  float: left;
  margin-right: 10px;
  text-align: center;
  line-height: 26px;
  margin-bottom: 5px;
}
.perBorder .sideRight .theSame ul li a {
  color: #528fcc;
  font-family: "Segoe UI", "Tahoma", "Arial";
  font-size: 12px;
}
.perBorder .sideRight .theSame ul li a:visited {
  color: #528fcc;
}
.perBorder .sideRight .theSame ul li img {
  width: 76px;
  height: 76px;
  overflow: hidden;
}
.perBorder .sideRight .theSame ul li:hover img {
  filter: alpha(opacity=80);
  opacity: 0.8;
  -moz-opacity: 0.8;
}
.perBorder .sideRight .theSame .botLine {
  border-bottom: 1px solid #e0e0e0;
  margin: 5px -10px 0 -10px;
}
.perBorder .perData .photo {
  width: 150px;
  height: 200px;
  margin-right: 20px;
}
.perBorder .perData .photo img {
  width: 150px;
  height: 200px;
  overflow: hidden;
}
.perBorder .sideLeft .perData {
  padding: 20px 0 0 20px;
}
.perBorder .sideLeft .perData h1 {
  font-size: 30px;
}
.perBorder .sideLeft .perData ul {
  margin-top: 10px;
  overflow: hidden;
  width: 450px;
}
.perBorder .sideLeft .perData .alone {
  width: 450px;
}
.perBorder .sideLeft .perData .basie {
  width: 470px;
  float: right;
}
.perBorder .sideLeft .perData .basie a {
  color: #528fcc;
}
.perBorder .sideLeft .perData .inst {
  width: 640px;
  float: left;
  margin-top: 5px;
  line-height: 30px;
}
.perBorder .content h3 {
  font-size: 18px;
  height: 18px;
  overflow: hidden;
  line-height: 18px;
  overflow: hidden;
  position: relative;
  text-indent: 20px;
  margin: 42px 0 10px 0;
}
.perBorder .content h3 i {
  height: 18px;
  width: 8px;
  background-color: #ee6b6b;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
}

.perBorder .content {
  font-family: "Segoe UI", "Tahoma", "Arial";
  line-height: 30px;
  color: #333;
}
.perBorder .content i {
  display: none;
}
.perBorder .content h2 {
  font-size: 18px;
  height: 20px;
  overflow: hidden;
  line-height: 20px;
  overflow: hidden;
  position: relative;
  text-indent: 10px;
  margin: 42px 0 10px 0;
  border-left: 8px solid #ee6b6b;
}
.perBorder .content h2 i {
  height: 18px;
  width: 8px;
  background-color: #ee6b6b;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
}

.perBorder .content p {
  font-family: "Segoe UI", "Tahoma", "Arial";
  line-height: 30px;
  color: #333;
}
.perBorder .sideRight .toTop {
  margin-top: 20px;
}
.perBorder .sideRight .subNav {
  margin-top: 40px;
}
.perBorder .sideRight .subNav ul {
  border-left: 2px solid #e0e0e0;
  margin-left: 10px;
  padding-left: 20px;
}
.perBorder .sideRight .subNav ul li {
  line-height: 30px;
  position: relative;
  font-size: 16px;
  margin-bottom: 10px;
}
.perBorder .sideRight .subNav .current {
  color: #ee6b6b;
}

.perBorder .sideRight .subNav li {
  cursor: pointer;
}
.perBorder .sideRight .subNav li.on {
  background: url("");
}
.perBorder .sideRight .subNav ul li a:hover {
  color: #ee6b6b;
  text-decoration: none;
}
</style>
