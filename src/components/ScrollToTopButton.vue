<template>
  <button class="scroll-to-top" @click="scrollToTop" v-if="isVisible">
    <img src="/public/scroll.png" alt="Scroll to Top" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      this.isVisible = scrollY > 100;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 30px;
  width: 70px;
  height: 70px;
  cursor: pointer;
  z-index: 1000;
  transition: opacity 0.3s ease;
  margin-bottom: 0;
  background-color: transparent;
  outline: none;
  border: none;
}

.scroll-to-top img {
  width: 100%;
}

.scroll-to-top:hover {
  opacity: 1;
}

.scroll-to-top {
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .scroll-to-top img {
    width: 60%;
  }

  .scroll-to-top {
    position: fixed;
    bottom: 5%;
    right: 0%;
    width: 80px;
    height: 80px;
    cursor: pointer;
    z-index: 1000;
    transition: opacity 0.3s ease;
    margin-bottom: 0;
    background-color: transparent;
    outline: none;
    border: none;
  }
}
</style>
