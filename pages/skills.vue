<script setup lang="ts">
import { UserPortfolio, Skill, TypeSkill } from '../interfaces/userPortfolio';

useHead({
    title: 'Habilidades'
})

const { data: { value: userPortfolio } } = await useFetch<UserPortfolio>('/api/response');

let softSkills: Skill[] = [];
let hardSkills: Skill[] = [];

if (userPortfolio) {
    softSkills = userPortfolio.skills.filter(skill => skill.typeSkill === TypeSkill.Soft);
    hardSkills = userPortfolio.skills.filter(skill => skill.typeSkill === TypeSkill.Hard);
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