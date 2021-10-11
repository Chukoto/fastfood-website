<template>
  <v-app>
    <Header />
    <SideNav style="position:relative; z-index: 9999;" />
    <v-container fluid>
      <v-main>
        <router-view />
      </v-main>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import SideNav from '@/components/SideNav';
import Footer from '@/components/Footer';
export default {
  name: 'App',
  components: {
    Header,
    SideNav,
    Footer,
  },

  data() {
    return {};
  },
};
</script>
<style scoped>
@import './assets/keyframes/animation.css';
</style>
