<template>
  <div>
    <div>
      <div id="images-area">
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
        </p>
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
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style>
@font-face {
  font-family: Cormorant Garamond;
  src: url('../assets/fonts/CormorantGaramond-SemiBoldItalic.ttf')
    format('truetype');
}

#images-area {
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

@keyframes shrink {
  0% {
    width: 120vw;
  }
  100% {
    width: 100vw;
  }
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

@keyframes expand {
  0% {
    width: 100vw;
  }
  100% {
    width: 120vw;
  }
}

.small-device {
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

.home-bg-img {
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  position: inherit;
  z-index: 1;
}

@keyframes slide-to-left {
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0%);
  }
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
</style>
