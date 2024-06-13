<template>
  <main>
    <div class="video-background">
      <video autoplay loop muted class="video">
        <source src="/public/video-fon.mp4" type="video/mp4" />
      </video>
    </div>
    <p class="fc">Семейная кондитерская</p>

    <p class="cheesecake">Cheesecake</p>

    <a href="https://t.me/mriaandreeva" class="btn">ЗАКАЗАТЬ СЕЙЧАС</a>
  </main>

  <div id="aboutus" class="aboutus">
    <img src="/public/conditer1.jpg" />
    <div class="aboutus-text">
      <h2>О нас</h2>
      <p>
        Cheesecake - это семейная кондитерская, где каждый десерт приготовлен с
        любовью и вниманием к деталям. Мы верим, что каждый глоток должен
        приносить настоящее удовольствие, поэтому мы используем только лучшие
        ингредиенты и тщательно следим за качеством каждого шага производства.
        <br />
        <br />
        Наша цель - порадовать вас вкусными и неповторимыми десертами, которые
        станут настоящим украшением любого праздника или просто поднимут
        настроение в будний день. Мы гордимся нашим разнообразием десертов - от
        классического чизкейка до эксклюзивных авторских рецептов. Приходите к
        нам и погрузитесь в мир нежных вкусов и ароматов. Cheesecake - это не
        просто кондитерская, это место, где рождаются волшебство и радость
        каждому, кто к нам приходит.
      </p>
    </div>
  </div>
  <div id="OrderHeader" class="OrderHeader">
    <div class="order-text">
      <h1>Заказать сейчас</h1>
      <p style="color: #f5d572">
        В нашем магазине вы найдете широкий ассортимент современных десертов и
        кондитерских изделий на заказ.
      </p>
      <p>
        ⇨ Премиальные услуги, превосходящие ваши ожидания <br />
        ⇨ Мы стремимся поддерживать в магазине хороший выбор наших продуктов
        <br />
        ⇨ Наши талантливые пекари также делают индивидуальные праздничные торты
        <br />
        ⇨ У нас есть меню на вынос, предлагающее завтраки-удовольствия <br />
      </p>
    </div>

    <form class="order-form" @submit.prevent="handleSubmit">
      <div class="order-form-row">
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Ваше имя*"
        />
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Электронная почта*"
        />
      </div>
      <div class="order-form-row">
        <input
          type="text"
          id="address"
          name="address"
          required
          placeholder="Адрес доставки*"
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="Номер телефона*"
        />
      </div>
      <div>
        <textarea
          id="details"
          name="details"
          rows="4"
          required
          placeholder="Детали заказа*"
        ></textarea>
      </div>
      <button class="btn" type="submit">ЗАКАЗАТЬ</button>
    </form>
  </div>
  <div id="Services" class="ProductsHeader">
    <h1>Наши сервисы</h1>
    <p>охваченные этими областями</p>
    <div class="product-row">
      <div class="product-card">
        <img src="/public/product1.jpg" alt="Product 1" />
        <p class="greeting">Пекарня</p>
        <p>
          У нас есть весь ваш любимый традиционный хлеб 7 дней в неделю! Вы
          можете выбрать из большого ассортимента печенья, пирожных и тортиков.
        </p>
        <RouterLink to="/BakeryService"
          ><button h class="view-button">Смотреть</button></RouterLink
        >
      </div>
      <div class="product-card">
        <img src="/public/product2.jpg" alt="Product 2" />
        <p class="greeting">Торты</p>
        <p>
          Мы специализируемся на тортах на заказ для всех случаев жизни.
          Выберите дизайн, создайте идеальный торт.
        </p>
        <RouterLink to="/CakeService"
          ><button h class="view-button">Смотреть</button></RouterLink
        >
      </div>
      <div class="product-card">
        <img src="/public/product3.jpg" alt="Product 3" />
        <p class="greeting">Свежие соки</p>
        <p>
          Выбирайте фрукты и овощи для своих блюд и соков. Мы предлагаем
          свежевыжатый апельсиновый сок.
        </p>
        <RouterLink to="/JuiceService"
          ><button h class="view-button">Смотреть</button></RouterLink
        >
      </div>
    </div>
  </div>
  <div id="OurTeam" class="OurTeam">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :pagination="{
        clickable: true,
        enable: true,
      }"
      :modules="modules"
    >
      <swiper-slide>
        <div class="swiper-content">
          <h1>Мария Андреева</h1>
          <p>Что сказать о нас?</p>
          <img src="/public/maria.jpg" alt="Photo 1" class="photo" />
          <div class="testimonial">
            Наши сладкие шедевры создаются опытным кондитером, который обладает
            богатым опытом в этой области. Его мастерство и профессионализм
            гарантируют, что каждый торт не только выглядит потрясающе, но и
            поражает великолепным вкусом.
          </div>
          <div class="divider"></div>
          <h2 class="cake-master">Директор</h2>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-content">
          <h1>Ренат Агзамов</h1>
          <p>Что сказать о нас?</p>
          <img src="/public/renat.jpg" alt="Photo 2" class="photo" />
          <div class="testimonial">
            Наш опытный кондитер - настоящий мастер в создании сладких шедевров.
            С его богатым опытом работы, каждый торт превращается в произведение
            искусства, удивляющее не только внешним видом, но и великолепным
            вкусом.
          </div>
          <div class="divider"></div>
          <h2 class="cake-master">Старший кондитер</h2>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-content">
          <h1>Полина Филимонова</h1>
          <p>Что сказать о нас?</p>
          <img src="/public/paulinecake.jpg" alt="Photo 3" class="photo" />
          <div class="testimonial">
            Опытный кондитер, имеющий за плечами многолетний опыт, создает наши
            сладкие шедевры. Его талант и креативность позволяют каждому торту
            стать уникальным и неповторимым, делая любое торжество
            запоминающимся.
          </div>
          <div class="divider"></div>
          <h2 class="cake-master">Дизайнер изделий</h2>
        </div>
      </swiper-slide>
    </swiper>
  </div>

  <ProductsHeader :products="products" />

  <hr class="black-line" />

  <div id="OurBlog" class="OurBlog">
    <h1>Блог в фотографиях</h1>
    <p>Ознакомьтесь с нашими последними статьями, о чем мы говорим</p>

    <div class="blog-container">
      <BlogCard
        v-for="post in posts"
        :id="post.id"
        :name="post.name"
        :image="post.image"
        :key="post.id"
      />
    </div>
  </div>

  <ScrollToTopButton />
  <Poup-message v-if="showPoup" @close="closePoup" />
