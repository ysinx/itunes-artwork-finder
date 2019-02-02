<template>
  <div class="rainbow-loading" :class="{ active: isLoading }">
    <div class="rainbow-loading-progress"></div>
  </div>
</template>
<script>
export default {
  props: ['isLoading']
}
</script>
<style scoped>
@keyframes moveGradient {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -200% 0%;
  }
}
div.rainbow-loading {
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  opacity: 0;
  z-index: 9;
  transition: opacity 0.5s ease-in-out;
}
div.rainbow-loading.active {
  opacity: 1;
}
div.rainbow-loading-progress {
  display: block;
  height: 5px;
  width: 100%;
  background: linear-gradient(
    90deg,
    red 0%,
    yellow 15%,
    lime 30%,
    cyan 50%,
    blue 65%,
    magenta 80%,
    red 100%
  );
  background-size: 200%;
  animation: moveGradient 5s linear infinite;
}
</style>
