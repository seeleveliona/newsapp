<script setup lang="ts">
</script>
<template>
  <div>
    <h1>hola mundo</h1>
    <Post />
    <Navigation />
    <Footer />
  </div>
</template>

<script setup>
  const NewStore = useNewStore()
  

  await useAsyncData('News', async () => {
    await NewStore.fetchNews()
    return NewStore.getNew
  })
  </script>

  <script>
  import Footer from '@/components/Footer.vue';
  export default {
    components: {
      Footer
    }
  };
  </script>