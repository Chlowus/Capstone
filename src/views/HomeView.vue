<template>
  <div>
    <!-- Sauce Intro Section -->
    <h1 class="main-title">RUBINS FIRE SAUCE</h1>
    <div class="sauce-intro">
      <div class="side-text">
        <h1>FIERY KICK</h1>
        <h1>THAT</h1>
        <h1>TINGLES</h1>
        <h1>YOUR</h1>
        <h1>TASTEBUDS</h1>
        <br>
        <h4>HANDCRAFTED TO PERFECTION</h4>
        <p class="info">
          Explore our handcrafted hot sauces with 15 bold flavours, all made from fresh ingredients and rigorously tested. From zesty salads and juicy steaks to savory burgers and cheese toasties, we have a sauce to elevate every bite. Discover your perfect match today!
        </p>
      </div>
      <div class="sauce-img">
        <img src="https://chlowus.github.io/Nodejs.pictures/Capstone/RubinFS.png" alt="Rubin's Fire Sauce">
      </div>
    </div>

    <!-- Sauce Specs Section -->
    <div class="sauce-spec-sec">
      <h1>SAUCE SPECS</h1>
      <div class="specs-info">
        <!-- Flavour -->
        <div class="flavour">
          <h3>FLAVOUR</h3>
          <div class="line"></div>
          <div class="specifics">
            <div class="number">
              <h3 class="fiftn">15</h3>
            </div>
            <div class="number-expl">
              <p>With 15 flavours, Rubin's Fire Sauce offers a perfect match for any dish - from desserts and salads to steaks, burgers and marinades for a braai. Discover how our diverse range can elevate your meals with just the right kick!</p>
            </div>
          </div>
        </div>

        <!-- Nutrition Facts -->
        <div class="nutri-facts">
          <div class="line"></div>
          <h3>NUTRITION FACTS</h3>
          <p class="ingre-info">Made with fresh ingredients like habanero peppers, garlic, and tomatoes. It's low in calories, free from artificial antioxidants and vitamins - all in a bottle of FIERY flavour!</p>
        </div>
      </div>

      <!-- SPLAT -->

      <div class="biltong-splat">
        <img class="splatz" src="https://chlowus.github.io/Nodejs.pictures/Capstone/Splat-transformed.png" alt="splat">
        <h3>Biltong</h3>
        <p>The perfect fusion of rich, savory biltong with a touch of heat—ideal for meat lovers who want to spice things up!</p>
        <div class="red-hab">
          <img src="https://chlowus.github.io/Nodejs.pictures/Capstone/R-habanero-transformed.png" alt="rh">
        </div>
      </div>
        
      <div class="smokey-monk-splat">
        <div class="yellow-hab">
          <img src="https://chlowus.github.io/Nodejs.pictures/Capstone/Y-habanero-transformed.png" alt="yh">
        </div>
        <img class="splatz" src="https://chlowus.github.io/Nodejs.pictures/Capstone/Splat-transformed.png" alt="splat">
        <h3>Smokey Monkey</h3>
        <p>Get ready to go wild! Smokey Monkey packs a fiery punch of habanero and garlic with a smoky twist of monkey gland sauce. Perfect for adding bold flavor to any dish!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
*{
  font-family: Anton;
}

/* General Styles for Sauce Intro */
.sauce-intro {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  padding-left: 20px;
  padding-bottom: 5vw;
}

.side-text {
  width: 40%; /* Adjust to occupy desired width */
  padding-right: 20px;
}

.side-text h1 {
  font-family: Anton;
  font-size: 4rem;
  color: white; /* Adjust text color if needed */
  background-image: url('https://chlowus.github.io/Nodejs.pictures/Capstone/Blk%20bg%20transformed.png');
  background-size: cover;
  background-position: center;
  background-clip: text;
  -webkit-background-clip: text; /* For Chrome/Safari */
  color: transparent;
  margin: 0;
}

.side-text h4{
  font-family: Anton;
  font-size: 2vw;
  color: #A71803;
  font-weight: 400 !important;
}

.side-text p{
  font-family: Oswald;
  font-size: 1.4vw;
}

.sauce-img {
  position: absolute;
  top: 40%;
  transform: translateY(-50%) rotate(-45deg);
  z-index: 0;
  margin-left: 15vw !important;
}

