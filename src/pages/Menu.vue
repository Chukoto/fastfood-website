<template>
  <div>
    <div id="menu-background">
      <div class="hidden-xs-only">
        <p>
          <img
            src="../assets/pc-menu-bg.jpg"
            alt="Menuの背景画像"
            class="normal-device"
          />
        </p>

        <v-list id="v-list" color="rgb(0, 0, 0, 0.0)">
          <v-list-item-group v-model="selectedItem" color="#b60000">
            <v-list-item
              v-for="(burger, i) in burgers"
              :key="`first-${i}`"
            >
              <v-list-item-content>
                <v-list-item-title
                  v-text="burger.text"
                  class="font-weight-bold text-h5"
                  @click="showBurgerImg(burger.name)"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              v-for="(item, j) in otherItems"
              :key="`second-${j}`"
            >
              <v-list-item-content>
                <v-list-item-title
                  v-text="item.text"
                  class="font-weight-bold text-h5"
                  @click="showOtherImg(item.name)"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <div class="picture-area">
          <p class="burger-picture">
            <img
              :src="require(`../assets/${currentItem}.png`)"
              :alt="`${currentItem}の画像`"
            />
          </p>
        </div>
      </div>
      <div class="hidden-sm-and-up">
        <p>
          <img
            src="../assets/pc-menu-bg.jpg"
            alt="Menuの背景画像"
            class="small-device"
          />
        </p>
      </div>
      <h2>{{ currentItem }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      selectedItem: 0,
      currentItem: 'doubledouble',
      burgers: [
        {
          name: 'doubledouble',
          text: 'DOUBLE-DOUBLE',
          anchor: '#doubledouble',
          imagePath: '../assets/doubledouble.png',
        },
        {
          name: 'cheeseburger',
          text: 'CHEESEBURGER',
          anchor: '#cheeseburger',
          imagePath: '../assets/cheeseburger.png',
        },
        {
          name: 'hamburger',
          text: 'HAMBURGER',
          anchor: '#hamburger',
          imagePath: '../assets/hamburger.png',
        },
      ],
      otherItems: [
        {
          name: 'frenchfries',
          text: 'FRENCH FRIES',
          anchor: '#frenchfries',
          imagePath: '',
        },
        {
          name: 'beverages',
          text: 'BEVERAGES',
          anchor: '#beverages',
          imagePath: '',
        },
        {
          name: 'shakes',
          text: 'SHAKES',
          anchor: '#shakes',
          imagePath: '',
        },
      ],
    };
  },
  methods: {
    showBurgerImg: function(itemName) {
      this.currentItem = itemName;
    },

    showOtherImg: function(itemName) {
      this.currentItem = itemName;
    },
  },
};
</script>

<style>
#menu-background {
  position: relative;
}

p {
  position: relative;
}

#v-list {
  position: absolute;
  top: 0;
  left: 0;
}

.picture-area {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}

.burger-picture img {
  width: 100%;
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
