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
                    await axios.delete(`http://localhost:3000/libros/${id}`);
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
                    <td class="alinear">{{ libro.id }}</td>
                    <td>{{ libro.titulo }}</td>
                    <td>{{ libro.ISBN }}</td>
                    <td>{{ libro.genero }}</td>
                    <td class="alinear">{{ libro.precio }}</td>
                    <td>{{ libro.disponibilidad }}</td>
                    <div class="botones">
                        <button class="btn eliminar" @click="eliminarLibro(libro.id, libro.titulo)">
                            Eliminar
                        </button>
                        <RouterLink class="btn editar" :to="{path: 'editarLibro/'+libro.id}">Editar</RouterLink>
                    </div>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<style scoped>
    table{
        width: 90%;
        border-collapse: collapse;
        margin: 10px auto;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

    }
    
    th, td {
        border: 1px solid #000;
        padding: 10px;
    }

    th {
        background-color: #a5a2a2;
    }
    .alinear{
        text-align: center;
    }

    .botones{
        display: flex;
        justify-content: space-around;
        border: 1px solid #000;
        padding: 10px;
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
        margin: 5px;
    }

    .eliminar{
        background-color: #f44336;
        color: #fff;
        
    }

    .eliminar:hover{
        background-color: #d32f2f;
    }

    .editar{
        background-color: #4caf50;
        color: #fff;
        
    }

    .editar:hover{
        background-color: #45a049;
    }
</style>