</template>

<script>
import ScrollToTopButton from "@/components/ScrollToTopButton.vue";
import PoupMessage from "@/components/PoupMessage.vue";
import { onBeforeMount, ref } from "vue";
import ProductsHeader from "@/components/ProductsHeader.vue";
import { RouterLink, useRouter } from "vue-router";
import BlogCard from "@/components/BlogCard.vue";
import { useStore } from "vuex";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    ScrollToTopButton,
    ProductsHeader,
    BlogCard,
    RouterLink,
    Swiper,
    SwiperSlide,
    PoupMessage,
  },
  props: ["product"],
  setup() {
    const store = useStore();
    const router = useRouter();
    const products = ref([]);
    const posts = ref([]);
    const showPoup = ref(true);

    const handleSubmit = () => {
      if (!store.state.isAuthenticated) {
        router.push("/login");
      }
    };

    async function getProducts() {
      const resp = await fetch("http://localhost:3000/products");
      const data = await resp.json();
      products.value = data;
    }

    async function getPosts() {
      const resp = await fetch("http://localhost:3000/posts");
      const data = await resp.json();
      posts.value = data;
    }

    onBeforeMount(() => {
      getProducts();
      getPosts();
    });

    const closePoup = () => {
      showPoup.value = false;
    };

    return {
      products,
      posts,
      handleSubmit,
      modules: [Pagination],
      showPoup,
      closePoup,
    };
  },
};
</script>

<style>
.swiper {
  padding-bottom: 30px;
}
.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  background-color: rgb(255, 255, 255);
  transition: background-color 0.3s;
  margin: 40px 0;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #2f3e65;
}
</style>

<style scoped>
.blog-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin: 0 auto;
  max-width: 1200px;
}

.video-background {
  position: relative;
  padding-top: 174px;
}

.video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
}

.fc,
.cheesecake {
  font-weight: bold;
  font-size: 70px;
  margin: 10px 0;
}

.fc {
  color: #e8ecdb;
  font-size: 50px;
  padding-top: 40px;
}

.cheesecake {
  color: #d3deee;
  font-size: 120px;
}

.btn {
  margin-top: 20px;
  color: #2f3e65;
  font-size: 20px;
  font-weight: lighter;
  background-color: #f5d572;
  border: none;
  border-radius: 17px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
}

.btn:hover {
  background-color: #2f3e65;
  color: #f5d572;
}

