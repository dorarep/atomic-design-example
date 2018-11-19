import { storiesOf } from '@storybook/vue'
import Balloon from '~/components/atoms/Balloon.vue'

storiesOf('Atoms', module)
  .add('Balloon', () => ({
    components: { Balloon },
    template: `<Balloon />`
  }))
