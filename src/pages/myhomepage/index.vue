<template>
  <section>
    <Mrtopmenu></Mrtopmenu>
    <section>
      <div class="nav">
        <ul class="flexbox">
          <li
            v-for="(item,index) in tabs"
            :class="{active:index == num}"
            @click="tab(index)"
            v-bind:key="item.id"
          >{{item}}</li>
        </ul>
      </div>
      <div class="tabCon">
        <div class v-if="num == 0">
          <div class="main perBorder">
            <div class="perData">
              <Mrhdinfo :starInfo='starInfo' v-on:toInfo="toInfo"></Mrhdinfo>
            </div>
            <div class="sideLeft">
              <div class="hd starNews">
                <h3>
                  <span>
                    <a>MORE</a>
                  </span>
                  <i></i>{{starInfo.name}}最新动态
                </h3>
                <ul>
                  <dl>
                    <dt>
                        <img
                          :src="starInfo.avator"
                          width="175"
                          height="130"
                        >
                    </dt>
                    <dd class="title">{{starInfo.summary || '暂无资讯'}}</dd>
                    <dd class="intro">
                      {{starInfo.summary}}
                    </dd>
                    <dd class="date">{{this.$utils.utils.formatDate(starInfo.lastUpdate,2)}}</dd>
                  </dl>
                </ul>
              </div>
              <!-- <div class="hd starVideo">
                <h3>
                  <span>
                    <a href="./video.html">MORE</a>
                  </span>
                  <i></i>邢宇菲影视作品
                </h3>
                <dl>
                  <dt>
                    <a href="http://v.ylq.com/tv/76957/" target="_blank" title="裸嫁时代">
                      <img
                        src="http://img.ylq.com/2015/0803/thumb_180_234_20150803031610684.jpg"
                        alt="裸嫁时代"
                        width="90"
                        height="117"
                      >
                      <div>
                        <span class="maxBg"></span>
                        <span class="playBtn"></span>
                      </div>
                    </a>
                  </dt>
                  <dd class="title">
                    <a href="http://v.ylq.com/tv/76957/" target="_blank" title="裸嫁时代">裸嫁时代</a>
                  </dd>
                  <dd class="sort">电视剧</dd>
                  <dd>
                    <span>导演：</span>余淳
                  </dd>
                  <dd>
                    <span>主演：</span>
                    <a target="_blank" href="http://www.ylq.com/neidi/wanglei/" title="王雷个人资料">王雷</a>
                    <a target="_blank" href="http://www.ylq.com/neidi/caoxiwen/" title="曹曦文个人资料">曹曦文</a>
                    <a
                      target="_blank"
                      href="http://www.ylq.com/neidi/xingyufei/"
                      title="邢宇菲个人资料"
                    >邢宇菲</a>
                    <a
                      target="_blank"
                      href="http://www.ylq.com/neidi/liutianzhuo/"
                      title="刘天佐个人资料"
                    >刘天佐</a>
                    <a target="_blank" href="http://www.ylq.com/neidi/liulili/" title="刘莉莉个人资料">刘莉莉</a>
                    <a target="_blank" href="http://www.ylq.com/neidi/xubaihui/" title="徐百卉个人资料">徐百卉</a>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <a href="http://v.ylq.com/tv/33522/" target="_blank" title="玫瑰园里的老少爷们儿">
                      <img
                        src="http://img.ylq.com/2015/0105/thumb_180_234_20150105084258901.jpg"
                        alt="玫瑰园里的老少爷们儿"
                        width="90"
                        height="117"
                      >
                      <div>
                        <span class="maxBg"></span>
                        <span class="playBtn"></span>
                      </div>
                    </a>
                  </dt>
                  <dd class="title">
                    <a
                      href="http://v.ylq.com/tv/33522/"
                      target="_blank"
                      title="玫瑰园里的老少爷们儿"
                    >玫瑰园里的老少爷们儿</a>
                  </dd>
                  <dd class="sort">电视剧</dd>
                  <dd>
                    <span>主演：</span>
                    <a target="_blank" href="http://www.ylq.com/neidi/wuyunfei/" title="吴云飞个人资料">吴云飞</a>
                    <a target="_blank" href="http://www.ylq.com/neidi/lijialin/" title="小李琳个人资料">小李琳</a>
                    <a
                      target="_blank"
                      href="http://www.ylq.com/neidi/xingyufei/"
                      title="邢宇菲个人资料"
                    >邢宇菲</a>李大强
                    <a
                      target="_blank"
                      href="http://www.ylq.com/neidi/huangxiaojuan/"
                      title="黄晓娟个人资料"
                    >黄晓娟</a>
                  </dd>
                </dl>
              </div> -->
            </div>
            <!-- <div class="sideRight">
              <div class="rStar">
                <h3>内地明星人气榜</h3>
                <ul>
                  <li style="display: list-item;">
                    <i class="numColor">1</i>
                    <a href="http://www.ylq.com/neidi/zhaoliying/" target="_blank" title="赵丽颖">
                      <img
                        src="http://img.ylq.com/2015/0827/thumb_120_120_20150827095747861.jpg"
                        alt="赵丽颖"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/zhaoliying/" target="_blank" title="赵丽颖">赵丽颖</a>
                    </h4>
                    <span>人气：79480</span>
                  </li>
                  <li style="display: list-item;">
                    <i class="numColor">2</i>
                    <a href="http://www.ylq.com/neidi/qiaoshan/" target="_blank" title="乔杉">
                      <img
                        src="http://img.ylq.com/2015/0610/thumb_120_120_20150610022930151.jpg"
                        alt="乔杉"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/qiaoshan/" target="_blank" title="乔杉">乔杉</a>
                    </h4>
                    <span>人气：47729</span>
                  </li>
                  <li style="display: list-item;">
                    <i class="numColor">3</i>
                    <a href="http://www.ylq.com/neidi/wangsicong/" target="_blank" title="王思聪">
                      <img
                        src="http://img.ylq.com/2015/0108/thumb_120_120_20150108022936314.jpg"
                        alt="王思聪"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/wangsicong/" target="_blank" title="王思聪">王思聪</a>
                    </h4>
                    <span>人气：45654</span>
                  </li>
                  <li style="display: list-item;">
                    <i>4</i>
                    <a href="http://www.ylq.com/neidi/linyun/" target="_blank" title="林允">
                      <img
                        src="http://img.ylq.com/2017/0524/thumb_120_120_20170524111244477.png"
                        alt="林允"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/linyun/" target="_blank" title="林允">林允</a>
                    </h4>
                    <span>人气：45082</span>
                  </li>
                  <li style="display: list-item;">
                    <i>5</i>
                    <a href="http://www.ylq.com/neidi/chenxuedong/" target="_blank" title="陈学冬">
                      <img
                        src="http://img.ylq.com/2016/1201/thumb_120_120_20161201102952642.png"
                        alt="陈学冬"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a
                        href="http://www.ylq.com/neidi/chenxuedong/"
                        target="_blank"
                        title="陈学冬"
                      >陈学冬</a>
                    </h4>
                    <span>人气：44155</span>
                  </li>
                  <li style="display: none;">
                    <i>6</i>
                    <a href="http://www.ylq.com/neidi/songxiaobao/" target="_blank" title="宋小宝">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142515557.jpg"
                        alt="宋小宝"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a
                        href="http://www.ylq.com/neidi/songxiaobao/"
                        target="_blank"
                        title="宋小宝"
                      >宋小宝</a>
                    </h4>
                    <span>人气：43026</span>
                  </li>
                  <li style="display: none;">
                    <i>7</i>
                    <a href="http://www.ylq.com/neidi/luhan/" target="_blank" title="鹿晗">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142405376.jpg"
                        alt="鹿晗"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/luhan/" target="_blank" title="鹿晗">鹿晗</a>
                    </h4>
                    <span>人气：41552</span>
                  </li>
                  <li style="display: none;">
                    <i>8</i>
                    <a href="http://www.ylq.com/neidi/jiangjinfu/" target="_blank" title="蒋劲夫">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142144467.jpg"
                        alt="蒋劲夫"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/jiangjinfu/" target="_blank" title="蒋劲夫">蒋劲夫</a>
                    </h4>
                    <span>人气：36596</span>
                  </li>
                  <li style="display: none;">
                    <i>9</i>
                    <a href="http://www.ylq.com/neidi/haiqing/" target="_blank" title="海清">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142230975.jpg"
                        alt="海清"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/haiqing/" target="_blank" title="海清">海清</a>
                    </h4>
                    <span>人气：36437</span>
                  </li>
                  <li style="display: none;">
                    <i>10</i>
                    <a href="http://www.ylq.com/neidi/zhangyuqi/" target="_blank" title="张雨绮">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142204841.jpg"
                        alt="张雨绮"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/zhangyuqi/" target="_blank" title="张雨绮">张雨绮</a>
                    </h4>
                    <span>人气：36036</span>
                  </li>
                  <li style="display: none;">
                    <i>11</i>
                    <a href="http://www.ylq.com/neidi/wuyifan1/" target="_blank" title="吴亦凡">
                      <img
                        src="http://img.ylq.com/2015/0713/thumb_120_120_20150713032813229.jpg"
                        alt="吴亦凡"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/wuyifan1/" target="_blank" title="吴亦凡">吴亦凡</a>
                    </h4>
                    <span>人气：35222</span>
                  </li>
                  <li style="display: none;">
                    <i>12</i>
                    <a href="http://www.ylq.com/neidi/wangxi/" target="_blank" title="王晰">
                      <img
                        src="http://img.ylq.com/2016/1207/thumb_120_120_20161207092348575.png"
                        alt="王晰"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/wangxi/" target="_blank" title="王晰">王晰</a>
                    </h4>
                    <span>人气：34824</span>
                  </li>
                  <li style="display: none;">
                    <i>13</i>
                    <a href="http://www.ylq.com/neidi/zhengshuang/" target="_blank" title="郑爽">
                      <img
                        src="http://img.ylq.com/2015/0805/thumb_120_120_20150805093919374.jpg"
                        alt="郑爽"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/zhengshuang/" target="_blank" title="郑爽">郑爽</a>
                    </h4>
                    <span>人气：31654</span>
                  </li>
                  <li style="display: none;">
                    <i>14</i>
                    <a href="http://www.ylq.com/neidi/yangyang2/" target="_blank" title="杨洋">
                      <img
                        src="http://img.ylq.com/2015/0409/thumb_120_120_20150409025357188.jpg"
                        alt="杨洋"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/yangyang2/" target="_blank" title="杨洋">杨洋</a>
                    </h4>
                    <span>人气：30351</span>
                  </li>
                  <li style="display: none;">
                    <i>15</i>
                    <a href="http://www.ylq.com/neidi/TFboys/" target="_blank" title="tfboys">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142917325.jpg"
                        alt="tfboys"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a
                        href="http://www.ylq.com/neidi/TFboys/"
                        target="_blank"
                        title="tfboys"
                      >tfboys</a>
                    </h4>
                    <span>人气：30255</span>
                  </li>
                  <li style="display: none;">
                    <i>16</i>
                    <a href="http://www.ylq.com/neidi/huge/" target="_blank" title="胡歌">
                      <img
                        src="http://img.ylq.com/2015/1106/thumb_120_120_20151106035428379.jpg"
                        alt="胡歌"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/huge/" target="_blank" title="胡歌">胡歌</a>
                    </h4>
                    <span>人气：28229</span>
                  </li>
                  <li style="display: none;">
                    <i>17</i>
                    <a href="http://www.ylq.com/neidi/zhangtianai/" target="_blank" title="张天爱">
                      <img
                        src="http://img.ylq.com/2015/1227/thumb_120_120_20151227023703388.png"
                        alt="张天爱"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a
                        href="http://www.ylq.com/neidi/zhangtianai/"
                        target="_blank"
                        title="张天爱"
                      >张天爱</a>
                    </h4>
                    <span>人气：26329</span>
                  </li>
                  <li style="display: none;">
                    <i>18</i>
                    <a href="http://www.ylq.com/neidi/liushishi/" target="_blank" title="刘诗诗">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142145580.jpg"
                        alt="刘诗诗"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/liushishi/" target="_blank" title="刘诗诗">刘诗诗</a>
                    </h4>
                    <span>人气：24629</span>
                  </li>
                  <li style="display: none;">
                    <i>19</i>
                    <a href="http://www.ylq.com/neidi/matianyu/" target="_blank" title="马天宇">
                      <img
                        src="http://img.ylq.com/2016/1201/thumb_120_120_20161201025308788.png"
                        alt="马天宇"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/matianyu/" target="_blank" title="马天宇">马天宇</a>
                    </h4>
                    <span>人气：23329</span>
                  </li>
                  <li style="display: none;">
                    <i>20</i>
                    <a href="http://www.ylq.com/neidi/zenghongchang/" target="_blank" title="曾虹畅">
                      <img
                        src="http://img.ylq.com/2015/0331/thumb_120_120_20150331053308190.jpg"
                        alt="曾虹畅"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a
                        href="http://www.ylq.com/neidi/zenghongchang/"
                        target="_blank"
                        title="曾虹畅"
                      >曾虹畅</a>
                    </h4>
                    <span>人气：21948</span>
                  </li>
                </ul>
                <div class="tPage">
                  <span class="prev"></span>
                  <i class="iOn">1</i>
                  <i>2</i>
                  <i>3</i>
                  <i>4</i>
                  <span class="next nextOn"></span>
                </div>
              </div>
              <div class="theSame">
                <h3>
                  <a href="http://www.ylq.com/star/list-all-all-all-all--all-all-1.html">MORE</a>相同
                  <em>星座</em>明星
                </h3>
                <ul>
                  <li>
                    <a href="http://www.ylq.com/neidi/zhaoliying/" target="_blank" title="赵丽颖">
                      <img
                        src="http://img.ylq.com/2015/0827/thumb_152_152_20150827095747861.jpg"
                        alt="赵丽颖"
                        width="76"
                        height="76"
                      >赵丽颖
                    </a>
                  </li>
                  <li>
                    <a href="http://www.ylq.com/oumei/liunuoyi/" target="_blank" title="刘诺一">
                      <img
                        src="http://img.ylq.com/2015/0804/thumb_152_152_20150804035857946.jpg"
                        alt="刘诺一"
                        width="76"
                        height="76"
                      >刘诺一
                    </a>
                  </li>
                  <li>
                    <a href="http://www.ylq.com/rihan/juebeizhenxi/" target="_blank" title="堀北真希">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_152_152_20141203194212490.jpg"
                        alt="堀北真希"
                        width="76"
                        height="76"
                      >堀北真希
                    </a>
                  </li>
                  <li>
                    <a href="http://www.ylq.com/neidi/zenghongchang/" target="_blank" title="曾虹畅">
                      <img
                        src="http://img.ylq.com/2015/0331/thumb_152_152_20150331053308190.jpg"
                        alt="曾虹畅"
                        width="76"
                        height="76"
                      >曾虹畅
                    </a>
                  </li>
                  <li>
                    <a href="http://www.ylq.com/neidi/hailu/" target="_blank" title="海陆">
                      <img
                        src="http://img.ylq.com/2017/0124/thumb_152_152_20170124112014335.png"
                        alt="海陆"
                        width="76"
                        height="76"
                      >海陆
                    </a>
                  </li>
                  <li>
                    <a href="http://www.ylq.com/neidi/hesui/" target="_blank" title="何穗">
                      <img
                        src="http://img.ylq.com/2015/0317/thumb_152_152_20150317073345535.jpg"
                        alt="何穗"
                        width="76"
                        height="76"
                      >何穗
                    </a>
                  </li>
                  <li>
                    <a href="http://www.ylq.com/gangtai/yuhongyan/" target="_blank" title="喻虹渊">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_152_152_20141203190254986.jpg"
                        alt="喻虹渊"
                        width="76"
                        height="76"
                      >喻虹渊
                    </a>
                  </li>
                  <li>
                    <a href="http://www.ylq.com/gangtai/hanjunting/" target="_blank" title="韩君婷">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_152_152_20141203190617973.jpg"
                        alt="韩君婷"
                        width="76"
                        height="76"
                      >韩君婷
                    </a>
                  </li>
                  <li>
                    <a href="http://www.ylq.com/neidi/shenten/" target="_blank" title="沈腾">
                      <img
                        src="http://img.ylq.com/2015/1010/thumb_152_152_20151010031747133.png"
                        alt="沈腾"
                        width="76"
                        height="76"
                      >沈腾
                    </a>
                  </li>
                </ul>
                <div class="botLine"></div>
                <h3>
                  <a href="http://www.ylq.com/star/list-all-all-all-AB-all-all-all-1.html">MORE</a>相同
                  <em>血型</em>明星
                </h3>
                <ul>
                  <li>
                    <a href="http://www.ylq.com/neidi/yangyang2/" target="_blank" title="杨洋">
                      <img
                        src="http://img.ylq.com/2015/0409/thumb_152_152_20150409025357188.jpg"
                        alt="杨洋"
                        width="76"
                        height="76"
                      >杨洋
                    </a>
                  </li>
                  <li>
                    <a href="http://www.ylq.com/neidi/quying/" target="_blank" title="瞿颖">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_152_152_20141203142449924.jpg"
                        alt="瞿颖"
                        width="76"
                        height="76"
                      >瞿颖
                    </a>
                  </li>
                  <li>
                    <a href="http://www.ylq.com/neidi/huangzidao/" target="_blank" title="黄子韬">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_152_152_20141203142231339.jpg"
                        alt="黄子韬"
                        width="76"
                        height="76"
                      >黄子韬
                    </a>
                  </li>
                  <li>
                    <a href="http://www.ylq.com/neidi/xiaoshenyang/" target="_blank" title="小沈阳">
                      <img
                        src="http://img.ylq.com/2017/0306/thumb_152_152_20170306083635357.png"
                        alt="小沈阳"
                        width="76"
                        height="76"
                      >小沈阳
                    </a>
                  </li>
                  <li>
                    <a href="http://www.ylq.com/neidi/haolei/" target="_blank" title="郝蕾">
                      <img
                        src="http://img.ylq.com/2017/0610/thumb_152_152_20170610084337939.png"
                        alt="郝蕾"
                        width="76"
                        height="76"
                      >郝蕾
                    </a>
                  </li>
                  <li>
                    <a href="http://www.ylq.com/gangtai/ouyangnana/" target="_blank" title="欧阳娜娜">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_152_152_20141203190702320.jpg"
                        alt="欧阳娜娜"
                        width="76"
                        height="76"
                      >欧阳娜娜
                    </a>
                  </li>
                  <li>
                    <a href="http://www.ylq.com/neidi/zhangxinyi2/" target="_blank" title="张歆艺">
                      <img
                        src="http://img.ylq.com/2015/0416/thumb_152_152_20150416034304832.jpg"
                        alt="张歆艺"
                        width="76"
                        height="76"
                      >张歆艺
                    </a>
                  </li>
                  <li>
                    <a href="http://www.ylq.com/gangtai/liudehua/" target="_blank" title="刘德华">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_152_152_20141203185942164.jpg"
                        alt="刘德华"
                        width="76"
                        height="76"
                      >刘德华
                    </a>
                  </li>
                  <li>
                    <a href="http://www.ylq.com/neidi/zhengkai2/" target="_blank" title="郑恺">
                      <img
                        src="http://img.ylq.com/2015/0420/thumb_152_152_20150420113319412.jpg"
                        alt="郑恺"
                        width="76"
                        height="76"
                      >郑恺
                    </a>
                  </li>
                </ul>
              </div>
            </div> -->
          </div>
        </div>
        <div class v-if="num == 1">
          <div class="main perBorder">
            <div class="sideLeft content">
              <div class="perData">
                <div class="flexbox">
                  <div class="photo">
                    <img :src="starInfo.avator" width="150" height="200">
                  </div>
                  <div class="basie">
                    <h1>
                      {{starInfo.name || '未知'}}
                      <span>{{starInfo.job}}</span>
                    </h1>
                    <ul>
                      <li class="alone">
                        <span>别名：</span>
                        {{starInfo.nickname || '未知'}}
                      </li>
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
                  </div>
                </div>

                <div v-html="this.starInfo.description"></div>
              </div>
            </div>
            <!-- <div class="sideRight">
              <div class="rStar toTop">
                <h3>内地明星人气榜</h3>
                <ul>
                  <li style="display: list-item;">
                    <i class="numColor">1</i>
                    <a href="http://www.ylq.com/neidi/zhaoliying/" target="_blank" title="赵丽颖">
                      <img
                        src="http://img.ylq.com/2015/0827/thumb_120_120_20150827095747861.jpg"
                        alt="赵丽颖"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/zhaoliying/" target="_blank" title="赵丽颖">赵丽颖</a>
                    </h4>
                    <span>人气：79480</span>
                  </li>
                  <li style="display: list-item;">
                    <i class="numColor">2</i>
                    <a href="http://www.ylq.com/neidi/qiaoshan/" target="_blank" title="乔杉">
                      <img
                        src="http://img.ylq.com/2015/0610/thumb_120_120_20150610022930151.jpg"
                        alt="乔杉"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/qiaoshan/" target="_blank" title="乔杉">乔杉</a>
                    </h4>
                    <span>人气：47729</span>
                  </li>
                  <li style="display: list-item;">
                    <i class="numColor">3</i>
                    <a href="http://www.ylq.com/neidi/wangsicong/" target="_blank" title="王思聪">
                      <img
                        src="http://img.ylq.com/2015/0108/thumb_120_120_20150108022936314.jpg"
                        alt="王思聪"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/wangsicong/" target="_blank" title="王思聪">王思聪</a>
                    </h4>
                    <span>人气：45654</span>
                  </li>
                  <li style="display: list-item;">
                    <i>4</i>
                    <a href="http://www.ylq.com/neidi/linyun/" target="_blank" title="林允">
                      <img
                        src="http://img.ylq.com/2017/0524/thumb_120_120_20170524111244477.png"
                        alt="林允"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/linyun/" target="_blank" title="林允">林允</a>
                    </h4>
                    <span>人气：45082</span>
                  </li>
                  <li style="display: list-item;">
                    <i>5</i>
                    <a href="http://www.ylq.com/neidi/chenxuedong/" target="_blank" title="陈学冬">
                      <img
                        src="http://img.ylq.com/2016/1201/thumb_120_120_20161201102952642.png"
                        alt="陈学冬"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a
                        href="http://www.ylq.com/neidi/chenxuedong/"
                        target="_blank"
                        title="陈学冬"
                      >陈学冬</a>
                    </h4>
                    <span>人气：44155</span>
                  </li>
                  <li style="display: none;">
                    <i>6</i>
                    <a href="http://www.ylq.com/neidi/songxiaobao/" target="_blank" title="宋小宝">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142515557.jpg"
                        alt="宋小宝"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a
                        href="http://www.ylq.com/neidi/songxiaobao/"
                        target="_blank"
                        title="宋小宝"
                      >宋小宝</a>
                    </h4>
                    <span>人气：43026</span>
                  </li>
                  <li style="display: none;">
                    <i>7</i>
                    <a href="http://www.ylq.com/neidi/luhan/" target="_blank" title="鹿晗">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142405376.jpg"
                        alt="鹿晗"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/luhan/" target="_blank" title="鹿晗">鹿晗</a>
                    </h4>
                    <span>人气：41552</span>
                  </li>
                  <li style="display: none;">
                    <i>8</i>
                    <a href="http://www.ylq.com/neidi/jiangjinfu/" target="_blank" title="蒋劲夫">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142144467.jpg"
                        alt="蒋劲夫"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/jiangjinfu/" target="_blank" title="蒋劲夫">蒋劲夫</a>
                    </h4>
                    <span>人气：36596</span>
                  </li>
                  <li style="display: none;">
                    <i>9</i>
                    <a href="http://www.ylq.com/neidi/haiqing/" target="_blank" title="海清">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142230975.jpg"
                        alt="海清"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/haiqing/" target="_blank" title="海清">海清</a>
                    </h4>
                    <span>人气：36437</span>
                  </li>
                  <li style="display: none;">
                    <i>10</i>
                    <a href="http://www.ylq.com/neidi/zhangyuqi/" target="_blank" title="张雨绮">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142204841.jpg"
                        alt="张雨绮"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/zhangyuqi/" target="_blank" title="张雨绮">张雨绮</a>
                    </h4>
                    <span>人气：36036</span>
                  </li>
                  <li style="display: none;">
                    <i>11</i>
                    <a href="http://www.ylq.com/neidi/wuyifan1/" target="_blank" title="吴亦凡">
                      <img
                        src="http://img.ylq.com/2015/0713/thumb_120_120_20150713032813229.jpg"
                        alt="吴亦凡"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/wuyifan1/" target="_blank" title="吴亦凡">吴亦凡</a>
                    </h4>
                    <span>人气：35222</span>
                  </li>
                  <li style="display: none;">
                    <i>12</i>
                    <a href="http://www.ylq.com/neidi/wangxi/" target="_blank" title="王晰">
                      <img
                        src="http://img.ylq.com/2016/1207/thumb_120_120_20161207092348575.png"
                        alt="王晰"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/wangxi/" target="_blank" title="王晰">王晰</a>
                    </h4>
                    <span>人气：34824</span>
                  </li>
                  <li style="display: none;">
                    <i>13</i>
                    <a href="http://www.ylq.com/neidi/zhengshuang/" target="_blank" title="郑爽">
                      <img
                        src="http://img.ylq.com/2015/0805/thumb_120_120_20150805093919374.jpg"
                        alt="郑爽"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/zhengshuang/" target="_blank" title="郑爽">郑爽</a>
                    </h4>
                    <span>人气：31654</span>
                  </li>
                  <li style="display: none;">
                    <i>14</i>
                    <a href="http://www.ylq.com/neidi/yangyang2/" target="_blank" title="杨洋">
                      <img
                        src="http://img.ylq.com/2015/0409/thumb_120_120_20150409025357188.jpg"
                        alt="杨洋"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/yangyang2/" target="_blank" title="杨洋">杨洋</a>
                    </h4>
                    <span>人气：30351</span>
                  </li>
                  <li style="display: none;">
                    <i>15</i>
                    <a href="http://www.ylq.com/neidi/TFboys/" target="_blank" title="tfboys">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142917325.jpg"
                        alt="tfboys"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a
                        href="http://www.ylq.com/neidi/TFboys/"
                        target="_blank"
                        title="tfboys"
                      >tfboys</a>
                    </h4>
                    <span>人气：30255</span>
                  </li>
                  <li style="display: none;">
                    <i>16</i>
                    <a href="http://www.ylq.com/neidi/huge/" target="_blank" title="胡歌">
                      <img
                        src="http://img.ylq.com/2015/1106/thumb_120_120_20151106035428379.jpg"
                        alt="胡歌"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/huge/" target="_blank" title="胡歌">胡歌</a>
                    </h4>
                    <span>人气：28229</span>
                  </li>
                  <li style="display: none;">
                    <i>17</i>
                    <a href="http://www.ylq.com/neidi/zhangtianai/" target="_blank" title="张天爱">
                      <img
                        src="http://img.ylq.com/2015/1227/thumb_120_120_20151227023703388.png"
                        alt="张天爱"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a
                        href="http://www.ylq.com/neidi/zhangtianai/"
                        target="_blank"
                        title="张天爱"
                      >张天爱</a>
                    </h4>
                    <span>人气：26329</span>
                  </li>
                  <li style="display: none;">
                    <i>18</i>
                    <a href="http://www.ylq.com/neidi/liushishi/" target="_blank" title="刘诗诗">
                      <img
                        src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142145580.jpg"
                        alt="刘诗诗"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/liushishi/" target="_blank" title="刘诗诗">刘诗诗</a>
                    </h4>
                    <span>人气：24629</span>
                  </li>
                  <li style="display: none;">
                    <i>19</i>
                    <a href="http://www.ylq.com/neidi/matianyu/" target="_blank" title="马天宇">
                      <img
                        src="http://img.ylq.com/2016/1201/thumb_120_120_20161201025308788.png"
                        alt="马天宇"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a href="http://www.ylq.com/neidi/matianyu/" target="_blank" title="马天宇">马天宇</a>
                    </h4>
                    <span>人气：23329</span>
                  </li>
                  <li style="display: none;">
                    <i>20</i>
                    <a href="http://www.ylq.com/neidi/zenghongchang/" target="_blank" title="曾虹畅">
                      <img
                        src="http://img.ylq.com/2015/0331/thumb_120_120_20150331053308190.jpg"
                        alt="曾虹畅"
                        width="60"
                        height="60"
                      >
                    </a>
                    <h4>
                      <a
                        href="http://www.ylq.com/neidi/zenghongchang/"
                        target="_blank"
                        title="曾虹畅"
                      >曾虹畅</a>
                    </h4>
                    <span>人气：21948</span>
                  </li>
                </ul>
                <div class="tPage">
                  <span class="prev"></span>
                  <i class="iOn">1</i>
                  <i>2</i>
                  <i>3</i>
                  <i>4</i>
                  <span class="next nextOn"></span>
                </div>
              </div>
              <div class="subNav" style="position: static; top: auto;">
                <ul>
                  <li ref="0" class="on" style="color: rgb(238, 107, 107);">
                    <i class="on"></i>邢宇菲个人资料：
                  </li>
                  <li ref="1" style="color: rgb(0, 0, 0);">
                    <i></i>早年经历：
                  </li>
                  <li ref="2" style="color: rgb(0, 0, 0);">
                    <i></i>演艺经历：
                  </li>
                  <li ref="3" style="color: rgb(0, 0, 0);">
                    <i></i>主要作品：
                  </li>
                  <li ref="4" style="color: rgb(0, 0, 0);">
                    <i></i>社会活动：
                  </li>
                  <li ref="5" style="color: rgb(0, 0, 0);">
                    <i></i>人物评价：
                  </li>
                  <div class="clear" style="color: rgb(0, 0, 0);"></div>
                </ul>
              </div>
            </div> -->
          </div>
        </div>
        <div class v-if="num == 2">
          <div class="main">
            <div class="perBorder noPb">
              <div class="perData toPb">
                <Mrhdinfo :starInfo='starInfo' v-on:toInfo="toInfo"></Mrhdinfo>
              </div>
            </div>
            <!-- <div class="perBorder">
              <div class="sideLeft perNews">
                <ul>
                  <li>
                    <span class="img">
                      <a
                        href="http://news.ylq.com/a/0824/21250.html"
                        target="_blank"
                        title="邢宇菲写真展现女王范儿 邢宇菲个人资料"
                      >
                        <img
                          src="http://img.ylq.com/2015/0824/thumb_320_240_20150824040721835.jpg"
                          alt="邢宇菲写真展现女王范儿 邢宇菲个人资料"
                          width="160"
                          height="120"
                        >
                      </a>
                    </span>
                    <h3>
                      <a
                        href="http://news.ylq.com/a/0824/21250.html"
                        target="_blank"
                        title="邢宇菲写真展现女王范儿 邢宇菲个人资料"
                      >邢宇菲写真展现女王范儿 邢宇菲个人资料</a>
                    </h3>
                    <p>近日，邢宇菲拍摄了写真。写真中，邢宇菲时而干练女王范儿，时而展现魅惑女人的一面，魅惑气势的眼神演绎了新一代女王风范。</p>
                    <span class="date">2015-08-24</span>
                    <div
                      class="bdsharebuttonbox bdshare-button-style0-16"
                      data-bd-bind="1551684583610"
                    >
                      <a href="#" class="bds_more" data-cmd="more">分享</a>
                    </div>
                    <span class="readNum">
                      <em>阅读（1248）</em>
                      <i></i>
                    </span>
                  </li>
                </ul>
                <div class="page"></div>
              </div>
              <div class="sideRight">
                <div class="rStar toTop">
                  <h3>内地明星人气榜</h3>
                  <ul>
                    <li style="display: list-item;">
                      <i class="numColor">1</i>
                      <a href="http://www.ylq.com/neidi/zhaoliying/" target="_blank" title="赵丽颖">
                        <img
                          src="http://img.ylq.com/2015/0827/thumb_120_120_20150827095747861.jpg"
                          alt="赵丽颖"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a
                          href="http://www.ylq.com/neidi/zhaoliying/"
                          target="_blank"
                          title="赵丽颖"
                        >赵丽颖</a>
                      </h4>
                      <span>人气：79480</span>
                    </li>
                    <li style="display: list-item;">
                      <i class="numColor">2</i>
                      <a href="http://www.ylq.com/neidi/qiaoshan/" target="_blank" title="乔杉">
                        <img
                          src="http://img.ylq.com/2015/0610/thumb_120_120_20150610022930151.jpg"
                          alt="乔杉"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a href="http://www.ylq.com/neidi/qiaoshan/" target="_blank" title="乔杉">乔杉</a>
                      </h4>
                      <span>人气：47729</span>
                    </li>
                    <li style="display: list-item;">
                      <i class="numColor">3</i>
                      <a href="http://www.ylq.com/neidi/wangsicong/" target="_blank" title="王思聪">
                        <img
                          src="http://img.ylq.com/2015/0108/thumb_120_120_20150108022936314.jpg"
                          alt="王思聪"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a
                          href="http://www.ylq.com/neidi/wangsicong/"
                          target="_blank"
                          title="王思聪"
                        >王思聪</a>
                      </h4>
                      <span>人气：45654</span>
                    </li>
                    <li style="display: list-item;">
                      <i>4</i>
                      <a href="http://www.ylq.com/neidi/linyun/" target="_blank" title="林允">
                        <img
                          src="http://img.ylq.com/2017/0524/thumb_120_120_20170524111244477.png"
                          alt="林允"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a href="http://www.ylq.com/neidi/linyun/" target="_blank" title="林允">林允</a>
                      </h4>
                      <span>人气：45082</span>
                    </li>
                    <li style="display: list-item;">
                      <i>5</i>
                      <a href="http://www.ylq.com/neidi/chenxuedong/" target="_blank" title="陈学冬">
                        <img
                          src="http://img.ylq.com/2016/1201/thumb_120_120_20161201102952642.png"
                          alt="陈学冬"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a
                          href="http://www.ylq.com/neidi/chenxuedong/"
                          target="_blank"
                          title="陈学冬"
                        >陈学冬</a>
                      </h4>
                      <span>人气：44155</span>
                    </li>
                    <li style="display: none;">
                      <i>6</i>
                      <a href="http://www.ylq.com/neidi/songxiaobao/" target="_blank" title="宋小宝">
                        <img
                          src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142515557.jpg"
                          alt="宋小宝"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a
                          href="http://www.ylq.com/neidi/songxiaobao/"
                          target="_blank"
                          title="宋小宝"
                        >宋小宝</a>
                      </h4>
                      <span>人气：43026</span>
                    </li>
                    <li style="display: none;">
                      <i>7</i>
                      <a href="http://www.ylq.com/neidi/luhan/" target="_blank" title="鹿晗">
                        <img
                          src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142405376.jpg"
                          alt="鹿晗"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a href="http://www.ylq.com/neidi/luhan/" target="_blank" title="鹿晗">鹿晗</a>
                      </h4>
                      <span>人气：41552</span>
                    </li>
                    <li style="display: none;">
                      <i>8</i>
                      <a href="http://www.ylq.com/neidi/jiangjinfu/" target="_blank" title="蒋劲夫">
                        <img
                          src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142144467.jpg"
                          alt="蒋劲夫"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a
                          href="http://www.ylq.com/neidi/jiangjinfu/"
                          target="_blank"
                          title="蒋劲夫"
                        >蒋劲夫</a>
                      </h4>
                      <span>人气：36596</span>
                    </li>
                    <li style="display: none;">
                      <i>9</i>
                      <a href="http://www.ylq.com/neidi/haiqing/" target="_blank" title="海清">
                        <img
                          src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142230975.jpg"
                          alt="海清"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a href="http://www.ylq.com/neidi/haiqing/" target="_blank" title="海清">海清</a>
                      </h4>
                      <span>人气：36437</span>
                    </li>
                    <li style="display: none;">
                      <i>10</i>
                      <a href="http://www.ylq.com/neidi/zhangyuqi/" target="_blank" title="张雨绮">
                        <img
                          src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142204841.jpg"
                          alt="张雨绮"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a
                          href="http://www.ylq.com/neidi/zhangyuqi/"
                          target="_blank"
                          title="张雨绮"
                        >张雨绮</a>
                      </h4>
                      <span>人气：36036</span>
                    </li>
                    <li style="display: none;">
                      <i>11</i>
                      <a href="http://www.ylq.com/neidi/wuyifan1/" target="_blank" title="吴亦凡">
                        <img
                          src="http://img.ylq.com/2015/0713/thumb_120_120_20150713032813229.jpg"
                          alt="吴亦凡"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a href="http://www.ylq.com/neidi/wuyifan1/" target="_blank" title="吴亦凡">吴亦凡</a>
                      </h4>
                      <span>人气：35222</span>
                    </li>
                    <li style="display: none;">
                      <i>12</i>
                      <a href="http://www.ylq.com/neidi/wangxi/" target="_blank" title="王晰">
                        <img
                          src="http://img.ylq.com/2016/1207/thumb_120_120_20161207092348575.png"
                          alt="王晰"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a href="http://www.ylq.com/neidi/wangxi/" target="_blank" title="王晰">王晰</a>
                      </h4>
                      <span>人气：34824</span>
                    </li>
                    <li style="display: none;">
                      <i>13</i>
                      <a href="http://www.ylq.com/neidi/zhengshuang/" target="_blank" title="郑爽">
                        <img
                          src="http://img.ylq.com/2015/0805/thumb_120_120_20150805093919374.jpg"
                          alt="郑爽"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a
                          href="http://www.ylq.com/neidi/zhengshuang/"
                          target="_blank"
                          title="郑爽"
                        >郑爽</a>
                      </h4>
                      <span>人气：31654</span>
                    </li>
                    <li style="display: none;">
                      <i>14</i>
                      <a href="http://www.ylq.com/neidi/yangyang2/" target="_blank" title="杨洋">
                        <img
                          src="http://img.ylq.com/2015/0409/thumb_120_120_20150409025357188.jpg"
                          alt="杨洋"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a href="http://www.ylq.com/neidi/yangyang2/" target="_blank" title="杨洋">杨洋</a>
                      </h4>
                      <span>人气：30351</span>
                    </li>
                    <li style="display: none;">
                      <i>15</i>
                      <a href="http://www.ylq.com/neidi/TFboys/" target="_blank" title="tfboys">
                        <img
                          src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142917325.jpg"
                          alt="tfboys"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a
                          href="http://www.ylq.com/neidi/TFboys/"
                          target="_blank"
                          title="tfboys"
                        >tfboys</a>
                      </h4>
                      <span>人气：30255</span>
                    </li>
                    <li style="display: none;">
                      <i>16</i>
                      <a href="http://www.ylq.com/neidi/huge/" target="_blank" title="胡歌">
                        <img
                          src="http://img.ylq.com/2015/1106/thumb_120_120_20151106035428379.jpg"
                          alt="胡歌"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a href="http://www.ylq.com/neidi/huge/" target="_blank" title="胡歌">胡歌</a>
                      </h4>
                      <span>人气：28229</span>
                    </li>
                    <li style="display: none;">
                      <i>17</i>
                      <a href="http://www.ylq.com/neidi/zhangtianai/" target="_blank" title="张天爱">
                        <img
                          src="http://img.ylq.com/2015/1227/thumb_120_120_20151227023703388.png"
                          alt="张天爱"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a
                          href="http://www.ylq.com/neidi/zhangtianai/"
                          target="_blank"
                          title="张天爱"
                        >张天爱</a>
                      </h4>
                      <span>人气：26329</span>
                    </li>
                    <li style="display: none;">
                      <i>18</i>
                      <a href="http://www.ylq.com/neidi/liushishi/" target="_blank" title="刘诗诗">
                        <img
                          src="http://img.ylq.com/2014/1203/thumb_120_120_20141203142145580.jpg"
                          alt="刘诗诗"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a
                          href="http://www.ylq.com/neidi/liushishi/"
                          target="_blank"
                          title="刘诗诗"
                        >刘诗诗</a>
                      </h4>
                      <span>人气：24629</span>
                    </li>
                    <li style="display: none;">
                      <i>19</i>
                      <a href="http://www.ylq.com/neidi/matianyu/" target="_blank" title="马天宇">
                        <img
                          src="http://img.ylq.com/2016/1201/thumb_120_120_20161201025308788.png"
                          alt="马天宇"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a href="http://www.ylq.com/neidi/matianyu/" target="_blank" title="马天宇">马天宇</a>
                      </h4>
                      <span>人气：23329</span>
                    </li>
                    <li style="display: none;">
                      <i>20</i>
                      <a href="http://www.ylq.com/neidi/zenghongchang/" target="_blank" title="曾虹畅">
                        <img
                          src="http://img.ylq.com/2015/0331/thumb_120_120_20150331053308190.jpg"
                          alt="曾虹畅"
                          width="60"
                          height="60"
                        >
                      </a>
                      <h4>
                        <a
                          href="http://www.ylq.com/neidi/zenghongchang/"
                          target="_blank"
                          title="曾虹畅"
                        >曾虹畅</a>
                      </h4>
                      <span>人气：21948</span>
                    </li>
                  </ul>
                  <div class="tPage">
                    <span class="prev"></span>
                    <i class="iOn">1</i>
                    <i>2</i>
                    <i>3</i>
                    <i>4</i>
                    <span class="next nextOn"></span>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <div class v-if="num == 3">
          <div class="main">
            <div class="perBorder noPb">
              <div class="perData toPb">
               <Mrhdinfo :starInfo='starInfo' v-on:toInfo="toInfo"></Mrhdinfo>
              </div>
            </div>
            <!-- <div class="perBorder works">
              <div class="subNav">
                <ul>
                  <li class="on">
                    全部
                    <i></i>
                  </li>
                  <li>
                    电影
                    <i></i>
                  </li>
                  <li>
                    电视剧
                    <i></i>
                  </li>
                  <li>
                    综艺
                    <i></i>
                  </li>
                </ul>
                <p>
                  <span>
                    共有
                    <b>3</b>部作品
                  </span>
                  <span>
                    电影（
                    <b>0</b>）
                  </span>
                  <span>
                    电视剧（
                    <b>3</b>）
                  </span>
                  <span>
                    综艺（
                    <b>0</b>）
                  </span>
                </p>
              </div>
              <div class="content">
                <ul>
                  <li>
                    <a href="http://v.ylq.com/tv/76957/" title="裸嫁时代" target="_blank">
                      <div>
                        <span class="maxBg"></span>
                        <span class="playBtn"></span>
                      </div>
                      <img
                        src="http://img.ylq.com/2015/0803/thumb_220_290_20150803031610684.jpg"
                        alt="裸嫁时代"
                        width="110"
                        height="147"
                      >
                      <span class="tagTv">电视剧</span>
                      <span class="bg"></span>
                      <span class="info">38集全</span>
                      <span class="title">裸嫁时代</span>
                    </a>
                  </li>
                  <li>
                    <a href="http://v.ylq.com/tv/33522/" title="玫瑰园里的老少爷们儿" target="_blank">
                      <div>
                        <span class="maxBg"></span>
                        <span class="playBtn"></span>
                      </div>
                      <img
                        src="http://img.ylq.com/2015/0105/thumb_220_290_20150105084258901.jpg"
                        alt="玫瑰园里的老少爷们儿"
                        width="110"
                        height="147"
                      >
                      <span class="tagTv">电视剧</span>
                      <span class="bg"></span>
                      <span class="info">26集全</span>
                      <span class="title">玫瑰园里的老少爷们儿</span>
                    </a>
                  </li>
                  <li>
                    <a href="http://v.ylq.com/tv/32599/" title="江南锄奸" target="_blank">
                      <div>
                        <span class="maxBg"></span>
                        <span class="playBtn"></span>
                      </div>
                      <img
                        src="http://img.ylq.com/2015/0105/thumb_220_290_20150105083625768.jpg"
                        alt="江南锄奸"
                        width="110"
                        height="147"
                      >
                      <span class="tagTv">电视剧</span>
                      <span class="bg"></span>
                      <span class="info">30集全</span>
                      <span class="title">江南锄奸</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div> -->
          </div>
        </div>
        <div class v-if="num == 4">
          <div class="main">
            <div class="perBorder noPb">
             <Mrhdinfo :starInfo='starInfo' v-on:toInfo="toInfo"></Mrhdinfo>
            </div>
            <!-- <div class="perBorder works pic">
              <div class="subNav">
                <ul>
                  <li class="on">
                    全部
                    <i></i>
                  </li>
                  <li>
                    写真图片
                    <i></i>
                  </li>
                  <li>
                    影视剧照
                    <i></i>
                  </li>
                  <li>
                    现场活动
                    <i></i>
                  </li>
                  <li>
                    生活照
                    <i></i>
                  </li>
                  <li>
                    其它
                    <i></i>
                  </li>
                </ul>
              </div>
              <div class="p_content">
                <ul>
                  <li ref="38" style="display: list-item;">
                    <a
                      href="http://pic.ylq.com/a/0806/4607.html"
                      target="_blank"
                      title="邢宇菲写真曝光 演绎轻熟女优雅魅力"
                    >
                      <img
                        src="http://img.ylq.com/2015/0806/thumb_400_530_thumb_500_625_20150806104851957.jpg"
                        alt="邢宇菲写真曝光 演绎轻熟女优雅魅力"
                        width="200"
                        height="265"
                      >
                      <span class="desc">
                        <span>5张</span>
                      </span>
                      <p>邢宇菲写真曝光 演绎轻熟女优雅魅力</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import Mrtopmenu from "@/components/topmenu";
