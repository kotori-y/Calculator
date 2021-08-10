<template>
  <div class="calculator">
    <Display/>
    <FunctionBtn/>
    <NumberBtn/>
    <OperatorBtn/>
  </div>
</template>

<script>
import Display from "@/components/Display";
import FunctionBtn from "@/components/FunctionBtn";
import NumberBtn from "@/components/NumberBtn";
import OperatorBtn from "@/components/OperatorBtn";
export default {
  name: "Calculator",
  components: {OperatorBtn, NumberBtn, FunctionBtn, Display}
}
</script>

<style>
</style>