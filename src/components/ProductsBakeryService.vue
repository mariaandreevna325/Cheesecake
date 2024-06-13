<template>
  <div id="ProductsBakeryService" class="ContactsHeader">
    <h1>Наша выпечка</h1>
    <p>
      Попробуйте некоторые из наших лучших продуктов и почувствуйте огромную
      страсть к еде
    </p>
    <div class="category-selector">
      <button @click="changeType('all')">Всё</button>
      <span class="divider2"></span>
      <button @click="changeType('hard')">Хлеб</button>
      <span class="divider2"></span>
      <button @click="changeType('medium')">Булочки</button>
      <span class="divider2"></span>
      <button @click="changeType('easy')">Другое</button>
    </div>

    <!-- Первая строчка карточек товаров -->
    <div class="product-grid">
      <div class="product-row">
        <div
          class="product-card"
          v-for="productBakery in filteredproductBakery"
          :key="productBakery.id"
        >
          <img :src="productBakery.image" :alt="productBakery.name" />
          <div class="product-info">
            <div class="icons">
              <button
                style="
                  background-color: #ffffff00;
                  border: none;
                  cursor: pointer;
                "
                class="icon-link"
                @click="showCard(productBakery)"
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
                @click="addToCart(productBakery)"
              >
                <img src="/public/bags.png" alt="Bag Icon" />
              </button>
            </div>
            <h3>{{ productBakery.name }}</h3>
            <p>{{ productBakery.description }}</p>
            <p class="price">{{ productBakery.price }}</p>
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

    <ScrollToTopButton />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import ScrollToTopButton from "@/components/ScrollToTopButton.vue";
import ProductsCard from "./ProductsCard.vue";
import { useCartStore } from "../store/cart";

const props = defineProps({
  productBakery: {
    type: Array,
    default: () => [],
  },
});

const cartStore = useCartStore();
const productType = ref("all");
const showProductsCard = ref(false);
const selectedProduct = ref(null);

const filteredproductBakery = computed(() => {
  if (productType.value !== "all") {
    return props.productBakery.filter(
      (item) => item.type === productType.value
    );
  } else {
    return props.productBakery;
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

function addToCart(product) {
  cartStore.addToCart(product);
}
</script>

<style scoped>
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
.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-card {
  width: 300px;
  height: 300px;
  margin: 0 20px 40px;
  border: 2px solid #000;
  overflow: hidden;
  position: relative;
}

.product-card img {
  padding-top: 30px;
  width: 200px;
  height: 200px;
  transition: transform 0.3s ease-in-out;
}

.product-card:hover img {
  transform: scale(1.1);
}

.product-info {
  display: none;
  position: absolute;
  background-color: #f5d572;
  padding: 10px;
  border-radius: 5px;
  color: #2f3e65;
  bottom: 0;
  width: 100%;
}

.product-card:hover .product-info {
  display: block;
}

.product-info h3,
.product-info p {
  color: #2f3e65;
  margin-bottom: 16px;
  margin-top: 26px;
}

.product-info p {
  margin-top: 10px;
  color: #2f3e65;
  font-size: 16px;
  margin-right: 4%;
}

.product-info .price {
  font-weight: bold;
  color: #2f3e65;
}

.product-row {
  display: flex;
  justify-content: center; /* Центрируем ряды карточек */
  flex-wrap: wrap;
}

.product-info .icons {
  position: absolute;
  top: 0;
  transform: translate(50%, -50%);
  left: 20px;
}

.product-info .icons .icon-link img {
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
