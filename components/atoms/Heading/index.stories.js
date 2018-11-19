import { storiesOf } from '@storybook/vue'
import Heading from './index.vue'

storiesOf('Heading', module)
  .add('デフォルト', () => ({
    components: { Heading },
    template: '<heading>見出し</heading>'
  }))
  .add('レベル1', () => ({
    components: { Heading },
    template: '<heading :level="1">見出しレベル1</heading>'
  }))
  .add('レベル1、見た目2', () => ({
    components: { Heading },
    template: '<heading :level="1" :visualLevel="2">見出しレベル1、見た目2</heading>'
  }))
  .add('レベル2', () => ({
    components: { Heading },
    template: '<heading :level="2">見出しレベル2</heading>'
  }))
  .add('レベル3', () => ({
    components: { Heading },
    template: '<heading :level="3">見出しレベル3</heading>'
  }))
  .add('レベル4', () => ({
    components: { Heading },
    template: '<heading :level="4">見出しレベル4</heading>'
  }))
  .add('レベル5', () => ({
    components: { Heading },
    template: '<heading :level="5">見出しレベル5</heading>'
  }))
  .add('レベル6', () => ({
    components: { Heading },
    template: '<heading :level="6">見出しレベル6</heading>'
  }))
  .add('Underlined', () => ({
    components: { Heading },
    template: '<heading underlined>下線付き</heading>'
  }))
