import { storiesOf } from '@storybook/vue'
import MyImg from './index.vue'

storiesOf('MyImg', module)
  .add('デフォルト', () => ({
    components: { MyImg },
    template: '<my-img src="assets/system.png" width="100%" height="100%" />'
  }))
