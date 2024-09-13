import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Swal from 'sweetalert2';


import { useCookies } from 'vue3-cookies';
import router from '@/router';
const { cookies } = useCookies()
const userInfo = cookies.get('VerifiedUser')?.result
// Define your API URLs here
const API_URL = 'https://capstone-l7p1.onrender.com';
const AUTH_URL = 'https://capstone-fp5r.vercel.app';
const CART_URL = 'https://capstone-fp5r.vercel.app/cart';
const newUrl = 'http://localhost:4000/'

export default createStore({
  state: {
    loginIn: false,
    products: [],
    product: null,
    user: null,
    users: [],
    admin: [],
    cart: null,
    single: null,
    oneuser: null,
  },
  getters: {
    // Define your getters if needed
  },
  mutations: {
    setLogged(state, value) {
      state.loginIn = value;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    setProduct(state, payload) {
      state.product = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setAdmin(state, payload) {
      state.admin = payload;
    },
    setUsers(state, payload) {
      state.users = payload;
    },
    setSingle(state, payload) {
      state.single = payload;
    },
    setCarts(state, payload) {
      state.cart = payload;
    },
    setOneUser(state, payload) {
      state.oneuser = payload;
    },
    setCart(state, payload) {
      state.cart = payload;
    },
  },
  actions: {
    async login({ commit }, user) {
      try {
        let {token, msg, result} = await (await axios.post(`${newUrl}users/login`, user)).data;
        if (token) {
          cookies.set('VerifiedUser', {token, result})

          commit('setUser', result)

          Swal.fire({
            title: "Login Successful",
            text: "You have successfully logged in.",
            icon: "success",
            timer: 1500
          });

          router.push({name: 'products'})
        } else {
          Swal.fire({
            title: "Login Failed",
            text: "Incorrect username or password.",
            icon: "error",
            timer: 1500
          });
        }
        commit('setLogged', !!data.token);
      } catch (error) {
        toast.error("Login error: " + error.message);
      }
    },

    // async register({ commit }, user) {
    //   try {
    //     const response = await (await axios.post(`${newUrl}users/register`, user));
    //     const { token, result } = response.data;
    //     if (token) {
    //       cookies.set('VerifiedUser', { token, result });
    //       commit('setUser', result);
    //       Swal.fire({
    //         title: "Signed up Successfully",
    //         text: "You have successfully signed up.",
    //         icon: "success",
    //         timer: 1500,
    //       });
    //       router.push({ name: 'products' });
    //     } else {
    //       Swal.fire({
    //         title: "Sign up Failed",
    //         text: "Sign up failed. Please check your details.",
    //         icon: "error",
    //         timer: 1500,
    //       });
    //     }
    //   } catch (error) {
    //     toast.error("Registration error: " + error.message);
    //   }
    // },

    async register({ commit }, user) {
      try {
        const  data  = await (await axios.post(`${newUrl}users/register`, user)).data
        console.log(data)
        if (data.message){
          toast("User Added Successfully", {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          })
        }
      } catch (error) {
        console.log(error)
      }
    },

    async getProducts({ commit }) {
      try {
        let { data } = await axios.get(`${API_URL}/products`);
        commit('setProducts', data.results || []);
      } catch (error) {
        toast.error("Error fetching products: " + error.message);
      }
    },

    async getProduct({ commit }, id) {
      try {
        let { data } = await axios.get(`${API_URL}/products/${id}`);
        commit('setProduct', data);
      } catch (error) {
        toast.error("Error fetching product: " + error.message);
      }
    },

    async getUsers({ commit }) {
      try {
        let { data } = await axios.get(`${AUTH_URL}/users`);
        commit('setUsers', data);
      } catch (error) {
        toast.error("Error fetching users: " + error.message);
      }
    },

    async addToCart({ commit }, payload) {
    
      try {
        let {msg, status} = await (await axios.post(`${newUrl}carts/${userInfo.user_ID}/cart`, payload)).data;
        if (status == 200) {
          toast.success("Wow so easy !", {
            theme: 'dark',
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
          
        }
      } catch (error) {
        if (error.message) {
          toast.error(`Error adding to cart: ${error.message}`);
        } else {
          toast.error("Error adding to cart. Please try again.");
        }
      }
    },

    async getCart({ commit }, userID) {
      try {
        let {status, results, msg} = await (await axios.get(`${newUrl}carts/${userInfo.user_ID}/cart`)).data;
        if (status == 200) {
          commit('setCarts', results);
        } else {
          toast.error({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 1500,
          })
        }
      } catch (error) {
        toast.error("Error fetching cart: " + error.message);
      }
    },

    async deleteFromCart({ commit, dispatch }, order_id) {
      try {
        const {msg, status} = await (await axios.delete(`${newUrl}carts/${userInfo.user_ID}/cart/${order_id}`)).data;

        if (status == 200) {
          dispatch('getCart')
          toast.success(`${msg}`, {
            theme: 'dark',
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        } else {
          toast.error(`${msg}`, {
            theme: 'dark',
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }

      } catch (error) {
        toast.error(`${error.message}`, {
          theme: 'dark',
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },

    async clearCart({ commit, dispatch }) {
      try {
        const {msg, status} = await (await axios.delete(`${newUrl}carts/${userInfo.user_ID}/cart`)).data;
        if (status == 200) {
          dispatch('getCart')
          Swal.fire({
            title: 'Purchase Successful',
            text: 'Thank you for your purchase.',
            icon: "success",
            timer: 2000
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          theme: 'dark',
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },

    async updateCart({commit, dispatch}, payload){
      try { 
        const {msg, status} = await (await axios.patch(`${newUrl}carts/${userInfo.user_ID}/cart/${payload.id}`, payload.cred)).data;
        if(status == 200){
          dispatch('getCart')
          toast.success("Item updated successfully", {
            theme: 'dark',
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        } else {
          toast.error({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 1500,
          })
        }
        
      } catch (error) {
        toast.error("failed t0 update product", {
          theme: 'auto',
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    }
  },
  modules: {
  }
});
