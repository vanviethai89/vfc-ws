<template>
    <QuestionRadioCheck :questions="questions" :answers="answers" :heading="heading"></QuestionRadioCheck>
</template>

<script>
  import QuestionData from '@/questions/moi-quan-he-giua-bo-va-me.js';
  import QuestionRadioCheck from '@/components/questions/QuestionRadioCheck.vue';

  export default {
    name: 'QuestionMoiQuanHeGiuaBoMe',
    components: {
      QuestionRadioCheck
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
