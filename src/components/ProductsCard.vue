<template>
  <div>
    <div v-if="isVisible && productsCard" class="product-card">
      <button class="close-button" @click="closeCard">×</button>
      <div class="content-wrapper">
        <div class="image-wrapper">
          <img
            :src="productsCard.image"
            :alt="productsCard.name"
            class="product-image"
          />
        </div>
        <div class="product-details">
          <h2 class="product-name">{{ productsCard.name }}</h2>
          <p class="product-description">{{ productsCard.description }}</p>
          <p class="product-description">{{ productsCard.description2 }}</p>
          <div class="product-price-btn">
            <p>
              <span>{{ productsCard.price }}</span>
            </p>
            <RouterLink to="/LogIn" class="btn" type="button"
              >buy now</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    productsCard: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    closeCard() {
      this.isVisible = false;
      this.$emit("close");
    },
  },
  components: { RouterLink },
};
</script>

<style scoped>
.product-card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e8ecdb;
  padding: 20px;
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  width: 654px;
  border: 1px solid #2f3e65;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  border: none;
  background: none;
  color: #474747;
}

.content-wrapper {
  display: flex;
}

.image-wrapper {
  flex: 1;
}

.product-image {
  border-radius: 7px 0 0 7px;
  width: 327px;
  height: 420px;
}

.product-details {
  flex: 1;
  border-radius: 0 7px 7px 0;
  background-color: #e8ecdb;
  padding: 20px;
}

.product-name {
  font-family: "Bentham", serif;
  font-size: 34px;
  color: #2f3e65;
}

.product-designer {
  font-family: "Raleway", sans-serif;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  color: #2f3e65;
  letter-spacing: 0.2em;
  margin-top: -10px;
  margin-bottom: 47px;
}

.product-description {
  font-family: "Playfair Display", serif;
  font-size: 15px;
  color: #5c7faf;
  line-height: 1.7em;
  font-weight: lighter;
  margin-bottom: 40px;
}

.product-price-btn {
  position: relative;
}

.product-price-btn p {
  font-family: "Trocchi", serif;
  font-size: 28px;
  color: #2f3e65;
  margin-bottom: 20px;
}

.product-price-btn p span {
  font-family: "Suranna", serif;
  font-size: 34px;
}

.btn {
  border: none;
  border-radius: 60px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffffff;
  background-color: #719bd5;
  cursor: pointer;
  padding: 10px 30px;
  text-decoration: none;
}

.product-price-btn button:hover {
  background-color: #5c7faf;
}

@media (max-width: 768px) {
  .product-card {
    width: 55%; /* Изменение ширины для мобильных устройств */
    max-width: none; /* Убираем ограничение максимальной ширины */
  }

  .product-image {
    width: 100%; /* Полная ширина изображения для мобильных устройств */
    height: auto; /* Автоматическая высота изображения */
    margin-top: 10%;
  }

  .product-description {
    font-family: "Playfair Display", serif;
    font-size: 15px;
    color: #5c7faf;
    line-height: 1.7em;
    font-weight: lighter;
  }

  .product-details {
    border-radius: 0; /* Отключаем закругление для мобильных устройств */
  }

  .product-price-btn p {
    font-size: 24px; /* Уменьшаем размер шрифта цены */
  }

  .content-wrapper {
    flex-direction: column;
    display: flex;
  }

  .btn {
    font-size: 16px; /* Уменьшаем размер шрифта кнопки */
  }
}
</style>
