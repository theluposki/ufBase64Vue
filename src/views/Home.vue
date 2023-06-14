<script setup>
import { computed, ref, onMounted, nextTick} from "vue";
import { useUserStore } from "../stores/user.js";

const storeUser = useUserStore();

const user = computed(() => storeUser.user);


const posX = ref(0);
const posY = ref(0);
const offsetX = ref(0);
const offsetY = ref(0);
const elementoArrastavel = ref(null);

onMounted(() => {
  nextTick(() => {
    elementoArrastavel.value.addEventListener('touchstart', onTouchStart);
    elementoArrastavel.value.addEventListener('touchmove', onTouchMove);
  });
});

function onTouchStart(event) {
  let touch = event.touches[0];
  offsetX.value = touch.pageX - posX.value;
  offsetY.value = touch.pageY - posY.value;
}

function onTouchMove(event) {
  event.preventDefault(); // Impede o comportamento padrão do toque de rolagem

  let touch = event.touches[0];
  console.log("touch")
  posX.value = touch.pageX - offsetX.value;
  posY.value = touch.pageY - offsetY.value;
}


</script>
<template>
  <div class="page">
    <h1>Home - {{ user.nickname }}</h1>

    <span ref="elementoArrastavel" :style="{ top: posY + 'px', left: posX + 'px' }">Arraste-me!</span>
  </div>
</template>

<style scoped>
span {
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
  cursor: move;
}
</style>
