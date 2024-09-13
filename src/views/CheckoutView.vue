<template>
  <div class="checkout-container">
    <!-- Table of Cart Items -->
    <div class="table-responsive">
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.product_ID">
            <td><img :src="item.image" :alt="item.Product" style="width: 5rem;"></td>
            <td>
              {{ item.Product }}
            </td>
            <td>R{{ item.UnitPrice }}</td>
            <td>
              <div class="quantity-control">
                <button class="btn btn-outline-secondary" @click="decreaseQuantity(item)">-</button>
                <span>{{ item.Quantity }}</span>
                <button class="btn btn-outline-secondary" @click="increaseQuantity(item)">+</button>
              </div>
            </td>
            <td>R{{ item.TotalPrice }}</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="removeFromCart(item)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Checkout Actions -->
    <div class="checkout-actions">
      <p class="total-amount">Total: <strong>R{{ grandTotal }}</strong></p>
      <button class="btn btn-primary checkout-btn" @click.prevent="buy">Purchase</button>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";

export default {
  data() {
    return {
      sum : 0
    };
  },
  computed: {
    totalAmount() {
      const cartItems = this.$store.state.cartItems || [];
      return cartItems.reduce((sum, item) => sum + parseFloat(item.totalAmount || 0), 0);
    },

    cart(){
      return store.state.cart
    },

    grandTotal(){
      let num = 0
      
      
      this.$store.state.cart?.forEach(item => {        
        num = num + item.TotalPrice
      });
      return num
      
    }    
  },
  methods: {
    decreaseQuantity(prod) {
      if (prod.Quantity > 1) {
        const payload = {
          id : prod.product_ID,
          cred : {
            quantity: prod.Quantity - 1
          }
        }      
        store.dispatch('updateCart', payload)
      } else {
        toast.warning(`Nope you can't go lower than that🤨`, {
          theme: 'dark',
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    increaseQuantity(prod) {
      const payload = {
        id : prod.product_ID,
        cred : {
          quantity: prod.Quantity + 1
        }
      }      
      store.dispatch('updateCart', payload)
    },
    removeFromCart(prod) {
       console.log(prod.product_ID);
       store.dispatch('deleteFromCart', prod.product_ID)
    },
    buy() {
      store.dispatch('clearCart')
    },
  },
  mounted() {
    this.$store.dispatch('getCart');
  },
};
</script>

<style scoped>
/* Overall styling for the checkout container */
.checkout-container {
  margin: 20px;
}

.table {
  background-color: #f4f1e8;
}

thead th {
  text-align: center;
  background-color: #333;
  color: #fff;
}

/* Quantity control buttons */
.quantity-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quantity-control button {
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

/* Image styling */
.img-fluid {
  max-width: 70px;
  border-radius: 4px;
}

/* Checkout section styling */
.checkout-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.total-amount {
  font-size: 1.25rem;
}

.checkout-btn {
  background-color: #A71803;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.checkout-btn:hover {
  background-color: #e65c00;
}
</style>
