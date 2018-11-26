<template lang="pug">
  span.root
    icon(trash)
    balloon 削除する
</template>

<script>
  import Icon from '@/components/atoms/Icon'
  import Balloon from '@/components/atoms/Balloon'

  export default {
    components: { Icon, Balloon }
  }
</script>

<style lang="stylus" scoped>
  .root
    display inline-block
    position relative
  .root > *:first-child + *
    display none
    poisiton absolute
    top 0
    transform translate(-50%, -100%) translateY(-12px)
    white-space nowrap
  .root > *:first-child:hover + *
    display inline-block
</style>
