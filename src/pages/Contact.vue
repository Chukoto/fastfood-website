<template>
  <div>
    <div class="space-for-header">
      <div class="hidden-xs-only">
        <div class="img-area">
          <p class="contact-img">
            <img src="../assets/contact-header.jpg" alt="" />
          </p>
        </div>
      </div>
      <div class="hidden-sm-and-up">
        <div class="img-area-mb">
          <p class="contact-img">
            <img src="../assets/contact-header.jpg" alt="" />
          </p>
        </div>
      </div>
      <div class="contact-content">
        <div class="hidden-xs-only">
          <h2 class="text-center">
            HI, HOW ARE YOU? TELL US HOW WE CAN HELP.
          </h2>
        </div>
        <div class="hidden-sm-and-up">
          <h2 class="text-center h2-mb">
            HI, HOW ARE YOU? TELL US HOW WE CAN HELP.
          </h2>
        </div>
        <v-row justify="center">
          <v-col cols="12" sm="8">
            <form class="contact-form">
              <div class="inner-border">
                <v-text-field
                  v-model="name"
                  :error-messages="nameErrors"
                  :counter="30"
                  label="Name"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
                <v-text-field
                  v-model="address"
                  :error-messages="addressErrors"
                  :counter="50"
                  label="Street Address"
                  required
                  @input="$v.address.$touch()"
                  @blur="$v.address.$touch()"
                ></v-text-field>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="city"
                      :error-messages="cityErrors"
                      :counter="30"
                      label="City"
                      required
                      @input="$v.city.$touch()"
                      @blur="$v.city.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="province"
                      :error-messages="provinceErrors"
                      :counter="30"
                      label="Province"
                      required
                      @input="$v.province.$touch()"
                      @blur="$v.province.$touch()"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="zipcode"
                      :error-messages="zipcodeErrors"
                      :counter="7"
                      label="Zipcode"
                      required
                      @input="$v.zipcode.$touch()"
                      @blur="$v.zipcode.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="phone"
                      :error-messages="phoneErrors"
                      :counter="11"
                      label="Phone"
                      required
                      @input="$v.phone.$touch()"
                      @blur="$v.phone.$touch()"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-select
                  v-model="select"
                  :items="items"
                  :error-messages="selectErrors"
                  label="Contact Option"
                  required
                  @change="$v.select.$touch()"
                  @blur="$v.select.$touch()"
                ></v-select>
                <v-textarea
                  v-model="message"
                  :error-messages="messageErrors"
                  :counter="400"
                  label="Message"
                  required
                  @change="$v.message.$touch()"
                  @blur="$v.message.$touch()"
                  clear-icon="mdi-close-circle"
                  clearable
                ></v-textarea>
                <v-checkbox
                  v-model="checkbox"
                  :error-messages="checkboxErrors"
                  label="I have read and agree to the terms and conditions."
                  required
                  @change="$v.checkbox.$touch()"
                  @blur="$v.checkbox.$touch()"
                ></v-checkbox>

                <v-row justify="center">
                  <v-dialog v-model="dialog" width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        class="my-10"
                      >
                        Terms and Conditions
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5"
                          >Terms and Conditions</span
                        >
                      </v-card-title>
                      <v-card-text>
                        Lorem ipsum dolor sit amet, semper quis,
                        sapien id natoque elit. Nostra urna at, magna
                        at neque sed sed ante imperdiet, dolor mauris
                        cursus velit, velit non, sem nec. Volutpat sem
                        ridiculus placerat leo, augue in, duis erat
                        proin condimentum in a eget, sed fermentum sed
                        vestibulum varius ac, vestibulum volutpat orci
                        ut elit eget tortor. Ultrices nascetur nulla
                        gravida ante arcu. Pharetra rhoncus morbi
                        ipsum, nunc tempor debitis, ipsum
                        pellentesque, vitae id quam ut mauris dui
                        tempor, aptent non. Quisque turpis. Phasellus
                        quis lectus luctus orci eget rhoncus. Amet
                        donec vestibulum mattis commodo, nulla
                        aliquet, nibh praesent, elementum nulla. Sit
                        lacus pharetra tempus magna neque
                        pellentesque, nulla vel erat. Justo ex quisque
                        nulla accusamus venenatis, sed quis. Nibh
                        phasellus gravida metus in, fusce aenean ut
                        erat commodo eros. Ut turpis, dui integer,
                        nonummy pede placeat nec in sit leo. Faucibus
                        porttitor illo taciti odio, amet viverra
                        scelerisque quis quis et tortor, curabitur
                        morbi a. Enim tempor at, rutrum elit
                        condimentum, amet rutrum vitae tempor torquent
                        nunc. Praesent vestibulum integer maxime
                        felis. Neque aenean quia vitae nostra, tempus
                        elit enim id dui, at egestas pulvinar. Integer
                        libero vestibulum, quis blandit scelerisque
                        mattis fermentum nulla, tortor donec
                        vestibulum dolor amet eget, elit nullam.
                        Aliquam leo phasellus aliquam curabitur metus
                        a, nulla justo mattis duis interdum vel,
                        mollis vitae et id, vestibulum erat ridiculus
                        sit pulvinar justo sed. Vehicula convallis, et
                        nulla wisi, amet vestibulum risus, quam ac
                        egestas. Et vitae, nulla gravida erat
                        scelerisque nullam nunc pellentesque, a
                        dictumst cras augue, purus imperdiet non.
                        Varius montes cursus varius vel tortor, nec
                        leo a qui, magni cras, velit vel consectetuer
                        lobortis vel. Nibh erat et wisi felis leo
                        porttitor, sapien nibh sapien pede mi, sed
                        eget porttitor, repellendus arcu ac quis.
                        Luctus vulputate aut est sem magna, placerat
                        accumsan nunc vestibulum ipsum ac auctor,
                        maecenas lorem in ut nec mauris tortor,
                        doloribus varius sem tortor vestibulum mollis,
                        eleifend tortor felis tempus lacus eu eu.
                        Eleifend vel eu, nullam maecenas mauris nec
                        nunc euismod, tortor porta ridiculus potenti,
                        massa tristique nam magna, et wisi placerat et
                        erat ante. Eget pede erat in facilisis,
                        fermentum venenatis sodales. Ac tortor sociis
                        et non animi tristique, rhoncus malesuada, ut
                        arcu volutpat scelerisque sollicitudin, elit
                        curabitur dui pede purus dolor, integer aenean
                        risus taciti nulla eleifend accumsan. At
                        pulvinar diam parturient, interdum mi velit
                        aliquet et a. Arcu at ac placerat eget justo
                        semper, purus sociis curabitur mi ipsum
                        consequat ut, mollis vestibulum, est ante
                        ornare lacus sem. Neque magna mauris, commodo
                        quisque, praesent semper suscipit lobortis
                        nam. Justo malesuada cursus ac nunc litora
                        nunc. Tellus ac, in lobortis nunc, montes
                        lectus purus fermentum. Ac sit wisi. Sodales
                        aliquam, sed vestibulum nullam arcu sit risus
                        arcu, id luctus vitae lorem nibh, integer nec
                        nullam class cursus mi, purus arcu lectus. Vel
                        ante suscipit volutpat potenti mattis sed,
                        wisi eu placerat aliquam erat, lectus morbi
                        lobortis at assumenda. Consequat neque purus
                        ipsum voluptas odio, netus vestibulum ut nec,
                        suspendisse pellentesque nec enim in. Wisi
                        dictum sed semper a, ipsum erat tellus
                        habitasse est, erat sem ornare, vitae quisque
                        ultricies. Dui sed blandit. Tempor et faucibus
                        justo sed luctus, nec vitae vitae. Nunc nibh
                        pede, ipsum vestibulum aenean leo ante
                        ultricies, nam cras quis sed penatibus amet.
                        In mauris a. Integer metus mauris tortor, et
                        rutrum vestibulum ultricies, ut phasellus in
                        ullamcorper ut mollit, eu justo. Cursus
                        pretium venenatis. Cras pellentesque vel
                        sodales accumsan aenean. Feugiat metus sit nec
                        in aliquet amet, porttitor pretium vulputate
                        massa. Consequat ipsum luctus quisque
                        adipiscing libero. Wisi sollicitudin. Eget
                        vitae ac lobortis, lorem natoque vestibulum
                        et, aliquet faucibus at morbi nibh, vel
                        condimentum. Massa unde orci sed id sed, odio
                        donec congue nec praesent amet. Hymenaeos
                        velit lacus, quis vivamus libero tempus duis,
                        eu nisi eu, ipsum at accumsan pede justo morbi
                        donec, massa et libero sit risus neque tortor.
                        Ut sed sed etiam hendrerit dapibus, quis metus
                        suspendisse nibh. Fringilla tempor felis augue
                        magna. Cum arcu a, id vitae. Pellentesque
                        pharetra in cras sociis adipiscing est. Nibh
                        nec mattis at maecenas, nisl orci aliquam
                        nulla justo egestas venenatis, elementum duis
                        vel porta eros, massa vitae, eligendi
                        imperdiet amet. Nec neque luctus suscipit,
                        justo sem praesent, ut nisl quisque, volutpat
                        torquent wisi tellus aliquam reprehenderit,
                        curabitur cras at quis massa porttitor mauris.
                        Eros sed ultrices. Amet dignissim justo urna
                        feugiat mauris litora, etiam accumsan,
                        lobortis a orci suspendisse. Semper ac mauris,
                        varius bibendum pretium, orci urna nunc
                        ullamcorper auctor, saepe sem integer quam, at
                        feugiat egestas duis. Urna ligula ante. Leo
                        elementum nonummy. Sagittis mauris est in
                        ipsum, nulla amet non justo, proin id potenti
                        platea posuere sit ut, nunc sit erat bibendum.
                        Nibh id auctor, ab nulla vivamus ultrices,
                        posuere morbi nunc tellus gravida vivamus.
                        Mauris nec, facilisi quam fermentum, ut mauris
                        integer, orci tellus tempus diam ut in
                        pellentesque. Wisi faucibus tempor et odio leo
                        diam, eleifend quis integer curabitur sit
                        scelerisque ac, mauris consequat luctus quam
                        penatibus fringilla dis, vitae lacus in, est
                        eu ac tempus. Consectetuer amet ipsum amet
                        dui, sed blandit id sed. Tellus integer,
                        dignissim id pede sodales quis, felis dolorem
                        id mauris orci, orci tempus ut. Nullam
                        hymenaeos. Curabitur in a, tortor ut praesent
                        placerat tincidunt interdum, ac dignissim
                        metus nonummy hendrerit wisi, etiam ut. Semper
                        praesent integer fusce, tortor suspendisse,
                        augue ligula orci ante asperiores ullamcorper.
                        In sit per mi sed sed, mi vestibulum mus nam,
                        morbi mauris neque vitae aliquam proin
                        senectus. Ac amet arcu mollis ante congue
                        elementum, inceptos eget optio quam
                        pellentesque quis lobortis, sollicitudin sed
                        vestibulum sollicitudin, lectus parturient
                        nullam, leo orci ligula ultrices. At tincidunt
                        enim, suspendisse est sit sem ac. Amet tellus
                        molestie est purus magna augue, non etiam et
                        in wisi id. Non commodo, metus lorem facilisi
                        lobortis ac velit, montes neque sed risus
                        consectetuer fringilla dolor. Quam justo et
                        integer aliquam, cursus nulla enim orci, nam
                        cursus adipiscing, integer torquent non,
                        fringilla per maecenas. Libero ipsum sed
                        tellus purus et. Duis molestie placerat erat
                        donec ut. Dolor enim erat massa faucibus
                        ultrices in, ante ultricies orci lacus, libero
                        consectetuer mauris magna feugiat neque
                        dapibus, donec pretium et. Aptent dui, aliquam
                        et et amet nostra ligula. Augue curabitur duis
                        dui volutpat, tempus sed ut pede donec.
                        Interdum luctus, lectus nulla aenean elit, id
                        sit magna, vulputate ultrices pellentesque vel
                        id fermentum morbi. Tortor et. Adipiscing
                        augue lorem cum non lacus, rutrum sodales
                        laoreet duis tortor, modi placerat facilisis
                        et malesuada eros ipsum, vehicula tempus. Ac
                        vivamus amet non aliquam venenatis lectus,
                        sociosqu adipiscing consequat nec arcu odio.
                        Blandit orci nec nec, posuere in pretium, enim
                        ut, consectetuer nullam urna, risus vel.
                        Nullam odio vehicula massa sed, etiam sociis
                        mauris, lacus ullamcorper, libero imperdiet
                        non sodales placerat justo vehicula. Nec morbi
                        imperdiet. Fermentum sem libero iaculis
                        bibendum et eros, eget maecenas non nunc, ad
                        pellentesque. Ut nec diam elementum interdum.
                        Elementum vitae tellus lacus vitae, ipsum
                        phasellus, corporis vehicula in ac sed massa
                        vivamus, rutrum elit, ultricies metus
                        volutpat. Semper wisi et, sollicitudin nunc
                        vestibulum, cursus accumsan nunc pede tempus
                        mi ipsum, ligula sed. Non condimentum ac dolor
                        sit. Mollis eu aliquam, vel mattis mollis
                        massa ut dolor ante, tempus lacinia arcu. Urna
                        vestibulum lorem, nulla fermentum, iaculis ut
                        congue ac vivamus. Nam libero orci, pulvinar
                        nulla, enim pellentesque consectetuer leo,
                        feugiat rhoncus rhoncus vel. Magna sociosqu
                        donec, dictum cursus ullamcorper viverra.
                        Ultricies quis orci lorem, suspendisse ut
                        vestibulum integer, purus sed lorem pulvinar
                        habitasse turpis. +
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="green darken-1"
                          text
                          @click="disagreeHandler()"
                        >
                          Disagree
                        </v-btn>
                        <v-btn
                          color="green darken-1"
                          text
                          @click="agreeHandler()"
                        >
                          Agree
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>

                <v-row justify="center" align-content="center">
                  <v-btn class="mr-4" @click="submit">
                    submit
                  </v-btn>
                  <v-btn @click="clear">
                    clear
                  </v-btn>
                </v-row>
              </div>
            </form>
          </v-col>
        </v-row>
      </div>
      <v-row class="mb-10" justify="center">
        <v-col class="text-center" cols="12" sm="4">
          <v-icon class="icon-color" size="70">mdi-phone</v-icon>
          <h3>CALL CUSTOMER SERVICE</h3>
          <p>
            To speak to a professional Customer Service Associate,
            call us at x-xxx-xxx-xxxx between:
          </p>
          <ul class="hidden-xs-only">
            <li>Sunday to Thursday: 8am - 1am</li>
            <li>Friday to Saturday: 8am to 1:30am</li>
          </ul>
          <ul class="hidden-sm-and-up" style="list-style: none;">
            <li>Sunday to Thursday: 8am - 1am</li>
            <li>Friday to Saturday: 8am to 1:30am</li>
          </ul>
        </v-col>

        <v-divider class="hidden-xs-only" inset vertical></v-divider>
        <v-divider class="hidden-sm-and-up"></v-divider>

        <v-col class="text-center" cols="12" sm="4">
          <v-icon class="icon-color" size="70">mdi-mailbox</v-icon>
          <h3>WRITE TO CUSTOMER SERVICE</h3>
          <p>
            Burgers Corporate Office xxxx Campus Drive, 9th Floor
            Irvine, CA xxxxx
          </p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import {
  required,
  maxLength,
  email,
  numeric,
} from 'vuelidate/lib/validators';

