<template lang="pug">
  component(:is="iconTag" :class="{ clickable }")
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
    },
    computed: {
      iconTag() {
        if (this.trash) {
          return 'trash-can'
        }
        return 'div'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .clickable
    cursor pointer
</style>
