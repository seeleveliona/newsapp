<script setup lang="ts">
</script>
<template>
  <div>
    <Post />
  </div>
</template>

<script setup>
  const NewStore = useNewStore()
  

  await useAsyncData('News', async () => {
    await NewStore.fetchNews()
    return NewStore.getNew
  })
  </script>