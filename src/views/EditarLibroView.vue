<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const editarLibro = ref({
            id: null,
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
                    <label for="titulo">Titulo</label>
                    <input name="titulo" v-model="editarLibro.titulo" type="text" placeholder="Titulo">
                </div>
                <div>
                    <label for="autor">Autor</label>
                    <input name="autor" v-model="editarLibro.autor" type="text" placeholder="Autor">
                </div>
                <div>
                    <label for="ISBN">ISBN</label>
                    <input name="ISBN" v-model="editarLibro.ISBN" type="text" placeholder="ISBN">
                </div>
                <div>
                    <label for="genero">Género</label>
                    <input name="genero" v-model="editarLibro.genero" type="text" placeholder="Género">
                </div>
                <div>
                    <label for="precio">Precio</label>
                    <input name="precio" v-model="editarLibro.precio" type="text" placeholder="Precio">
                </div>
                <div>
                    <label for="disponibilidad">Disponibilidad</label>
                    <input name="disponibilidad" v-model="editarLibro.disponibilidad" type="text"
                        placeholder="Disponibilidad">
                </div>

            </div>
            <button class="btn enviar" type="submit">Guadar cambios</button>
        </form>
    </main>
</template>

<style scoped>
form {
    width: 90%;
    margin: 0 auto;
    padding: 20px;
    border: solid 1px #000;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

}

label {
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
    font-size: 1rem;
}

input {
    width: 100%;
    padding: 5px;
    border: 1px solid #000;
    margin-bottom: 15px;
    font-family: "Montserrat";
    color: #000;
    font-size: 1rem;
}

input:focus{
    outline: none;
}

.btn{
        background-color: transparent;
        border: none;
        padding: 10px 15px;
        text-decoration: none;
        font-family: "Montserrat";
        color: #000;
        font-size: 1rem;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
        width: 100%;
    }

    .enviar{
        margin-top: 10px;
        background-color: #36f43f;
        color: #fff;
        
    }

    .enviar:hover{
        background-color: #2fd33d;
    }
</style>