<template>
  <div class="numbers">
    <div v-for="number in numbers" :key="number" :class="{number: true, zero: number===0}"
         @mousedown="clickNumber($event)" @mouseup="releaseNumber($event)" @mouseleave="releaseNumber($event)">{{ number }}
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberBtn",
  data() {
    return {
      numbers: [
        7, 8, 9,
        4, 5, 6,
        1, 2, 3,
        0, "."
      ]
    }
  },
  methods: {
    clickNumber($event) {
      const el = $event.currentTarget
      el.classList.add("active")
    },
    releaseNumber($event) {
      const el = $event.currentTarget
      if (el.classList.contains("active")) {
        const num = $event.key || el.innerHTML.trim()
        this.addNumber(num)
        el.classList.remove("active")
      }
    },
    addNumber(num) {
      if (num === ".") {
        this.$store.dispatch("addFloat", {num: num})
      } else {
        this.$store.dispatch("addNum", {num: num})
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", $event => {
      const key = $event.key
      if (!isNaN(parseFloat(key)) || key === ".") {
        this.addNumber(key)
        return;
      }
      if (key==="Backspace") {
        this.$store.dispatch("backspaceNum")
      }
    })
  }

}
</script>

<style scoped>
.numbers {
  position: absolute;
  top: 40%;
  left: 0;
  display: grid;
  background-color: rgb(127, 128, 128);
  width: 75%;
  height: 60%;
  justify-content: space-around;
  align-items: center;
  font-size: 22px;
  color: #FFFFFF;
  grid-template-columns: repeat(3, 1fr);
}

.number {
  border: #525555 1px solid;
  height: 100%;
  align-items: center;
  text-align: center;
  border-left: none;
  border-bottom: none;
  display: grid;
  user-select: none;
}

.zero {
  grid-column: 1 / 3;
}

.number.active {
  background-color: #a5a5a5;
}

</style>