<template>
    <div class="d-flex flex-column">
        <header>
            <Navbar />
        </header>
        <main>
            <NuxtPage/>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
</template>
<style scoped>
div {
    background-color: #3e818c;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2353929d' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>