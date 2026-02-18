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
  }
  100% {
    transform: translateY(0);
  }
}

.app-wrapper {
  background: linear-gradient(180deg, #f0f0f0 0%, #ffffff 100%);
  animation: SideIn 0.5s ease-out;
  transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
  transform: translateY(0);
  transition: transform 0.5s;
}
</style>
