import { storiesOf } from '@storybook/vue'
import Notification from './index.vue'

const notification = {
  id: 0,
  thumbnail: 'assets/system.png',
  title: 'コンポーネント指向で UI を設計しよう！第1話',
  channelName: 'UI チャンネル',
  startAt: 1507032000000,
  endAt: 1507035600000
}

storiesOf('Notification', module)
  .add('デフォルト', () => ({
    components: { Notification },
    data () {
      return { notification: notification }
    },
    template: '<notification :program="notification" :onClickDelete="onClickDelete" />',
    methods: { onClickDelete: () => console.log('click') }
  }))
