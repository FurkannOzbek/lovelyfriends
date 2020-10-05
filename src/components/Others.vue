<template>
<div>
  <Header /> 
  fs  
 <Footer /> 
  </div>
</template>

<script>
import Header from './Header.vue';
import Slider from './Slider.vue';
import Footer from './Footer.vue';
export default {
  name: 'Others',
components:{
  'Header':Header,
  'Slider':Slider,
  'Footer':Footer,
}
};
</script>