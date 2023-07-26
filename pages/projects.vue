<script setup lang="ts">
import { UserPortfolio } from '../interfaces/userPortfolio';

useHead({
    title: 'Proyectos'
});

const { data: { value: userPortfolio } } = await useFetch<UserPortfolio>('/api/response');


</script>
<template>
    <div class="row p-3 m-0">
        <div class="container d-flex flex-column align-items-center">
            <p class="text-center m-0 mb-3 fw-bold border-bottom pb-2">Proyectos</p>
            <div class="container-card col-12 col-xl-10 d-flex flex-column gap-3 align-items-center">
                <template 
                    v-if="userPortfolio" 
                    v-for="project in userPortfolio.projects">
                    <CardProject :project="project" />
                </template>
            </div>
        </div>
    </div>
</template>
<style scoped>
.row {
    /* min-height: 70vh; */
    color: white;
    background-color: #3e818c;
    font-family: 'Roboto Slab', serif;
}
.container p {
    font-size: 4.2rem !important;
}

/* Media queries */
/* Estilos para pantallas más grandes (por ejemplo, tablets y escritorios) */
@media screen and (min-width: 767px) {}

/* Estilos para pantallas muy grandes (por ejemplo, computadoras de escritorio) */
@media screen and (min-width: 1023px) {
    .container-card {
        flex-direction: row !important;
        flex-wrap: wrap !important;
        justify-content: center;
    }
}
</style>