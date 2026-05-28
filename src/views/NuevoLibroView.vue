<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const nuevoLibro = ref({
            titulo: '',
            autor: '',
            ISBN: '',
            genero: '',
            precio: '',
            disponibilidad: ''

        })

        const crearLibro = async () => {
            try {
                const response = await axios.post('http://localhost:3000/libros', nuevoLibro.value);

                setTimeout(() => {
                   alert("Libro creado correctamente")
                   window.location.href = '/';
                },200)
                nuevoLibro.value.titulo = '',
                nuevoLibro.value.autor = '',
                nuevoLibro.value.ISBN = '',
                nuevoLibro.value.genero = '',
                nuevoLibro.value.precio = '',
                nuevoLibro.value.disponibilidad = '',
                

                console.log("Libro creado", response.data)
            } catch (error) {
                console.log("Error al crear el libro", error)
            }
        }

        return {
            nuevoLibro,
            crearLibro
        }
    }
}
</script>

<template>
    <main>
        <form @submit.prevent="crearLibro">
            <div>
                <div>
                    <label for="titulo"></label>
                    <input name="titulo" v-model="nuevoLibro.titulo" type="text" placeholder="Titulo">
                </div>
                <div>
                    <label for="autor"></label>
                    <input name="autor" v-model="nuevoLibro.autor" type="text" placeholder="Autor">
                </div>
                <div>
                    <label for="ISBN"></label>
                    <input name="ISBN" v-model="nuevoLibro.ISBN" type="text" placeholder="ISBN">
                </div>
                <div>
                    <label for="genero"></label>
                    <input name="genero" v-model="nuevoLibro.genero" type="text" placeholder="Género">
                </div>
                <div>
                    <label for="precio"></label>
                    <input name="precio" v-model="nuevoLibro.precio" type="text" placeholder="Precio">
                </div>
                <div>
                    <label for="disponibilidad"></label>
                    <input name="disponibilidad" v-model="nuevoLibro.disponibilidad" type="text"
                        placeholder="Disponibilidad">
                </div>

            </div>
            <button type="submit">Crear nuevo libro</button>
        </form>
    </main>
</template>

<style></style>