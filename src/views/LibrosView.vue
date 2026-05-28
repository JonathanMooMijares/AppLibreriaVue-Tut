<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
    setup() {
        

        const libros = ref([]);

        const listarLibros = async () => {
            try {
                const response = await axios.get('http://localhost:3000/libros');
                libros.value = response.data;
            } catch (error) {
                console.log("Error al listar libros", error)
            }
        };

        const eliminarLibro = async (id, titulo) => {
            const confirmDelete = window.confirm(`Estás seguro de eliminar el libro ${titulo}`);
            if (confirmDelete) {
                try {
                    await axios.delete(`http://localhost:3000/libros${id}`);
                    listarLibros();
                } catch (error) {
                    console.log("Error al eliminar el libro", error)
                }
            }
        }

        onMounted(() => {
            listarLibros();
        });

        return {
            libros,
            listarLibros, 
            eliminarLibro
        }
    }
}
</script>

<template>

    <main>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>ISBN</th>
                    <th>Género</th>
                    <th>Precio</th>
                    <th>Disponibilidad</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="libro in libros" key="libro.id">
                    <td>{{ libro.titulo }}</td>
                    <td>{{ libro.ISBN }}</td>
                    <td>{{ libro.genero }}</td>
                    <td>{{ libro.precio }}</td>
                    <td>{{ libro.disponibilidad }}</td>
                    <div>
                        <button @click="eliminarLibro(libro.id, libro.titulo)">
                            Eliminar
                        </button>
                        <RouterLink :to="{path: '/editarLibro/'+libro.id}"></RouterLink>
                    </div>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<style></style>