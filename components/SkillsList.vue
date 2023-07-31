<script setup lang="ts">
import { Skill, TypeSkill } from '../interfaces/userPortfolio';

interface Props {
    skills: Skill[];
}

const props = defineProps<Props>();

const skillsOrderByTitle: Skill[] = props.skills.sort((a, b) => {
    if( a.title > b.title ) return 1;
    if( a.title < b.title ) return -1;
    return 0;
});

</script>
<template>
    <div 
        class="skills-list col-12 col-md-7 d-flex flex-column align-items-center mt-2" 
        v-if="skills.length > 0">
        <p 
            class="text-center text-white text-capitalize w-75" 
            v-text="`<${skills[0].typeSkill.toLowerCase()}/>`" />
        <ul class="list-group list-group-flush align-items-center w-100">
            <template v-for="{ title, typeSkill } in skillsOrderByTitle">
                <li 
                    class="list-group-item list-group-item-success list-group-item-action mb-1 text-center font-monospace"
                    v-if="typeSkill === TypeSkill.Soft" 
                    v-text="title"/>
                <li 
                    class="list-group-item list-group-item-danger list-group-item-action mb-1 text-center font-monospace"
                    v-else 
                    v-text="title"/>
            </template>
        </ul>
    </div>
</template>
<style scoped>
p {
    font-size: 3.5rem !important;
}

/* Media queries */
/* Estilos para pantallas más grandes (por ejemplo, tablets y escritorios) */
@media screen and (min-width: 767px) {}

/* Estilos para pantallas muy grandes (por ejemplo, computadoras de escritorio) */
@media screen and (min-width: 1023px) {
    .skills-list{
        width: 40%;
    }
}
</style>