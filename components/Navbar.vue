<template>
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <p class="navbar-brand m-0 fs-2 logo" to="/spa">Take it easy!</p>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse"
                id="navbarNav">
                <ul class="navbar-nav align-items-center fs-5 py-2 fst-italic gap-3 ms-auto me-2">
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/spa">Inicio</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link " to="/spa/projects">Proyectos</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link " to="/spa/skills">Habilidades</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link " to="/spa/education">Formacion</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped>
nav {
    background-color: #383838;
}

a{
    color: white;
    border-bottom: 1px solid white;
    border-left: 1px solid transparent;
    padding-left: .7rem!important;
    transition: 1s;
}

a:hover{
    border-left: 1px solid white;
    padding-left: 1.2rem!important;
}

.logo {
    font-family: 'Dancing Script', cursive;
    color: white;
}

.router-link-active {
    border-left: 1px solid;
}
</style>