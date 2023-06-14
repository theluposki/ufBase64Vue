<script setup>
import { computed, ref, onMounted, nextTick} from "vue";
import { useUserStore } from "../stores/user.js";

const storeUser = useUserStore();

const user = computed(() => storeUser.user);
</script>
<template>
  <div class="page">
    <h1>Home - {{ user.nickname }}</h1>
  </div>
</template>

<style scoped>

</style>
