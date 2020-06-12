<template>
  <div class="xingxing" ref="xingxing">
    <duoxing></duoxing>
  </div>
</template>

<script>
import duoxing from "./duoxing";
export default {
  name: "xingxing",
  components: {
    duoxing
  },
  // data(){
  //   return{
  //       process:0
  //   }
  // },
  // methods: {
  //   dianji() {
  //     var xingxing = this.$refs.xingxing;
  //     // console.log(xingxing);
  //     var that = this;
  //     xingxing.onclick = function(e) {
  //       var x = e.offsetX;
  //       var wid = xingxing.offsetWidth;
  //        console.log(x,wid)
  //       var zhengshu = Math.floor((x * 5) / wid);
  //       // console.log(zhengshu)
  //       var yushu = (x * 5) / wid - zhengshu > 0.5 ? 0.5 : 0;
  //       that.process = zhengshu + yushu;
  //       // console.log(that.process)
  //     };
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.xingxing {
  width: 300px;
  height: 40px;
}
</style>
