<template>
		<swiper :options="swiperOption" ref="mySwiper" id="swiper-container">
	    <!-- slides -->
	    <swiper-slide>
        <swiper :options="swiperOption2" ref="mySwiper" id="swiper-container2">
          <!-- slides -->
          <swiper-slide>I'm Slide 1</swiper-slide>
          <swiper-slide>I'm Slide 2</swiper-slide>
          <swiper-slide>I'm Slide 3</swiper-slide>
          <swiper-slide>I'm Slide 4</swiper-slide>
          <swiper-slide>I'm Slide 5</swiper-slide>
          <swiper-slide>I'm Slide 6</swiper-slide>
          <swiper-slide>I'm Slide 7</swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination2"  slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
          <!-- <div class="swiper-button-next" slot="button-next"></div> -->
          <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
      </swiper-slide>
	    <swiper-slide>I'm row1 Slide 2</swiper-slide>
	    <swiper-slide>I'm row1 Slide 3</swiper-slide>
	    <swiper-slide>I'm row1 Slide 4</swiper-slide>
	    <swiper-slide>I'm row1 Slide 5</swiper-slide>
	    <swiper-slide>I'm row1 Slide 6</swiper-slide>
	    <swiper-slide>I'm row1 Slide 7</swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
	    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
	    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
	  </swiper>
</template>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		data(){
			return{
				swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 0,
          direction : 'vertical',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          // scrollbar:'.swiper-scrollbar',
          mousewheelControl : true,
          observeParents:true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart(swiper){
            console.log(swiper.activeIndex)
          },
          // more Swiper configs and callbacks...
          // ...
        },

      swiperOption2: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: false,
          pagination : '.swiper-pagination2',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          // scrollbar:'.swiper-scrollbar',
          mousewheelControl : false,
          observeParents:true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart(swiper){
            console.log(swiper.activeIndex)
          },
          // more Swiper configs and callbacks...
          // ...
      }
			}
		},
    components:{
    	swiper,
    	swiperSlide
    },
    created(){
      this.$http.get('http://192.168.10.166:8081/static/test.json',{},{}).then(function (response) {
        console.log(response.body.a);
      })
    }
	}
</script>
<style>
	#swiper-container2{
    height: 100%;
  }
</style>