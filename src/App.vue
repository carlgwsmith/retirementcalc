<template>
  <div id="app">
    <div id="nav" class="row">
      <div class="col-sm-6 text-left">
        <div class="brand">
           Company Logo
        </div>
      </div>
      <div class="col-sm-6 text-right">
        <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Brygada+1918:wght@400;500;600;700&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* font-family: 'Brygada 1918', serif;
font-family: 'Work Sans', sans-serif; */

#app {
  font-family: 'Work Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: 
    /* top, transparent red, faked with gradient */ 
    linear-gradient(
      rgb(255, 255, 255), 
      rgba(216, 234, 255, 0.753)
    ),
    /* bottom, image */
    url("https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80");
  background-size:cover;
}
.brand{
  margin-top:auto;
  margin-bottom:auto;
  font-family: 'Brygada 1918', serif;
  font-weight:800;
  font-size:1.5em;
  color:#2c3e50;
}
#nav {
  padding: 30px;
  background-color:white;
  box-shadow:2px 2px 2px rgba(49, 49, 49, 0.322);
  margin-bottom:40px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
