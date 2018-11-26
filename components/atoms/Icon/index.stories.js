import { storiesOf } from '@storybook/vue'
import Icon from './index.vue'

storiesOf('Icon', module)
  .add('デフォルト', () => ({
    components: { Icon },
    template: '<icon trash clickable @click.native.down="action" />',
    methods: { action: () => console.log('clicked') }
  }))
