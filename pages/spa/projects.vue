<script setup lang="ts">
import { UserPortfolio } from '../../interfaces/userPortfolio';

const { data: { value: userPortfolio } } = await useFetch<UserPortfolio>('/api/response');

</script>

<template>
    <div class="row p-3 m-0">
        <div class="container d-flex flex-column align-items-center">
            <p class="text-center m-0 fs-1 mb-2">Proyectos</p>
            <div class="container-card col-12 col-xl-10 d-flex flex-column gap-4 align-items-center">
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
    min-height: 70vh;
    color: white;
    background-image: url("https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg");
    background-size: contain;
}

.container p {
    font-size: 4.2rem !important;
    font-family: 'Dancing Script', cursive;
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