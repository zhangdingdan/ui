<template>
<div>
    <v-app class="text-uppercase grey--text">
      <Navbar />
      <v-main class="grey lighten-4 mx-4">
        <router-view></router-view>
      </v-main>
    </v-app>
</div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: { Navbar },

  sockets: {
    connect() {
    },
  },
};
</script>