<template>
  <div class="main">
    <div class="register-form">
      <h1>Регистрация / Register</h1>
      <form @submit.prevent="handleRegister">
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
        <div class="form-group">
          <label for="confirm-password"
            >Подтвердите пароль / Confirm Password</label
          >
          <input
            type="password"
            id="confirm-password"
            v-model="confirmPassword"
            placeholder="Подтвердите пароль"
            required
          />
        </div>
        <button type="submit">Регистрация / Register</button>
      </form>
      <p class="login-link">
        Войти /
        <router-link to="/login">Sign In</router-link>
      </p>
    </div>

    <div class="photo-register">
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
    const confirmPassword = ref("");

    const handleRegister = async () => {
      if (password.value === confirmPassword.value) {
        await store.dispatch("register", {
          email: email.value,
          password: password.value,
        });
        router.push("/");
      } else {
        alert("Пароли не совпадают");
      }
    };

    return {
      email,
      password,
      confirmPassword,
      handleRegister,
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

.register-form h1 {
  font-size: 50px;
}

.photo-register img {
  width: 80%;
}

.register-form {
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

.login-link {
  text-decoration: underline dotted;
  padding-top: 5%;
  font-size: 18px;
}

.login-link a {
  color: #e8ecdb;
}

.photo-register {
  margin-right: 5%;
}

@media (max-width: 767px) {
  .main {
    flex-direction: column; /* Располагаем элементы по вертикали */
    align-items: center; /* Центрируем элементы по горизонтали */
    padding: 5%; /* Уменьшаем внутренние отступы */
  }

  .register-form {
    width: 100%; /* Ширина формы на всю ширину экрана */
    margin: 0; /* Убираем отступы */
    margin-top: 30%;
  }

  .register-form h1 {
    font-size: 36px; /* Уменьшаем размер заголовка */
  }

  .photo-register {
    margin: 20px 0; /* Добавляем отступ снизу */
  }

  .photo-register img {
    display: none;
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
