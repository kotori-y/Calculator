<template>
  <div class="display">
    <input style="-webkit-app-region: drag" class="result" v-model="result" disabled readonly>
  </div>
</template>

<script>
export default {
  name: "Display",
  data() {
    return {
      result: 0
    }
  },
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
  padding: 0;
  border-style: none;
  height: 50%;
  width: 98%;
  resize: none;
  font-size: 40px;
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