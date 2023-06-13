<template>
  <div
    class="main"
    ref="pageRef"
    @touchstart.stop="onTouchStart"
    @touchmove.stop="onTouchMove"
    @touchend.stop="onTouchEnd"
  >
    <MenuMobile :class="{ 'menu-open': menuOpen }" />
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MenuMobile from './MenuMobile.vue'

const menuOpen = ref(true);
const posicaoInicial = ref(0);
const deslocamentoMinimo = 300;
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
window.addEventListener("click", (event) => {
  if (menuOpen.value && !pageRef.value.contains(event.target)) {
    menuOpen.value = false;
  }
});
</script>

<style scoped>
.main {
  position: relative;
}


.menu-open {
  transform: translateX(-100vw);
}
</style>
