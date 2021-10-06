<template>
  <v-sheet class="overflow-hidden">
    <v-navigation-drawer
      v-model="$store.state.drawer"
      absolute
      temporary
      style="position: fixed; right:0; top:0; z-index:200;"
    >
      <v-list dense>
        <v-row class="my-1 text-center">
          <v-col>
            <router-link :to="'/'">
              <img :src="logoPath" alt="ページのロゴ" width="65" />
            </router-link>
          </v-col>
          <v-list-item
            v-for="(sidenavMenu, index) in sidenavMenuList"
            :key="index"
            :to="sidenavMenu.link"
          >
            <v-col>
              <a>{{ sidenavMenu.title }}</a>
            </v-col>
          </v-list-item>
        </v-row>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
  name: 'SideNav',
  data() {
    return {
      logoPath:
        'https://www.in-n-out.com/ResourcePackages/INNOUT/content/images/logo-2021.svg?package=INNOUT',
      sidenavMenuList: [
        { title: 'MENU', link: { name: 'Menu' } },
        { title: 'HISTORY', link: { name: 'Menu' } },
        { title: 'EMPLOYMENT', link: { name: 'Menu' } },
        { title: 'CONTACT', link: { name: 'Menu' } },
      ],
    };
  },
};
</script>

<style></style>
