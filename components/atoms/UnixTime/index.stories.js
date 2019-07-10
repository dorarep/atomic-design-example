import { storiesOf } from '@storybook/vue'
import UnixTime from './index.vue'

storiesOf('UnixTime', module)
  .add('デフォルト', () => ({
    components: { UnixTime },
    template: '<unix-time value="1507032000000"/>'
  }))
  .add('HH:mm', () => ({
    components: { UnixTime },
    template: '<unix-time format="HH:mm" value="1507032000000"/>'
  }))
  .add('無効な時間表現', () => ({
    components: { UnixTime },
    template: '<unix-time value="無効な時間表現"/>'
  }))
