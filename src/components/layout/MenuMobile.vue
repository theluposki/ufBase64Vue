<template>
  <div class="menu-container">
    <a href="#/">Home</a>
    <a href="#/about">About</a>
    <a href="#/asdasdsdas">Not Found</a>
  </div>
</template>

<script setup></script>

<style scoped>
.menu-container {
  position: absolute;
  z-index: 10000;

  transition: transform 0.3s;

  top: -10px;
  left: -1px;
  width: 300px;
  min-height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);

  background-color: rgba(33, 33, 33, 0.95);

  display: flex;
  flex-direction: column;
  gap: 12px;

  border-radius: 0 12px 12px 0;
  box-shadow: inset 0 4px var(--blue-l), 0 0 8px var(--dark) ;
  padding: 12px;
}

a {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
}
</style>
