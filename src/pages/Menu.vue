<template>
  <div>
    <div id="menu-background">
      <p class="hidden-xs-only">
        <img
          src="../assets/pc-menu-bg.jpg"
          alt="Menuの背景画像"
          class="normal-device"
        />

        <v-list id="v-list" color="rgb(0, 0, 0, 0.0)">
          <v-list-item-group v-model="selectedItem" color="#b60000">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.anchor"
            >
              <v-list-item-content>
                <v-list-item-title
                  v-text="item.text"
                  class="font-weight-bold text-h6"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </p>
      <p class="hidden-sm-and-up">
        <img
          src="../assets/pc-menu-bg.jpg"
          alt="Menuの背景画像"
          class="small-device"
        />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      selectedItem: 0,
      items: [
        { text: 'DOUBLE-DOUBLE', anchor: '#double-double' },
        { text: 'CHEESEBURGER', anchor: '#cheeseburger' },
        { text: 'HAMBURGER', anchor: '#hamburger' },
        { text: 'FRENCH FRIES', anchor: '#frenchfries' },
        { text: 'BEVERAGES', anchor: '#beverages' },
        { text: 'SHAKES', anchor: '#shakes' },
      ],
    };
  },
};
</script>

<style>
p {
  position: relative;
}

#v-list {
  position: absolute;
  top: 0;
  left: 0;
}

.normal-device {
  margin-top: -13px;
  margin-left: -12px;
  width: 100vw;
}

.small-device {
  margin-top: -13px;
  margin-left: -36px;
  width: 120vw;
}
</style>
