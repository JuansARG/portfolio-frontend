<script setup lang="ts">
import { UserPortfolio } from 'interfaces/userPortfolio';

const { data: { value: userPortfolio } } = await useFetch<UserPortfolio>('/api/response');


</script>
<template>
    <div 
        class="row p-3 m-0"
        v-if="userPortfolio">
        <div class="container px-0 d-flex flex-column align-items-center">
            <p class="text-center m-0 fs-1 mb-2">Formación</p>
            <div class="container-card-education d-flex flex-column gap-2 col-12 col-sm-9 col-xl-7">
                <template v-for="formation in userPortfolio.formations">
                    <CardEducation :formation="formation"/>
                </template>
            </div>
        </div>
    </div>
</template>
<style scoped>
.row {
    min-height: 76.9vh;
    color: white;
    background-image: url("https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg");
    background-size: cover;
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
}
</style>