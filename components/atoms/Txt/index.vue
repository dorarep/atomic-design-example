<template lang="pug">
  p(:class="{ normal, info, warning, l, m, s }")
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
      normal () {
        return !this.info && !this.warning
      },
      m () {
        return !this.s && !this.l
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .normal
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
