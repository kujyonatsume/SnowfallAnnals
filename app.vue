<template>
  <div :key="route.path" class="min-h-screen app-wrapper">
    <NuxtPage />
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
</script>
<style scoped lang="scss">

@keyframes SideIn {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  90% {
    transform: translateY(10%);
    opacity: 0.75;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}


.app-wrapper {
  background: linear-gradient(to top, #60ffcf50 0%, #ffffff30 100%);
  animation-name: SideIn;
  animation-timing-function: ease-in;
  animation-duration: 2s;
}
</style>
