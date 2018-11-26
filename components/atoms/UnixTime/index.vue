<template lang="pug">
  span {{ formattedValue }}
</template>

<script>
  import moment from 'moment'

  export default {
    props: {
      format: {
        type: String,
        default: 'YYYY-MM-DDTHH:mm'
      }
    },
    computed: {
      intValue () {
        if (!this.$slots.default) {
          return null
        }

        return parseInt(this.$slots.default[0].text, 10)
      },
      formattedValue () {
        if (!this.isValid(this.intValue)) {
          return '有効な時間表現ではありません。'
        }
        return moment(this.intValue).format(this.format)
      }
    },
    methods: {
      isValid (value) {
        return moment(value, 'x', true).isValid()
      }
    }
  }
</script>
