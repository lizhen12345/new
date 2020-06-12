<template>
  <div>
    <input type="text" @keyup="debounce" />
    <div>
      <button @click="debounce1">点击</button>
      <p>{{en}}</p>
    </div>
    <div>
      当触发事件的时候，我们设置一个定时器，再次触发事件的时候，如果定时器存在，就不执行，直到delay时间后，定时器执行执行函数，并且清空定时器，这样就可以设置下个定时器。当第一次触发事件时，不会立即执行函数，而是在delay秒后才执行。而后再怎么频繁触发事件，也都是每delay时间才执行一次。当最后一次停止触发后，由于定时器的delay延迟，可能还会执行一次函数。
      当触发事件的时候，我们设置一个定时器，再次触发事件的时候，如果定时器存在，就不执行，直到delay时间后，定时器执行执行函数，并且清空定时器，这样就可以设置下个定时器。当第一次触发事件时，不会立即执行函数，而是在delay秒后才执行。而后再怎么频繁触发事件，也都是每delay时间才执行一次。当最后一次停止触发后，由于定时器的delay延迟，可能还会执行一次函数。
      节流中用时间戳或定当触发事件的时候，我们设置一个定时器，再次触发事件的时候，如果定时器存在，就不执行，直到delay时间后，定时器执行执行函数，并且清空定时器，这样就可以设置下个定时器。当第一次触发事件时，不会立即执行函数，而是在delay秒后才执行。而后再怎么频繁触发事件，也都是每delay时间才执行一次。当最后一次停止触发后，由于定时器的delay延迟，可能还会执行一次函数。
      当触发事件的时候，我们设置一个定时器，再次触发事件的时候，如果定时器存在，就不执行，直到delay时间后，定时器执行执行函数，并且清空定时器，这样就可以设置下个定时器。当第一次触发事件时，不会立即执行函数，而是在delay秒后才执行。而后再怎么频繁触发事件，也都是每delay时间才执行一次。当最后一次停止触发后，由于定时器的delay延迟，可能还会执行一次函数。
      节流中用时间戳或定当触发事件的时候，我们设置一个定时器，再次触发事件的时候，如果定时器存在，就不执行，直到delay时间后，定时器执行执行函数，并且清空定时器，这样就可以设置下个定时器。当第一次触发事件时，不会立即执行函数，而是在delay秒后才执行。而后再怎么频繁触发事件，也都是每delay时间才执行一次。当最后一次停止触发后，由于定时器的delay延迟，可能还会执行一次函数。
      当触发事件的时候，我们设置一个定时器，再次触发事件的时候，如果定时器存在，就不执行，直到delay时间后，定时器执行执行函数，并且清空定时器，这样就可以设置下个定时器。当第一次触发事件时，不会立即执行函数，而是在delay秒后才执行。而后再怎么频繁触发事件，也都是每delay时间才执行一次。当最后一次停止触发后，由于定时器的delay延迟，可能还会执行一次函数。
      节流中用时间戳或定时器都是可以的。更精确地，可以用时间戳+定时器，当第一次触发事件时马上执行事件处理函数，最后一次触发事件后也还会执行一次事件处理函数。节流中用时间戳或定时器都是可以的。更精确地，可以用时间戳+定时器，当第一次触发事件时马上执行事件处理函数，最后一次触发事件后也还会执行一次事件处理函数。
    </div>
  </div>
</template>

<script>
let timer1;
export default {
  data() {
    return {
      en: ""
    };
  },
  mounted() {
    window.addEventListener("scroll", this.throttle1(this.handle, 5000));
  },
  methods: {
    handle() {
      console.log(Math.random());
    },
    throttle(fun, delay) {
      //定时器实现节流功能
      var timer = null;
      return function() {
        var that = this;
        var args = arguments;
        //   console.log(args)
        if (!timer) {
          timer = setTimeout(()=>{
            fun.apply(that, args);
            timer = null;
          }, delay);
        }
      };
    },
    throttle1(fun, delay) {
      //时间戳实现节流函数
      var prev = 0;
      return function() {
        // var that = this;
        // var args = arguments;
        // console.log(args)
        var now = Date.now();
        if (now - prev >= delay) {
          fun.apply(this,arguments);
          prev = Date.now();
        }
      };
    },
    throttle2(fun, delay) {
      //时间戳+定时器实现节流函数
      var prev = 0;
      let timer = null
      return function() {
        var that = this;
        var args = arguments;
         // console.log(args)
        var now = Date.now();
        var remaining =delay-(now-prev)//距离规定时间还剩多少时间
        clearTimeout(timer)//清除之前设置的定时器
        if (remaining<=0) {
          fun.apply(that, args);
          prev = Date.now();
        }else{
            timer=setTimeout(function(){
                fun.apply(that,args)
            }, remaining);
        }
      };
    },
    debounce() {
      //非立即执行版防抖
      
      if (timer1) {
        clearTimeout(timer1);
      }
      timer1 = setTimeout(() => {
        console.log("防抖...");
        timer1 = null;
      }, 2000);
    },
    debounce1() {
      //立即执行防抖函数，适用于点赞，需要立即看到效果的这种，
    //   let timer1 = null
    // if(timer1) clearTimeout(timer1)
      if (!timer1) {
        this.en = "haha";
        console.log(1);
      }
      if(timer1) clearTimeout(timer1)
      
      timer1 = setTimeout(() => (timer1 = null), 2000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