import Mrhdinfo from "@/components/hdinfo";
import utils from "@/assets/js/utils";
export default {
  data() {
    return {
      tabs: ["主页", "个人资料", "新闻", "作品", "图片"],
      num: 0,
      starInfo: {},
      des: ""
    };
  },
  components: {
    Mrtopmenu,
    Mrhdinfo
  },
  mounted() {
    this.getdata()
    this.xcxm()
    this.scroll();
  },
  methods: {
    async getdata() {
      let that = this;
      let id = that.$route.params.id;
      var data = await that.$api.article.starInfo(id);
      this.starInfo = data.data.data;
    },
    async xcxm(){
       let that = this
       let scene = '74'
       let appId = 'wx728595d5522a9204'
       let appOwnerId = 1
       let page = 'page/news/index'
       var data = await that.$api.article.makexcx(scene,appId,appOwnerId,page);
       console.log(data)
    },
    scroll() {
      $(function() {
        $(window).scroll(function() {
          var $this = $(this);
          var targetTop = $(this).scrollTop();
          if (targetTop >= 170) {
            $(".nav").addClass("fixedNav");
            $(".empty-placeholder").removeClass("hide");
          } else {
            $(".nav").removeClass("fixedNav");
            $(".empty-placeholder").addClass("hide");
          }
        });
      });
    },
    tab(index) {
      this.num = index;
    },
    toInfo(data) {
      this.tab(data);
    }
  }
};
</script>
<style lang="scss" scoped>
.nav {
  background-color: hsl(0, 79%, 68%);
  height: 50px;
  overflow: hidden;
  ul {
    width: 1000px;
    overflow: hidden;
    margin: 0 auto;
    li {
      color: hsl(0, 0%, 100%);
      font-size: 18px;
      margin-right: 24px;
      margin-top: 8px;
      padding: 5px 10px;
      cursor: pointer;
      &:hover {
        background-color: hsl(0, 58%, 50%);
        border-radius: 3px;
      }
    }
    .active {
      background-color: hsl(0, 58%, 50%);
      border-radius: 3px;
    }
  }
}
.fixedNav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}
.tabCon {
  max-width: 1000px;
  background: #fff;
  margin: 30px auto;
  text-align: left;
}

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
  span{
    margin-left: 10px;
    font-size: 18px;
    color: hsl(0, 0%, 60%);
    font-weight: normal;
  }
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
