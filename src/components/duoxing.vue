<template>
  <div class="duoxing" ref="duoxing">
    <img v-for="(item,index) in arr" :src="item" @click="dianji(index)" :key="index" />
  </div>
</template>

<script>
export default {
  name: "duoxing",
//   props: {
//     process: {
//       type: Number
//     }
//   },
  data() {
    return {
      arr: [
        "../static/img/star48_off@2x.png",
        "../static/img/star48_off@2x.png",
        "../static/img/star48_off@2x.png",
        "../static/img/star48_off@2x.png",
        "../static/img/star48_off@2x.png"
      ]
    };
  },
//   computed: {
//     computeItem() {
//       //   console.log(this.process)
//       var zhengshu = parseInt(this.process);
//       var arr = [];
//       for (let i = 0; i < zhengshu; i++) {
//         arr.push("../static/img/star48_on@2x.png");
//       }
//       var yushu = this.process - zhengshu;
//       if (yushu !== 0) arr.push("../static/img/star48_half@2x.png");
//       for (let i = arr.length; i < 5; i++) {
//         arr.push("../static/img/star48_off@2x.png");
//       }
//       return arr;
//     }
//   },
  methods: {
    dianji(index) {
      for (let i = 0; i <= index; i++) {
        this.$set(this.arr, i, "../static/img/star48_on@2x.png");
      }
      for(let i=index+1;i<5;i++){
          this.$set(this.arr, i, "../static/img/star48_off@2x.png")
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.duoxing {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
