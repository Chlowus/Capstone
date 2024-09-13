<template>
    <nav class="navbar">
      <router-link to="/" exact-active-class="active" exact class="nav-link">Home</router-link>
      <router-link to="/sauces" active-class="active" class="nav-link">Sauces</router-link>
      <router-link to="/cart" active-class="active" class="nav-link">Cart</router-link>
      <router-link to="/login" active-class="active" class="nav-link">Login</router-link>
      <router-link to="/about" active-class="active" class="nav-link">About Us</router-link>
      <router-link to="/contact" active-class="active" class="nav-link">Contact Us</router-link>
      <router-link to="/admin" active-class="active" class="nav-link">Admin</router-link>
      <router-link to="/profile" active-class="active" class="nav-link"><i class="las la-user"></i></router-link>
    </nav>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  /* Floating Navbar Container */
  .navbar {
    position: sticky;
    top: 0;
    width: 100%;
    background-color: #F4F1E8;
    display: flex;
    justify-content: center;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  
  /* Style for Navbar Links */
  .las{
    font-size: 2rem;
  }

  .nav-link {
    color: black;
    font-family: Anton;
    font-size: 1.5rem;
    text-decoration: none;
    margin: 0 1.5rem;
    padding: 10px 15px;
    position: relative;
    display: inline-block;
  }
  
  /* Hover State for Flame Gradient */
  .nav-link:hover,
  .active {
    transition: color 0.3s ease !important;
    background: linear-gradient(
      90deg,
      #A71803 0%,      /* Deep red */
      #D92B04 25%,     /* Lighter red-orange */
      #FF4500 50%,     /* Fiery orange */
      #D92B04 75%,     /* Lighter red-orange */
      #A71803 100%     /* Deep red */
    )!important;
    background-size: 200% 100% !important;
    background-clip: text !important;
    -webkit-background-clip: text !important;
    color: transparent !important;
    animation: fireGradient 3s linear infinite !important;
  }
  
  /* Fire-Like Gradient Animation */
  @keyframes fireGradient {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 200% 0%;
    }
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .navbar {
      flex-wrap: wrap;
    }
    .nav-link {
      font-size: 1rem;
      margin: 0.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .nav-link {
      font-size: 0.9rem;
      margin: 0.3rem;
    }
  }
  </style>
  