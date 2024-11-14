<template>
    <div>
      <h1>Hoy</h1>
      <ul v-if="getNews.length">
        <li v-for="New in getNews" :key="New.id">
          <h2>{{ New.tittle }}</h2>
          <img src="" alt="">
          <p>{{ New.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  <script setup>
  // Instanciar el store
  const NewStore = useNewStore()
  
  // Acceder a los getters del store
  const { getNew } = NewStore
  </script>