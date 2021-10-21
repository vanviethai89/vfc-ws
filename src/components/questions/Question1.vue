<template>
    <v-container>
        <div v-if="answerMode">
            <v-card
                    v-for="(question, index ) in questions"
                    outlined
                    class="mx-auto my-5"
                    max-width="800"
            >
                <v-card-title>{{index + 1}}. {{question.question}}</v-card-title>
                <v-card-text>
                    <v-radio-group v-model="question.result">
                        <v-row>
                            <v-col cols="12" sm="6" xs="12" v-for="answer in answers">
                                <v-radio
                                        :label="answer.answer"
                                        :value="answer.score"
                                ></v-radio>
                            </v-col>
                        </v-row>
                    </v-radio-group>
                </v-card-text>
            </v-card>

            <div style="text-align: center;" class="my-5">
                <v-btn color="primary" @click="calculateScore">Tính điểm</v-btn>
            </div>
        </div>

        <div v-if="resultMode">
            <div id="area-for-printing">
                <v-card class="mx-auto my-5" max-width="800" outlined>
                    <v-card-title class="text-center green--text">Tổng điểm: {{ overallScore }}</v-card-title>
                </v-card>
                <v-card
                        v-for="(question, index ) in questions"
                        outlined
                        class="mx-auto my-5"
                        max-width="800"
                >
                    <v-card-title>{{index + 1}}. {{question.question}}</v-card-title>
                    <v-card-text>
                        <strong>Câu trả lời: <span class="green--text">{{ question.result !== '' ? answers[question.result]['answer'] : '-' }}</span></strong>
                    </v-card-text>
                </v-card>
            </div>

            <div style="text-align: center;" class="my-5">
                <v-btn @click="backToEdit" class="mt-5">Sửa lại câu trả lời</v-btn>
                <v-btn color="primary" @click="printResult" :loading="printerProcessing" class="ml-2 mt-5">Lưu kết quả dưới dạng hình ảnh</v-btn>
            </div>
        </div>
    </v-container>
</template>

<script>
    import html2canvas from 'html2canvas';
  export default {
    name: 'Question1',
    data() {
      return {
        answerMode: true,
        resultMode: false,
        printerProcessing: false,
        questions: [
          {
            question: 'Chúng tôi hết lòng quan tâm đến nhau',
            result: '',
          },
          {
            question: 'Chúng tôi hiểu và ủng hộ niềm tin và giá trị của nhau',
            result: '',
          },
          {
            question: 'Chúng tôi bày tỏ tình yêu thương...',
            result: '',
          },
          {
            question: 'Chúng tôi có thể xin lỗi...',
            result: '',
          },
          {
            question: 'Chúng tôi lắng nghe quan điểm',
            result: '',
          },

        ],
        answers: [
          {
            answer: 'Không bao giờ đúng',
            score: 0
          },
          {
            answer: 'Hiếm khi đúng',
            score: 1
          },
          {
            answer: 'Thỉnh thoảng đúng',
            score: 2
          },
          {
            answer: 'Thường xuyên đúng',
            score: 3
          },
          {
            answer: 'Luôn luôn đúng',
            score: 4
          }
        ],
      }
    },
    computed: {
      overallScore() {
        return this.questions.reduce((previousValue, item) => previousValue + Number(item.result), 0);
      }
    },
    methods: {
      calculateScore() {
        this.resultMode = true;
        this.answerMode = false;
      },
      backToEdit() {
        this.resultMode = false;
        this.answerMode = true;
        this.$vuetify.goTo(0);
      },
      printResult() {
        this.printerProcessing = true;
        html2canvas(document.querySelector("#area-for-printing")).then(canvas => {
          var a = document.createElement('a');

          a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
          a.download = 'ket-qua.jpg';
          a.click();

          this.printerProcessing = false;
        });
      }
    }
  }
</script>

<style scoped>

</style>
