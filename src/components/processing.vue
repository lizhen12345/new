<template>
<div>
    <div class="slider" ref="slider">
    <div class="process"></div>
    <div class="thunk" ref="thunk">
      <div class="block"></div>
      <div class="tips">
        <span>{{jindu}}</span>
        <i></i>
      </div>
    </div>
  </div>
  <xingxing></xingxing>
</div>
</template>

<script>
import xingxing from './xingxing'
export default {
  name: "processing",
  components:{
    xingxing
  },
  props: {
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    value: {
      type: Number
    }
  },
  data() {
    return {
      jindu: 5
    };
  },
  computed: {
    computeJindu() {
      console.log(this.jindus);
      return this.jindu;
    }
  },
  mounted() {
    var slider = this.$refs.slider;
    var thunk = this.$refs.thunk;
    var that = this;
    slider.onclick = function(e) {
      var xClick = e.offsetX;
      thunk.style.left = xClick - thunk.offsetWidth / 2 + "px";
      document.getElementsByClassName("process")[0].style.width = xClick + "px";
      that.jindu = Math.ceil(
        (xClick * 100) / (slider.offsetWidth)
      );
    };
    thunk.onmousedown = function(e) {
      var dx = e.offsetX;
      document.onmousemove = function(e) {
        var x = e.clientX - dx;
        if (x > slider.offsetWidth) {
          x = slider.offsetWidth - thunk.offsetWidth / 2;
        } else if (x < 0) {
          x = 0;
        }
        thunk.style.left = x + "px";
        document.getElementsByClassName("process")[0].style.width = x + "px";
        that.jindu = Math.ceil(
          (x * 100) / (slider.offsetWidth - thunk.offsetWidth / 2)
        );
        //  console.log(this.jindu)
      };
      document.onmouseup = function(e) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  margin: 100px auto 0;
  width: 80%;
}
.clear:after {
  content: "";
  display: block;
  clear: both;
}
.slider {
  position: relative;
  margin: 20px 0;
  width: 400px;
  height: 10px;
  background: #e4e7ed;
  border-radius: 5px;
  cursor: pointer;
}
.slider .process {
  position: absolute;
  left: 0;
  top: 0;
  width: 0px;
  height: 10px;
  border-radius: 5px;
  background: #409eff;
}
.slider .thunk {
  position: absolute;
  left: 0px;
  top: -7px;
  width: 20px;
  height: 20px;
}
.slider .block {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #409eff;
  background: rgba(255, 255, 255, 1);
  transition: 0.2s all;
}
.slider .tips {
  position: absolute;
  left: -7px;
  bottom: 30px;
  min-width: 15px;
  text-align: center;
  padding: 4px 8px;
  background: #000;
  border-radius: 5px;
  height: 24px;
  color: #fff;
}
.slider .tips i {
  position: absolute;
  margin-left: -5px;
  left: 50%;
  bottom: -9px;
  font-size: 16px;
  color: #000;
}
.slider .block:hover {
  transform: scale(1.1);
  opacity: 0.6;
}
</style>
