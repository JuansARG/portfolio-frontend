<script setup lang="ts">
import { UserPortfolio } from 'interfaces/userPortfolio';

const { data: { value: userPortfolio } } = await useFetch<UserPortfolio>('/api/response');
</script>
<template>
    <div class="row p-3 m-0" v-if="userPortfolio">
        <div class="container px-0">
            <div class="perfil-container d-flex flex-column gap-2 mb-3">
                <div>
                    <p class="name text-center m-0 fs-1 mb-2">{{ `${userPortfolio.name} ${userPortfolio.surname}` }}</p>
                    <p class="title fs-3 m-0">{{ userPortfolio.title }}</p>
                </div>
                <div class="img-container align-self-center">
                    <img :src="userPortfolio.imageURL" class="img-fluid rounded-circle shadow-lg" alt="Mi foto de perfil">
                </div>
            </div>
            <div class="text-container col col-sm-7 p-2 mb-2">
                <p class="text-profile fs-5 m-0">
                    {{ userPortfolio.profile }}
                </p>
            </div>
            <div class="icons-container d-flex gap-2 justify-content-end col col-sm-7">
                <NuxtLink class="nav-link" to="https://www.linkedin.com/in/juanisat/" target="_blank">
                    <Icon size="50px" name="devicon:linkedin" />
                </NuxtLink>
                <NuxtLink class="nav-link" to="https://github.com/JuansARG" target="_blank">
                    <Icon size="50px" name="mingcute:github-fill" />
                </NuxtLink>
                <NuxtLink class="nav-link" to="mailto:juansarmientog96@gmail.com" target="_blank">
                    <Icon size="50px" name="logos:google-gmail" />
                </NuxtLink>
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
.img-container {
    max-width: 18rem;
}
.name {
    font-size: 4.2rem !important;
    font-family: 'Dancing Script', cursive;
    line-height: 1;
}
.title {
    font-family: 'Roboto Slab', serif;
    text-align: center;
    text-decoration: underline;
}
.text-container {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    backdrop-filter: blur(8px);
}
.text-profile {
    font-family: 'Roboto Slab', serif;
    text-align: justify;
}
a {
    cursor: pointer;
}

/* Media queries */
/* Estilos para pantallas más grandes (por ejemplo, tablets y escritorios) */
@media screen and (min-width: 767px) {
    .container {
        display: flex;
        flex-direction: column;
    }
    .text-container, .icons-container {
        align-self: center;
    }
}

/* Estilos para pantallas muy grandes (por ejemplo, computadoras de escritorio) */
@media screen and (min-width: 1023px) {

    .container{
        justify-content: center;
    }
    .perfil-container {
        flex-direction: row !important;
        justify-content: center;
        align-items: center;
        gap: 1.5rem !important;
    }
    .row{
        min-height: 82.7vh;
        max-height: 100vh;
    }
}
</style>