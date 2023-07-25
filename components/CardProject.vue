<script setup lang="ts">
import { Project } from '../interfaces/userPortfolio';

interface Props {
    project: Project 
}

const props = defineProps<Props>();
const project = toRef(props, 'project');

</script>
<template>
    <div v-if="project" class="card border-dark" style="width: 22rem;">
        <img :src="project.imageURL" class="card-img-top" alt="...">
        <div class="card-body card-body-text">
            <h5 class="card-title text-decoration-underline fw-bold ">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item text-center fw-semibold  text-decoration-underline">Tecnologias principales</li>

            <template v-if="project.title == 'Maps App'">
                <li class="list-group-item">Typescript</li>
                <li class="list-group-item">Vue Compostion Api</li>
                <li class="list-group-item">MapBox</li>
            </template>

            <template v-else-if="project.title == 'Amazing Events Javascript Vanilla' || project.title == 'Four Legs'">
                <li class="list-group-item">HTML</li>
                <li class="list-group-item">CSS & Bootstrap</li>
                <li class="list-group-item">Javascript</li>
            </template>

            <template v-else>
                <li class="list-group-item">Javascript</li>
                <li class="list-group-item">Vue Options API</li>
                <li class="list-group-item">Java & Spring Boot</li>
            </template>

        </ul>
        <div class="card-body text-end">
            <a :href="project.repositoryURL"
                class="card-link text-decoration-none text-success fw-bold border rounded-top-5 py-2 px-3 border-success">Repositorio</a>
            
            <template v-if="project.title == 'The Camp'">
                <a :href="project.deployURL"
                    class="card-link text-decoration-none text-danger fw-bold border rounded-bottom-5 py-2 px-3 border-danger ms-1">Video</a>
            </template>

            <template v-else>
                <a :href="project.deployURL"
                    class="card-link text-decoration-none text-danger fw-bold border rounded-bottom-5 py-2 px-3 border-danger ms-1">Deploy</a>
            </template>
        </div>
    </div>
</template>
<style scoped>
.card {
    font-family: 'Roboto Slab', serif;
    height: 45rem;
}

.card-body-text {
    height: 400px;
    overflow-y: auto;
}

.card-text {
    text-align: justify;
}

/* Media queries */
/* Estilos para pantallas más grandes (por ejemplo, tablets y escritorios) */
@media screen and (min-width: 767px) {
    .card {
        width: 32rem !important;
    }

}

/* Estilos para pantallas muy grandes (por ejemplo, computadoras de escritorio) */
@media screen and (min-width: 1023px) {}
</style>