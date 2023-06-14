<script setup></script>
<template>
  <div class="logo">
    <span>MyReb</span>
    <p></p>
  </div>
</template>

<style scoped>
.logo {
  position: relative;
  min-height: 60px;
  max-height: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
}

.logo span {
  font-size: 3rem;
}

.logo p {
  position: absolute;
  top: 34px;
  right: 0;
  font-size: 1rem;
  color: var(--blue-l);
  overflow: hidden;
}

p::after {
  content: '';
  display: inline-block;
  animation: animation 8.5s steps(11) infinite;
  width: 0ch;
}

p::before {
  content: '';
  display: inline-block;
  width: 2px;
  height: 100%;
  animation: blinking .4s linear alternate;
}

@keyframes animation {
  25% {
    content: "Security";
    width: 11ch;
  }
  40% {
    width: 0ch;
  }
  75% {
    content: 'Innovation';
    width: 10ch;
  }
  90% {
    width: 0ch;
  }
 }

 @keyframes blinking {
  100% {
    opacity: 0;
  }
 }
</style>
