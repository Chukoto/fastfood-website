<template>
  <div class="">
    <div class="hidden-sm-and-down">
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
      <v-divider></v-divider>
    </div>
    <div class="hidden-md-and-up hidden-xs-only">
      <v-row class="my-2 text-center align-center">
        <v-col
          ><a><img :src="logoPath" alt="ページのロゴ" width="80"/></a
        ></v-col>
        <v-col
          v-for="(headerMenu, index) in headerMenuList"
          :key="index"
          class="text-caption"
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
      <v-divider></v-divider>
    </div>
    <div class="hidden-sm-and-up">
      <v-row class="my-2 text-center align-center">
        <v-col
          ><v-app-bar-nav-icon
            @click="toggleSideNav"
          ></v-app-bar-nav-icon
        ></v-col>
        <v-col
          ><a><img :src="logoPath" alt="ページのロゴ" width="65"/></a
        ></v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-divider></v-divider>
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
        { title: 'CONTACT', link: { name: 'Menu' } },
      ],
      smallScreen: 'hidden-sm-and-down',
      mediumScreen: 'hidden-md-and-up hidden-xs-only',
      largeScreen: 'hidden-sm-and-up',
    };
  },
  methods: {
    ...mapActions(['toggleSideNav']),
  },
};
</script>

<style></style>
