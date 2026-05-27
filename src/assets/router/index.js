import { createRouter, createWebHistory } from 'vue-router';
import Libros from '../views/LibrosView.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
        path: '/' , 
        name: 'inicio', 
        component: LibrosView
    }, 
    {
        path: '/nuevoLibro', 
        name: 'nuevoLibro', 
        component: () => import('../views/NuevoLibroView.vue')
    }
]
});



export default router;