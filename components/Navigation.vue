<template>
    <div>
        <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Unicordoba al día</v-app-bar-title>
    <Enlances/>
  </v-app-bar>
    </div>
</template>
<script setup lang="ts">
import Enlances from './Enlances.vue';
</script>
