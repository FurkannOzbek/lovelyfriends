  <template>
 <div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/"><img class="img-responsive2"       
       src="../assets/lovelyfriend.png"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" ><router-link to="/">Anasayfa <span class="sr-only">(current)</span></router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"> <router-link to="/Rehome">Sahiplendirme</router-link></a>

      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dostlarımız
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" ><router-link to="/Cats">Kediler</router-link></a>
          <a class="dropdown-item" ><router-link to="/Dogs">Köpekler</router-link></a>
          <div class="dropdown-divider"></div>
          
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/Closestvet">En Yakın Veteriner</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/Contact">İletişim</router-link></a>
      </li>
      
    </ul>
   
  </div>
</nav>
</div>
</template>
<style>
a{
	color:#e8e3e3!important;
}
a:hover{
	color:#b63808!important;
}
img.img-responsive2 {
	width:110px;
	height:90px;
	margin-left:100px;
}
.bg-dark{
	
	background-color:#252525!important;
}
.navbar-collapse {
	margin-left : 230px;
	position:center;
	font-family: "Berkshire Swash", Helvetica, sans-serif;color: #2b2b2b; font-size: 20px;

}
.navbar-dark .navbar-nav .nav-link {
	margin-left:50px;
}
.dropdown:hover .dropdown-menu {
  display: block;
  background-color:#252525;
  max-width: 160px;
  margin-left:50px
}
.dropdown-item {
	color:#b63808;
}

</style>

