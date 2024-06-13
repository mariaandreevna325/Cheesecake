<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import { RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
</script>
