<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
    setup(){
        onMounted(() => {
            listarLibros();
        });

        const libros = ref([]);

        const listarLibros = async () =>{
            try{
                const response = await axios.get('http://localhost:3000/libros');
                libros.value = response.data;
            }catch(error){
                console.log("Error al listar libros", error)
            }
        }

        return {
            libros,
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
                    <td>{{ libro.precio}}</td>
                    <td>{{ libro.disponibilidad }}</td>
                    <div>
                        <button @click="">
                            Eliminar
                        </button>
                    </div>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<style>
</style>