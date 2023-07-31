<script setup lang="ts">

interface Error {
    message: String;
    stack: String;
    statusCode: Number;
    statusMessage: String;
    url: String;
}

const { error } = defineProps<{
    error: Error
}>();

const handleClearError = () => clearError({
    redirect: '/'
});

</script>
<template>
    <div class="div-error d-flex justify-content-center align-items-center">
        <div class="col-10 d-flex flex-column gap-2 align-items-center">
            <Icon size="200px" name="icon-park-solid:error" />
            <p class="text-white fs-1 text-decoration-underline" v-text="`Error ${error.statusCode}...`" />
            <p class="text-white fs-2" v-text="`Página '${error.url}' no encontrada...`" />
            <button type="button" class="btn btn-light fw-bold px-3 py-2" @click="handleClearError">Ir al Inicio...</button>
        </div>
    </div>
</template>
<style scoped>
.div-error {
    font-family: 'Roboto Slab', serif;
    height: 100vh;
    width: 100% !important;
    background-color: #3e818c;
}
</style>