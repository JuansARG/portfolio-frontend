<template>
    <div class="d-flex flex-column">
        <header>
            <Navbar />
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
</template>
<style scoped>
div {
    background-color: #53929d;
}
</style>