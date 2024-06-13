<template>
  <div class="article">
    <div class="article-info">
      <h1>{{ post.name }}</h1>
      <p>{{ post.description }}</p>
    </div>
    <div class="article-content">
      <div class="main-content">
        <div class="article-image">
          <img :src="post.image" alt="Article Image" />
        </div>
        <div id="toc_container" class="no_bullets">
          <p class="toc_title">
            Содержание статьи
            <span class="toc_toggle">
              [<a href="#" @click.prevent="toggleToc">{{
                tocVisible ? "Скрыть" : "Показать"
              }}</a
              >]
            </span>
          </p>
          <ul class="toc_list" v-if="tocVisible">
            <li>
              <a href="#i"
                ><span class="toc_number toc_depth_1">1. </span
                >{{ post.namecontent }}</a
              >
            </li>
            <li>
              <a href="#i-2"
                ><span class="toc_number toc_depth_1">2. </span
                >{{ post.namecontent2 }}</a
              >
            </li>
            <li>
              <a href="#i-3"
                ><span class="toc_number toc_depth_1">3. </span
                >{{ post.namecontent3 }}</a
              >
            </li>
            <li>
              <a href="#i-4"
                ><span class="toc_number toc_depth_1">4. </span
                >{{ post.namecontent4 }}</a
              >
            </li>
            <li>
              <a href="#i-5"
                ><span class="toc_number toc_depth_1">5. </span
                >{{ post.namecontent5 }}</a
              >
            </li>
            <li>
              <a href="#i-6"
                ><span class="toc_number toc_depth_1">6. </span
                >{{ post.namecontent6 }}</a
              >
            </li>
          </ul>
        </div>
        <div class="article-text">
          <p>{{ post.content }}</p>
          <p>{{ post.content2 }}</p>

          <div class="article-border">
            {{ post.contentborder }}
          </div>

          <p>{{ post.content4 }}</p>

          <h1 id="i">{{ post.namecontent }}</h1>
          <p>{{ post.content3 }}</p>
          <p>{{ post.content5 }}</p>
        </div>

        <div class="cake_content">
          <img :src="post.image_content1" alt="CakeContent" />
          <img :src="post.image_content2" alt="CakeContent" />
          <img :src="post.image_content3" alt="CakeContent" />
        </div>

        <div class="article-text">
          <h1 id="i-2">{{ post.namecontent2 }}</h1>
          <p>{{ post.content6 }}</p>
        </div>

        <div class="cake_content">
          <img :src="post.image_content4" alt="CakeContent" />
          <img :src="post.image_content5" alt="CakeContent" />
        </div>

        <div class="article-text">
          <h1 id="i-3">{{ post.namecontent3 }}</h1>
          <p>{{ post.content7 }}</p>
        </div>

        <div class="cake_content">
          <img :src="post.image_content6" alt="CakeContent" />
          <img :src="post.image_content7" alt="CakeContent" />
        </div>

        <div class="article-text">
          <h1 id="i-4">{{ post.namecontent4 }}</h1>
          <p>{{ post.content8 }}</p>
          <p>{{ post.content9 }}</p>
          <p>{{ post.content10 }}</p>
          <p>{{ post.content11 }}</p>
        </div>

        <div class="cake_content">
          <img :src="post.image_content8" alt="CakeContent" />
          <img :src="post.image_content9" alt="CakeContent" />
          <img :src="post.image_content10" alt="CakeContent" />
        </div>

        <div class="article-text">
          <h1 id="i-5">{{ post.namecontent5 }}</h1>
          <p>{{ post.content15 }}</p>
          <p>{{ post.content16 }}</p>
          <p>{{ post.content17 }}</p>
        </div>

        <div class="article-text">
          <h1 id="i-6">{{ post.namecontent6 }}</h1>

          <div class="article-border">
            {{ post.contentborder2 }}
          </div>
        </div>
      </div>
      <div class="sidebar-images">
        <h1>Лучшие работы в современном дизайне</h1>
        <div class="image-container">
          <img :src="post.image_content11" alt="CakeContent" />
        </div>
        <div class="image-container">
          <img :src="post.image_content12" alt="CakeContent" />
        </div>
        <div class="image-container">
          <img :src="post.image_content13" alt="CakeContent" />
        </div>

        <div class="chefs">
          <h1>Это может быть интересно</h1>
          <div class="image-container2">
            <img src="/public/chef1.png" alt="CakeContent" />
            <h2 style="color: #2f3e65; text-align: center">Луи Баррон</h2>
            <p style="color: #2f3e65; text-align: center">
              Шеф-кондитер из Франции в сотрудничестве с нами с 2021 года
            </p>
          </div>
          <div class="image-container2">
            <img src="/public/chef2.png" alt="CakeContent" />
            <h2 style="color: #2f3e65; text-align: center">Франс Равилье</h2>
            <p style="color: #2f3e65; text-align: center">
              Шеф-кондитер из Италии в сотрудничестве с нами с 2019 года
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ScrollToTopButton />
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import ScrollToTopButton from "@/components/ScrollToTopButton.vue";

