<template>
    <button type="button"
        class="fixed top-8 right-8 h-8 w-8 rounded-full border inline-flex justify-center items-center bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
        @click="toggleDarkMode">
        <i class="pi toggle-icon text-gray-700 dark:text-gray-300" />
    </button>
</template>

<script setup>
const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
}
</script>

<style>
.toggle-icon:before {
    content: "\e9c8";
}

:root[class="dark"] .toggle-icon:before {
    content: "\e9c7";
}
</style>