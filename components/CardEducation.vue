<script setup lang="ts">
import { Formation, UserPortfolio } from 'interfaces/userPortfolio';


interface Props {
    formation: Formation;
}

const props = defineProps<Props>();
const formation = toRef(props, 'formation');


</script>
<template>
    <div class="card mb-3">
        <img 
            :src="formation.certificateURL" 
            class="card-img-top border-bottom border-dark-subtle" 
            alt="Certificado">
        <div class="card-body">
            <p 
                class="card-title fs-5 fw-bold"
                v-text="formation.title"/>
            <p 
                class="card-text fst-italic text-decoration-underline text-end"
                v-text="formation.educationEntity"></p>
            <div class="d-flex flex-column">
                <p class="card-text m-0"><small class="text-body-secondary">{{ `Fecha de Inicio: ${formation.startDate}` }}</small></p>
                <p class="card-text"><small class="text-body-secondary">{{ `Fecha de Finalización: ${formation.endDate}` }}</small></p>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* Media queries */
/* Estilos para pantallas más grandes (por ejemplo, tablets y escritorios) */
@media screen and (min-width: 767px) {}

/* Estilos para pantallas muy grandes (por ejemplo, computadoras de escritorio) */
@media screen and (min-width: 1023px) {
}
</style>