<template>
    <div class="main-container d-flex flex-column">
        <Navbar />
        <slot />
        <Footer />

    </div>
</template>
<style scoped>
.main-container {
    background-image: url("https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg");
    background-size: contain;
}
</style>