.sauce-img img {
  width: 55vw; /* Adjust size as needed */
  max-width: none; /* Allow image to be larger than viewport if needed */
}

/* General Styles for Main Title */
.main-title {
  font-family: Anton;
  font-size: 9rem;
  font-weight: 200 !important;
  text-align: center;
  color: white; /* Adjust text color if needed */
  background-image: url('https://chlowus.github.io/Nodejs.pictures/Capstone/Blk%20bg%20transformed.png');
  background-size: cover;
  background-position: center;
  background-clip: text;
  -webkit-background-clip: text; /* For Chrome/Safari */
  color: transparent;
  margin-bottom: 5vw;
}

.specs-info{
  padding: 20px;
}

.sauce-spec-sec h1{
  font-family: Anton;
  font-size: 10rem;
  font-weight: 200 !important;
  text-align: center;
  color: white; /* Adjust text color if needed */
  background-image: url('https://chlowus.github.io/Nodejs.pictures/Capstone/red%20bg%20transformed.png');
  background-size: cover;
  background-position: center;
  background-clip: text;
  -webkit-background-clip: text; /* For Chrome/Safari */
  color: transparent;
  margin-bottom: 5vw;
}

.specs-info {
  display: flex;
  justify-content: space-between; /* Distribute space between items */
  padding: 20px;
}

.flavour {
  margin: 20px;
  width: 35%;
}

.fiftn{
  color: #A71803;
  font-family: Oswald;
  font-size: 2rem;
}

.flavour p{
  font-family: Oswald;
  font-size: 1.3rem;
}


.nutri-facts {
  margin: 20px;
  width: 35%; /* Adjust width as needed */
  margin-top: 20vw; /* Adjust the value as needed */
  margin-left: auto; /* Push div to the right */
}

.nutri-facts p{
  font-family: Oswald;
  font-size: 1.3rem;
}

.line {
  height: 2px;
  width: 100%;
  background: #000;
  margin: 10px 0;
}

/* SPLAT STYLES */
.splat-section {
  display: flex;
  flex-direction: column; /* Stack splats vertically on smaller screens */
  align-items: center;
  padding: 20px;
}


/* Responsive layout for splats */
.biltong-splat, .smokey-monk-splat {
  width: 90%; /* Ensure splats are not too wide on small screens */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vw;
  position: relative; /* Ensure text can be positioned on top of the image */
}

.splatz {
  max-width: 80vw !important; /* Cap the maximum width */
}

.biltong-splat h3, .biltong-splat p,
.smokey-monk-splat h3, .smokey-monk-splat p {
  position: absolute; /* Position text on top of the splat */
  z-index: 1; /* Ensure text appears above the image */
  color: white; /* Adjust text color if needed */
  text-align: center;
  padding: 0 10px; /* Add some padding for better readability */
}

.biltong-splat h3 {
  top: 10%; /* Adjust top position */
  left: 50%;
  transform: translateX(-50%); /* Center text horizontally */
}

.biltong-splat p {
  top: 25%; /* Adjust top position */
  left: 50%;
  transform: translateX(-50%); /* Center text horizontally */
  font-size: 0.9rem; /* Adjust text size */
}

.smokey-monk-splat h3 {
  top: 10%; /* Adjust top position */
  left: 50%;
  transform: translateX(-50%); /* Center text horizontally */
}

.smokey-monk-splat p {
  top: 25%; /* Adjust top position */
  left: 50%;
  transform: translateX(-50%); /* Center text horizontally */
  font-size: 0.9rem; /* Adjust text size */
}

.biltong-splat h3{
  margin-top: 65vw;
}


/* Media Queries for responsiveness */

/* Adjust styles for tablets */
@media (min-width: 600px) {
  .splat-section {
    flex-direction: row; /* Align splats side-by-side */
  }

  .biltong-splat, .smokey-monk-splat {
    width: 45%; /* Adjust width to fit side-by-side */
    margin-top: 0; /* Remove top margin for side-by-side layout */
  }
}

/* Adjust styles for larger screens */
@media (min-width: 900px) {
  .biltong-splat img, .smokey-monk-splat img {
    max-width: 400px; /* Increase max width for larger screens */
  }

  .biltong-splat h3, .biltong-splat p,
  .smokey-monk-splat h3, .smokey-monk-splat p {
    font-size: 1rem; /* Increase text size for larger screens */
  }
}
</style>
