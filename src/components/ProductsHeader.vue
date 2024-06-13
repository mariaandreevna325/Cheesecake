<template>
  <div id="ProductsHeader" class="ContactsHeader">
    <h1>Наши новейшие торты</h1>
    <p>
      Попробуйте некоторые из наших лучших продуктов и почувствуйте огромную
      страсть к еде
    </p>
    <div class="category-selector">
      <button @click="changeType('all')">Всё</button>
      <span class="divider2"></span>
      <button @click="changeType('hard')">Сложные</button>
      <span class="divider2"></span>
      <button @click="changeType('medium')">Средние</button>
      <span class="divider2"></span>
      <button @click="changeType('easy')">Лёгкие</button>
    </div>

    <div class="prodact-grid">
      <div class="prodact-row">
        <div
          class="prodact-card"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <img :src="product.image" :alt="product.name" />
          <div class="prodact-info">
            <div class="icons">
              <button
                style="
                  background-color: #ffffff00;
                  border: none;
                  cursor: pointer;
                "
                class="icon-link"
                @click="showCard(product)"
              >
                <img src="/public/search.png" alt="Search Icon" />
              </button>
              <button
                style="
                  background-color: #ffffff00;
                  border: none;
                  cursor: pointer;
                "
                class="icon-link"
                @click="addToCart(product)"
              >
                <img src="/public/bags.png" alt="Bag Icon" />
              </button>
            </div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p class="price">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="product-card-container">
      <ProductsCard
        v-if="showProductsCard"
        :productsCard="selectedProduct"
        @close="showProductsCard = false"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import ProductsCard from "./ProductsCard.vue";
import { useCartStore } from "../store/cart";

const props = defineProps({
  products: Array,
});

const productType = ref("all");
const showProductsCard = ref(false);
const selectedProduct = ref(null);

const filteredProducts = computed(() => {
  if (productType.value !== "all") {
    return props.products.filter((item) => item.type === productType.value);
  } else {
    return props.products;
  }
});

function changeType(type) {
  productType.value = type;
}

function showCard(product) {
  selectedProduct.value = product;
  showProductsCard.value = true;
  console.log("Selected Product: ", product);
}

const cartStore = useCartStore();

function addToCart(product) {
  cartStore.addToCart(product);
}
</script>

<style scoped>
.product-card-container {
  overflow-y: auto;
}

.product-card-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.category-selector {
  margin-bottom: 40px;
}

.category-selector button {
  cursor: pointer;
  color: #2f3e65;
  margin: 0 10px;
  text-decoration: none;
  background-color: white;
  border: none;
  font-size: 20px;
}
.ContactsHeader {
  text-align: center;
  background-color: #fff;
  margin-top: -24px;
  font-family: "Courier New", Courier, monospace;
  padding-bottom: 30px;
}

.ContactsHeader h1 {
  font-size: 36px;
  margin-bottom: 20px;
  padding-top: 70px;
}

.ContactsHeader p {
  font-size: 20px;
  margin-bottom: 40px;
}
.prodact-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.prodact-card {
  width: 300px;
  height: 300px;
  margin: 0 20px 40px;
  border: 2px solid #000;
  overflow: hidden;
  position: relative;
}

.prodact-card img {
  padding-top: 30px;
  width: 200px;
  height: 200px;
  transition: transform 0.3s ease-in-out;
}

.prodact-card:hover img {
  transform: scale(1.1);
}

.prodact-info {
  display: none;
  position: absolute;
  background-color: #f5d572;
  padding: 10px;
  border-radius: 5px;
  color: #2f3e65;
  bottom: 0;
  width: 100%;
}

.prodact-card:hover .prodact-info {
  display: block;
}

.prodact-info h3,
.prodact-info p {
  color: #2f3e65;
  margin-bottom: 16px;
  margin-top: 26px;
}

.prodact-info p {
  margin-top: 10px;
  color: #2f3e65;
  font-size: 16px;
  margin-right: 4%;
}

.prodact-info .price {
  font-weight: bold;
  color: #2f3e65;
}

.prodact-row {
  display: flex;
  justify-content: center; /* Центрируем ряды карточек */
  flex-wrap: wrap;
}

.prodact-info .icons {
  position: absolute;
  top: 0;
  transform: translate(50%, -50%);
  left: 20px;
}

.prodact-info .icons .icon-link img {
  border: 2px solid #f5d572;
  background-color: #fff;
  border-radius: 50%;
  padding: 5px;
  width: 40px;
  height: 40px;
  margin: 0 5px;
}

.divider2 {
  border-left: 1px solid #000;
  height: 20px;
  margin: 0 10px;
}
</style>
