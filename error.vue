<script setup lang="ts">
interface Error{
    message: String;
    stack: String;
    statusCode: Number;
    statusMessage: String;
    url: String;
}

const { error } = defineProps<{
    error: Error
}>();

</script>
<template>
    <div class="d-flex align-items-center">
        <h1 
            class="text-white text-center"
            v-text="`Pagina ${error.url} no encontrada`"/>
    </div>
</template>
<style scoped>
div {
    height: 100vh;
    background-color: #3e818c;
}
</style>