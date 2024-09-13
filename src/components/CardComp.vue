<template>
  <div class="card-container">
    <div v-if="filteredProducts.length" class="product-list">
      <div v-for="product in filteredProducts" :key="product.product_ID" class="product-card">
        <img :src="product.product_image" alt="Product Image" class="product-image" />
        <div class="card-content">
          <h2 class="product-name">{{ product.product_name }}</h2>
          <p class="product-description">{{ product.product_description }}</p>
          <p class="product-price">R{{ product.product_price }}</p>
          <button @click="addToCart(product)" class="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
    <div v-else class="loading-message">
      <p>No products found</p>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'CardComp',
  props: {
    searchTerm: String,
    selectedCategory: String,
    sortBy: String
  },
  computed: {
  ...mapState({
    products: state => state.products
  }),
  filteredProducts() {
    console.log(this.products); // Log products to verify
    let filtered = this.products;

    if (this.selectedCategory) {
      filtered = filtered.filter(product => product.product_category === this.selectedCategory);
    }

    if (this.searchTerm) {
      filtered = filtered.filter(product => product.product_name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }

    if (this.sortBy) {
      filtered = filtered.sort((a, b) => {
        if (this.sortBy === 'price') {
          return a.product_price - b.product_price;
        } else if (this.sortBy === 'name') {
          return a.product_name.localeCompare(b.product_name);
        }
        return 0;
      });
    }

    return filtered;
  }
},
  methods: {
      ...mapActions(['getProducts']),

      async addToCart(product) {
        try {
          const load = {
            product_ID: product.product_ID,
            quantity: 1
          }
          console.log(load);
          
          store.dispatch('addToCart', load)
        } catch (error) {
          console.log(error);

        }
      }

  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
}

.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #F4F1E8;
  border: 2px solid #A71803;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 20vw;
  object-fit: cover;
  border-bottom: 2px solid #A71803;
}

.card-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.product-name {
  color: #000000;
  font-family: 'Anton', sans-serif;
  font-weight: 600;
  margin: 0.5rem 0;
  text-align: center;
}

.product-description {
  color: #000000;
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  margin: 0.5rem 0;
  text-align: center;
}

.product-price {
  color: #A71803;
  font-family: 'Anton', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  text-align: center;
  margin: 0.5rem 0;
}

.add-to-cart-button {
  background: #A71803;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  color: #FFFFFF;
  font-family: 'Oswald', 'sans-serif';
  font-weight: 600;
  transition: background 0.3s ease, transform 0.3s ease;
  align-self: center;
}

.add-to-cart-button:hover {
  background: linear-gradient(
    90deg,
    #A71803 0%,
    #D92B04 25%,
    #FF4500 50%,
    #D92B04 75%,
    #A71803 100%
  );
  background-size: 200% 100%;
  background-position: 100% 0;
  color: #FFFFFF;
  transform: scale(1.05);
}

.loading-message {
  text-align: center;
  color: #000000;
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
}

@media (max-width: 1024px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .product-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .add-to-cart-button {
    width: 80%;
    font-size: 1.2rem;
  }
}
</style>
