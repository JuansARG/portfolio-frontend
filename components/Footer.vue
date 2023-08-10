<script setup lang="ts">
const year = ref<number>(new Date().getFullYear());

</script>
<template>
    <div class="d-flex flex-column w-100 text-center pt-3 text-white-50 border-top">
        <p>Desarrollado con Nuxt 3&#x2728; y Java&#x2615;</p>
        <p class="mb-2">Copyright &#x00A9; {{ year }} - Todos los derechos Reservados</p>
    </div>
</template>
<style scoped>
div {
    background-color: #53929d!important;
    font-family: 'Roboto Slab', serif;
}
</style>