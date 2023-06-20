<script setup>
import { computed } from 'vue'
import { useLayoutStore } from '../../stores/layout.js'

const storeLayout = useLayoutStore()

const activeContainerLogin = computed(() => storeLayout.activeContainerLogin)

const fnActiveContainerLogin = () => {
  storeLayout.fnActiveContainerLogin()
}

</script>
<template>
  <div class="btn-login" @click="fnActiveContainerLogin">
    Entrar
  </div>
</template>

<style>
.btn-login {
  display: flex;
  background-color: var(--blue-l);
  color: var(--dark);
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
}

.btn-login:hover {
  transition: all ease .4s;
  opacity: .92;
}

.btn-login:active {
  scale: .95;
}
</style>
