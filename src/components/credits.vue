<template>
  <div class="credits">
    <span>
      6936.de Passboard - an oyen.de service 12.2019, code & design
      <a
        @mouseover="active('first', color)"
        @mouseout="out('first', color)"
        id="first"
        :style="{color: color[0]}"
        :href="lukas"
      >Lukas Kreutzer</a>, idea
      <a
        @mouseover="active('second', color)"
        @mouseout="out('second', color)"
        id="second"
        :style="{color: color[0]}"
        :href="oyen"
      >Jörg Oyen</a>.
    </span>
  </div>
</template>

<script>
export default {
  props: ["color"],
  data() {
    return {
      lukas: "https://www.linkedin.com/in/lukas-kreutzer/",
      oyen: "https://oyen.de"
    };
  },
  methods: {
    active(id, data) {
      const ele = id === "first" ? "first" : "second";
      var link = document.getElementById(ele);

      link.style.color = data[1];
    },
    out(id, data) {
      const ele = id === "first" ? "first" : "second";
      var link = document.getElementById(ele);

      link.style.color = data[0];
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
span {
  color: #fff;
  margin: 0;
}
.credits {
  font-size: 0.94rem;
  position: absolute;
  bottom: 0.4%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 0%);
}

@media screen and (max-width: 600px) {
  .credits {
    padding: 2px;
    font-size: 0.81rem;
  }
}
</style>