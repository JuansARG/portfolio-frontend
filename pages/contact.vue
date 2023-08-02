<script setup lang="ts">

useHead({
    title: 'Contacto'    
});

interface Form {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const waiting = ref<boolean>(false);

const form = ref<Form>({
    name: '',
    email: '',
    subject: '',
    message: '',
});


const submit = (mail: Form) => {
    console.log(mail);
}


</script>
<template>
    <div class="row p-3 m-0">
        <div class="container">
            <p class="text-center m-0 mb-3 fw-bold border-bottom pb-2">Contacto</p>
            <form class="d-flex flex-column align-items-center py-4 text-white gap-2"
                @submit.prevent="submit(form)">
                <div class="d-flex flex-column w-100 gap-2">
                    <label for="name">Nombre:</label>
                    <input 
                        v-model="form.name" 
                        type="text"
                        name="name"
                        required
                        >
                    <label for="email">Email:</label>
                    <input 
                        v-model="form.email" 
                        type="email"
                        name="email"
                        required>
                    <label for="subject">Asunto:</label>
                    <input 
                        v-model="form.subject" 
                        type="text"
                        name="subject"
                        required
                        >
                </div>
                <div class="d-flex flex-column w-100 gap-2">
                    <label for="messsage">Mensaje:</label>
                    <textarea 
                        v-model="form.message"
                        type="text"
                        name="message"
                        rows="6"
                        required
                        />
                </div>
                <button class="btn mt-2 fs-3 text-white border border-2" type="submit">
                    <template v-if="!waiting">Enviar</template>
                    <template v-if="waiting">Enviando</template>
                </button>
            </form>
        </div>
    </div>
</template>
<style scoped>
textarea {
    resize: none;
}
.row {
    min-height: 80vh;
    color: white;
    background-color: #3e818c;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2353929d' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    font-family: 'Roboto Slab', serif;
}
.container p {
    font-size: 4.2rem !important;
}
.btn:hover{
    background-color: white;
    color: #3e818c!important;
    font-weight: bolder;
    border-color: white;
}
</style>