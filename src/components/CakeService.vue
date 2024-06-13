<template>
  <div class="header">
    <h1>Торты</h1>
    <div class="cake-container">
      <img src="/public/CakeService.png" class="cake-service-image" />
      <div class="circle"></div>
    </div>
  </div>

  <hr class="black-line" />

  <ProductsCakeService :productCake="productCake" />
</template>
<script setup>
import { onBeforeMount, ref } from "vue";
import ProductsCakeService from "@/components/ProductsCakeService.vue";

const productCake = ref([]);

async function getProductCake() {
  try {
    const resp = await fetch("http://localhost:3000/productCake");
    const data = await resp.json();
    productCake.value = data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
}

onBeforeMount(() => {
  getProductCake();
});
</script>

<style scoped>
.black-line {
  border: 0;
  border-top: 1px solid rgba(102, 102, 102, 0.138);
  width: 100%;
  margin-top: 0;
}
.header {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 18%;
  margin-top: 4%;
}

.cake-service-image {
  width: 60%;
  position: relative;
  z-index: 1;
}

.circle {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: #719bd5;
  position: absolute;
  top: 41%;
  left: 76%;
  transform: translate(-50%, -50%);
  z-index: 0;
  box-shadow: inset 0px 0px 50px 50px #ffffff;
}

.header h1 {
  font-size: 110px;
  color: #719bd5;
  margin-right: 168px;
  padding-bottom: 80px;
}

@media only screen and (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    margin-top: 25%;
  }

  .cake-container {
    position: relative;
    width: 100%;
    padding-top: 20px;
  }

  .cake-service-image {
    width: 80%;
  }

  .circle {
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .header h1 {
    font-size: 50px;
    margin-right: 0;
    padding-bottom: 20px;
    text-align: center;
  }
}
</style>
