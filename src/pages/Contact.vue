<template>
  <div>
    <div class="space-for-header">
      <div class="img-area">
        <p class="contact-img">
          <img src="../assets/contact-header.jpg" alt="" />
        </p>
      </div>
      <div class="contact-content">
        <h2>HI, HOW ARE YOU? TELL US HOW WE CAN HELP.</h2>
        <form>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
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
            v-model="textarea"
            :error-messages="textareaErrors"
            :counter="400"
            label="Text"
            required
            @change="$v.textarea.$touch()"
            @blur="$v.textarea.$touch()"
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
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  Terms and Conditions
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Terms and Conditions</span>
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, semper quis, sapien id
                  natoque elit. Nostra urna at, magna at neque sed sed
                  ante imperdiet, dolor mauris cursus velit, velit
                  non, sem nec. Volutpat sem ridiculus placerat leo,
                  augue in, duis erat proin condimentum in a eget, sed
                  fermentum sed vestibulum varius ac, vestibulum
                  volutpat orci ut elit eget tortor. Ultrices nascetur
                  nulla gravida ante arcu. Pharetra rhoncus morbi
                  ipsum, nunc tempor debitis, ipsum pellentesque,
                  vitae id quam ut mauris dui tempor, aptent non.
                  Quisque turpis. Phasellus quis lectus luctus orci
                  eget rhoncus. Amet donec vestibulum mattis commodo,
                  nulla aliquet, nibh praesent, elementum nulla. Sit
                  lacus pharetra tempus magna neque pellentesque,
                  nulla vel erat. Justo ex quisque nulla accusamus
                  venenatis, sed quis. Nibh phasellus gravida metus
                  in, fusce aenean ut erat commodo eros. Ut turpis,
                  dui integer, nonummy pede placeat nec in sit leo.
                  Faucibus porttitor illo taciti odio, amet viverra
                  scelerisque quis quis et tortor, curabitur morbi a.
                  Enim tempor at, rutrum elit condimentum, amet rutrum
                  vitae tempor torquent nunc. Praesent vestibulum
                  integer maxime felis. Neque aenean quia vitae
                  nostra, tempus elit enim id dui, at egestas
                  pulvinar. Integer libero vestibulum, quis blandit
                  scelerisque mattis fermentum nulla, tortor donec
                  vestibulum dolor amet eget, elit nullam. Aliquam leo
                  phasellus aliquam curabitur metus a, nulla justo
                  mattis duis interdum vel, mollis vitae et id,
                  vestibulum erat ridiculus sit pulvinar justo sed.
                  Vehicula convallis, et nulla wisi, amet vestibulum
                  risus, quam ac egestas. Et vitae, nulla gravida erat
                  scelerisque nullam nunc pellentesque, a dictumst
                  cras augue, purus imperdiet non. Varius montes
                  cursus varius vel tortor, nec leo a qui, magni cras,
                  velit vel consectetuer lobortis vel. Nibh erat et
                  wisi felis leo porttitor, sapien nibh sapien pede
                  mi, sed eget porttitor, repellendus arcu ac quis.
                  Luctus vulputate aut est sem magna, placerat
                  accumsan nunc vestibulum ipsum ac auctor, maecenas
                  lorem in ut nec mauris tortor, doloribus varius sem
                  tortor vestibulum mollis, eleifend tortor felis
                  tempus lacus eu eu. Eleifend vel eu, nullam maecenas
                  mauris nec nunc euismod, tortor porta ridiculus
                  potenti, massa tristique nam magna, et wisi placerat
                  et erat ante. Eget pede erat in facilisis, fermentum
                  venenatis sodales. Ac tortor sociis et non animi
                  tristique, rhoncus malesuada, ut arcu volutpat
                  scelerisque sollicitudin, elit curabitur dui pede
                  purus dolor, integer aenean risus taciti nulla
                  eleifend accumsan. At pulvinar diam parturient,
                  interdum mi velit aliquet et a. Arcu at ac placerat
                  eget justo semper, purus sociis curabitur mi ipsum
                  consequat ut, mollis vestibulum, est ante ornare
                  lacus sem. Neque magna mauris, commodo quisque,
                  praesent semper suscipit lobortis nam. Justo
                  malesuada cursus ac nunc litora nunc. Tellus ac, in
                  lobortis nunc, montes lectus purus fermentum. Ac sit
                  wisi. Sodales aliquam, sed vestibulum nullam arcu
                  sit risus arcu, id luctus vitae lorem nibh, integer
                  nec nullam class cursus mi, purus arcu lectus. Vel
                  ante suscipit volutpat potenti mattis sed, wisi eu
                  placerat aliquam erat, lectus morbi lobortis at
                  assumenda. Consequat neque purus ipsum voluptas
                  odio, netus vestibulum ut nec, suspendisse
                  pellentesque nec enim in. Wisi dictum sed semper a,
                  ipsum erat tellus habitasse est, erat sem ornare,
                  vitae quisque ultricies. Dui sed blandit. Tempor et
                  faucibus justo sed luctus, nec vitae vitae. Nunc
                  nibh pede, ipsum vestibulum aenean leo ante
                  ultricies, nam cras quis sed penatibus amet. In
                  mauris a. Integer metus mauris tortor, et rutrum
                  vestibulum ultricies, ut phasellus in ullamcorper ut
                  mollit, eu justo. Cursus pretium venenatis. Cras
                  pellentesque vel sodales accumsan aenean. Feugiat
                  metus sit nec in aliquet amet, porttitor pretium
                  vulputate massa. Consequat ipsum luctus quisque
                  adipiscing libero. Wisi sollicitudin. Eget vitae ac
                  lobortis, lorem natoque vestibulum et, aliquet
                  faucibus at morbi nibh, vel condimentum. Massa unde
                  orci sed id sed, odio donec congue nec praesent
                  amet. Hymenaeos velit lacus, quis vivamus libero
                  tempus duis, eu nisi eu, ipsum at accumsan pede
                  justo morbi donec, massa et libero sit risus neque
                  tortor. Ut sed sed etiam hendrerit dapibus, quis
                  metus suspendisse nibh. Fringilla tempor felis augue
                  magna. Cum arcu a, id vitae. Pellentesque pharetra
                  in cras sociis adipiscing est. Nibh nec mattis at
                  maecenas, nisl orci aliquam nulla justo egestas
                  venenatis, elementum duis vel porta eros, massa
                  vitae, eligendi imperdiet amet. Nec neque luctus
                  suscipit, justo sem praesent, ut nisl quisque,
                  volutpat torquent wisi tellus aliquam reprehenderit,
                  curabitur cras at quis massa porttitor mauris. Eros
                  sed ultrices. Amet dignissim justo urna feugiat
                  mauris litora, etiam accumsan, lobortis a orci
                  suspendisse. Semper ac mauris, varius bibendum
                  pretium, orci urna nunc ullamcorper auctor, saepe
                  sem integer quam, at feugiat egestas duis. Urna
                  ligula ante. Leo elementum nonummy. Sagittis mauris
                  est in ipsum, nulla amet non justo, proin id potenti
                  platea posuere sit ut, nunc sit erat bibendum. Nibh
                  id auctor, ab nulla vivamus ultrices, posuere morbi
                  nunc tellus gravida vivamus. Mauris nec, facilisi
                  quam fermentum, ut mauris integer, orci tellus
                  tempus diam ut in pellentesque. Wisi faucibus tempor
                  et odio leo diam, eleifend quis integer curabitur
                  sit scelerisque ac, mauris consequat luctus quam
                  penatibus fringilla dis, vitae lacus in, est eu ac
                  tempus. Consectetuer amet ipsum amet dui, sed
                  blandit id sed. Tellus integer, dignissim id pede
                  sodales quis, felis dolorem id mauris orci, orci
                  tempus ut. Nullam hymenaeos. Curabitur in a, tortor
                  ut praesent placerat tincidunt interdum, ac
                  dignissim metus nonummy hendrerit wisi, etiam ut.
                  Semper praesent integer fusce, tortor suspendisse,
                  augue ligula orci ante asperiores ullamcorper. In
                  sit per mi sed sed, mi vestibulum mus nam, morbi
                  mauris neque vitae aliquam proin senectus. Ac amet
                  arcu mollis ante congue elementum, inceptos eget
                  optio quam pellentesque quis lobortis, sollicitudin
                  sed vestibulum sollicitudin, lectus parturient
                  nullam, leo orci ligula ultrices. At tincidunt enim,
                  suspendisse est sit sem ac. Amet tellus molestie est
                  purus magna augue, non etiam et in wisi id. Non
                  commodo, metus lorem facilisi lobortis ac velit,
                  montes neque sed risus consectetuer fringilla dolor.
                  Quam justo et integer aliquam, cursus nulla enim
                  orci, nam cursus adipiscing, integer torquent non,
                  fringilla per maecenas. Libero ipsum sed tellus
                  purus et. Duis molestie placerat erat donec ut.
                  Dolor enim erat massa faucibus ultrices in, ante
                  ultricies orci lacus, libero consectetuer mauris
                  magna feugiat neque dapibus, donec pretium et.
                  Aptent dui, aliquam et et amet nostra ligula. Augue
                  curabitur duis dui volutpat, tempus sed ut pede
                  donec. Interdum luctus, lectus nulla aenean elit, id
                  sit magna, vulputate ultrices pellentesque vel id
                  fermentum morbi. Tortor et. Adipiscing augue lorem
                  cum non lacus, rutrum sodales laoreet duis tortor,
                  modi placerat facilisis et malesuada eros ipsum,
                  vehicula tempus. Ac vivamus amet non aliquam
                  venenatis lectus, sociosqu adipiscing consequat nec
                  arcu odio. Blandit orci nec nec, posuere in pretium,
                  enim ut, consectetuer nullam urna, risus vel. Nullam
                  odio vehicula massa sed, etiam sociis mauris, lacus
                  ullamcorper, libero imperdiet non sodales placerat
                  justo vehicula. Nec morbi imperdiet. Fermentum sem
                  libero iaculis bibendum et eros, eget maecenas non
                  nunc, ad pellentesque. Ut nec diam elementum
                  interdum. Elementum vitae tellus lacus vitae, ipsum
                  phasellus, corporis vehicula in ac sed massa
                  vivamus, rutrum elit, ultricies metus volutpat.
                  Semper wisi et, sollicitudin nunc vestibulum, cursus
                  accumsan nunc pede tempus mi ipsum, ligula sed. Non
                  condimentum ac dolor sit. Mollis eu aliquam, vel
                  mattis mollis massa ut dolor ante, tempus lacinia
                  arcu. Urna vestibulum lorem, nulla fermentum,
                  iaculis ut congue ac vivamus. Nam libero orci,
                  pulvinar nulla, enim pellentesque consectetuer leo,
                  feugiat rhoncus rhoncus vel. Magna sociosqu donec,
                  dictum cursus ullamcorper viverra. Ultricies quis
                  orci lorem, suspendisse ut vestibulum integer, purus
                  sed lorem pulvinar habitasse turpis. +
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

          <v-btn class="mr-4" @click="submit">
            submit
          </v-btn>
          <v-btn @click="clear">
            clear
          </v-btn>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'Contact',
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    textarea: { required, maxLength: maxLength(400) },
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
    items: [
      'General Inquiry',
      'Compliments & Concerns',
      'Employment Inquires',
      'Press',
      'Real Estate',
    ],
    textarea: '',
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
        errors.push('Name must be at most 10 characters long');
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
    textareaErrors() {
      const errors = [];
      if (!this.$v.textarea.$dirty) return errors;
      !this.$v.textarea.maxLength &&
        errors.push('Text must be at most 400 characters long');
      !this.$v.textarea.required && errors.push('Text is required');
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
      this.select = null;
      this.textarea = '';
      this.checkbox = false;
    },
  },
};
</script>

<style scoped>
@import '../assets/keyframes/animation.css';

h2 {
  color: #b60000;
  font-size: 24px;
  margin-top: 400px; /* mobile版はサイズ変える必要がある */
}

.img-area {
  position: absolute;
  top: 99px;
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
</style>
