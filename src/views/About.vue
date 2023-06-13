<template>
  <div class="page" ref="pageRef" @touchstart.stop="onTouchStart" @touchmove.stop="onTouchMove" @touchend.stop="onTouchEnd">
    <div class="menu-container" :class="{ 'menu-open': menuOpen }">
      <div class="menu">
        <!-- Conteúdo do menu -->
        <a href="#/about">link</a>
        <a href="#/about">link</a>
        <a href="#/about">link</a>
        <a href="#/about">link</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(true);
const posicaoInicial = ref(0);
const deslocamentoMinimo = 50;
const pageRef = ref(null);

const onTouchStart = (event) => {
  console.log("touch start");
  posicaoInicial.value = event.touches[0].clientX;
};

const onTouchMove = (event) => {
  console.log("touch move");
  const deslocamentoX = event.touches[0].clientX - posicaoInicial.value;

  if (deslocamentoX < -deslocamentoMinimo) {
    menuOpen.value = true;
  } else if (deslocamentoX > deslocamentoMinimo) {
    menuOpen.value = false;
  }
};

const onTouchEnd = () => {
  console.log("touch end");
  posicaoInicial.value = 0;
};

// Fechar o menu ao clicar fora dele
window.addEventListener('click', (event) => {
  if (menuOpen.value && !pageRef.value.contains(event.target)) {
    menuOpen.value = false;
  }
});
</script>

<style scoped>
.page {
  width: 100%;
  height: 100vh;
}

.menu-container {
  display: flex;
  transition: transform 0.3s;
  width: 200px;
  min-height: calc(100vh - 120px);
  max-height: calc(100vh - 120px);
  background-color: aqua;
}

.menu {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
  transition: transform 0.3s;
  transform: translateX(0);

  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu-open {
  transform: translateX(-100vw);
}

.conteudo {
  flex-grow: 1;
  background-color: #ffffff;
  padding: 20px;
}
</style>
