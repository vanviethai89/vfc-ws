<template>
    <QuestionRange :questions="questions"></QuestionRange>
</template>

<script>
  import QuestionData from '@/questions/nhan-dien-nhung-khac-biet.js'
  import QuestionRange from '@/components/questions/QuestionRange.vue'

  export default {
    name: 'NhanDienKhacBiet',
    components: {
      QuestionRange
    },
    data() {
      return {
        ...QuestionData
      }
    }
  }
</script>

<style scoped>

</style>
