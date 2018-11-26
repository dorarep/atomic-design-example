<template lang="pug">
  p(:class="{ default: isDefault, info: info, warning: warning, l: l, m: isM, s: s }")
    slot
</template>

<script>
  export default {
    props: {
      l: {
        type: Boolean,
        default: false
      },
      s: {
        type: Boolean,
        default: false
      },
      info: {
        type: Boolean,
        default: false
      },
      warning: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isDefault () {
        return !this.info && !this.warning
      },
      isM () {
        return !this.s && !this.l
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .default
    color #000
  .info
    color #8C8C8C
  .warning
    color #f0163a
  .s
    font-size .8rem
  .m
    font-size 1rem
  .l
    font-size 1.2rem
</style>
