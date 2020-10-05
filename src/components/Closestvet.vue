<template>
<div>
 <Header /> 
  <div class="ui grid">
    <div class="six wide column">
     <form class="ui segment large form">
      <div class="ui segment">
        <div class="field">
          <div class="ui right icon input large">
            <input type="text" placeholder="Konum bildirmeye izin verin" v-model="coordinates" />
            <i class="dot circle link icon" @click="locatorButtonPressed"></i>
          </div>
        </div>
        <div class="field">
          <div class="two fields">
            <div class="field">
              <select  v-model="type">
                <option value="" disabled selected>Seçiniz</option>
                <option value ="veterinary_care"  >Veterinerler</option>
              </select>
            </div>
            <div class="field">
              <select v-model="radius" required>
               <option value="" disabled selected>Uzaklık seçin..</option>
                <option value="5">5 KM</option>
                <option value="10">10 KM</option>
                <option value="15">15 KM</option>
                <option value="20">20 KM</option>
              </select>
            </div>
          </div>
        </div>
        <i class="ui button" @click="findCloseBuyButtonPressed">Ara</i>

      </div>
    </form>

    <div class="ui segment"  style="max-height:400px;overflow:scroll">
    <div class="ui divided items">
        <div class="item" v-for="place in places" :key="place.id">
            <div class="content">
                <div class="header">{{place.name}}</div>
                <div class="meta">{{place.vicinity}}</div >

            </div>
        </div>
    </div>
</div>
    </div>
    <div class="ten wide column segment ui" ref="map"><gmap-map     
         id="map"     
         ref="map"     
         :center="center"     
         :zoom="15"     
         map-type-id="roadmap"     
         style="width:100%;  height: 100%;">     
           <gmap-marker     
           :key="index"    
            v-for="(m, index) in markers"    
            :position="m.position"    
             @click="center=m.position"    
             ></gmap-marker>    
                </gmap-map>
            </div></div>
  </div>
  </div>
</template>

<script>

import axios from "axios";

import * as VueGoogleMaps from 'vue2-google-maps';
import Header from './Header.vue';

export default {
data() {
    return {
      lat: "lokasyon için",
      lng: "butona tıklayınız",
      type: "",
      radius: "",
      places: [],
    }
},
computed: {
    coordinates() {
      return `${this.lat}, ${this.lng}`;
    }
},
methods: {
  locatorButtonPressed() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      },
      error => {
        console.log("Error getting location");
      }
    );
  },

 findCloseBuyButtonPressed() {
	const URL = `https:\/\/cors-anywhere.herokuapp.com/https:\/\/maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.lat},${this.lng}&type=${this.type}&radius=${this.radius *1000}&key=AIzaSyB4SZ6gT2aAO1EAs4Aw0FNMGm32IFgwxN8`;
	axios.get(URL).then(response => {
  		this.places = response.data.results;
  		this.addLocationsToGoogleMaps();
  	}).catch(error => {
  		console.log(error.message);
  	});
  },
     async addLocationsToGoogleMaps() {
    var map = new google.maps.Map(this.$refs['map'], {
      zoom: 15,
      center: new google.maps.LatLng(this.lat, this.lng),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  const infoWindow = new google.maps.InfoWindow();
  this.places.forEach(place => {
      const lat = place.geometry.location.lat;
      const lng = place.geometry.location.lng;
      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: map
      });
      
    });
  }
},
name: 'Closestvet',

components:{
  'Header':Header,
}
}
</script>
<style>
.ui grid {
 background-color: #252525;
}
.ui.button,
.dot.circle.icon {
  background-color: #b63808;
  color: white;
 
}
.pac-icon {
  display: none;
}
.pac-item {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
.pac-item:hover {
  background-color: #ececec;
}
.pac-item-query {
  font-size: 16px;
}
.six wide column {
background-color: #252525;
}

.ui segment {
  background-color: #252525;
}
.ui.column.grid>[class*="six wide"].column, .ui.grid>.column.row>[class*="six wide"].column, .ui.grid>.row>[class*="six wide"].column, .ui.grid>[class*="six wide"].column {
    width: 37.5%!important;
    background-color: #252525;
}
body {
  background:#252525;
}
.ui.segment:last-child { 
background:#252525}

.ui.large.form  {
background:#252525 }

.ui.items>.item>.content>.header {
  color:#FF8620
  }
  .ui.items>.item .meta {
 color:#FF8620   }
 .select scoped{
    -moz-appearance: default;
    -webkit-appearance: default!important; 
}
</style>