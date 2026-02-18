<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  speed: { type: Number, default: 0.12 },
});

const el = ref(null);
let raf;

const loop = () => {
  el.value.style.transform = `translate3d(0, ${window.scrollY * props.speed}px, 0)`;
  raf = requestAnimationFrame(loop);
};

onMounted(() => (raf = requestAnimationFrame(loop)));
onBeforeUnmount(() => cancelAnimationFrame(raf));
</script>

<template>
  <Teleport to="body">
    <div class="overlay">
      <div ref="el" class="panel" />
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;

  .panel {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      1200px 800px at 25% 30%,
      rgba(255, 95, 162, 0.35),
      rgba(255, 255, 255, 0) 70%
    );
    will-change: transform;
  }
}
</style>
