<template>
  <div class="content">
    {{data}}
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineComponent } from "vue";
const data=ref('roleManagement')
</script>
<style lang="scss" scoped>
</style>
<script lang="ts">
export default {
  name: "roleManagement"
}
</script>
