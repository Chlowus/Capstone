<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Sauces</router-link> |
    <router-link to="/about">Cart</router-link> |
    <router-link to="/about">Login</router-link> |
    <router-link to="/about">About Us</router-link> |
    <router-link to="/about">Contact Us</router-link> |
    <router-link to="/about">Admin</router-link>
  </nav>
  <router-view/>
  <FooterComp class=""/>
</template>
<script>
// import NavBarComp from '@/components/NavBarComp.vue'
import FooterComp from '@/components/FooterComp.vue'

// import HomeView from '@/views/HomeView.vue'
export default{
  components:{
    // NavBarComp,
    FooterComp
  }
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@200..700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
