<script setup>
import { computed, ref } from 'vue'
import { useLayoutStore } from '../../stores/layout.js'
const storeLayout = useLayoutStore()

const activeContainerLogin = computed(() => storeLayout.activeContainerLogin)

const fnActiveContainerLogin = () => storeLayout.fnActiveContainerLogin()

const lock = ref(false)

const fnLock = () => {
  const password = document.getElementById("password")

  if(lock.value) {
    lock.value = false
    password.type = "password"
  } else {
    lock.value = true
    password.type = "text"
  }
}
</script>

<template>
  <div class="login-container">
    <p class="title">Faça log-in para continuar</p>

    <div class="form">
      <input type="email" class="input" placeholder="digite seu e-mail">
      <div class="form-group">
        <input type="password" id="password" class="input" placeholder="digite sua senha">
        <span class="btn-lock" @click="fnLock">
          <i v-if="!lock" class='bx bxs-lock-alt'></i>
          <i v-if="lock" class='bx bx-lock-open-alt'></i>
        </span>
      </div>

      <div class="btns">
        <a href="#">esqueci minha senha</a>
        <button class="btn">
          <i class='bx bx-rocket'></i>
          GO
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  position: absolute;
  top: 2px;
  right: 0;
  width: 200px;
  height: calc(100vh - 78px);
  border-radius: 6px 0 0 6px;
  background-color: var(--dark);
  padding: 12px;

  display: flex;
  flex-direction: column;
}

.title {
  text-align: center;
  color: var(--blue-l);
  font-weight: 200;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
}

.input {
  width: 100%;
  min-height: 45px;
  padding: 0 12px;
  background-color: var(--dark2);
  border: solid 1px transparent;
  border-bottom: solid 1px var(--blue-l);
  font-size: 1.6rem;
  color: var(--white);
  outline: none;
  caret-color: var(--blue-l);
}

.form-group {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
}

.btn-lock {
  position: absolute;
  right: 0px;
  background-color: transparent;
  min-width: 45px;
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.btns a {
  text-decoration: none;
  color: #555;
  font-size: 1.2rem;
}

.btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 16px;

  border: solid 1px var(--blue-l);
  background-color: var(--blue-l);
  color: var(--dark);
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
}

</style>
