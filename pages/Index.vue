<script setup lang="ts">
</script>
<template>
  <div>
    <h1>hola mundo</h1>
    <Post />
    <Navigation />
  </div>
</template>

<script setup>
  const NewStore = useNewStore()
  

  await useAsyncData('News', async () => {
    await NewStore.fetchNews()
    return NewStore.getNew
  })
  </script>