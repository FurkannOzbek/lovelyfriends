<template>
<div>
  <Header /> 
 <div class="parallax"></div>
 <div class="jumbotron"><h1><i class="fa fa-home" aria-hidden="true" ></i> Sahiplendirme</h1>
 <v-row>
    <v-col cols="12" m="3" offset-sm="0">
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="data in Rehome" :data="data" :key="data.id" 
              class="d-flex child-flex"
              cols="3"
            >
              <v-card
    class="mx-auto"
    
  >
    <v-img
      class="white--text align-end"
      height="300px"
      :src=data.img_path
    >
  
    </v-img>

    <v-card-subtitle class="pb-2" font-size="25px"> {{data.type}}</v-card-subtitle>

    <v-card-text class="text--primary" style="padding-top:5px"
>
      <div>{{data.name}}</div>
 </v-card-text>
  <v-card-text class="text--primary" style="padding-top:5px"
>
      <div>{{data.age}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        class="button1"
      >
      <a :href= data.wano >
      <i class="fa fa-whatsapp" style="font-size:35px" aria-hidden="true" ></i></a>
      </v-btn>

      <v-card-subtitle class="pb-1" font-size="15px" > {{data.city}}</v-card-subtitle>
    </v-card-actions>
  </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row></div>

 <Footer /> 
  </div>
</template>

<script>
import Header from './Header.vue';
import json from '../Rehome.json';
import Slider from './Slider.vue';
import Footer from './Footer.vue';
export default {
  data(){

return{ Rehome: json
}
},
  name: 'Rehome',
components:{
  'Header':Header,
  'Footer':Footer,
},
};
</script>

<style>
.parallax {
  /* The image used */
  background-image: url("https://cdn.pixabay.com/photo/2018/04/09/08/40/portrait-3303470_1280.jpg");

  /* Set a specific height */
  height: 500px;

  /* Create the parallax scrolling effect */
  
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
div.jumbotron {
	background-color:#252525;
	font-family: "Berkshire Swash";
	color:#FF8620;
	margin-bottom:0px;
  

}
.d-flex{
  background-color:#252525;
}
.caption {
    /* Make the caption a block so it occupies its own line. */
    display: block;
}
.container{
  margin-top:50px;
  background-color:#252525;
}
.parallax {
  /* The image used */
  background-image: url("https://cdn.pixabay.com/photo/2018/04/09/08/40/portrait-3303470_1280.jpg");

  /* Set a specific height */
  height: 500px;

  /* Create the parallax scrolling effect */
  
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
h1  {
     font-family: "Berkshire Swash" !important;
  }
  div.gendericon {
margin-left:130px; 
background-color:pink;
color:red; }
.pb-2 {
  font-size:25px;
  margin-bottom:15px;
}
.text--primary{
  font-size:20px;

}
.theme--light.v-card .v-card__subtitle, .theme--light.v-card>.v-card__text {
    color: rgb(182 56 8);}
.theme--light.v-card {
background-color:#00000073;
}
.v-btn__content{
  color:rgb(182 56 8);
}
.button2{

float:right;
color:green;
left:0;
}
.fa-whatsapp{
  color:green;
}
.fa-whatsapp:hover{
  color:white;
 opacity: 0.6;
  transition: 0.3s;
}
.pb-1 {
  font-size:25px;
margin-bottom:15px;}
</style>
