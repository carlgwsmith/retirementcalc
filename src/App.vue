<template>
  <div id="app">
    <div id="nav" class="row">
      <div class="col-6 text-left">
        <div class="brand">
           Company Logo
        </div>
      </div>
      <div class="col-6 text-right">
        <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view class="defaults"/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Brygada+1918:wght@400;500;600;700&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* font-family: 'Brygada 1918', serif;
font-family: 'Work Sans', sans-serif; */
*{
  margin:0 !important;
}
#app {
  font-family: 'Work Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: 
    /* top, transparent red, faked with gradient */ 
    linear-gradient(
      rgb(255, 255, 255), 
      rgba(238, 246, 255, 0.877)
    ),
    /* bottom, image */
    url("https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80");
  background-size:cover;
}
.defaults{
  padding:40px;
  min-height: 100vh;
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
input {
    margin-bottom: 16px !important;
}
#nav a.router-link-exact-active {
  color: #0de4b5;
}
.wizard-icon-container {
    margin: -1px !important;
    border-radius: 100% !important;
}
.slide-in-left {
	-webkit-animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.fade-in {
	-webkit-animation: fade-in 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s both;
  animation: fade-in 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s both;
}

@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
