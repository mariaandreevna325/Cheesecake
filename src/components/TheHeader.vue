<template>
  <header ref="header">
    <div class="logo">
      <router-link to="/">
        <img src="/public/final-logo.png" alt="Logo" />
      </router-link>
    </div>
    <nav :class="{ 'nav-links': true, open: menuOpen }">
      <a class="router-link" href="#aboutus">О нас</a>
      <a class="router-link" href="#OrderHeader">Заказ</a>
      <a class="router-link" href="#Services">Сервис</a>
      <a class="router-link" href="#OurTeam">Наша команда</a>
      <a class="router-link" href="#ProductsHeader">Продукция</a>
      <a class="router-link" href="#OurBlog">Блог</a>
      <RouterLink to="/BuyBag" class="router-link">
        <img
          src="/public/bagheader1.png"
          alt="Buy Bag"
          class="bag-icon"
          @mouseover="changeImage"
          @mouseout="restoreImage"
        />
      </RouterLink>
      <RouterLink v-if="!isAuthenticated" class="router-link2" to="/LogIn">
        Войти
      </RouterLink>
      <RouterLink v-else class="router-link2" to="/" @click.prevent="logout">
        Выйти
      </RouterLink>
    </nav>
    <button class="burger-menu" @click="toggleMenu">
      {{ menuOpen ? "✖" : "☰" }}
    </button>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";

const header = ref(null);
const store = useStore();
const isAuthenticated = computed(() => store.state.isAuthenticated);
const menuOpen = ref(false);

function headerBg() {
  if (document.documentElement.scrollTop > 0) {
    header.value.classList.add("scrolled");
  } else {
    header.value.classList.remove("scrolled");
  }
}

onMounted(() => {
  window.addEventListener("scroll", headerBg);
});

function changeImage(event) {
  event.target.src = "/public/bagheader2.png";
}

function restoreImage(event) {
  event.target.src = "/public/bagheader1.png";
}

function logout() {
  store.dispatch("logout");
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<style scoped>
.scrolled {
  background-color: #719bd56c;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 10px;
  transition: 0.2s ease-in-out;
  z-index: 10000;
}

.router-link {
  padding: 4px;
}

.logo img {
  width: 110px;
}

nav {
  display: flex;
}

nav img.router-link {
  margin: 5px;
  width: 30px;
}

nav .router-link {
  margin-left: 15px;
  text-decoration: none;
  color: #2f3e65;
  font-weight: bold;
  white-space: nowrap;
  font-size: 20px;
  background-color: #e8ecdb;
  border-radius: 31px;
  padding: 15px 15px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav .router-link:hover {
  margin-left: 15px;
  text-decoration: none;
  color: #e8ecdb;
  font-weight: bold;
  white-space: nowrap;
  font-size: 20px;
  background-color: #2f3e65;
  border-radius: 31px;
  padding: 15px 15px;
  align-self: center;
}

nav .router-link2 {
  margin-left: 15px;
  text-decoration: none;
  color: #e8ecdb;
  font-weight: bold;
  white-space: nowrap;
  font-size: 20px;
  background-color: #378f38;
  border-radius: 30px;
  padding: 15px 15px;
  align-self: center;
}

nav .router-link2:hover {
  background-color: #e8ecdb;
  color: #378f38;
  border-radius: 30px;
  padding: 15px 15px;
  align-self: center;
}

.burger-menu {
  display: none;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #2f3e65;
}

@media (max-width: 768px) {
  header {
    justify-content: space-between;
    padding: 10px 20px;
  }

  .bag-icon {
    margin-left: 0;
  }

  .logo img {
    max-width: 100px;
  }

  nav {
    display: none;
  }

  .nav-links.open {
    display: flex !important;
    flex-direction: column;
    position: fixed;
    top: 90px;
    left: auto;
    right: 5%;
    background-color: #e8ecdb;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    width: 32%;
  }

  nav .router-link {
    margin: 10px 0;
    font-size: 16px;
    padding: 10px;
  }

  nav .router-link2 {
    margin: 10px 0;
    font-size: 16px;
    padding: 10px;
  }

  .burger-menu {
    display: block;
    color: #efd994;
  }

  nav img.router-link {
    margin: 10px 0;
    width: 20px;
  }
}
</style>
