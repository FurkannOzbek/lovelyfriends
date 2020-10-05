<template>
<div>
  <Header /> 

<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>{{dog.title}}</h2>
      <h5>{{dog.date}}</h5>
     <div class="parallax" :style="{ backgroundImage: 'url(' + dog.img_path + ')' }"> 
     </div>
      <p></p>
      <p>{{dog.content1}}</p>
    </div>
    
  </div>
  
</div>

  <Footer /> 
</div>

  </div>
</template>
<script>

import Header from './Header.vue';
import Slider from './Slider.vue';
import Footer from './Footer.vue';
import Dogs from './Dogs.vue';
import json from '../DogBlogs.json';

export default {
	data(){
return{ DogBlogs: json		
}
},
created () { 
    this.dog = this.DogBlogs.find(d=>d.id === this.$route.params.id);
    this.path = this.dog.img_path ; 
},
name: 'DogBlogs',
components:{
  'Header':Header,
  'Footer':Footer,
  'Dogs':Dogs,
}
};
</script>  
<style> 
.fakeimg {
  background-color: #aaa;
  width: 100%;
    height: 100%;
  padding: 20px;
}
.body {
  font-family: Arial;
  padding: 20px;
  background: #f1f1f1;
}
.header {
  padding: 30px;
  font-size: 40px;
  text-align: center;
  background: white;
}


.fakeimg {
  background-color: #aaa;
  width: 100%;
  height: 100%;
  padding: 20px;
}

.card {
  background-color: #303030;
  padding: 20px;
  margin-right: 200px;
  margin-left: 200px;
  margin-top: 50px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
.row {
	font-family: "Berkshire Swash";
	color:#FF8620;
}


@media screen and (max-width: 800px) {
  .leftcolumn, .rightcolumn {
    width: 100%;
    padding: 0;
  }
}
.parallax {
  background-image: url("$path");
  height: 300px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
</style> 