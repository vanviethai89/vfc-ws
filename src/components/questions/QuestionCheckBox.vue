<template>
    <v-container>
        <h1 class="text-h4 text-center my-5">{{heading}}</h1>
        <div v-if="answerMode">
            <v-card
                    v-for="(question, index ) in questions"
                    outlined
                    class="mx-auto my-5"
                    max-width="800"
            >
                <v-card-title>{{index + 1}}. {{question.question}}</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="6" xs="12" v-for="answer in answers">
                            <v-checkbox
                                    v-model="answerQuestions[index][answer.key]"
                                    :value="answer.value"
                                    :label="answer.answer"
                            ></v-checkbox>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>

            <div style="text-align: center;" class="my-5">
                <v-btn color="primary" @click="showResult">Hoàn thành</v-btn>
            </div>
        </div>

        <div v-if="resultMode">
            <div id="area-for-printing">
                <v-card
                        outlined
                        class="mx-auto my-5"
                        max-width="800"
                >
                    <v-card-text>
<!--                        <p v-for="(question, index) in questions">-->
<!--                            <strong>{{index + 1}}. {{ question.question }}<br /> <span class="green&#45;&#45;text">{{answerQuestions[index] !== undefined ? getAnswerLabel(answerQuestions[index]) : '-'}}</span></strong>-->
<!--                        </p>-->
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                <tr>
                                    <th class="text-left">
                                        Cha mẹ hoặc cha mẹ kế của tôi có...
                                    </th>
                                    <th class="text-center" v-for="answer in answers">
                                        {{ answer.answer }}
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr
                                        v-for="(question, index) in questions"
                                        :key="index"
                                >
                                    <td>
                                        {{ question.question }}
                                    </td>
                                    <td class="text-center" v-for="answer in answers">
                                        <v-icon
                                                v-if="answerQuestions[index][answer.key] === 1"
                                                small
                                                color="green"
                                        >
                                            mdi-check-bold
                                        </v-icon>
                                    </td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </div>

            <div style="text-align: center;" class="my-5">
                <v-btn @click="resetResult" class="mt-5">Làm lại</v-btn>
                <v-btn color="primary" @click="printResult" :loading="printerProcessing" class="ml-2 mt-5">Lưu kết quả dưới dạng hình ảnh</v-btn>
            </div>
        </div>
    </v-container>
</template>

<script>
  import html2canvas from 'html2canvas';
  export default {
    name: 'QuestionCheckBox',
    props: {
      heading: {type: String, default: ''},
      questions: {type: Array, default: () => []},
      answers: {type: Array, default: () => []},
    },
    data() {
      return {
        answerQuestions: [],
        answerMode: true,
        resultMode: false,
        printerProcessing: false,
      }
    },
    computed: {

    },
    created () {
        this.resetResult();
    },
    methods: {
      showResult() {
        this.resultMode = true;
        this.answerMode = false;
      },
      getAnswerLabel(value) {
        const answer = this.answers.find(answer => answer.value == value);

        if (answer === -1) {
          return '';
        }

        return answer.answer;
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
          a.download = `result-${Date.now()}.jpg`;
          a.click();

          this.printerProcessing = false;
        });
      },
      resetResult() {
        this.resultMode = false;
        this.answerMode = true;

        this.answerQuestions = this.questions.map(() => {
          const answerQuestion = {};
          this.answers.forEach(answer => {
            answerQuestion[answer.key] = null;
          });

          return answerQuestion;
        });
      }
    }
  }
</script>

<style scoped>

</style>
