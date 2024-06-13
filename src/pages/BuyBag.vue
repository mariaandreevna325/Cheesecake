<template>
  <div class="backround-bag">
    <img src="/public/backround-bag.png" alt="" />
    <div class="text-overlay">
      <p>Корзина</p>
      <div class="divider"></div>
      <p>Изделий</p>
    </div>
  </div>

  <hr class="black-line" />

  <div class="bag">
    <div class="bag-cakes">
      <div v-if="cartStore.items.length === 0" class="empty-cart-message">
        <p>Товаров в корзине нет</p>
      </div>
      <div v-else>
        <div
          v-for="productCake in cartStore.items"
          :key="productCake.id"
          class="product-row"
        >
          <img :src="productCake.image" alt="Товар" class="product-image" />
          <div class="product-details">
            <h3 class="product-name">{{ productCake.name }}</h3>
            <div
              style="
                display: flex;
                justify-content: space-between;
                position: relative;
              "
            >
              <p class="product-description">{{ productCake.description }}</p>
              <div class="product-action">
                <button
                  class="remove-button"
                  @click="decreaseQuantity(productCake)"
                >
                  -
                </button>
                <span class="product-quantity">{{ productCake.quantity }}</span>
                <button
                  class="add-button"
                  @click="increaseQuantity(productCake)"
                >
                  +
                </button>
              </div>
            </div>
            <p
              class="product-description2"
              @click="removeProduct(productCake.id)"
            >
              Удалить
            </p>
          </div>
          <p class="product-price">{{ productCake.price }}</p>
        </div>
      </div>
    </div>
    <div class="bag-price">
      <h2>Ваш заказ</h2>
      <p>
        {{ cartStore.items.length }} товар -
        <span class="price-bold">{{ totalPrice }}</span>
      </p>
      <p>Скидка по промокоду: <span class="price-bold">0₽</span></p>
      <h2>Промокод</h2>
      <div class="promo-code">
        <input type="text" placeholder="Промокод" v-model="promoCode" />

        <!-- Тут я добавила обработчик события для кнопки -->

        <button @click="applyPromoCode">Применить</button>
      </div>
      <p v-if="promoMessage" class="promo-message">{{ promoMessage }}</p>
      <p style="text-align: center">
        Сумма заказа: <span class="price-bold">{{ totalPrice }}</span>
      </p>
      <button class="checkout-button">Оформить заказ</button>
      <p
        style="text-align: center; font-weight: bold; cursor: pointer"
        @click="clearCart"
      >
        Очистить корзину
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useCartStore } from "../store/cart";

const cartStore = useCartStore();

cartStore.items.forEach((item) => {
  if (!item.quantity) {
    item.quantity = 1;
  }
});

function decreaseQuantity(product) {
  if (product.quantity > 1) {
    product.quantity--;
  }
}

function increaseQuantity(product) {
  product.quantity++;
}

function removeProduct(productId) {
  cartStore.items = cartStore.items.filter((item) => item.id !== productId);
}

function clearCart() {
  cartStore.items = [];
}

const totalPrice = computed(() => {
  return (
    cartStore.items
      .reduce((sum, item) => {
        const price = parseFloat(
          item.price.replace("₽", "").replace(",", ".").trim()
        );
        return sum + item.quantity * (isNaN(price) ? 0 : price);
      }, 0)
      .toFixed(2) + "₽"
  );
});

const promoCode = ref("");
const promoMessage = ref("");

// Функция для обработки применения промокода
function applyPromoCode() {
  promoMessage.value = "Промокод не найден";
}
</script>

<style scoped>
.price-bold {
  font-weight: bold;
}

.backround-bag {
  position: relative;
}

.backround-bag img {
  width: 100%;
  height: 400px;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #2f3e65;
  font-size: 36px;
  font-weight: 800;
}

.divider {
  width: 100%;
  height: 2px;
  background-color: white;
  margin: 0 auto;
}

.black-line {
  border: 0;
  border-top: 1px solid rgba(102, 102, 102, 0.656);
  width: 100%;
  margin-top: 30px;
}

.bag {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding: 10px;
  column-gap: 5%;
}

.bag-cakes {
  border-radius: 5px;
  background-color: #e8ecdb;
  border: 2px solid #378f38;
  width: 50%;
}

.product-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 20px;
  margin-right: 20px;
  margin-left: 20px;
  border-bottom: 1px solid #000;
}

.product-image {
  width: 140px;
  height: 140px;
  margin-right: 50px;
  border: 1px solid #2f3e65;
}

.product-details {
  flex: 1;
  color: #2f3e65;
}

.product-name {
  margin: 0;
  padding-bottom: 20px;
}

.product-description {
  margin: 5px 0;
}

.product-description2 {
  margin: 5px 0;
  margin-top: 20px;
  cursor: pointer;
}

.product-price {
  font-weight: bold;
  color: #2f3e65;
}

.product-action {
  display: flex;
  align-items: center;
  margin-right: 30px;
}

.remove-button,
.add-button {
  background-color: #378f38;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 50%;
  cursor: pointer;
}

.remove-button:hover,
.add-button:hover {
  background-color: #2f3e65;
}

.product-quantity {
  margin: 0 10px;
}

.bag-price {
  border-radius: 5px;
  background-color: #e8ecdb;
  border: 2px solid #378f38;
  padding: 20px;
  width: 20%;
  height: 30%;
}

.bag-price h2 {
  margin-top: 0;
}

.promo-code {
  display: flex;
  align-items: center;
}

.promo-code input {
  flex: 1;
  padding: 5px;
  border: 1px solid #2f3e65;
  border-radius: 5px;
}

.promo-code button {
  background-color: #2f3e65;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
}

.promo-message {
  text-align: center;
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

.checkout-button {
  background-color: #378f38;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 29%;
}

.checkout-button:hover {
  background-color: #2f3e65;
}

.empty-cart-message {
  text-align: center;
  font-size: 18px;
  color: #2f3e65;
  padding: 20px;
}

@media (max-width: 767px) {
  .bag {
    flex-direction: column; /* Располагаем контент столбцом */
    align-items: center; /* Центрируем элементы по горизонтали */
  }

  .bag-cakes,
  .bag-price {
    width: 84%; /* Ширина блоков на всю ширину экрана */
    margin-bottom: 20px; /* Добавляем отступ снизу между блоками */
  }

  .empty-cart-message,
  .product-row {
    width: 100%; /* Ширина сообщения о пустой корзине и строки товара на всю ширину блока */
  }

  .product-row {
    flex-direction: column; /* Располагаем детали товара столбцом */
    align-items: center; /* Центрируем детали товара по горизонтали */
  }

  .product-image {
    margin-right: 0; /* Убираем отступ справа у изображения товара */
    margin-bottom: 10px; /* Добавляем отступ снизу для разделения товаров */
  }

  .product-details {
    text-align: center; /* Выравниваем детали товара по центру */
  }

  .product-action {
    margin: 10px 0; /* Добавляем отступ между кнопками действий */
  }
}
</style>
