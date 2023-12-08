<template>
  <div
    class="min-h-screen bg-white dark:bg-surface-900 p-8 flex items-center justify-center transition-colors duration-200">
    <div class="fixed w-full top-0 left-0 flex items-center justify-end gap-3 p-8">
      <DarkToggle />
      <ColorPalette />
    </div>

    <InputText placeholder="InputText" />
  </div>
</template>

<script setup>
import DarkToggle from './components/DarkToggle.vue';
import ColorPalette from './components/ColorPalette.vue';
</script>