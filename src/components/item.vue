<template>
  <li class="item" ref="item">
    <div class="item__wrapper">
      <div class="item__info">
        <img :src="data.avatar" class="item__avatar" />
        <p class="item__name">{{ index }}. {{ data.name }}</p>
        <p class="item__date">{{ data.dob }}</p>
      </div>
      <p class="item__text">E-mail: {{ data.email }}</p>
      <p class="item__text">Phone: {{ data.phone }}</p>
      <p class="item__text">City: {{ data.address.city }}</p>
      <p class="item__text">Street: {{ data.address.street }}</p>
    </div>
  </li>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'item',
  props: {
    index: {
      type: Number,  // 元素的下标
      default: 0
    },
    data: {
      type: Object,
      dafalut: () => ({})
    }
  },
  setup: () => {
    // const count = ref(0)
    // return { count }
  }
})
</script>

<style scoped lang="scss">
  .item {
    height: 180px;
  }
</style>
