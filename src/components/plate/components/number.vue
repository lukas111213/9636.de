<template>
  <div class="center">
    <div :style="{'background': color[0]}" class="calc">
      <div class="cin">
        <div
          :style="{'background': color[1]}"
          id="btna"
          @click="open"
          class="btn"
          data-type="number"
          data-val="6"
        >{{number}}</div>
        <div class="calcy">
          <div class="clear">
            <slot class name="action"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const color_design = require("@/helpers/index");
export default {
  props: {
    number: { type: String },
    reset: {
      type: Boolean
    },
    color: Array
  },
  data() {
    return {
      plate: false
    };
  },
  methods: {
    open() {
      this.$emit("open");
    }
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
body {
  margin: 0;
  background-color: #171614;
  // background-image: linear-gradient(147deg, #25282d 0%, #141414 74%);
  overflow: hidden;
  background-attachment: fixed;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none !important;
  -ms-touch-action: none !important;
  touch-action: none !important;
}
button,
textarea,
input,
select,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none !important;
}
* {
  outline: 0 !important;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.center {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.clear {
  color: #bbc0c3;
  clear: both;
}

.calc {
  width: auto;
  outline: none !important;
  background: #2249ca;
  border-radius: 100%;
  box-shadow: 0 0px 8px 0.4px rgba(0, 0, 0, 0.8);
  margin: auto 17px;
}

.cin {
  padding: 30px;
  .btn {
    user-select: none;
    outline: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.8rem;
    height: 3.8rem;
    color: #fff;
    text-align: center;
    background: #f43f7a;
    float: left;
    padding: 10px;
    box-sizing: border-box;
    margin: 5px;
    margin-top: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    cursor: pointer;
    line-height: auto;
    font-size: 1.9rem;
    border-radius: 100%;
    box-shadow: 0 0 2px 0.3px rgba(0, 0, 0, 0.3);
    user-select: none;
    &:active {
      //box-shadow: none;
      box-shadow: 0 0 2px 2.5px rgba(1, 1, 1, 1);
    }
    &.opa {
      background: rgba(151, 207, 234, 0.51);
    }
    &.double {
      width: 140px;
    }
  }
}

@media screen and (max-width: 600px) {
  .calc {
    margin: auto 4px;
  }
  .cin {
    padding: 19px;
    .btn {
      font-size: 1.5rem;
      width: 2.2rem;
      height: 2.2rem;
    }
    .sloty {
      position: relative;
    }
  }
}
</style>