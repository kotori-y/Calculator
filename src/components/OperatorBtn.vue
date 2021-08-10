<template>
  <div class="operators">
    <div v-for="(operator, index) in operators" :id="index" :key="index" class="operator" @mousedown="clickOp($event)"
         @mouseleave="doOp($event)" @mouseup="doOp($event)">
      {{ operator }}
    </div>
  </div>
</template>

<script>
export default {
  name: "OperatorBtn",
  data() {
    return {
      operators: ["÷", "×", "−", "+", "="]
    }
  },
  methods: {
    clickOp($event) {
      const el = $event.currentTarget
      el.classList.add("active")
    },
    removeSelect() {
      const elems = document.querySelectorAll(".operator")
      elems.forEach(elem => {
        elem.classList.remove("select")
      })
    },
    doOp($event) {
      const el = $event.currentTarget
      if (el.classList.contains("active")) {
        this.removeSelect()
        if (el.id !== "4") {
          el.classList.add("select")
        }
        el.classList.remove("active")
      }
    }
  }
}
</script>

<style scoped>
.operators {
  position: absolute;
  top: 25%;
  left: 75%;
  display: grid;
  background-color: #F39912FF;
  width: 25%;
  height: 75%;
  justify-content: space-around;
  align-items: center;
  font-size: 25px;
  color: #FFFFFF;
  grid-template-columns: repeat(1, 1fr);
}

.operator {
  height: 100%;
  align-items: center;
  text-align: center;
  border: 1px none #525555;
  border-top-style: solid;
  display: grid;
  user-select: none;
}

.operator:last-child {
  border-bottom: none;
}

.operator.active {
  background-color: #bb823b;
}

.operator.select {
  border: 1px solid #525555;
  border-top: 2px solid #525555;
  border-right: none;
}

</style>