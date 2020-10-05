<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
        
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; </a>
    <a class="next" @click="next" href="#">&#10095; </a>
  </div>
</template>
<script>

export default {
  name: 'Slider',
  data() {
    return {
      images: [
      "https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/07/13/10/20/cat-3535404_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>
<style>
.fade-enter-active{

 transition: all 0.9s ease-in ;
  overflow: hidden;
  visibility: visible;

  width:100%;
  opacity: 1;}

.fade-leave-active {
 
  overflow: hidden;
  visibility: visible;

  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
 width:100%;
  opacity: 0.5;
}

img {

  height:100%;
  width:100%
}

.prev, .next {position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    border: 1px solid #FFFFFF  ;
    color: #FFFFFF  ;
    border-radius: 50%;
    margin-top: -25px;
    margin-left: 25px;
    cursor: pointer;
    line-height: 48px;
    text-align: center;
    text-indent: -2px;
    transition: all 0.2s ease-out;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: #FFFFFF ;
}
</style>