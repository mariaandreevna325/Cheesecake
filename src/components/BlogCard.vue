<template>
  <div class="blog-card">
    <RouterLink :to="`/blog/${id}`" style="text-decoration: none">
      <img :src="image" :alt="name" class="blog-image" />
      <p>{{ name }}</p>
    </RouterLink>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
  image: String,
  name: String,
});
</script>

<style scoped>
.blog-card {
  width: 100%;
  max-width: 400px;
  padding: 12px;
  border: 1px solid black;
}

.blog-image {
  width: 100%;
  height: 250px;
}

.blog-card p {
  color: #378f38;
  margin-top: 10px;
}
</style>
