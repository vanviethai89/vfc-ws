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
                        <v-col cols="12" sm="2" xs="12">
                            <strong>Bạn:</strong>
                        </v-col>
                        <v-col cols="12" sm="10" xs="12">
                            <v-slider
                                    v-model="answerQuestions[index].self"
                                    thumb-label="always"
                                    thumb-size="20"
                                    min="1"
                                    max="5"
                                    track-fill-color="primary"
                                    track-color="primary"
                            >
                                <template v-slot:prepend>
                                    <span :class="{'green--text': answerQuestions[index].self < 3, 'grey--text': answerQuestions[index].self >= 3}">{{question.answerRange.from}}</span>
                                </template>

                                <template v-slot:append>
                                    <span :class="{'green--text': answerQuestions[index].self > 3, 'grey--text': answerQuestions[index].self <= 3}">{{question.answerRange.to}}</span>
                                </template>

                                <template v-slot:thumb-label="{ value }">
                                    +{{ Math.abs(value - 3) }}
                                </template>
                            </v-slider>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="2" xs="12">
                            <strong>Người phối ngẫu:</strong>
                        </v-col>
                        <v-col cols="12" sm="10" xs="12">
                            <v-slider
                                    v-model="answerQuestions[index].partner"
                                    thumb-label="always"
                                    thumb-size="20"
                                    min="1"
                                    max="5"
                                    track-fill-color="primary"
                                    track-color="primary"
                                    ticks
                            >
                                <template v-slot:prepend>
                                    <span :class="{'green--text': answerQuestions[index].partner < 3, 'grey--text': answerQuestions[index].partner >= 3}">{{question.answerRange.from}}</span>
                                </template>

                                <template v-slot:append>
                                    <span :class="{'green--text': answerQuestions[index].partner > 3, 'grey--text': answerQuestions[index].partner <= 3}">{{question.answerRange.to}}</span>
                                </template>

                                <template v-slot:thumb-label="{ value }">
                                    +{{ Math.abs(value - 3) }}
                                </template>
                            </v-slider>
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
                        <p v-for="(question, index) in questions">
                            <strong class="text-h6">{{index + 1}}. {{ question.question }}</strong><br />
                            <strong>Bạn:</strong>  <strong class="green--text">{{ customDisplayResult(question, answerQuestions[index].self) }}</strong><br />
                            <strong>Người phối ngẫu:</strong> <strong class="green--text">{{ customDisplayResult(question, answerQuestions[index].partner) }}</strong><br />
                        </p>
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
    name: 'QuestionRange',
    props: {
      heading: {type: String, default: ''},
      questions: {type: Array, default: () => []},
    },
    data() {
      return {
        answerQuestions: [],
        answerMode: true,
        resultMode: false,
        printerProcessing: false,
      }
    },
    created () {
      this.resetResult();
    },
    methods: {
      showResult() {
        this.resultMode = true;
        this.answerMode = false;
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
          return {
            self: 3,
            partner: 3
          };
        });
      },
      customDisplayResult(question, answerResult) {
        switch (answerResult) {
          case 1:
            return `Rất "${question.answerRange.from}"`;
          case 2:
            return `${question.answerRange.from}`;
          case 3:
            return `Cân bằng giữa "${question.answerRange.from}" & "${question.answerRange.to}"`;
          case 4:
            return `${question.answerRange.to}`;
          case 5:
            return `Rất "${question.answerRange.to}"`;
        }
      }
    }
  }
</script>

<style scoped>

</style>
