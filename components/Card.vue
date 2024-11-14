<template>
    <div>
      <h1>Card</h1>
      <ul v-if="getprueba.length">
        <li v-for="prueba in getprueba" :key="prueba.id">
          <h2>{{ prueba.tittle }}</h2>
          <p>{{ prueba.body }}</p>
        </li>
      </ul>
    </div>
  </template>
  <script setup>
  // Instanciar el store
  const pruebaStore = usePruebaStore()
  
  // Acceder a los getters del store
  const { getprueba } = pruebaStore
  </script>