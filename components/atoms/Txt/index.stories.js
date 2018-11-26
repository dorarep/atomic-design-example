import { storiesOf } from '@storybook/vue'
import Txt from './index.vue'

storiesOf('Txt', module)
  .add('テキスト - S', () => ({
    components: { Txt },
    template: '<txt s>テキストを表示</txt>'
  }))
  .add('テキスト - M', () => ({
    components: { Txt },
    template: '<txt m>テキストを表示</txt>'
  }))
  .add('テキスト - L', () => ({
    components: { Txt },
    template: '<txt l>テキストを表示</txt>'
  }))
  .add('情報テキスト', () => ({
    components: { Txt },
    template: '<txt info>テキストを表示</txt>'
  }))
  .add('警告テキスト', () => ({
    components: { Txt },
    template: '<txt warning>テキストを表示</txt>'
  }))

