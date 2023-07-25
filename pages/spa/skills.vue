<script setup lang="ts">
import { UserPortfolio } from 'interfaces/userPortfolio';
import { Skill, TypeSkill } from '../../interfaces/userPortfolio';

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
            <p class="text-center text-white">Habilidades</p>
            <div class="soft-skills-container d-flex flex-column align-items-center w-100">
                <SkillsList :skills="softSkills" />
                <SkillsList :skills="hardSkills" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.row{
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
    .soft-skills-container {
        flex-direction: row !important;
        justify-content: center;
        align-items: start !important;
        gap: 1rem;
    }
}
</style>