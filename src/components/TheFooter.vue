<template>
  <footer class="footer">
    <div>
      <div>
        <yandex-map
          v-model="map"
          :settings="{
            location: {
              center: [39.698654, 47.246285],
              zoom: 12,
            },
          }"
          width="100%"
          height="500px"
        >
          <yandex-map-default-scheme-layer />
        </yandex-map>
      </div>
    </div>
    <div class="column">
      <div class="col-1">
        <h1>ЧАСЫ РАБОТЫ</h1>
        <div class="text-col-1">
          <p>
            <strong>Понедельник- Четверг:</strong> &nbsp;
            <span>8:00 - 20:00</span>
          </p>
          <p>
            <strong>Пятница - Суббота:</strong> &nbsp;
            <span>10:00 - 20:00</span>
          </p>
          <p>
            <strong>Воскресенье:</strong> &nbsp;
            <span>Выходной</span>
          </p>
        </div>
      </div>

      <!-- Форма -->
      <div class="wrapper">
        <form class="wrapper-form">
          <input type="text" name="name" placeholder="Ваше имя*" /><br />
          <input type="text" name="Phone" placeholder="Номер телефона*" /><br />
          <input
            type="text"
            name="email"
            placeholder="Электронная почта*"
          /><br />
          <textarea name="message" placeholder="Сообщение*"></textarea><br />

          <RouterLink to="/LogIn" class="button-wrapper" type="submit"
            >Предоставить</RouterLink
          >
        </form>
      </div>

      <div class="col-2">
        <h1>Наши контакты</h1>
        <p>
          +7 (928) 117-90-11<br />
          г.Ростов-на-Дону<br />
          @mriaandreeva<br />
          <a href="http://www.cheesecakefamily.com">www.cheesecakefamily.com</a>
        </p>
      </div>
    </div>

    <div class="foot">
      <p>© Итоговый проект 2024</p>
    </div>
  </footer>
</template>
<script setup>
import { shallowRef } from "vue";
import { YandexMap, YandexMapDefaultSchemeLayer } from "vue-yandex-maps";
const map = shallowRef(null);
</script>

<style scoped>
.footer {
  background-color: #2f3e65;
  position: relative;
}
.map {
  width: 100%;
  height: 400px;
}

.column {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 37%;
}

.col-1 {
  padding: 20px;
}

.col-1 h1 {
  margin-bottom: 20px;
  color: white;
}

.text-col-1 p {
  color: white;
}

.wrapper {
  position: absolute;
  margin-bottom: 12%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #e8ecdb;
  width: 300px;
  padding: 20px;
  border: 2px solid #2f3e65;
}

.wrapper input[type="text"],
.wrapper input[type="email"],
.wrapper input[type="Phone"],
.wrapper textarea {
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 5px;
  margin-bottom: 15px;
}

.button-wrapper {
  background-color: #2f3e65;
  color: white;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
}

.wrapper-form {
  margin-bottom: 15px;
  padding-right: 5%;
  text-align: center;
}

.col-2 {
  padding: 20px;
}

.col-2 h1 {
  margin-bottom: 20px;
  color: white;
}

.col-2 p {
  color: white;
  font-size: 16px;
}

.col-2 a {
  color: white;
  text-decoration: underline;
}

.foot {
  background-color: #e8ecdb;
  color: #2f3e65;
  text-align: center;
}

.foot p {
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
  margin-bottom: 0;
  padding-top: 15px;
  padding-bottom: 15px;
}

@media (max-width: 768px) {
  .column {
    flex-direction: column;
    align-items: center;
  }

  .wrapper {
    position: static;
    margin-bottom: 20px;
    transform: none;
  }

  .col-1,
  .col-2 {
    padding: 10px;
  }

  .col-2 p {
    font-size: 14px;
    text-align: center;
  }
}
</style>
