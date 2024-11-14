<script setup lang="ts">
</script>
<template>
    <div>
        <h1>hola mundo</h1>
        <Card />
        <Navigation />
    </div>
</template>

  <script setup>
  // Instanciar el store
  const pruebaStore = usePruebaStore()
  

  await useAsyncData('pruebas', async () => {
    await pruebaStore.fetchPruebas()
    return pruebaStore.getPrueba 
  })
  </script>