export default {
  name: 'Contact',
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(30) },
    email: { required, email },
    address: { required, maxLength: maxLength(50) },
    city: { required, maxLength: maxLength(30) },
    province: { required, maxLength: maxLength(30) },
    zipcode: { required, numeric, maxLength: maxLength(7) },
    phone: { required, numeric, maxLength: maxLength(11) },
    select: { required },
    message: { required, maxLength: maxLength(400) },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: '',
    email: '',
    select: null,
    address: '',
    city: '',
    province: '',
    zipcode: '',
    phone: '',
    items: [
      'General Inquiry',
      'Compliments & Concerns',
      'Employment Inquires',
      'Press',
      'Real Estate',
    ],
    message: '',
    checkbox: false,
    dialog: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked &&
        errors.push('You must agree to continue!');
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push('Option is required');
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 30 characters long');
      !this.$v.name.required && errors.push('Name is required.');
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail');
      !this.$v.email.required && errors.push('E-mail is required');
      return errors;
    },
    addressErrors() {
      const errors = [];
      if (!this.$v.address.$dirty) return errors;
      !this.$v.address.maxLength &&
        errors.push(
          'Street Address must be at most 50 characters long'
        );
      !this.$v.address.required &&
        errors.push('Street Address is required.');
      return errors;
    },
    cityErrors() {
      const errors = [];
      if (!this.$v.city.$dirty) return errors;
      !this.$v.city.maxLength &&
        errors.push('City must be at most 30 characters long');
      !this.$v.city.required && errors.push('City is required.');
      !this.$v.city.numeric && errors.push('City is required.');
      return errors;
    },
    provinceErrors() {
      const errors = [];
      if (!this.$v.province.$dirty) return errors;
      !this.$v.province.maxLength &&
        errors.push('Province must be at most 30 characters long');
      !this.$v.province.required &&
        errors.push('Province is required.');
      return errors;
    },
    zipcodeErrors() {
      const errors = [];
      if (!this.$v.zipcode.$dirty) return errors;
      !this.$v.zipcode.maxLength &&
        errors.push('Zipcode must be at most 7 characters long');
      !this.$v.zipcode.required &&
        errors.push('Zipcode is required.');
      !this.$v.zipcode.numeric &&
        errors.push('Zipcode accepts only number.');

      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.maxLength &&
        errors.push('Phone must be at most 11 characters long');
      !this.$v.phone.required && errors.push('Phone is required.');
      !this.$v.phone.numeric &&
        errors.push('Phone accepts only number.');
      return errors;
    },
    messageErrors() {
      const errors = [];
      if (!this.$v.message.$dirty) return errors;
      !this.$v.message.maxLength &&
        errors.push('Message must be at most 400 characters long');
      !this.$v.message.required && errors.push('Message is required');
      return errors;
    },
  },

  methods: {
    disagreeHandler() {
      this.checkbox = false;
      this.closer();
    },
    agreeHandler() {
      this.checkbox = true;
      this.closer();
    },

    closer() {
      this.dialog = false;
    },

    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = '';
      this.email = '';
      this.address = '';
      this.city = '';
      this.province = '';
      this.zipcode = null;
      this.phone = null;
      this.select = null;
      this.message = '';
      this.checkbox = false;
    },
  },
};
</script>

<style scoped>
h2 {
  color: #b60000;
  font-size: 24px;
  margin-top: 400px;
  margin-bottom: 20px;
}

h2.h2-mb {
  margin-top: 70vw;
}

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

.contact-img img {
  width: 100vw;
  padding-bottom: 12px;
  border-bottom: 12px solid #b60000;
}

.contact-content {
  margin-top: 45vw;
}

.contact-form {
  border: 6px solid #b60000;
  border-radius: 8px;
  padding: 4px;
  margin-bottom: 30px;
}

.inner-border {
  border: 2px solid #b60000;
  border-radius: 8px;
  padding: 50px;
}

.icon-color {
  color: #b60000;
}
</style>
