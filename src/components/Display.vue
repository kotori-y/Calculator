<template>
  <div class="display">
    <input v-model="result" :style="`font-size: ${fontSize}%`" class="result" disabled readonly>
  </div>
</template>

<script>
export default {
  name: "Display",
  data() {
    return {
      fontSize: 280
    }
  },
  methods: {
    adjustFontSize() {
      let n = this.$store.state.showNum.length
      n = n > 8 ? n : 8
      const tmp = 8 / n * 280
      if (tmp >= 37) {
        this.fontSize = tmp
        return;
      }
      this.$store.dispatch("toScientificNum")
    },
  },
  computed: {
    result() {
      return this.$store.state.showNum
    },
  },
  watch: {
    result: {
      immediate: true,
      handler() {
        this.adjustFontSize()
      },
    },
  }
}
</script>

<style>

.display {
  background-color: #525555;
  width: 100%;
  height: 25%;
  position: absolute;
  left: 0;
  top: 0;
  display: table-cell;
  vertical-align: bottom;
}

.result {
  -webkit-app-region: drag;
  padding: 0;
  border-style: none;
  height: 50%;
  width: 98%;
  resize: none;
  color: #FFFFFF;
  background: transparent;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  text-align: right;
  padding-top: 14%;
}

</style>