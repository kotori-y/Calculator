<template>
  <div class="display">
    <input v-model="result" :style="`font-size: ${fontSize}px`" class="result" disabled readonly>
  </div>
</template>

<script>
export default {
  name: "Display",
  data() {
    return {
      fontSize: 40
    }
  },
  methods: {
    adjustFontSize() {
      if (this.fontSize > 20) {
        const w = document.querySelector(".display").clientWidth
        const el = document.querySelector(".result")
        if (el.scrollWidth >= w) {
          this.fontSize -= 4
        }
      }
    },
  },
  computed: {
    result() {
      return this.$store.state.currNum
    },
  },
  watch: {
    result: {
      immediate: true,
      handler(value) {
        if (value.length === 1) {
          this.fontSize = 40
          return
        }
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