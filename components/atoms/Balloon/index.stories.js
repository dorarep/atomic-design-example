import { storiesOf } from '@storybook/vue'
import Balloon from './index.vue'

storiesOf('Balloon', module)
  .add('2文字ラベル', () => ({
    components: { Balloon },
    template: '<balloon>次へ</balloon>'
  }))
  .add('4文字ラベル', () => ({
    components: { Balloon },
    template: '<balloon>削除する</balloon>'
  }))
