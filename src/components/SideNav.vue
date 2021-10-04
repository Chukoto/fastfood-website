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
            <a><img :src="path" alt="ページのロゴ" width="65"/></a>
          </v-col>
          <v-list-item
            v-for="(sidenavMenu, index) in sidenavMenuList"
            :key="index"
          >
            <v-col>
              <a>{{ sidenavMenu }}</a>
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
      path:
        'https://www.in-n-out.com/ResourcePackages/INNOUT/content/images/logo-2021.svg?package=INNOUT',
      sidenavMenuList: ['MENU', 'HISTORY', 'EMPLOYMENT', 'CONTACT'],
    };
  },
};
</script>

<style></style>
