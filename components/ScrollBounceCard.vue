<script setup>
const el = ref(null);
const show = ref(false);
let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        show.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.2 },
  );

  observer.observe(el.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <div ref="el" class="card" :class="{ show }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  opacity: 0;
  transform: translateY(60px) scale(0.9);

  &.show {
    animation: bounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
}

@keyframes bounce {
  0% {
    opacity: 0;
    transform: translateY(60px) scale(0.9);
  }
  60% {
    opacity: 1;
    transform: translateY(-15px) scale(1.05);
  }
  80% {
    transform: translateY(5px) scale(0.98);
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}
</style>
