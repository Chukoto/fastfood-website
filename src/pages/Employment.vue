<template>
  <div>
    <div class="space-for-header">
      <div class="hidden-xs-only">
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
            {{ introduction }}
          </p>
        </div>
      </div>
      <div class="hidden-sm-and-up">
        <div class="img-area-mb">
          <div class="employment-img">
            <img src="../assets/employment-header.jpg" alt="" />
            <p>
              EMPLOYMENT
            </p>
          </div>
        </div>
        <div class="employment-introduction-mb">
          <p>
            {{ introduction }}
          </p>
        </div>
      </div>
      <v-row
        class="v-row my-8"
        v-for="(department, index) in departments"
        :key="index"
      >
        <v-col cols="12">
          <v-divider></v-divider>
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

          <br />
          {{ highlight.name }}
        </v-col>

        <v-row class="mt-9" justify="center ">
          <v-btn
            style="color: #b60000"
            @click="test(department.name, department.detailContent)"
          >
            {{ department.detail }}
          </v-btn>

          <v-dialog v-model="dialog" max-width="500">
            <v-card>
              <v-card-title class="text-h5">
                {{ currentTitle }}
              </v-card-title>

              <v-card-text>
                {{ currentText }}
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-row>
      </v-row>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'Employment',
  data() {
    return {
      dialog: false,
      introduction:
        'Since 1948, we have been a great place to work and grow. Our Founders, Harry and Esther Snyder, wanted not only to take care of our customers but to take care of our Associates as well. More than 70 years later, that focus still remains firmly in place. We’re committed to offering higher starting wages, great benefits and opportunities to grow. Quality is our most important ingredient in everything we do, and that’s why people who join our family have to be the best. So what are you waiting for? Apply today!',
      departments: [
        {
          name: 'RESTAURANT EMPLOYMENT',
          description:
            'We provide competitive hourly rates and a friendly team-oriented environment for our restaurant Associates. Some highlights include:',
          detail: 'LEARN MORE & APPLY',
          detailContent:
            "Our work environment is team-oriented, fast paced and fun. We encourage ALL of our Associates to grow with the company and to become part of our success story. That's why your success is ours! We start all of our new Associates at a competitive wage for one simple reason...you are important to us! And our commitment to a higher starting wage is just one of the ways in which we show it. Another way is through offering excellent part-time and full-time benefits like flexible schedules to accommodate school and other activities, paid vacations, free meals, comprehensive training, and a 401k plan.",
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
          detailContent:
            'Since 1948, we have maintained a simple philosophy — serve only the highest quality product, prepare it in a clean and sparkling environment, and serve it in a warm and friendly manner. We have built a reputation for fresh, made-to-order foods prepared and served by friendly, well-trained Associates. Today, our Baldwin Park complex and Irvine offices serve as our corporate facilities. We also have several satellite locations in Lathrop, California; Las Vegas, Nevada; Phoenix, Arizona; Draper, Utah, and Dallas, Texas that support our stores. Working in one of our Support Departments offers outstanding career opportunities as well as a friendly, family-oriented environment. Because our Associates are important to us, you can expect a competitive salary and a comprehensive part-time and full-time benefits package.',
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
          detailContent:
            "Our work environment is team-oriented, fast paced and fun. We encourage ALL of our Associates to grow with the company, to become part of our success story. That's why your success is ours! We start all our new Associates at a minimum of $13.00 an hour for one simple reason...you are important to us! And our commitment to a higher starting wage is just one of the ways in which we show it. Another way is through offering excellent part-time and full-time benefits like flexible schedules to accommodate school and other activities, paid vacations, free meals, comprehensive training, and a 401k plan.",
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
      currentTitle: 'test',
      currentText: 'testaa',
    };
  },
  methods: {
    test: function(name, content) {
      this.currentTitle = name;
      this.currentText = content;
      this.dialog = true;
    },
  },
};
</script>

<style>
.img-area {
  position: absolute;
  top: 99px;
  left: 50%;
  transform: translateX(-50%);
}

.img-area-mb {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
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

.employment-introduction-mb {
  margin-top: 18vw;
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
