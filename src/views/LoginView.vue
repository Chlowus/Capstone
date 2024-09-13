<template>
  <div class="auth-container">
    <div class="form-container">
      <h2>Login</h2>
      <form @submit.prevent="loginUser">
        <div class="input-group">
          <label for="loginEmail">Email</label>
          <input type="email" id="loginEmail" v-model="loginForm.email" required />
        </div>
        <div class="input-group">
          <label for="loginPassword">Password</label>
          <input type="password" id="loginPassword" v-model="loginForm.password" required />
        </div>
        <button type="submit" class="auth-button">Login</button>
        <div class="signup-btn">
          <a href="#" @click="goToSignUp">Don't have an account? Sign up here.</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import store from '@/store';

export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    loginUser() {
      if (!this.loginForm.email || !this.loginForm.password) {
        alert("Please fill in both fields!");
        return;
      }
      store.dispatch('login', this.loginForm);
    },
    goToSignUp() {
      this.$router.push({ name: 'signup' });
    }
  }
};
</script>
  
  <style scoped>
  .auth-container {
    display: flex;
    justify-content: space-around;
    margin: 50px;
  }
  
  .form-container {
    width: 300px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .input-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  .auth-button {
    width: 100%;
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .auth-button:hover {
    background-color: #555;
  }
  </style>
  