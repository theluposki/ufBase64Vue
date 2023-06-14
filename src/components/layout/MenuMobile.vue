<script setup>
import { computed } from 'vue'
import { useLayoutStore } from '../../stores/layout.js'
const storeLayout = useLayoutStore()

const activeMenu = computed(() => storeLayout.activeMenu)

const fnActiveMenu = () => storeLayout.fnActiveMenu()
</script>

<template>
  <div class="menu-container">
    <div class="btn-closed" v-if="activeMenu" @click="fnActiveMenu">
      <i class='bx bx-chevron-left' ></i>
    </div>
    Menu
  </div>
</template>

<style scoped>
.menu-container {
  position: absolute;
  top: 2px;
  z-index: 10000;

  background-color: var(--dark);
  border-radius: 0 6px 6px 0;
  color: var(--white);

  width: 300px;
  height: calc(100vh - 78px);
}

.btn-closed {
  position: absolute;
  top: 0;
  right: 0;
  
  background-color: transparent;
  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: calc(100vh - 78px);

  border-radius: 0 12px 12px 0;
  cursor: pointer;
  font-size: 2.5rem;
  transition: all ease 2s;
}
</style>
