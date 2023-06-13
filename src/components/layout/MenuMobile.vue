<script setup>
import { computed } from 'vue'
import { useLayoutStore } from '../../stores/layout.js'

const storeLayout = useLayoutStore()

const activeMenu = computed(() => storeLayout.activeMenu)

const fnActiveMenu = () => storeLayout.fnActiveMenu()
</script>

<template>
  <div class="menu-container">
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
  height: 100px;
}
</style>
