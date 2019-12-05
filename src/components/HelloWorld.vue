<template>
  <div>
    <div class="centerize">
      <number :color="design()" @open="openA(letters6, 1)" number="6">
        <template #action>
          <letter
            style="position: absolute; margin: 0;"
            class="let"
            :color="design()"
            v-if="show1"
            :letters="letters6"
            :active="active"
            :index="1"
          />
        </template>
      </number>
      <number :color="design()" @open="openA(letters9, 2)" number="9">
        <template #action>
          <letter
            style="position: absolute; margin: 0"
            class="let"
            :color="design()"
            v-if="show2"
            :letters="letters9"
            :active="active"
            :index="2"
          />
        </template>
      </number>
      <number :color="design()" @open="openA(letters3, 3)" number="3">
        <template #action>
          <letter
            style="position: absolute; margin: 0"
            class="let"
            :color="design()"
            v-if="show3"
            :letters="letters3"
            :active="active"
            :index="3"
          />
        </template>
      </number>
      <number :color="design()" @open="openA(letters6, 4)" number="6">
        <template #action>
          <letter
            style="position: absolute; margin: 0;"
            class="let"
            :color="design()"
            v-if="show4"
            :letters="letters6"
            :active="active"
            :index="4"
          />
        </template>
      </number>
    </div>
    <slider
      v-if="go"
      :color="design()"
      class="swipe-button mb-2"
      textColor="#fff"
      overlayColor="#BBC0C3"
      @actionConfirmed="slideRun"
    />
    <transition-group>
      <div key="1" class="sub-txt" v-if="clicks === 4">Passport is {{response}}</div>
    </transition-group>
    <credits :color="design()"/>
  </div>
</template>

<script>
import number from "@/components/plate/components/number.vue";
import letter from "@/components/plate/components/letter.vue";
import slider from "@/components/slider.vue";
import credits from "@/components/credits.vue";
const color_design = require("@/helpers/index");

export default {
  name: "home",
  components: {
    number,
    letter,
    slider,
    credits
  },
  data() {
    return {
      letters6: "mno",
      letters9: "wxy",
      letters3: "def",
      clicks: 0,
      not: true,
      go: false,
      response: "",
      show1: false,
      show2: false,
      show3: false,
      show4: false
    };
  },
  computed: {
    passport() {
      return this.$store.state.passport;
    },
    realPassport() {
      const rp = this.$store.state.realPassport;
      const result = rp.split("");
      return result;
    }
  },
  methods: {
    design() {
      var color;
      let now = new Date();
      switch (now.getHours()) {
        case 0:
          color = color_design.colors.paletts.a;
          break;
        case 1:
          color = color_design.colors.paletts.b;
          break;
        case 2:
          color = color_design.colors.paletts.c;
          break;
        case 3:
          color = color_design.colors.paletts.d;
          break;
        case 4:
          color = color_design.colors.paletts.e;
          break;
        case 5:
          color = color_design.colors.paletts.f;
          break;
        case 6:
          color = color_design.colors.paletts.g;
          break;
        case 7:
          color = color_design.colors.paletts.h;
          break;
        case 8:
          color = color_design.colors.paletts.i;
          break;
        case 9:
          color = color_design.colors.paletts.j;
          break;
        case 10:
          color = color_design.colors.paletts.k;
          break;
        case 11:
          color = color_design.colors.paletts.l;
          break;
        case 12:
          color = color_design.colors.paletts.m;
          break;
        case 13:
          color = color_design.colors.paletts.n;
          break;
        case 14:
          color = color_design.colors.paletts.q;
          break;
        case 15:
          color = color_design.colors.paletts.r;
          break;
        case 16:
          color = color_design.colors.paletts.s;
          break;
        case 17:
          color = color_design.colors.paletts.t;
          break;
        case 18:
          color = color_design.colors.paletts.u;
          break;
        case 19:
          color = color_design.colors.paletts.v;
          break;
        case 20:
          color = color_design.colors.paletts.w;
          break;
        case 21:
          color = color_design.colors.paletts.x;
          break;
        case 22:
          color = color_design.colors.paletts.y;
          break;
        case 23:
          color = color_design.colors.paletts.z;
          break;
        default:
          color = color_design.colors.paletts.default;
      }
      return color;
    },
    checkPassport() {
      this.arraysEqual(this.passport, this.realPassport);
    },
    arraysEqual(arr1, arr2) {
      if (this.clicks === 4) {
        if (arr1.length !== arr2.length) return false;
        for (var i = arr1.length; i--; ) {
          if (arr1[i] !== arr2[i]) {
            console.log("not");
            this.response = "wrong. Please try again :)";
            this.$store.dispatch("deletePassword");
            setTimeout(() => {
              this.not = false;
              this.show1 = false;
              this.show2 = false;
              this.show3 = false;
              this.show4 = false;
              this.clicks = 0;
              this.response = "";
            }, 1200);
            return false;
          }
        }
        this.response = "right :)";
        this.go = true;
        return true;
      }
    },
    openA(letters, index) {
      if (this.clicks < 4) {
        var letter;
        if (index === 1) {
          letter = letters.charAt(2);
          this.show1 = true;
          this.active = "2";
          this.$store.dispatch("addPassword", letter);
        } else if (index === 2) {
          this.active = "2";
          this.show2 = true;
          letter = letters.charAt(2);
          this.$store.dispatch("addPassword", letter);
        } else if (index === 3) {
          this.active = "1";
          this.show3 = true;
          letter = letters.charAt(1);
          this.$store.dispatch("addPassword", letter);
        } else if (index === 4) {
          this.active = "1";
          this.show4 = true;
          letter = letters.charAt(1);
          this.$store.dispatch("addPassword", letter);
        }
        this.clicks++;
        this.checkPassport();
      }
    },
    slideRun() {
      setTimeout(() => {
        window.open("https://www.oyen.de", "_self");
      }, 1200);
    }
  }
};
</script>

<style>
.swipe-button {
  width: 300px;
  position: absolute;
  top: 66%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.centerize {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.sub-txt {
  position: absolute;
  top: 60%;
  left: 50%;
  margin-right: -50%;
  font-weight: 600;
  color: #bbc0c3;
  transform: translate(-50%, -50%);
}

.let {
  transform: translate(15px, -7px);
}

@media screen and (max-width: 600px) {
  .swipe-button {
    top: 72%;
  }
  .let {
    transform: translate(4px, -8.8px);
  }
}
</style>
