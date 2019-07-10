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
      },
      value: {
        type: String,
        required: true
      }
    },
    computed: {
      intValue () {
        return parseInt(this.value, 10)
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
