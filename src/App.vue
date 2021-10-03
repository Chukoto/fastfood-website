<template>
  <v-app>
    <Header />
    <v-content>
      <v-container fluid>
        <v-main>
          <router-view />
        </v-main>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/Header';
export default {
  name: 'App',
  components: {
    Header,
  },

  data() {
    return {};
  },
};
</script>
