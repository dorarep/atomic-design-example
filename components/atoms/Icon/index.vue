<template lang="pug">
  trash-can(v-if="trash" :class="{ clickable: clickable }")
  span(v-else)
</template>

<script>
  import TrashCan from '@/assets/trash-can.svg'

  export default {
    components: { TrashCan },
    props: {
      trash: {
        type: Boolean,
        default: false
      },
      clickable: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .clickable
    cursor pointer
</style>
