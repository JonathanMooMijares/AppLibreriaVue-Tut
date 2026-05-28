<script setup>

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<header>
  <div class="wrapper">
    <nav class="navbar">
      <RouterLink class="linkNav" to="/">Libros</RouterLink>
      <RouterLink class="linkNav" to="/nuevoLibro">Nuevo Libro</RouterLink>
    </nav>
  </div>
</header>
<RouterView/>
</template>

<style scoped>
  .linkNav{
    text-decoration: none;
    padding: 10px;
    font-weight: 700;
    font-size: 1.3rem;
    color: #645e5e;
    transition: color 0.5s ease-in-out;
  }
  .linkNav:hover{
    color: #000;
  }
  .navbar{
    background-color: rgba(0, 0, 0, 0.1);
    margin: 10px auto;
    width: 300px;
    display: flex;
    justify-content: space-around;
    border-radius: 5px;
  }
</style>
