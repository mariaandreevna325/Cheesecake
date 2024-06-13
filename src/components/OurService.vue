<template>
  <div id="Services" class="ProductsHeader">
    <h1>Наши сервисы</h1>
    <p>охваченные этими областями</p>
    <div class="product-row">
      <!-- Первая строчка карточек товаров -->
      <div class="product-card">
        <img src="/public/product1.jpg" alt="Product 1" />
        <p class="greeting">Пекарня</p>
        <p>
          У нас есть весь ваш любимый традиционный хлеб 7 дней в неделю! Вы
          можете выбрать из большого ассортимента печенья, пирожных и тортиков.
        </p>
        <button class="view-button">Смотреть</button>
      </div>
      <div class="product-card">
        <img src="/public/product2.jpg" alt="Product 2" />
        <p class="greeting">Торты</p>
        <p>
          Мы специализируемся на тортах на заказ для всех случаев жизни.
          Выберите дизайн, создайте идеальный торт.
        </p>
        <button class="view-button">Смотреть</button>
      </div>
      <div class="product-card">
        <img src="/public/product3.jpg" alt="Product 3" />
        <p class="greeting">Свежие соки</p>
        <p>
          Выбирайте фрукты и овощи для своих блюд и соков. Мы предлагаем
          свежевыжатый апельсиновый сок.
        </p>
        <button class="view-button">Смотреть</button>
      </div>
    </div>
    <div class="product-row">
      <!-- Вторая строчка карточек товаров -->
      <div class="product-card">
        <img src="/public/product4.jpg" alt="Product 4" />
        <p class="greeting">Обслуживание</p>
        <p>
          Мы обслуживаем свадьбы и деловые мероприятия. Наши оригинальные блюда
          доставят вам удовольствие.
        </p>
        <button class="view-button">Смотреть</button>
      </div>
      <div class="product-card">
        <img src="/public/product5.jpg" alt="Product 5" />
        <p class="greeting">Грузовик с улыбкой</p>
        <p>
          Наша команда выезжает с лучшими подарками для вас и других. Они
          созданы специально для вас.
        </p>
        <button class="view-button">Смотреть</button>
      </div>
      <div class="product-card">
        <img src="/public/product6.jpg" alt="Product 6" />
        <p class="greeting">Свадьбы</p>
        <p>
          Элегантные свадебные торты и вкусные подарочные корзины. Мы поможем
          вам создать уникальную свадьбу.
        </p>
        <button class="view-button">Смотреть</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>
