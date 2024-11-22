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

  <script>
  import Footer from '@/components/Footer.vue';
  export default {
    components: {
      Footer
    }
  };
  </script>