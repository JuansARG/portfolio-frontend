<script setup lang="ts">
useHead({
    title: 'Inicio'
});

await useAuth();

const globalState = useGlobalState();
const userData = toRef(globalState.value, 'userData');
</script>
<template>
    <div class="row p-3 m-0" v-if="userData">
        <div class="container px-0">
            <div class="perfil-container d-flex flex-column gap-2 mb-3">
                <div>
                    <p
                        class="name text-center m-0 mb-3 fw-bold border-bottom pb-2"
                        v-text="`${userData.name} ${userData.surname}`"/>
                    <p 
                        class="title text-center fs-2 m-0 fst-italic"
                        v-text="userData.title"/>
                </div>
                <div class="img-container align-self-center">
                    <img 
                        :src="userData.imageURL" 
                        class="img-fluid rounded-circle shadow-lg" alt="Mi foto de perfil">
                </div>
            </div>
            <div class="text-container col col-sm-7 p-2 mb-2 shadow-sm">
                <p
                    class="text-profile fs-5 m-0"
                    v-text="userData.profile"/>
            </div>
            <div class="icons-container d-flex gap-2 justify-content-end col col-sm-7">
                <NuxtLink class="nav-link border p-1 rounded-3 shadow-sm" to="https://www.linkedin.com/in/juanisat/" target="_blank">
                    <Icon size="50px" name="devicon:linkedin" />
                </NuxtLink>
                <NuxtLink class="nav-link border p-1 rounded-3 shadow-sm" to="https://github.com/JuansARG" target="_blank">
                    <Icon size="50px" name="mingcute:github-fill" />
                </NuxtLink>
                <NuxtLink class="nav-link border p-1 rounded-3 shadow-sm" to="mailto:juansarmientog96@gmail.com" target="_blank">
                    <Icon size="50px" name="logos:google-gmail" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<style scoped>
.row {
    min-height: 80vh;
    color: white;
    font-family: 'Roboto Slab', serif;
    background-color: #3e818c;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2353929d' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.img-container {
    max-width: 18rem;
}
.name {
    font-size: 4.2rem !important;
    line-height: 1;
}

.text-container {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    backdrop-filter: blur(8px);
}
.text-profile {
    text-align: justify;
}

a {
    cursor: pointer;
}

/* Media queries */
/* Estilos para pantallas más grandes (por ejemplo, tablets y escritorios) */
@media screen and (min-width: 767px) {
    .row {
        min-height: 85vh;
    }
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
        min-height: 81.4vh;
    }
}


/* Estilos para pantallas muy muy grandes*/
@media screen and (min-width: 1439px) {
.row{
    min-height: 80vh;
}
}
</style>