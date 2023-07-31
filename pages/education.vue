<script setup lang="ts">
import { Formation } from 'interfaces/userPortfolio';

useHead({
    title: 'Formacion'
})

const userPortfolio = useGlobalState();


const parseStringToNumber = (startDate:String):Number => {
    const arrayStartDate: String[] = startDate.split('/');
    const getTime: Number = new Date(
        Number(arrayStartDate[2]),
        Number(Number(arrayStartDate[1]) - 1),
        Number(arrayStartDate[0])
    ).getTime();
    return getTime;
}

const compareFn = (a:Formation, b:Formation) => {
    const fechaA: Number = parseStringToNumber(a.startDate);
    const fechaB: Number = parseStringToNumber(b.startDate);
    return +fechaA - +fechaB;
}

userPortfolio?.value.formations.sort(compareFn);


</script>
<template>
    <div class="row p-3 m-0" v-if="userPortfolio">
        <div class="container px-0 d-flex flex-column align-items-center">
            <p class="text-center m-0 mb-3 fw-bold border-bottom pb-2">Formación</p>
            <div class="container-card-education d-flex flex-column gap-2 col-12 col-sm-9 col-xl-7">
                <template v-for="formation in userPortfolio.formations">
                    <CardEducation :formation="formation" />
                </template>
            </div>
        </div>
    </div>
</template>
<style scoped>
.row {
    min-height: 76.9vh;
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
    .container-card-education {
        align-items: center;
    }
}
@media screen and (min-width: 1919px) {
    .container-card-education {
        flex-direction: row!important;
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>