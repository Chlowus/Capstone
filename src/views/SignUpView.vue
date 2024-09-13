<template>
    <div class="auth-container">
      <div class="form-container">
        <h2>Sign Up</h2>
        <form @submit.prevent="">
          <div class="input-group">
            <label for="signUpFirstName">First Name</label>
            <input type="text" id="signUpFirstName" v-model="first_name" required />
          </div>
          <div class="input-group">
            <label for="signUpLastName">Last Name</label>
            <input type="text" id="signUpLastName" v-model="last_name" required />
          </div>
          <div class="input-group">
            <label for="signUpEmail">Email</label>
            <input type="email" id="signUpEmail" v-model="email" required />
          </div>
          <div class="input-group">
            <label for="signUpUserRole">User Role</label>
            <input type="text" id="signUpUserRole" v-model="user_role" required />
          </div>
          <div class="input-group">
            <label for="signUpPassword">Password</label>
            <input type="password" id="signUpPassword" v-model="password" required />
          </div>
          <!-- <div class="input-group">
            <label for="signUpConfirmPassword">Confirm Password</label>
            <input type="password" id="signUpConfirmPassword" v-model="signUpForm.confirmPassword" required />
          </div> -->
          <button type="submit" class="auth-button" @click="register()">Sign Up</button>
          <div class="login-btn">
            <a href="#" @click="goToLogin">Already have an account? Login here.</a>
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
        first_name: '',
        last_name: '',
        email: '',
        user_role: '',
        password: '',
        signUp: true
      };
    },
    methods: {
      register() {
        this.$store.dispatch('register', {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          user_role: this.user_role,
          emailAdd: this.emailAdd,
          password: this.password,
        });
      },
      goToLogin() {
        this.$router.push({ name: 'login' });
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
  