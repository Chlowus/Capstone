<template>
  <nav>
    <div class="wrapper">
      <NavComp/>
      <main>
      <router-view />
    </main>
    <FooterComp class=""/>
  </div>
</nav>
</template>
<script>
import NavComp from '@/components/NavComp.vue'
import FooterComp from '@/components/FooterComp.vue'

// import HomeView from '@/views/HomeView.vue'
export default{
  components:{
    NavComp,
    FooterComp
  }
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@200..700&display=swap');

body{
  display: block;
  margin: 0px;
  background-color: #F4F1E8;
}

</style>
