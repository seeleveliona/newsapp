<template>
    <v-card>
      
      <v-layout>
        <v-app-bar
          color="primary"
          prominent
        >
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  
          <v-toolbar-title>Unicordtimes</v-toolbar-title>
  
          <v-spacer></v-spacer>
  
          <template v-if="$vuetify.display.mdAndUp">
            <v-btn icon="mdi-magnify" variant="text"></v-btn>
          </template>
  
          <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
        </v-app-bar>
  
        <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
        >
          <v-list
            :items="items"
          ></v-list>
        </v-navigation-drawer>
  
        <v-main style="height: 500px;">
         <slot />
        </v-main>
      </v-layout>
      <Footer/>
    </v-card>
  </template>
  <script>
    export default {
      data: () => ({
        drawer: false,
        group: null,
        items: [
          {
            title: 'Inicio',
            value: 'inicio',
          },
          {
            title: 'Noticias',
            value: 'noticias',
          },
          {
            title: 'Eventos',
            value: 'eventos',
          },
          {
            title: 'Contactos',
            value: 'contactos',
          },
        ],
      }),
  
      watch: {
        group () {
          this.drawer = false
        },
      },
    }
  </script>