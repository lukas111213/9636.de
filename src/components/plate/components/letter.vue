<template>
  <div class="letter">
    <transition-group name="fade">
      <span
        key="0"
        class="circle"
        :style="{'color': active === '0' ? color[2]:  color[3]}"
      >{{letters[0]}}</span>
      <span
        key="1"
        class="circle"
        :style="{'color': active === '1' ? color[2]: color[3]}"
      >{{letters[1]}}</span>
      <span
        key="2"
        class="circle"
        :style="{'color': active === '2' ? color[2]: color[3]}"
      >{{letters[2]}}</span>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ["letters", "active", "index", "color"],
  mounted() {
    // document.querySelectorAll(".letter").forEach(ciclegraph => {
    //   let circles = ciclegraph.querySelectorAll(".circle");
    //   let angle = 360,
    //     dangle = 140 / circles.length;
    //   for (let i = 0; i < circles.length; ++i) {
    //     let circle = circles[i];
    //     angle += dangle;
    //     circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth /
    //       2}px) rotate(-93deg)`;
    //   }
    // });
  }
};
</script>

<style lang="scss">
.circle {
  width: 100px;
  position: relativ;
  height: 30px;
  border-radius: 50%;
}

.letter span {
  padding: 0;
  font-size: 1rem;
  letter-spacing: 4px;
  line-height: 2;
  color: #fff;
}
.colorize {
  color: blue;
}

@media screen and (max-width: 600px) {
  .letter {
    font-size: 0.8rem;
  }
  .circle {
    width: 1px;
    height: 2px;
    top: 50%;
  }
}
</style>