<template>
  <div class="content">
    {{data}}
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineComponent } from "vue";
const data=ref('userList')
</script>
<style lang="scss" scoped>
</style>
<script lang="ts">
export default {
  name: "userList"
}
</script>
