<template>
    <QuestionCheckBox :questions="questions" :answers="answers" :heading="heading"></QuestionCheckBox>
</template>

<script>
  import QuestionData from '@/questions/moi-quan-he-giua-toi-voi-bo-me.js';
  import QuestionCheckBox from '@/components/questions/QuestionCheckBox.vue';

  export default {
    name: 'QuestionMoiQuanHeGiuaToiVaBoMe',
    components: {
      QuestionCheckBox
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
