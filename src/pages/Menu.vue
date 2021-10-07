<template>
  <div>
    <div class="space-for-header">
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
                    @click="
                      showOtherImg(
                        item.name,
                        item.description,
                        item.text
                      )
                    "
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <p class="burger-name">{{ currentBurger.toUpperCase() }}</p>
          <div class="picture-area">
            <p class="burger-picture">
              <img
                :src="require(`../assets/${currentBurger}.png`)"
                :alt="`${currentBurger}の画像`"
                class="burger-img"
              />
            </p>
          </div>
          <transition>
            <div class="modal-window" v-show="show">
              <div class="mask" v-on:click="show = !show">
                <div class="other-picture">
                  <img
                    :src="require(`../assets/${currentOther}.png`)"
                    :alt="`${currentOther}の画像`"
                  />
                  <div class="other-description">
                    <h2 class="text-center mb-1">
                      {{ currentTitle }}
                    </h2>
                    {{ currentDescription }}
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="space-for-header-mb">
      <div id="menu-background">
        <div class="hidden-sm-and-up">
          <p>
            <img
              src="../assets/mobile-menu-bg.jpg"
              alt="Menuの背景画像"
              class="small-device"
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
                    :class="
                      `font-weight-bold text-capture ${burger.name}`
                    "
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
                    class="font-weight-bold text-capture"
                    @click="
                      showOtherImg(
                        item.name,
                        item.description,
                        item.text
                      )
                    "
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <p class="burger-name-mb">
            {{ currentBurger.toUpperCase() }}
          </p>
          <div class="picture-area-mb">
            <p class="burger-picture-mb">
              <img
                :src="require(`../assets/${currentBurger}.png`)"
                :alt="`${currentBurger}の画像`"
                class="burger-img"
              />
            </p>
          </div>
          <transition>
            <div class="modal-window" v-show="show">
              <div class="mask" v-on:click="show = !show">
                <div class="other-picture-mb">
                  <img
                    :src="require(`../assets/${currentOther}.png`)"
                    :alt="`${currentOther}の画像`"
                  />
                  <div class="other-description-mb">
                    <h2 class="text-center mb-1">
                      {{ currentTitle }}
                    </h2>
                    {{ currentDescription }}
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
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
      currentTitle: '',
      currentDescription: '',
      show: false,
      burgers: [
        {
          name: 'doubledouble',
          text: 'DOUBLE-DOUBLE',
        },
        {
          name: 'cheeseburger',
          text: 'CHEESEBURGER',
        },
        {
          name: 'hamburger',
          text: 'HAMBURGER',
        },
      ],
      otherItems: [
        {
          name: 'frenchfries',
          text: 'FRENCH FRIES',
          description:
            'FRESH, HAND-CUT POTATOES PREPARED IN 100% SUNFLOWER OIL',
        },
        {
          name: 'beverages',
          text: 'BEVERAGES',
          description:
            'REFRESHING SELECTIONS INCLUDE COCA-COLA®, DIET COKE®, 7UP®, DR. PEPPER®, ROOT BEER, PINK LEMONADE, MINUTE MAID® ZERO SUGAR LEMONADE, ICED TEA, MILK, COFFEE AND HOT COCOA',
        },
        {
          name: 'shakes',
          text: 'SHAKES',
          description:
            'CHOCOLATE, STRAWBERRY OR VANILLA MADE WITH REAL ICE CREAM',
        },
      ],
    };
  },
  methods: {
    showBurgerImg: function(itemName) {
      const burgerImgs = this.$el.querySelectorAll('.burger-img');
      const burgerName = this.$el.querySelector('.burger-name');
      const mbBurgerName = this.$el.querySelector('.burger-name-mb');
      burgerImgs.forEach((img) => {
        img.classList.add('show-up');
      });

      burgerName.classList.add('show-up');
      mbBurgerName.classList.add('show-up');

      this.currentBurger = itemName;
    },
    deleteShowUp: function() {
      const burgerImgs = this.$el.querySelectorAll('.burger-img');
      const burgerName = this.$el.querySelector('.burger-name');
      const mbBurgerName = this.$el.querySelector('.burger-name-mb');
      burgerImgs.forEach((img) => {
        img.classList.remove('show-up');
      });
      burgerName.classList.remove('show-up');
      mbBurgerName.classList.remove('show-up');
    },

    showOtherImg: function(name, description, text) {
      this.currentOther = name;
      this.currentDescription = description;
      this.currentTitle = text;
      this.show = true;
    },
  },
};
</script>

<style scoped>
@import '../assets/keyframes/animation.css';
#menu-background {
  position: relative;
}

#v-list {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.burger-name {
  position: absolute;
  top: 0;
  left: 33%;
  margin: 0 auto;
  text-align: center;
  width: 44%;
  font-size: 5vw;
  font-weight: bold;
  color: #b60000;
}

.burger-name-mb {
  position: absolute;
  bottom: 45%;
  left: 20%;
  margin: 0 auto;
  text-align: center;
  width: 20%;
  font-size: 8vw;
  font-weight: bold;
  color: #b60000;
}

.picture-area {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}

.picture-area-mb {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}

.burger-picture img {
  width: 65vw;
}

.burger-picture-mb img {
  width: 100vw;
}

.modal-window {
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
}

.other-picture {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  width: 50vw;
  height: 43vw;
  border: 5px solid #b60000;
  border-radius: 10px;
  z-index: 2;
}

.other-picture img {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  width: 37vw;
  height: auto;
}

.other-picture-mb {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  width: 90vw;
  height: 90vw;
  border: 5px solid #b60000;
  border-radius: 10px;
  z-index: 2;
}

.other-picture-mb img {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  width: 80vw;
  height: auto;
}

.other-description {
  position: absolute;
  left: 50%;
  top: 27vw;
  font-size: 1.2vw;
  transform: translateX(-50%);
  width: 37vw;
  height: auto;
  background-color: #c62828;
  color: #fff;
  padding: 10px;
  border-radius: 0 0 10px 10px;
  z-index: 2;
}

.other-description-mb {
  position: absolute;
  left: 50%;
  top: 57vw;
  font-size: 3vw;
  transform: translateX(-50%);
  width: 80vw;
  height: auto;
  background-color: #c62828;
  color: #fff;
  padding: 10px;
  border-radius: 0 0 10px 10px;
  z-index: 2;
}

.mask {
  position: fixed;
  top: -100%;
  left: -50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.2);
  width: 3000px;
  height: 3000px;
  z-index: 3;
}

.normal-device {
  margin-top: -13px;
  margin-left: -12px;
  width: 100vw;
}

.small-device {
  margin-top: -13px;
  margin-left: -36px;
  width: 106vw;
}

.show-up {
  animation-name: show-up;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
</style>
