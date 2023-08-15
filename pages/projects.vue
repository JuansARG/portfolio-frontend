<script setup lang="ts">
import { useGlobalState } from '../state/useState';

useHead({
    title: 'Proyectos'
});

const userPortfolio = useGlobalState();


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
    color: white;
    background-color: #3e818c;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2353929d' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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