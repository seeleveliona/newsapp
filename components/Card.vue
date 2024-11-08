<template>
    <div>
      <h1>Card</h1>
      <ul v-if="getprueba.length">
        <li v-for="prueba in getprueba" :key="prueba.title">
          <h2>{{ prueba.title }}</h2>
          <p>{{ prueba.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  <script setup>
  // Instanciar el store
  const productStore = useProductStore()
  
  // Acceder a los getters del store
  const { getProducts } = productStore
  </script>