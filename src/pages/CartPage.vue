<template>
  <div>Сумма товаров в корзине: {{ totalSum }}</div>
  <div
    v-for="tovar in cartStore.cart"
    :key="tovar.id"
    class="w-4/5 mx-auto border p-6 flex gap-x-6"
  >
    <p>{{ tovar.title }}</p>
    <p>{{ tovar.brand }}</p>
    <p>{{ tovar.price }}</p>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/CartStore";
import { onMounted, ref } from "vue";

const totalSum = ref(0);

const cartStore = useCartStore();

onMounted(() => {
  totalSum.value = cartStore.calculateSum();
});
</script>
