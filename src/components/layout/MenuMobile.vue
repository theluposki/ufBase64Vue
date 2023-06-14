<script setup>
import { computed, ref } from 'vue'
import { useLayoutStore } from '../../stores/layout.js'
import { useRouter } from "vue-router";

const storeLayout = useLayoutStore()
const { push, currentRoute } = useRouter();

const activeMenu = computed(() => storeLayout.activeMenu)

const fnActiveMenu = () => storeLayout.fnActiveMenu()

const pathname = computed(() => currentRoute.value.fullPath);

const setLink = (link) => {
  push(link);
  storeLayout.fnActiveMenu()
}



</script>

<template>
  <div class="menu-container">
    <div class="btn-closed" v-if="activeMenu" @click="fnActiveMenu">
      <i class='bx bx-chevron-left' ></i>
    </div>
    
    <ul class="nav">
      <li @click="setLink('/')" :class="pathname === '/' ? 'nav-link active' :'nav-link'">
        <i class='bx bxs-dashboard' ></i>
        <span>Feed</span>
      </li>
      <li @click="setLink('/about')" :class="pathname === '/about' ? 'nav-link active' :'nav-link'">
        <i class='bx bx-info-square' ></i>
        <span>Sobre</span>
      </li>
    </ul>
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

  width: 200px;
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

.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
}

.nav-link {
  min-height: 50px;
  max-height: 50px;

  display: flex;
  align-items: center;
  gap: 12px;

  background-color: var(--dark2);
  padding: 0 12px;
  cursor: pointer;
  border: solid 6px transparent;
  border-radius: 8px;
  user-select: none;
}

.nav-link:hover {
  transition: all ease .4s;
  border-right: solid 6px var(--blue-l);
}

.active {
  background-color: var(--blue-l);
  color: var(--dark);
  font-weight: 700;
}

</style>
