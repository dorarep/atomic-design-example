<template lang="pug">
  component(:is="tag" :class="className")
    slot
</template>

<script>
  export default {
    props: {
      level: {
        type: Number,
        default: 2
      },
      visualLevel: {
        type: Number
      },
      underlined: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      tag () {
        return `h${Math.max(0, Math.min(6, this.level))}`
      },
      className () {
        const visualLevel = this.visualLevel || this.level
        const classes = ['h', `h${Math.max(0, Math.min(6, visualLevel))}`]

        if (this.underlined) {
          classes.push('underlined')
        }

        return classes.join(' ')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .h
    font-weight 700
    line-height 1.5
  .h1
    font-size 2.0rem
  .h2
    font-size 1.8rem
  .h3
    font-size 1.6rem
  .h4
    font-size 1.4rem
  .h5
    font-size 1.2rem
  .h6
    font-size 1.0rem
  .underlined
    text-decoration underline
</style>
