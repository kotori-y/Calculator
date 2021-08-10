<template>
  <div class="functions">
    <div v-for="(btn, index) in buttons" :key="index" class="function" @mousedown="clickFunc($event)"
         @mouseup="doFunc($event)" @mouseleave="doFunc($event)">{{ btn }}
    </div>
  </div>
</template>

<script>
export default {
  name: "FunctionBtn",
  data() {
    return {
      buttons: ["AC", "+/-", "%"]
    }
  },
  methods: {
    clickFunc($event) {
      const el = $event.currentTarget
      el.classList.add("active")
    },
    doFunc($event){
      const el = $event.currentTarget
      if (el.classList.contains("active")) {
        el.classList.remove("active")
      }
    }
  }
}
</script>

<style>

.functions {
  position: absolute;
  top: 25%;
  left: 0;
  display: grid;
  background-color: rgb(101, 102, 103);
  width: 75%;
  height: 15%;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  color: #FFFFFF;
  grid-template-columns: repeat(3, 1fr);
}

.function {
  border: #525555 1px solid;
  height: 100%;
  align-items: center;
  text-align: center;
  border-top: none;
  border-left: none;
  display: grid;
  user-select: none;
}

.function.active {
  background-color: rgb(127, 128, 128);
}

</style>