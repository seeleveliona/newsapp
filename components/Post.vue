<template>
  <div>
    <h1>Hoy</h1>
    <ul v-if="news.length">
      <li v-for="new_data in news" :key="new_data.id">
        <h2>{{ new_data.title }}</h2>
        <p>{{ new_data.description }}</p>
      </li>
    </ul>
  </div>
</template>
<script setup>

const NewStore = useNewStore();

const { getNews } = NewStore;

const news = getNews;
</script>