<template>
  <div>
    <div class="space-for-header">
      <v-row justify="center">
        <v-col
          cols="12"
          sm="12"
          md="6"
          class="my-5"
          v-for="(content, index) in contents"
          :key="index"
        >
          <div class="hidden-xs-only">
            <div class="article">
              <div
                class="content"
                @mousemove="tiltContent($event)"
                @mouseenter="animateIn($event)"
                @mouseleave="animateOut($event)"
              >
                <p>
                  <img
                    :src="require(`../assets/${content.year}.jpg`)"
                    :alt="`${content.year}の画像`"
                  />
                </p>
                <div class="history-text">
                  <h4 class="font-color text-h4 font-weight-bold">
                    {{ content.year }}
                  </h4>
                  <h5
                    class="font-color text-h5 font-weight-bold mb-5"
                  >
                    {{ content.title }}
                  </h5>
                  <p>
                    {{ content.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden-sm-and-up">
            <div class="article-mb">
              <div
                class="content"
                @mousemove="tiltContent($event)"
                @mouseenter="animateIn($event)"
                @mouseleave="animateOut($event)"
              >
                <p>
                  <img
                    :src="require(`../assets/${content.year}.jpg`)"
                    :alt="`${content.year}の画像`"
                  />
                </p>
                <div class="history-text">
                  <h4 class="font-color text-h4 font-weight-bold">
                    {{ content.year }}
                  </h4>
                  <h5
                    class="font-color text-h5 font-weight-bold mb-5"
                  >
                    {{ content.title }}
                  </h5>
                  <p>
                    {{ content.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'History',
  data() {
    return {
      contents: [
        {
          year: '1948',
          title: 'FIRST OPENS',
          text:
            "Harry Snyder introduces California's first drive-thru hamburger stand in a space barely 10 square feet at Francisquito and Garvey in Baldwin Park. Every day before dawn, Harry visits the meat and produce markets to pick out fresh ingredients, which he prepares by hand. Meanwhile, his wife Esther diligently takes care of all the accounting for the new restaurant at their home right around the corner.",
        },
        {
          year: '1954',
          title: 'UPDATED LOGO',
          text:
            'The iconic arrow makes its first appearance, replacing the original "No Delay" sign. Inspired by their new logo, Associates adopt the sayings, "The arrow points to pride" and "We all work under the same arrow."',
        },
        {
          year: '1963',
          title: 'PATTY-MAKING FACILITY OPENS',
          text:
            "A new facility dedicated to providing increasing numbers of guests with traditional quality begins operations using the freshest ingredients available. Up till now, each chuck personally selected and ground under Harry's supervision has been hand formed into patties by Esther, using a manual press",
        },
        {
          year: '1974',
          title: 'FIRST COOKOUT EVENT',
          text:
            'A grill loaded onto a pickup truck and accompanied by two of earliest Associates launches the Cookout Department with an event at Badillo School in Covina, California. Today, more than 10 fully self-supported cookout trucks and 125 Associates serve venues and events ranging from schools, churches, and charities, to weddings, birthdays and concerts.',
        },
        {
          year: '1984',
          title: 'INO FOUNDATION STARTED',
          text:
            "Esther Snyder and her son Rich establish the Child Abuse Fund, which later grows to become the Burger Foundation. Driven by Esther's belief that every child deserves a chance and a future, the foundation's year-round fundraising efforts provide residential treatment, emergency shelter, foster care and early intervention for children in need. With consistently paying 100 percent of the foundation's administrative costs, every cent raised goes directly to centers providing help to abused children. This includes millions of dollars over the last several years.",
        },
        {
          year: '1989',
          title: 'COMPANY STORE OPENS',
          text:
            "Esther Snyder and her son Rich establish the Child Abuse Fund, which later grows to become the Burger Foundation. Driven by Esther's belief that every child deserves a chance and a future, the foundation's year-round fundraising efforts provide residential treatment, emergency shelter, foster care and early intervention for children in need. With consistently paying 100 percent of the foundation's administrative costs, every cent raised goes directly to centers providing help to abused children. This includes millions of dollars over the last several years.",
        },
        {
          year: '1994',
          title: '100TH RESTAURANT OPENS',
          text:
            'On November 10, Gilroy, California becomes home to the 100th restaurant when the doors open at 641 Leavesley Road.',
        },
        {
          year: '2005',
          title: '200TH RESTAURANT OPENS',
          text:
            'The grand opening of a second location in Temecula, California marks the 200th restaurant in the family. Welcoming guests on December 30, the store adds to a presence that extends from California to Nevada and Arizona. In keeping with the local spirit of each location, four of the first customers to try the drive-thru arrive on horseback.',
        },
        {
          year: '2014',
          title: 'REPLICA OF FIRST RESTAURANT OPENS',
          text:
            "Step back in time at the replica of Burger's original drive-thru restaurant located in Baldwin Park, California. The first restaurant served customers from a space barely 10 square feet, introducing them to a taste of some of the freshest hamburgers around. The menu today offers made-to-order burgers, fries and drinks prepared and served in the classic style guests have been enjoying since 1948. Visit this part of history for viewing and photos Thursday-Sunday between the hours of 11am to 2pm at 13752 Francisquito Avenue, Baldwin Park, CA 91706.",
        },
        {
          year: '2018',
          title: '70TH ANNIVERSARY',
          text:
            'Celebrates 70 years since its first location opened its doors on October 22, 1948. In those seven decades, that single store has grown into 334 locations in six states: California, Nevada, Arizona, Utah, Texas and Oregon. Still family-owned, and now guided by Harry and Esther Snyder’s granddaughter, Lynsi, the company enters its eighth decade with the same commitment to its customers and Associates, and the same dedication to serving only the highest quality burgers, fries and shakes made the old-fashioned way.',
        },
      ],
    };
  },
  mounted() {},
  methods: {
    tiltContent(e) {
      let xAxis = (window.innerWidth / 2 - e.clientX) / 40;
      let yAxis = (window.innerHeight / 2 - e.clientY) / 40;
      e.currentTarget.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
      e.currentTarget.style.transitionDelay = 'all 1s';
    },
    animateIn(e) {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.classList.remove('shadow-out');
      e.currentTarget.classList.add('shadow-in');
    },
    animateOut(e) {
      e.currentTarget.transition = 'all 0.5s ease';
      e.currentTarget.transform = `rotateY(0deg) rotateX(0deg)`;
      e.currentTarget.classList.remove('shadow-in');
      e.currentTarget.classList.add('shadow-out');
    },
  },
};
</script>

<style scoped>
.article {
  width: 65%;
  height: auto;
  background-color: #fff;
  margin: 30px auto;
}

.article-mb {
  width: 75%;
  height: auto;
  background-color: #fff;
  margin: 30px auto;
}

p img {
  width: 100%;
  height: auto;
  box-shadow: 0 0 5px #aaa;
  border-radius: 10px 10px 0 0;
}

.history-text {
  font-size: 12px;
  padding: 10px 30px;
}

.font-color {
  color: #b60000;
}

.content {
  box-shadow: 0px 0px 10px #ccc;
  border-radius: 10px;
}

.shadow-in {
  animation-name: shadow-in;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.shadow-out {
  animation-name: shadow-out;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
</style>
