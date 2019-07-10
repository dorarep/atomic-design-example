<template lang="pug">
  div
    notification.item(v-for="program in programs" :program="program" :onClickDelete="onClickDelete")
</template>

<script>
  import Notification from '@/components/organisms/Notification'

  export default {
    props: {
      programs: Array,
      onClickDelete: Function
    },
    components: { Notification }
  }
</script>

<style lang="stylus" scoped>
  .item:hover
    background-color #f6f6f6
  .item + .item
    border-top 1px solid #ddd
</style>
