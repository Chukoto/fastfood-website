<template>
  <v-app>
    <Header />
    <SideNav style="position:relative; z-index: 9999;" />
    <v-container fluid>
      <v-main>
        <router-view />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import SideNav from '@/components/SideNav';
export default {
  name: 'App',
  components: {
    Header,
    SideNav,
  },

  data() {
    return {};
  },
};
</script>
