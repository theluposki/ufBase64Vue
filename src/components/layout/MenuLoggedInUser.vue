<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../../stores/user.js'
import { useLayoutStore } from '../../stores/layout.js'

const storeUser = useUserStore()
const storeLayout = useLayoutStore()

const user = computed(() => storeUser.user)

</script>
<template> 
  <div v-if="user.picture" class="menuLoggedInUser">
    <img :src="user.picture" class="picture" alt="image profile">
    <p class="title">{{ user.nickname }}</p>
    <ul class="myLinks">
      <li class="ml-item" v-for="(item, index) in user.links" :key="index">
        {{ item }}
      </li>
    </ul>
    <p class="bio">{{ user.bio }}</p>
  </div>
</template>

<style scoped>
.menuLoggedInUser {
  position: absolute;
  top: 62px;
  right: 0px;
  z-index: 10000;

  background-color: var(--dark);
  width: 200px;
  padding: 12px;
  height: calc(100vh - 78px);
  overflow: hidden;
  border-radius: 6px 0 0 6px;

  display: flex;
  align-items: center;
  flex-direction: column;
}

.picture {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
}

.picture:hover {
  transition: all ease .4s;
  scale: .97;
}

.picture:active {
  scale: 1.1;
}
</style>
