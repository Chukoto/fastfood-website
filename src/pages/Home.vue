<template>
  <div>
    <div class="space-for-header">
      <div class="images-area">
        <h1 class="text-center">
          <span>QUALITY</span><br />
          YOU CAN TASTE
        </h1>
        <p class="hidden-xs-only">
          <img
            src="../assets/home-bg.jpg"
            alt="Homeの背景画像"
            class="normal-device home-bg-img"
          />
          <img
            src="../assets/combo.png"
            alt="バーガーセットの画像"
            class="combo-img"
          />
          <button class="view-menu-btn" @click="enter">
            VIEW OUR MENU
          </button>
        </p>
      </div>
    </div>

    <div class="space-for-header-mb">
      <div class="images-area">
        <h1 class="text-center">
          <span>QUALITY</span><br />
          YOU CAN TASTE
        </h1>

        <p class="hidden-sm-and-up">
          <img
            src="../assets/home-bg.jpg"
            alt="Homeの背景画像"
            class="small-device home-bg-img"
          />
          <img
            src="../assets/combo.png"
            alt="バーガーセットの画像"
            class="combo-img"
          />
          <button class="view-menu-btn" @click="enter">
            VIEW OUR MENU
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {};
  },
  mounted() {
    // window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    enter: function() {
      const viewMenuBtns = this.$el.querySelectorAll(
        '.view-menu-btn'
      );
      const comboImgs = this.$el.querySelectorAll('.combo-img');
      const h1s = this.$el.querySelectorAll('h1');
      const homeBGImgs = this.$el.querySelectorAll('.home-bg-img');

      function promiseZero() {
        return new Promise((resolve) => {
          setTimeout(() => {
            viewMenuBtns.forEach((btn) => {
              resolve(btn.classList.add('clear-to-bottom'));
            });
          }, 250);
        });
      }

      function promiseOne() {
        return new Promise((resolve) => {
          setTimeout(() => {
            comboImgs.forEach((img) => {
              resolve(img.classList.add('clear-to-right'));
            });
          }, 400);
        });
      }

      function promiseTwo() {
        return new Promise((resolve) => {
          setTimeout(() => {
            h1s.forEach((h1) => {
              resolve(h1.classList.add('clear-to-left'));
            });
          }, 400);
        });
      }

      function promiseThree() {
        return new Promise((resolve) => {
          setTimeout(() => {
            homeBGImgs.forEach((img) => {
              resolve(img.classList.add('clear-blur'));
            });
          }, 300);
        });
      }
      function promiseFour() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });
      }

      promiseZero()
        .then(() => {
          return promiseOne();
        })
        .then(() => {
          return promiseTwo();
        })
        .then(() => {
          return promiseThree();
        })
        .then(() => {
          return promiseFour();
        })
        .then(() => {
          location.href = 'http://localhost:8080/menu';
          // comboImgs.forEach((img) => {
          //   img.classList.remove('clear-to-right');
          // });
          // h1.classList.remove('clear-to-left');
          // homeBGImgs.forEach((img) => {
          //   img.classList.remove('clear-blur');
          // });
          // viewMenuBtns.forEach((btn) => {
          //   btn.classList.remove('clear-to-bottom');
          // });
          return;
        });
    },
  },
};
</script>

<style scoped>
@import '../assets/keyframes/animation.css';
@font-face {
  font-family: Cormorant Garamond;
  src: url('../assets/fonts/CormorantGaramond-SemiBoldItalic.ttf')
    format('truetype');
}

.images-area {
  position: relative;
}

h1 {
  font-family: 'Cormorant Garamond', serif;
  position: absolute;
  top: 30px;
  left: 30px;
  color: #fff;
  font-size: 5vw;
  z-index: 2;
}

h1 span {
  font-size: 10vw;
}

.normal-device {
  margin-top: -13px;
  margin-left: -12px;
  width: 100vw;

  /* 背景の収縮 */
  animation-name: shrink;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.small-device {
  margin-top: -13px;
  margin-left: -36px;
  width: 120vw;

  /* 背景の拡大 */
  animation-name: expand;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

p {
  position: relative;
}

.clear-blur {
  animation-name: clear-blur;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.home-bg-img {
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  position: inherit;
  z-index: 1;
}

.combo-img {
  width: 70%;
  position: absolute;
  bottom: 9vw;
  right: -30px;
  z-index: 3;

  /* バーガーセットのスライドアニメ */
  animation-name: slide-to-left;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.clear-to-right {
  animation-name: clear-to-right;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.clear-to-left {
  animation-name: clear-to-left;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.clear-to-bottom {
  animation-name: clear-to-bottom;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.view-menu-btn {
  position: absolute;
  bottom: 20px;
  left: 50%;
  color: #b60000;
  background-color: #dedede;
  font-weight: bold;
  font-size: 2vw;
  border: 0.4vw solid #b60000;
  border-radius: 7px;
  padding: 1.2vw 7vw;
  transform: translateX(-50%);
  z-index: 2;
}
</style>
