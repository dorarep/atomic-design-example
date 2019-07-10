<template lang="pug">
  section.root
    my-img.media(:src="program.thumbnail" width="128" height="72")
    .body
      heading(:level="3" :visualLevel="6") {{ program.title }}
      txt(info s) {{ program.channelName }}
      txt(info s).time
        unix-time(format="MM月DD日(ddd)HH:mm" :value="program.startAt")
        template 〜
        unix-time(format="HH:mm" :value="program.endAt")
      delete-button(@click.native.down="onClickDelete")
</template>

<script>
  import MyImg        from '@/components/atoms/MyImg'
  import Heading      from '@/components/atoms/Heading'
  import Txt          from '@/components/atoms/Txt'
  import UnixTime     from '@/components/atoms/UnixTime'
  import DeleteButton from '@/components/molecules/DeleteButton'

  export default {
    props: {
      program: Object,
      onClickDelete: Function
    },
    components: { MyImg, Heading, Txt, UnixTime, DeleteButton }
  }
</script>

<style lang="stylus" scoped>
  .root
    display flex
    padding 1rem
    position relative
  .body
    flex 1
    min-width 0
  .media
    padding-right 1rem
  .time
    margin-top .5rem
  .del
    display none !important
    position absolute !important
    right 1.5rem !important
    top 50% !important
    transform translateY(-50%) !important
  .root:hover .del
    display inline-block !important
</style>
