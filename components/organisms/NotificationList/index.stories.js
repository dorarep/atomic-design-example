import { storiesOf } from '@storybook/vue'
import NotificationList from './index.vue'

const programs = [{
  id: 0,
  thumbnail: 'assets/system.png',
  title: 'コンポーネント指向で UI を設計しよう！第1話',
  channelName: 'UI チャンネル',
  startAt: 1507032000000,
  endAt: 1507035600000
},{
  id: 1,
  thumbnail: 'assets/system.png',
  title: 'コンポーネント指向で UI を設計しよう！第2話',
  channelName: 'UI チャンネル',
  startAt: 1507032000000,
  endAt: 1507035600000
},{
  id: 2,
  thumbnail: 'assets/system.png',
  title: 'コンポーネント指向で UI を設計しよう！第3話',
  channelName: 'UI チャンネル',
  startAt: 1507032000000,
  endAt: 1507035600000
}]

storiesOf('NotificationList', module)
  .add('デフォルト', () => ({
    components: { NotificationList },
    data () {
      return { programs: programs }
    },
    template: '<notification-list :programs="programs" :onClickDelete="onClickDelete" />',
    methods: { onClickDelete: () => console.log('click') }
  }))
