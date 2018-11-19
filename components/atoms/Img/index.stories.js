import { storiesOf } from '@storybook/vue'
import Img from './index.vue'

storiesOf('Img', module)
  .add('デフォルト', () => ({
    components: { Img },
    template: '<img src="https://avatars0.githubusercontent.com/u/3429289?s=400&u=45233370e760a560242bbd6d878d11ca93c40d72&v=4" width="100%" height="100%" />'
  }))