.aboutus {
  background-color: white;
  margin-top: 10%;
  padding: 10px;
  display: flex;
  font-family: "Courier New", Courier, monospace;
}

.aboutus img {
  width: 30%;
  margin-left: 13%;
}

.aboutus-text {
  padding-left: 30px;
  margin-right: 13%;
  margin-top: 1%;
}

.aboutus-text h2 {
  font-size: 30px;
  color: #2f3e65;
  margin-bottom: 10px;
}

.aboutus-text p {
  font-size: 18px;
  line-height: 1.5;
  color: #2f3e65;
  margin-bottom: 15px;
}

.OrderHeader {
  background-image: url("/public/order-img.jpg");
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.order-text {
  padding-left: 5%;
  margin-right: 13%;
}

.order-text h1 {
  font-size: 30px;
  color: white;
  margin-bottom: 10px;
}

.order-text p {
  font-size: 24px;
  line-height: 1.5;
  color: white;
}

.order-form {
  width: 35%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-right: 10%;
}

.order-form input[type="text"],
.order-form input[type="email"],
.order-form input[type="tel"],
.order-form textarea {
  padding: 10px;
  border: none;
  margin-bottom: 10px;
  width: 40%;
}

.order-form input[type="text"]::placeholder,
.order-form input[type="email"]::placeholder,
.order-form input[type="tel"]::placeholder,
.order-form textarea::placeholder {
  color: grey;
}

.order-form .order-form-row {
  display: flex;
  justify-content: space-between;
}

.order-form label {
  color: grey;
  margin-bottom: 5px;
}

.order-form button {
  width: 100%;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: lighter;
  background-color: #f5d572;
  border: none;
  border-radius: 17px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.order-form button:hover {
  background-color: #2f3e65;
  color: #f5d572;
}

.ProductsHeader {
  background-color: white;
  font-family: "Courier New", Courier, monospace;
  padding-bottom: 55px;
}

.ProductsHeader h1 {
  color: #2f3e65;
  display: flex;
  justify-content: center;
  margin-top: 0;
  padding-top: 40px;
}

.ProductsHeader p {
  color: #378f38;
  font-size: 20px;
  display: flex;
  justify-content: center;
}

.product-row {
  display: flex;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  margin-left: 10%;
  margin-right: 10%;
}

.product-card {
  width: 30%;
  background-color: #ffffff;
  border: 0.5px solid #000000;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}

.product-card img {
  width: 30%;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
  padding-bottom: 20px;
}

.product-card .greeting {
  color: #378f38;
  padding-bottom: 20px;
}

.product-card p {
  color: #2f3e65;
  margin-top: 10px;
  padding-bottom: 20px;
}

.view-button {
  background-color: #e8ecdb;
  border: none;
  color: #378f38;
  padding: 8px 16px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}

.view-button:hover {
  background-color: #378f38;
  color: #e8ecdb;
}

.product-card p,
.product-card .view-button {
  margin: 0 auto;
}

.OurTeam {
  background-color: #efd994;
}

.swiper-content {
  text-align: center;
}

.swiper-content p {
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
  margin: 0 auto;
  padding-bottom: 20px;
  padding-top: 20px;
}

.swiper-content h1,
.swiper-content .cake-master {
  margin: 10px 0;
  margin-top: 20px;
  margin-bottom: 20px;
}

.testimonial {
  font-size: 20px;
  max-width: 700px;
  font-family: "Courier New", Courier, monospace;
  margin: 0 auto;
  padding-bottom: 20px;
  padding-top: 30px;
}
.swiper-content img {
  width: 15%;
  border-radius: 50%;
  box-shadow: 0 0 20px 10px rgba(84, 110, 175, 0.5);
  margin-top: 20px;
  margin-bottom: 20px;
}

.divider {
  width: 10%;
  height: 2px;
  background-color: white;
  margin: 0 auto;
}

.cake-master {
  margin-top: 20px;
  margin-bottom: 20px;
}

.black-line {
  border: 0;
  border-top: 1px solid rgba(102, 102, 102, 0.138);
  width: 100%;
  margin-top: 0;
}

.blog-images {
  display: flex;
  justify-content: center;
  column-gap: 60px;
}

.OurBlog {
  text-align: center;
  background-color: #fff;
  margin-top: -24px;
  font-family: "Courier New", Courier, monospace;
  position: relative;
  padding-bottom: 30px;
}
.blog-image {
  width: 100%; /* Установка ширины картинки на 100% */
  height: 80%; /* Автоматическое вычисление высоты для поддержки пропорций */
}

.OurBlog h1 {
  font-size: 36px;
  margin-bottom: 20px;
  padding-top: 50px;
  color: #2f3e65;
}

.OurBlog p {
  font-size: 20px;
  margin-bottom: 40px;
  color: #2f3e65;
}

.blog-card {
  width: 400px; /* Увеличение ширины карточек */
  padding: 12px;
  border: 1px solid black;
}

.blog-card a {
  text-decoration: none;
}

.blog-card p {
  color: #378f38;
}

/* Ваш существующий CSS-код здесь */

@media (max-width: 768px) {
  .blog-container {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    padding-right: 5%;
    max-width: 100%;
  }

  .blog-card {
    width: 98%;
  }

  .video[data-v-2d1117dc] {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 61%;
    object-fit: cover;
    z-index: -1;
  }

  .fc,
  .cheesecake {
    font-size: 40px;
    text-align: center;
    padding-top: 0;
  }

  .btn {
    font-size: 16px;
    padding: 8px 16px;
  }

  main {
    padding-top: 0;
    width: 100%;
  }

  .aboutus {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .aboutus img {
    width: 80%;
    margin-left: 0;
    margin-bottom: 20px;
  }

  .aboutus-text {
    padding-left: 0;
    margin-right: 0;
    text-align: center;
  }

  .aboutus-text h2 {
    font-size: 24px;
  }

  .aboutus-text p {
    font-size: 16px;
  }

  .OrderHeader {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }

  .order-form textarea {
    width: 94%;
  }

  .order-text {
    max-width: 100%;
    padding-left: 0;
    margin-right: 0;
    text-align: center;
  }

  .order-text h1 {
    font-size: 24px;
  }

  .order-text p {
    font-size: 18px;
  }

  .order-form {
    width: 100%;
    margin-right: 0;
    padding: 10px;
    box-sizing: border-box;
  }

  .ProductsHeader h1 {
    font-size: 28px;
  }

  .ProductsHeader p {
    font-size: 18px;
  }

  .product-row {
    flex-direction: column;
    margin: 0 5%;
  }

  .product-card {
    width: 100%;
    margin-bottom: 20px;
  }

  .OurTeam .swiper-content img {
    width: 30%;
  }

  .swiper-content p,
  .swiper-content h1,
  .testimonial {
    font-size: 16px;
    padding: 0 10px;
  }

  .OurBlog h1 {
    font-size: 28px;
  }

  .OurBlog p {
    font-size: 18px;
  }

  .blog-image {
    height: auto;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .blog-container {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    padding-right: 2%;
    max-width: 100%;
  }

  .blog-card {
    width: 98%;
  }

  .video[data-v-2d1117dc] {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    object-fit: cover;
    z-index: -1;
  }

  .fc,
  .cheesecake {
    font-size: 50px;
    text-align: center;
    padding-top: 0;
  }

  .btn {
    font-size: 18px;
    padding: 10px 18px;
  }

  main {
    padding-top: 0;
    width: 100%;
  }

  .aboutus {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .aboutus img {
    width: 60%;
    margin-left: 0;
    margin-bottom: 20px;
  }

  .aboutus-text {
    padding-left: 0;
    margin-right: 0;
    text-align: center;
  }

  .aboutus-text h2 {
    font-size: 28px;
  }

  .aboutus-text p {
    font-size: 18px;
  }

  .OrderHeader {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }

  .order-form textarea {
    width: 92%;
  }

  .order-text {
    max-width: 100%;
    padding-left: 0;
    margin-right: 0;
    text-align: center;
  }

  .order-text h1 {
    font-size: 28px;
  }

  .order-text p {
    font-size: 20px;
  }

  .order-form {
    width: 100%;
    margin-right: 0;
    padding: 10px;
    box-sizing: border-box;
  }

  .ProductsHeader h1 {
    font-size: 32px;
  }

  .ProductsHeader p {
    font-size: 18px;
  }

  .product-row {
    flex-direction: column;
    margin: 0 5%;
  }

  .product-card {
    width: 100%;
    margin-bottom: 20px;
  }

  .OurTeam .swiper-content img {
    width: 25%;
  }

  .swiper-content p,
  .swiper-content h1,
  .testimonial {
    font-size: 18px;
    padding: 0 10px;
  }

  .OurBlog h1 {
    font-size: 32px;
  }

  .OurBlog p {
    font-size: 20px;
  }

  .blog-image {
    height: auto;
  }
}
</style>
