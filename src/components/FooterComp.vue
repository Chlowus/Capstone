<template>
    <footer class="sticky-bottom">
        <img src="https://chlowus.github.io/Nodejs.pictures/Capstone/footer.png" alt="#" class="footer-image">
        <div class="logo">
            <img src="https://chlowus.github.io/Nodejs.pictures/Capstone/Rubins%20LOGO.png" alt="#" class="logo-image">
        </div>
        <div class="fter-nav">

            <router-link
              class="nav-link"
              :class="{ active: activeLink === 'product' }"
              to="/product"
              @click="setActive('product')"
              >Product</router-link
            >

            <router-link
              class="nav-link"
              :class="{ active: activeLink === 'product' }"
              to="/product"
              @click="setActive('product')"
              >Product</router-link
            >

            <router-link
              class="nav-link"
              :class="{ active: activeLink === 'product' }"
              to="/product"
              @click="setActive('product')"
              >Product</router-link
            >

        </div>
        <p class="c">&copy; {{year()}} Company, Inc</p>
    </footer>
</template>

<script>
export default {
    methods:{
        year(){
            return new Date().getFullYear();
        }
    }
}
</script>

<style scoped>
footer {
    position: relative; 
    background-color: #000; 
    width: 100.41vw;
    height: 25vw;
    margin-left: -2vw;
    margin-bottom: 0; 
}

.footer-image {
    position: absolute; 
    top: -12vw;
    left: 0;
    width: 100%; 
    height: 90%; 
    object-fit: cover; 
}

body {
    margin: 0; 
    padding: 0;
}

.logo {
    position: absolute;
    left: 2vw; 
    top: 65%; 
    transform: translateY(-50%);
}

/* Adjust the size of the logo here */
.logo-image {
    width: 15vw; /* Adjust width as needed */
    height: auto; /* Keeps the aspect ratio */
}

.fter-nav {
    /* Add styles for the container div */
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    margin-left: 20vw;
    gap: 4vw;
    padding: 20px;
  }
  
  .nav-link {
    /* Style the router links */
    color: #fff; /* Change the text color */
    text-decoration: none; /* Remove underline */
    margin: 0vw; /* Add some margin between links */
    transition: color 0.2s ease; /* Add a transition effect */
    margin-top: 14vw;
  }
  
  .nav-link:hover {
    /* Style the hover state */
    color: #ccc; /* Change the text color on hover */
  }
  
  .nav-link.active {
    /* Style the active state */
    color: #fff; /* Change the text color when active */
    font-weight: bold; /* Make the text bold when active */
  }

</style>
