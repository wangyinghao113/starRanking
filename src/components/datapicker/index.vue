<template>
  <div class="date-picker" @click.stop>
    <input class="input" v-model="dateValue" @click="openPanel"/>
    <!-- 动画特效 -->
    <transition name="fadeDownBig">
      <div class="date-panel" v-show="panelState">
        <div class="topbar">
          <!-- <span @click="leftBig">&lt;&lt;</span> -->
          <span @click="left">&lt;</span>
          <span class="year" @click="panelType = 'year'">{{tmpYear}}</span>
          <span class="month" @click="panelType = 'month'">{{changeTmpMonth}}</span>
          <span @click="right">&gt;</span>
          <!-- <span @click="rightBig">&gt;&gt;</span> -->
        </div>
        <!-- 年面板 -->
        <div class="type-year" v-show="panelType === 'year'">
          <ul class="year-list">
            <li v-for="(item, index) in yearList"
                :key="index"
                @click="selectYear(item)"
            >
              <span :class="{selected: item === tmpYear}" >{{item}}</span>
            </li>
          </ul>
        </div>
        <!-- 月面板 -->
        <div class="type-year" v-show="panelType === 'month'">
          <ul class="year-list">
            <li v-for="(item, index) in monthList"
                :key="index"
                @click="selectMonth(item)"
            >
              <span :class="{selected: item.value === tmpMonth}" >{{item.label}}</span>
            </li>
          </ul>
        </div>
        <!-- 日期面板 -->
        <div class="date-group" v-show="panelType === 'date'">
            <div class="flexbox">
                <div v-for="(item, index) in weekList" :key="index" class="weekday">{{item.label}}</div>
            </div>
          
          <ul class="date-list">
            <li v-for="(item, index) in dateList"
                v-text="item.value"
                :class="{preMonth: item.previousMonth, nextMonth: item.nextMonth,
                selected: date === item.value && month === tmpMonth && item.currentMonth, invalid: validateDate(item)}"
                :key="index" 
                @click="selectDate(item)">
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateValue: "", // 输入框显示日期
      date: new Date().getDate(), // 当前日期
      panelState: false, // 初始值，默认panel关闭
      month: new Date().getMonth(),
      tmpMonth: new Date().getMonth(), // 临时月份，可修改
      tmpYear: new Date().getFullYear(), // 临时年份，可修改
      weekList: [
        { label: "日", value: 0 },
        { label: "一", value: 1 },
        { label: "二", value: 2 },
        { label: "三", value: 3 },
        { label: "四", value: 4 },
        { label: "五", value: 5 },
        { label: "六", value: 6 }
      ], // 周
      monthList: [
        { label: "01月", value: 0 },
        { label: "02月", value: 1 },
        { label: "03月", value: 2 },
        { label: "04月", value: 3 },
        { label: "05月", value: 4 },
        { label: "06月", value: 5 },
        { label: "07月", value: 6 },
        { label: "08月", value: 7 },
        { label: "09月", value: 8 },
        { label: "10月", value: 9 },
        { label: "11月", value: 10 },
        { label: "12月", value: 11 }
      ], // 月
      nowValue: 0, // 当前选中日期值
      panelType: "date" // 面板状态
    };
  },
  props: {
    value: {
      type: [Date, String],
      default: ""
    },
    format: {
      type: String,
      default: "yyyy-MM-dd"
    }
  },
  computed: {
    dateList() {
      //获取当月的天数
      let currentMonthLength = new Date(
        this.tmpYear,
        this.tmpMonth + 1,
        0
      ).getDate();
      //先将当月的日期塞入dateList
      let dateList = Array.from(
        { length: currentMonthLength },
        (val, index) => {
          return {
            currentMonth: true,
            value: index + 1
          };
        }
      );
      // 获取当月1号的星期是为了确定在1号前需要插多少天
      let startDay = new Date(this.tmpYear, this.tmpMonth, 1).getDay();
      // 确认上个月一共多少天
      let previousMongthLength = new Date(
        this.tmpYear,
        this.tmpMonth,
        0
      ).getDate();
      // 在1号前插入上个月日期
      for (let i = 0, len = startDay; i < len; i++) {
        dateList = [
          { previousMonth: true, value: previousMongthLength - i }
        ].concat(dateList);
      }
      // 补全剩余位置
      for (let i = 1, item = 1; i < 15; i++, item++) {
        dateList[dateList.length] = { nextMonth: true, value: i };
      }
      return dateList;
    },
    changeTmpMonth() {
      return this.monthList[this.tmpMonth].label;
    },
    yearList() {
      return Array.from({ length: 12 }, (value, index) => this.tmpYear + index);
    }
  },
  mounted() {
    if (this.value) {
        console.log(this.value +'111')
      this.dateValue = this.formatDate(new Date(this.value).getTime());
    }
    window.addEventListener("click", this.eventListener);
  },
  methods: {
    openPanel() {
      this.panelState = !this.panelState;
      this.panelType = "date";
    },
    left() {
      if (this.panelType === "year") this.tmpYear--;
      else {
        if (this.tmpMonth === 0) {
          this.tmpYear--;
          this.tmpMonth = 11;
        } else this.tmpMonth--;
      }
    },
    leftBig() {
      if (this.panelType === "year") this.tmpYear -= 12;
      else this.tmpYear--;
    },
    right() {
      if (this.panelType === "year") this.tmpYear++;
      else {
        if (this.tmpMonth === 11) {
          this.tmpYear++;
          this.tmpMonth = 0;
        } else this.tmpMonth++;
      }
    },
    rightBig() {
      if (this.panelType === "year") this.tmpYear += 12;
      else this.tmpYear++;
    },
    eventListener() {
      this.panelState = false;
    },
    validateDate(item) {
      if (this.nowValue === item.value && item.currentMonth) return true;
    },
    selectDate(item) {
      this.nowValue = item.value;
      if (item.previousMonth) this.tmpMonth--;
      if (item.nextMonth) this.tmpMonth++;
      let selectDay = new Date(this.tmpYear, this.tmpMonth, this.nowValue);
      //console.log(selectDay.getTime())
      this.dateValue = this.formatDate(selectDay.getTime());
      this.panelState = !this.panelState;
      this.$emit("input", selectDay);
    },
    selectYear(item) {
      this.tmpYear = item;
      this.panelType = "month";
    },
    selectMonth(item) {
      this.tmpMonth = item.value;
      this.panelType = "date";
    },
    formatDate(date, fmt = this.format) {
      // 长度为10的时候末尾补3个0
      if (date === null || date === "null") {
        return "--";
      }
      date = new Date(Number(date));
      var o = {
        "M+": date.getMonth() + 1, // 月份
        "d+": date.getDate(), // 日
        "h+": date.getHours(), // 小时
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds() // 毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length === 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
      }
      return fmt;
    }
  },
  destroyed() {
    window.removeEventListener("click", this.eventListener);
  }
};
</script>
<style scoped>
.topbar {
  padding-top: 8px;
}
.topbar span {
  display: inline-block;
  width: 20px;
  height: 30px;
  line-height: 30px;
  color: #515a6e;
  cursor: pointer;
}
.topbar span:hover {
  color: #2d8cf0;
}
.topbar .year,
.topbar .month {
  width: 60px;
}
.year-list {
  height: 200px;
  width: 210px;
}
.year-list .selected {
  background: #2d8cf0;
  border-radius: 4px;
  color: #fff;
}
.year-list li {
  display: inline-block;
  width: 70px;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  cursor: pointer;
}
.year-list span {
  display: inline-block;
  line-height: 16px;
  padding: 8px;
}
.year-list span:hover {
  background: #e1f0fe;
}
.date-group{
    width: 100%;
}
.weekday {
  display: inline-block;
  font-size: 13px;
  width: 28px;
  color: #c5c8ce;
  text-align: center;
}
.date-picker {
    position: relative;
  width: 200px;
  text-align: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.date-panel {
  width: 200px;
  box-shadow: 0 0 8px #ccc;
  background: #fff;
  position: absolute;
  z-index: 100;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.date-list {
  width: 210px;
  text-align: left;
  height: 180px;
  overflow: hidden;
  margin-top: 4px;
}
.date-list li {
  display: inline-block;
  width: 28px;
  height: 28px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  color: #000;
  border: 1px solid #fff;
  border-radius: 4px;
}
.date-list .selected {
  border: 1px solid #2d8cf0;
}
.date-list .invalid {
  background: #2d8cf0;
  color: #fff;
}
.date-list .preMonth,
.date-list .nextMonth {
  color: #c5c8ce;
}
.date-list li:hover {
  background: #e1f0fe;
}
input {
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  line-height: 1.5;
  padding: 4px 7px;
  font-size: 12px;
  border: 1px solid #dcdee2;
  border-radius: 4px;
  color: #515a6e;
  background-color: #fff;
  background-image: none;
  position: relative;
  cursor: text;
  transition: border 0.2s ease-in-out, background 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  margin-bottom: 6px;
}
.fadeDownBig-enter-active,
.fadeDownBig-leave-active,
.fadeInDownBig {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.fadeDownBig-enter-active {
  -webkit-animation-name: fadeInDownBig;
  animation-name: fadeInDownBig;
}
.fadeDownBig-leave-active {
  -webkit-animation-name: fadeOutDownBig;
  animation-name: fadeOutDownBig;
}
@-webkit-keyframes fadeInDownBig {
  from {
    opacity: 0.8;
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInDownBig {
  from {
    opacity: 0.8;
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@-webkit-keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.8;
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}
@keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
