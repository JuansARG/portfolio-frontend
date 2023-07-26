<script setup lang="ts">
import { UserPortfolio } from 'interfaces/userPortfolio';
import { Formation } from 'interfaces/userPortfolio';

useHead({
    title: 'Formacion'
})

const { data: { value: userPortfolio } } = await useFetch<UserPortfolio>('/api/response');

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

userPortfolio?.formations.sort(compareFn);


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
    font-family: 'Roboto Slab', serif;
}
.container p {
    font-size: 4.2rem !important;
}

/* Media queries */
/* Estilos para pantallas más grandes (por ejemplo, tablets y escritorios) */
@media screen and (min-width: 767px) {}

/* Estilos para pantallas muy grandes (por ejemplo, computadoras de escritorio) */
@media screen and (min-width: 1023px) {}
</style>