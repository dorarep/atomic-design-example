import { storiesOf } from '@storybook/vue'
import UnixTime from './index.vue'

storiesOf('UnixTime', module)
  .add('デフォルト', () => ({
    components: { UnixTime },
    template: '<unix-time>1507032000000</unix-time>'
  }))
  .add('HH:mm', () => ({
    components: { UnixTime },
    template: '<unix-time format="HH:mm">1507032000000</unix-time>'
  }))
  .add('無効な時間表現', () => ({
    components: { UnixTime },
    template: '<unix-time>無効な時間表現</unix-time>'
  }))
