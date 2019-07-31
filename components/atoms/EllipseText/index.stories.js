import { storiesOf } from '@storybook/vue'
import EllipseText from './index.vue'

storiesOf('EllipseText', module)
  .add('はみ出る', () => ({
    components: { EllipseText },
    template: '<ellipse-text style="width: 100px; height: 120px" text="あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお" />'
  }))
  .add('はみ出ない', () => ({
    components: { EllipseText },
    template: '<ellipse-text style="width: 100px; height: 90px" text="あいうえお" />'
  }))
