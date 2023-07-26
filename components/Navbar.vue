<template>
    <nav class="navbar navbar-expand-lg py-3 border-bottom border-light" data-bs-theme="dark">
        <div class="container-fluid justify-content-center ">
            <!-- <p class="navbar-brand m-0 fs-2 logo" to="/spa">Take it easy!</p> -->
            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav"
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center " id="navbarNav">
                <ul class="navbar-nav fs-5 py-3 fst-italic gap-3 me-2">
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/">Inicio</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link " to="/projects">Proyectos</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link " to="/skills">Habilidades</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link " to="/education">Formacion</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped>
nav {
    background-color: #004e59;
    font-family: 'Roboto Slab', serif;
}

a{
    color: white;
    border-color: white;
    border-bottom: 1px solid;
    border-left: 1px solid transparent;
    padding-left: .7rem!important;
    text-decoration: none;
    transition: all 1s;
}

a:hover{
    border-left: 1px solid;
    padding-left: 1.2rem!important;
    
}

.logo {
    font-family: 'Dancing Script', cursive;
    color: white;
}

.router-link-active {
    border-left: 1px solid;
    padding-left: 1.2rem!important;
    font-weight: bold;
}
</style>