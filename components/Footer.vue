<script setup lang="ts">
const year = ref<number>(new Date().getFullYear());

</script>
<template>
    <div class="d-flex flex-column text-center py-4 text-white">
        <p class="fw-light">Desarrollado con Nuxt 3&#x2728; y Java&#x2615;</p>
        <p class="fw-medium">Copyright &#x00A9; {{ year }} - Todos los derechos Reservados</p>
    </div>
</template>
<style scoped>
div {
    background-color: #19274e;
}
</style>