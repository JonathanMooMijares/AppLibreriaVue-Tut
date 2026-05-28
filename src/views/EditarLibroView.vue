<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const editarLibro = ref({
            id: NULL,
            titulo: '',
            autor: '',
            ISBN: '',
            genero: '',
            precio: '',
            disponibilidad: ''

        })

        const cargarLibro = async() => {
            const libroId = useRoute().params.id;
            try {
                const response = await axios.get(`http://localhost:3000/libros/${libroId}`);
                editarLibro.value = response.data;
                console.log("Libro cargado", response.data)
            }catch(error){
                console.log("Error al cargar el libro", error)
            }
        }
        const actualizarLibro = async () => {
            try {
                await axios.put(`http://localhost:3000/libros/${editarLibro.value.id}`, editarLibro.value);

                setTimeout(() => {
                   alert("Libro creado correctamente")
                },200)
                router.push('/');
                console.log("Libro creado", response.data)
            } catch (error) {
                console.log("Error al editar el libro", error)
            }
        }

        onMounted(() => {
            cargarLibro();
        });

        return {
            editarLibro,
            actualizarLibro,
            cargarLibro
        }
    }
}
</script>

<template>
    <main>
        <form @submit.prevent="actualizarLibro">
            <div>
                <div>
                    <label for="titulo"></label>
                    <input name="titulo" v-mode="editarLibro.titulo" type="text" placeholder="Titulo">
                </div>
                <div>
                    <label for="autor"></label>
                    <input name="autor" v-mode="editarLibro.autor" type="text" placeholder="Autor">
                </div>
                <div>
                    <label for="ISBN"></label>
                    <input name="ISBN" v-mode="editarLibro.ISBN" type="text" placeholder="ISBN">
                </div>
                <div>
                    <label for="genero"></label>
                    <input name="genero" v-mode="editarLibro.genero" type="text" placeholder="Género">
                </div>
                <div>
                    <label for="precio"></label>
                    <input name="precio" v-mode="editarLibro.precio" type="text" placeholder="Precio">
                </div>
                <div>
                    <label for="disponibilidad"></label>
                    <input name="disponibilidad" v-mode="editarLibro.disponibilidad" type="text"
                        placeholder="Disponibilidad">
                </div>

            </div>
            <button type="submit">Guadar cambios</button>
        </form>
    </main>
</template>

<style></style>