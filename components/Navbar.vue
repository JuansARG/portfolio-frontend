<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <p class="navbar-brand m-0 fs-2 logo" to="/spa">Shoot for the moon!</p>
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
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav align-items-center fs-5 py-2 fst-italic gap-3 ms-auto me-2 ">
                    <li class="nav-item">
                        <NuxtLink class="nav-link border-black border-bottom" to="/spa">Inicio</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link border-black border-bottom" to="/spa/projects">Proyectos</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link border-black border-bottom" to="/spa/skills">Habilidades</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link border-black border-bottom" to="/spa/education">Formacion</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped>
nav {
    background-color: #b49b85;
}
.logo{
    font-family: 'Dancing Script', cursive;
}

.router-link-active {
  color: black;
  border-left: 1px solid black;
  padding-left: 1rem;
}
</style>