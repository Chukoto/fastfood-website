<template>
  <div>
    <div class="space-for-header">
      <div class="img-area">
        <div class="employment-img">
          <img src="../assets/employment-header.jpg" alt="" />
          <p>
            EMPLOYMENT
          </p>
        </div>
      </div>
      <div class="employment-introduction">
        <p>
          Since 1948, we have been a great place to work and grow. Our
          Founders, Harry and Esther Snyder, wanted not only to take
          care of our customers but to take care of our Associates as
          well. More than 70 years later, that focus still remains
          firmly in place. We’re committed to offering higher starting
          wages, great benefits and opportunities to grow. Quality is
          our most important ingredient in everything we do, and
          that’s why people who join our family have to be the best.
          So what are you waiting for? Apply today!
        </p>
      </div>
      <v-row
        class="v-row"
        v-for="(department, index) in departments"
        :key="index"
      >
        <v-col cols="12">
          <v-divider class="mb-7 mt-9"></v-divider>
        </v-col>

        <v-col cols="12" sm="6">
          <h1>{{ department.name }}</h1>
        </v-col>

        <v-col cols="12" sm="6">
          <p>
            {{ department.description }}
          </p>
        </v-col>

        <v-col
          cols="12"
          sm="3"
          v-for="(highlight, index) in department.highlights"
          :key="index"
          class="text-center"
        >
          <v-icon style="color: #b60000" size="70">
            {{ highlight.iconName }}
          </v-icon>

          <div>
            aa
          </div>
          <br />
          {{ highlight.name }}
        </v-col>
        <v-col cols="12">
          <button>
            {{ department.detail }}
          </button>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'Employment',
  data() {
    return {
      departments: [
        {
          name: 'RESTAURANT EMPLOYMENT',
          description:
            'We provide competitive hourly rates and a friendly team-oriented environment for our restaurant Associates. Some highlights include:',
          detail: 'LEARN MORE & APPLY',
          highlights: [
            {
              name: 'Competitive Wages',
              iconName: 'mdi-account-cash-outline',
            },
            {
              name: 'Paid Vacations',
              iconName: 'mdi-beach',
            },
            {
              name: 'Flexible Schedule',
              iconName: 'mdi-calendar-clock',
            },
            {
              name: 'Career Growth',
              iconName: 'mdi-human-handsup',
            },
          ],
        },
        {
          name: 'SUPPORT / CORPORATE EMPLOYMENT',
          description:
            'Working in one of our Support Departments offers outstanding career opportunities as well as a friendly, family-oriented environment. Some highlights include:',
          detail: 'LEARN MORE',
          highlights: [
            {
              name: 'Competitive Wages',
              iconName: 'mdi-account-cash-outline',
            },
            {
              name: '401k/Profit Sharing',
              iconName: 'mdi-account-convert-outline',
            },
            {
              name: 'Free Meals',
              iconName: 'mdi-food',
            },
            {
              name: 'Associate Discounts',
              iconName: 'mdi-sale',
            },
          ],
        },
        {
          name: 'COOKOUT TRUCK EMPLOYMENT',
          description:
            'We provide competitive hourly rates and a friendly team-oriented environment for our Cookout Associates. Some highlights include:',
          detail: 'LEARN MORE',
          highlights: [
            {
              name: 'Starting Wage of $15/hr',
              iconName: 'mdi-currency-usd',
            },
            {
              name: 'Paid Vacations',
              iconName: 'mdi-beach',
            },
            {
              name: 'Flexible Schedule',
              iconName: 'mdi-calendar-clock',
            },
            {
              name: 'Career Growth',
              iconName: 'mdi-human-handsup',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.img-area {
  position: absolute;
  top: 99px;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px;
}

.employment-img {
  position: relative;
}

.employment-img img {
  width: 100vw;
  height: 35vw;
  padding-bottom: 12px;
}

.employment-img p {
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: bold;
  font-size: 5vw;
  color: #fff;
  background: linear-gradient(to right, #b81c36, rgba(0, 0, 0, 0.2));
  width: 100vw;
  padding-left: 5vw;
  text-shadow: 2px 2px 4px #444;
}

.employment-introduction {
  margin-top: 30vw;
  padding: 180px 10vw 0px;
}

.v-row {
  padding: 0 10vw;
}

h1 {
  color: #b60000;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 2px;
}
</style>