const route = useRoute();

const post = ref({});
const tocVisible = ref(true);

async function getPost() {
  try {
    const resp = await fetch("http://localhost:3000/posts/" + route.params.id);
    const data = await resp.json();
    post.value = data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
}

function toggleToc() {
  tocVisible.value = !tocVisible.value;
}

onMounted(() => {
  getPost();
});
</script>

<style scoped>
.blog-router {
  background-color: #e8ecdb;
  border-radius: 25%;
  border: 1px solid #2f3e65;
}
.article {
  padding: 10%;
}

.article-info h1 {
  font-size: 50px;
  color: #2f3e65;
}

.article-info p {
  font-size: 30px;
  color: #2f3e65;
}

.article-content {
  display: flex;
  justify-content: space-between;
  width: 107%;
}

.main-content {
  width: 65%;
}

.article-image {
  margin: 20px 0;
}

.article-text {
  width: 100%;
}

.article-image img {
  width: 100%;
  border-radius: 20px;
}

#toc_container {
  width: 95%;
  display: table;
  background-color: #e8ecdb;
  border-radius: 15px;
  padding: 20px;
}

.toc_title {
  font-weight: bold;
  margin-bottom: 30px;
  font-size: 26px;
  margin-left: 20px;
}

.toc_toggle {
  font-size: smaller;
}

.toc_list {
  list-style-type: none;
  padding-left: 0;
}

.toc_list a {
  text-decoration: none;
  font-size: 23px;
  color: #2f3e65;
}

.toc_list li {
  margin: 10px 0;
  padding-left: 20px; /* Выравнивание по левому краю с текстом "Содержание статьи" */
}

.article-text {
  margin-top: 40px;
  font-size: 24px;
  line-height: 1.6;
  text-align: justify;
}

.sidebar-images {
  width: 31%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-images h1 {
  color: #2f3e65;
  text-align: left;
  font-size: 40px;
}

.image-container {
  border: 2px solid #2f3e65;
  border-radius: 10px;
  padding: 10px;
  height: 3.5%;
}

.image-container img {
  width: 100%;
  border-radius: 10px;
  height: 100%;
}

.image-container2 {
  border: 2px solid #2f3e65;
  border-radius: 10px;
  padding: 10px;
  height: 30%;
  margin-bottom: 30%;
}

.image-container2 img {
  width: 100%;
  border-radius: 10px;
  height: 100%;
}

.article-border {
  background-color: #e8ecdb;
  color: #2f3e65;
  padding: 3%;
  border-radius: 10px;
}

.article-text h1 {
  font-size: 50px;
  color: #2f3e65;
}

.cake_content {
  display: flex;
  column-gap: 40px;
  margin-top: 60px;
}

.cake_content img {
  border: 1px solid #2f3e65;
  border-radius: 10px;
  padding: 10px;
  width: 45%;
}

@media only screen and (max-width: 768px) {
  .article-info {
    padding: 5%;
    margin-top: 20%;
  }

  .article-info h1 {
    font-size: 30px;
  }

  .article-info p {
    font-size: 20px;
  }

  .article-content {
    flex-direction: column;
  }

  .main-content {
    width: 87%;
  }

  .sidebar-images {
    width: 100%;
  }

  .sidebar-images h1 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }

  .image-container,
  .image-container2 {
    height: auto;
    margin-bottom: 10%;
  }

  .image-container img,
  .image-container2 img {
    width: 100%;
    height: auto;
  }

  .article-text h1 {
    font-size: 30px;
  }

  .toc_title {
    font-size: 20px;
  }

  .toc_list a {
    font-size: 18px;
  }

  .article-text,
  .toc_title,
  .toc_toggle {
    margin-left: 0;
    padding-left: 5%;
  }

  #toc_container {
    width: 90%;
  }

  .cake_content {
    flex-direction: column;
  }

  .cake_content img {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
