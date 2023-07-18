<script setup lang="ts">

const imgURL = ref<string>("https://res.cloudinary.com/dlhdrfzlt/image/upload/v1687475573/1681270328482_brilho.jpg");

</script>

<template>
    <div class="container p-2 d-flex flex-column justify-content-center">
        <div class="row p-2">
            <div class="d-flex flex-column mb-2">
                <p class="fs-5 m-0">Bienvenido, soy</p>
                <p class="text-center m-0 name">Juan Ignacio Sarmiento,</p>
                <p class="fs-4 m-0">Desarrollador Full Stack Java & Vue</p>
            </div>
            <div class="d-flex flex-column">
                <p class="fst-italic text-profile">Autodidacta, perseverante y en constante formación,
                    siempre me cuestiono como funciona todo, motivo por el cual me gusta dedicarle tiempo para comprender la
                    razon de ser de las cosas,
                    lo que me lleva a aprender algo nuevo todo los dias en pos de desarrollar codigo limpio, reutilizable,
                    optimo y poder implementar las mejores practicas.
                </p>
                <div class="img-container align-self-center mb-2">
                    <img :src="imgURL" class="img-fluid img-thumbnail" alt="Mi foto de perfil">
                </div>
            </div>
            <div class="span-container d-flex gap-2 justify-content-between">
                <NuxtLink class="nav-link" to="https://www.linkedin.com/in/juanisat/" target="_blank">
                    <Icon size="50px" name="devicon:linkedin" />
                </NuxtLink>

                <NuxtLink class="nav-link" to="https://github.com/JuansARG" target="_blank">
                    <Icon size="50px" name="devicon:github" />
                </NuxtLink>
                <NuxtLink class="nav-link" to="mailto:juansarmientog96@gmail.com" target="_blank">
                    <Icon size="50px" name="logos:google-gmail" />
                </NuxtLink>
            </div>
        </div>
    </div>
    <Modal />
</template>
<style scoped>
.container {
    min-height: 76.9vh;
}

.img-container {
    max-width: 25rem;
}

.name {
    font-size: 3rem !important;
    font-family: 'Dancing Script', cursive;
    font-size: xx-large;
}

.text-profile {
    text-align: justify;
}

NuxtLink {
    cursor: pointer;
}
</style>