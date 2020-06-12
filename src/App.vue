<template>
  <div id="app">
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="incrementAsync">延时增加</button>
    <button @click="reset">重置</button>
    <p>{{count}}</p>
    <p>{{isEvenOdd}}</p>
    <!-- <table>
      <thead>
        <tr>
          <th>row1</th>
          <th>row2</th>
          <th>row3</th>
          <th>row4</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in  dealData()" :key="index">
          <td :rowspan="item.row1Rowspan" v-if="item.row1Show">{{item.row1}}</td>
          <td :rowspan="item.row2Rowspan" v-if="item.row2Show">{{item.row2}}</td>
          <td :rowspan="item.row3Rowspan" v-if="item.row3Show">{{item.row3}}</td>
          <td :rowspan="item.row4Rowspan" v-if="item.row4Show">{{item.row4}}</td>
        </tr>
      </tbody>
    </table> -->
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import deepClone from './clone/deepClone'
export default {
  name: "App",

  data() {
    return {
      testTableData: [
        {
          row1: "南京",
          row2: "无锡",
          row3: "盐城",
          row4: "杭州"
        },
        {
          row1: "南京",
          row2: "无锡",
          row3: "盐城",
          row4: "常州"
        },
        {
          row1: "上海",
          row2: "无锡",
          row3: "盐城",
          row4: "杭州"
        },
        {
          row1: "上海",
          row2: "苏州",
          row3: "盐城",
          row4: "合肥"
        },
        {
          row1: "上海",
          row2: "苏州",
          row3: "台州",
          row4: "常州"
        }
      ]
    };
  },

  computed: {
    ...mapGetters(["count", "isEvenOdd"])
  },
  methods: {
    ...mapActions(["increment", "decrement", "incrementAsync", "reset"]),
    dealData() {
      var temp = deepClone(this.testTableData)//this.testTableData.map(o => ({ ...o }));
      let startIndex = 0;
      Object.keys(this.testTableData[0]).forEach(item => {
        this.recursiveFn(startIndex, item, temp);
      });

      return temp;
    },
    recursiveFn(startIndex, key, temp) {
      if (startIndex == temp.length) {
        return;
      }
      for (let index = startIndex; index < temp.length; index++) {
        temp[index][`${key}Rowspan`] = 1;
        temp[index][`${key}Show`] = false;
        if (
          !temp[index + 1] ||
          temp[index][key] !== temp[index + 1][key]
        ) {
          temp[startIndex][`${key}Rowspan`] = index - startIndex + 1;
          temp[startIndex][`${key}Show`] = true;
          startIndex = index + 1;
          break;
        }
      }
      if (startIndex < temp.length) {
        this.recursiveFn(startIndex, key, temp);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table {
  width: 100%;
  border: 1px solid #ccc;
  border-collapse: collapse;
}
thead th {
  text-align: left;
  background-color: #fafafa;
}
th,
td {
  padding-left: 20px;
  border: 1px solid #e9eaec;
  line-height: 30px;
  height: 50px;
}
</style>