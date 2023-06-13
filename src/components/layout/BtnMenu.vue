<script setup>
import { computed } from 'vue'
import { useLayoutStore } from '../../stores/layout.js'

const storeLayout = useLayoutStore()

const activeMenu = computed(() => storeLayout.activeMenu)

const fnActiveMenu = () => storeLayout.fnActiveMenu()

</script>
<template>
  <div class="btn-menu" @click="fnActiveMenu">
    <i v-if="!activeMenu" class='bx bx-chevron-right'></i>
    <i v-if="activeMenu" class='bx bx-chevron-left' ></i>
  </div>
</template>

<style>
.btn-menu {
  position: absolute;
  z-index: 10000;
  top: 50%;

  background-color: rgba(33,33,33, 0.8);
  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 15px;
  height: 50px;

  border-radius: 0 12px 12px 0;
  cursor: pointer;
  font-size: 2rem;
}

.btn-menu:hover {
  transition: border ease .4s;
  border-right: solid 2px var(--dark);
}

.btn-menu:active {
  scale: .95;
}
</style>
