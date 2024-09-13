<template>
  <footer class="sticky-bottom">
      <img src="https://chlowus.github.io/Nodejs.pictures/Capstone/footer.png" alt="#" class="footer-image">
      <div class="logo">
          <img src="https://chlowus.github.io/Nodejs.pictures/Capstone/Rubins%20LOGO.png" alt="#" class="logo-image">
      </div>
      <div class="nav-links">
          <router-link
            class="nav-link"
            :class="{ active: activeLink === 'product' }"
            to="/product"
            @click="setActive('product')"
            >Sauces</router-link
          >

          <router-link
            class="nav-link"
            :class="{ active: activeLink === 'product' }"
            to="/product"
            @click="setActive('product')"
            >Login</router-link
          >

          <router-link
            class="nav-link"
            :class="{ active: activeLink === 'product' }"
            to="/product"
            @click="setActive('product')"
            >About Us</router-link
          >

          <router-link
            class="nav-link"
            :class="{ active: activeLink === 'product' }"
            to="/product"
            @click="setActive('product')"
            >Contact Us</router-link>
      </div>
      <div class="fter-nav">
          <a href="https://www.facebook.com" target="_blank">
              <i class="lab la-facebook"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank">
              <i class="lab la-instagram"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank">
              <i class="lab la-twitter"></i>
          </a>
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
  width: 100%;
  height: 25vw;
  margin: 0 auto;
  padding-bottom: 2vw; /* Add some padding to the bottom */
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
  top: 60%; /* Adjusted the top position slightly */
  transform: translateY(-50%);
}

.logo-image {
  width: 15vw; /* Adjust width as needed */
  height: auto; /* Keeps the aspect ratio */
}

.nav-links {
  /* Align the nav links vertically with flexbox */
  display: flex;
  justify-content: center;
  align-items: center; /* Center items vertically */
  gap: 2vw; /* Add space between the nav links */
  margin-top: 25vw; /* Adjust this value to control spacing */
  padding: 1px;
}

.nav-link {
  color: #F4F1E8; /* Change the text color */
  font-family: Anton;
  font-size: 1.5vw;
  text-decoration: none; /* Remove underline */
  transition: color 0.2s ease;
  margin-top: 13.8vw;
}

.nav-link:hover {
  color: #A71803;
}

.nav-link.active {
  color: #A71803;
  font-weight: bold;
}

.fter-nav {
  /* Align the social media icons properly */
  display: flex;
  justify-content: center; /* Center the icons horizontally */
  gap: 1vw; /* Space between icons */
  margin-top: 2vw; /* Adjust as needed to position correctly */
}

.fter-nav i {
  color: #F4F1E8;
  font-size: 2vw;
}

.fter-nav:hover i {
  color: #A71803;
  font-size: 2vw; /* Adjust icon size */
}

.c {
  text-align: center;
  color: #A71803;
  font-size: 1.2vw;
  margin-top: 2vw;
}

</style>