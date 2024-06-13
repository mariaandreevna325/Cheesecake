<template>
  <div class="popup-message">
    <div class="message-header">
      <p class="message-text">Сообщение от директора "CheeseCake"</p>
      <span class="close-btn" @click="closeMessage">×</span>
    </div>
    <div class="director-message">
      <img src="/public/maria.jpg" alt="Maria Avatar" class="avatar" />
      <div class="message-bubble">
        <p class="director-text typing-animation">
          Добрый день! Меня зовут Мария. Я главный директор семейной
          кондитерской "CheeseCake". Я отвечу вам на любой интересующий вас
          вопрос!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupMessage",
  methods: {
    closeMessage() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.popup-message {
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #e8ecdb;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  border: 1px solid #719bd5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}

.close-btn {
  cursor: pointer;
  font-size: 24px;
  color: #2f3e65;
}

.message-text {
  color: #2f3e65;
  font-size: 16px;
  margin: 0;
}

.director-message {
  display: flex;
  align-items: center;
  width: 100%;
}

.director-text {
  color: #2f3e65;
  margin: 0;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.message-bubble {
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  color: #2f3e65;
  max-width: calc(100% - 70px);
  overflow: hidden;
  transition: max-height 0.5s ease, padding 0.5s ease;
  word-wrap: break-word;
  max-height: 50px; /* Изначально маленький размер */
}

.typing-animation {
  animation: typing 4s steps(40) forwards;
  overflow: hidden;
  white-space: nowrap;
  display: block;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .popup-message {
    bottom: 10%;
    left: 10px;
    padding: 15px;
    max-width: 70%;
    flex-direction: column;
    align-items: flex-start;
  }

  .message-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .message-text {
    font-size: 14px;
    margin: 0;
    flex: 1;
  }

  .close-btn {
    font-size: 20px;
  }

  .director-message {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .avatar {
    margin-right: 0;
    margin-bottom: 10px;
  }

  .message-bubble {
    max-width: 100%;
    width: 96%;
    max-height: 50px; /* Изначально маленький размер */
    white-space: normal; /* Для переноса строк */
  }

  .director-text {
    text-align: left;
  }
}
</style>
