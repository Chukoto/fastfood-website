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
                  :class="`font-weight-bold text-h5 ${burger.name}`"
                  @click="showBurgerImg(burger.name)"
                  @mousedown="deleteShowUp()"
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
              :src="require(`../assets/${currentBurger}.png`)"
              :alt="`${currentBurger}の画像`"
              class="burger-img"
            />
          </p>
        </div>
        <div class="modal-window">
          <p class="other-picture" v-show="show">
            <img
              :src="require(`../assets/${currentOther}.png`)"
              :alt="`${currentOther}の画像`"
            />
          </p>
          <button
            v-on:click="show = !show"
            v-show="show"
            style="background-color: pink; width: 100px; height: 100px"
          >
            cross
          </button>
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
      <h2>{{ currentBurger }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      selectedItem: 0,
      currentBurger: 'doubledouble',
      currentOther: 'frenchfries',
      show: false,
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
      const burgerImg = this.$el.querySelector('.burger-img');
      burgerImg.classList.add('show-up');
      this.currentBurger = itemName;
    },
    deleteShowUp: function() {
      const burgerImg = this.$el.querySelector('.burger-img');
      burgerImg.classList.remove('show-up');
    },

    showOtherImg: function(itemName) {
      this.currentOther = itemName;
      this.show = true;
    },
  },
};
</script>

<style>
@import '../assets/keyframes/animation.css';
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
  z-index: 1;
}

.picture-area {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}

.modal-window {
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
}

.other-picture {
  position: fixed;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
}

.other-picture img {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  padding: 0vw 2vw 12vw;
  background-color: #fff;
  width: 45vw;
  z-index: 2;
  border: 5px solid #b60000;
}

.burger-picture img {
  width: 65vw;
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

.show-up {
  animation-name: show-up;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
</style>
