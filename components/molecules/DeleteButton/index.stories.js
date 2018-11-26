import { storiesOf } from '@storybook/vue'
import DeleteButton from './index.vue'

storiesOf('DeleteButton', module)
  .add('デフォルト', () => ({
    components: { DeleteButton },
    template: '<delete-button :style="{ \'margin-top\': \'50px\' }"/>'
  }))
