<template>
  <div>
    <div class="header">
      <div class="hidden-xs-only">
        <v-row class="my-2 text-center align-center">
          <v-col>
            <router-link :to="'/'">
              <img :src="logoPath" alt="ページのロゴ" width="100" />
            </router-link>
          </v-col>
          <v-col
            v-for="(headerMenu, index) in headerMenuList"
            :key="index"
          >
            <button>
              <router-link
                :to="headerMenu.link"
                class="text-decoration-none"
              >
                {{ headerMenu.title }}
              </router-link>
            </button>
          </v-col>
        </v-row>
      </div>
      <v-divider></v-divider>
      <div class="hidden-sm-and-up">
        <v-row class="my-2 text-center align-center">
          <v-col
            ><v-app-bar-nav-icon
              @click="toggleSideNav"
            ></v-app-bar-nav-icon
          ></v-col>
          <v-col>
            <router-link :to="'/'">
              <img :src="logoPath" alt="ページのロゴ" width="65" />
            </router-link>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-divider></v-divider>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Header',
  data() {
    return {
      // logoPath: require('@/assets/logo.png'),
      logoPath:
        'https://www.in-n-out.com/ResourcePackages/INNOUT/content/images/logo-2021.svg?package=INNOUT',
      headerMenuList: [
        { title: 'MENU', link: { name: 'Menu' } },
        { title: 'HISTORY', link: { name: 'Menu' } },
        { title: 'EMPLOYMENT', link: { name: 'Menu' } },
        { title: 'CONTACT', link: { name: 'Contact' } },
      ],
      smallScreen: 'hidden-sm-and-down',
      mediumScreen: 'hidden-md-and-up hidden-xs-only',
      largeScreen: 'hidden-sm-and-up',
      currentScrollY: 0,
      preScrollY: 0,
    };
  },
  created() {
    window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    ...mapActions(['toggleSideNav']),
    onScroll() {
      const header = document.querySelector('.header');
      this.preScrollY = this.currentScrollY;
      this.currentScrollY = window.scrollY;
      console.log(window.scrollY);
      if (window.scrollY > 75) {
        if (this.preScrollY < this.currentScrollY) {
          header.classList.remove('fold');
          header.classList.add('open');
        } else {
          header.classList.remove('open');
          header.classList.add('fold');
        }
      }
    },
  },
};
</script>

<style>
@import '../assets/keyframes/animation.css';
.header {
  position: fixed;
  width: 100%;
  z-index: 999;
  background-color: #fff;
  border-bottom: 6px solid #b60000;
}
.header::before {
  content: '';
  position: absolute;
  top: -10px;
  bottom: 3px;
  left: -10px;
  right: -10px;
  border-bottom: 3px solid #b60000;
  pointer-events: none;
}

.fold {
  animation-name: fold;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.open {
  animation-name: open;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
</style>
