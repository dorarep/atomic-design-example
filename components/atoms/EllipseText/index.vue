<template lang="pug">
  .wrapper
    div(ref="textArea") {{ shownText }}
</template>

<script>
  export default {
    props: {
      text: String
    },
    data: () => ({ hiddenLetters: 0 }),
    computed: {
      shownText() {
        return this.hiddenLetters > 0 ? this.text.slice(0, -this.hiddenLetters) + '...' : this.text
      }
    },
    mounted() {
      this.sliceOverflownText()
    },
    updated() {
      this.sliceOverflownText()
    },
    methods: {
      sliceOverflownText() {
        if (this.$refs.textArea.clientHeight > 90) {
          this.hiddenLetters++
        }
      }
    }
  }
</script>

<style lang="stylus">
  .wrapper
    overflow hidden
</style>
