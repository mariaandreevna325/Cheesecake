<template>
  <div class="main">
    <div class="login-form">
      <h1>Войти / Sign in</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Почта / Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Введите свой email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Пароль / Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Введите пароль"
            required
          />
        </div>
        <button type="submit">Войти / Sign In</button>
      </form>
      <p class="register-link">
        Регистрация /
        <router-link to="/RegisterIn">Registration</router-link>
      </p>
      <p class="register-link">
        Запросить ссылку входа /
        <a href="https://t.me/mriaandreeva" target="_blank"
          >Request the link to sign In</a
        >
      </p>
    </div>

    <div class="photo-login">
      <img src="/public/login.png" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const handleLogin = async () => {
      store.dispatch("login");
      router.push("/");
    };

    return {
      email,
      password,
      handleLogin,
    };
  },
};
</script>

<style scoped>
.main {
  padding: 10%;
  background-image: url("/public/fonlogin.png");
  background-size: cover;
  background-repeat: no-repeat;
  color: #e8ecdb;
  display: flex;
  justify-content: center;
  column-gap: 26px;
}

.login-form h1 {
  font-size: 50px;
}

.photo-login img {
  display: none;
}

.login-form {
  margin: 0 auto;
  width: 31%;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  font-size: 22px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
  transition: border-color 0.3s;
}

input[type="email"]:focus,
input[type="password"]:focus {
  border-bottom-color: #000000;
}

button {
  width: 54%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #f5d572;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
}

button:hover {
  background-color: #378f38;
}

.register-link {
  text-decoration: underline dotted;
  padding-top: 5%;
  font-size: 18px;
}

.register-link a {
  color: #e8ecdb;
}

.photo-login {
  margin-right: 5%;
}

@media (max-width: 767px) {
  .main {
    flex-direction: column; /* Располагаем элементы по вертикали */
    align-items: center; /* Центрируем элементы по горизонтали */
    padding: 5%; /* Уменьшаем внутренние отступы */
  }

  .login-form {
    width: 100%; /* Ширина формы на всю ширину экрана */
    margin: 0; /* Убираем отступы */
    margin-top: 30%;
  }

  .login-form h1 {
    font-size: 36px; /* Уменьшаем размер заголовка */
  }

  .photo-login {
    margin: 20px 0; /* Добавляем отступ снизу */
  }

  .photo-login img {
    width: 100%; /* Ширина изображения на всю ширину блока */
  }

  .form-group {
    margin-bottom: 10px; /* Уменьшаем отступ между полями формы */
  }

  label {
    font-size: 18px; /* Уменьшаем размер текста меток */
  }

  input[type="email"],
  input[type="password"] {
    font-size: 14px; /* Уменьшаем размер текста в полях ввода */
  }

  button {
    width: 100%; /* Ширина кнопки на всю ширину формы */
    margin-top: 10px; /* Увеличиваем отступ сверху */
  }
}
</style>
