<template>
<div>
  <Header />
  
  <Slider />   
 <Footer /> 
  </div>
</template>

<script>
import Header from './Header.vue';
import Slider from './Slider.vue';
import Footer from './Footer.vue';
export default {
  name: 'Home',
components:{
  'Header':Header,
  'Slider':Slider,
  'Footer':Footer,
}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0px;
}
a {
  color: #42b983;
}
</style>
