<script setup lang="ts">
import { useGlobalState } from '../state/useState';
import { Skill, TypeSkill } from '../interfaces/userPortfolio';


useHead({
    title: 'Habilidades'
})

const userPortfolio = useGlobalState();

let softSkills: Skill[] = [];
let hardSkills: Skill[] = [];

if (userPortfolio) {
    softSkills = userPortfolio.value.skills.filter(skill => skill.typeSkill === TypeSkill.Soft);
    hardSkills = userPortfolio.value.skills.filter(skill => skill.typeSkill === TypeSkill.Hard);
}


</script>
<template>
    <div 
        class="row p-3 m-0" 
        v-if="userPortfolio">
        <div class="container px-0 d-flex flex-column align-items-center ">
            <p class="text-center text-white m-0 mb-3 fw-bold border-bottom pb-2">Habilidades</p>
            <div class="soft-skills-container d-flex flex-column align-items-center w-100">
                <SkillsList :skills="softSkills" />
                <SkillsList :skills="hardSkills" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.row{
    background-color: #3e818c;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2353929d' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    color: white;
    font-family: 'Roboto Slab', serif;
}
.container p {
    font-size: 4rem !important;
}

/* Media queries */
/* Estilos para pantallas más grandes (por ejemplo, tablets y escritorios) */
@media screen and (min-width: 767px) {}

/* Estilos para pantallas muy grandes (por ejemplo, computadoras de escritorio) */
@media screen and (min-width: 1023px) {
    .soft-skills-container {
        flex-direction: row !important;
        justify-content: center;
        align-items: start !important;
        gap: 1rem;
    }
}
</style>