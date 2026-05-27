<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<header>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Libros</RouterLink>
      <RouterLink to="/nuevo-libro">Nuevo Libro</RouterLink>
    </nav>
  </div>
</header>
</template>

<style scoped></style>
