<template>
  <div v-if="answers.length < quizz.questions.length">
    <p>{{ quizz.title }}</p>
    <p>La question : {{ quizz.questions[currentIndex].title }}</p>
    <p
      @click="submitAnswer(quizz.questions[currentIndex].answers[0].isCorrect)"
    >
      {{ quizz.questions[currentIndex].answers[0].title }}
    </p>
    <p
      @click="submitAnswer(quizz.questions[currentIndex].answers[1].isCorrect)"
    >
      {{ quizz.questions[currentIndex].answers[1].title }}
    </p>
    <p
      @click="submitAnswer(quizz.questions[currentIndex].answers[2].isCorrect)"
    >
      {{ quizz.questions[currentIndex].answers[2].title }}
    </p>
    <p
      @click="submitAnswer(quizz.questions[currentIndex].answers[3].isCorrect)"
    >
      {{ quizz.questions[currentIndex].answers[3].title }}
    </p>
  </div>
  <div v-else>
    <p @click="finishQuizz">CALCULER LE SCORE</p>
    <p>Score : {{ finalScore }}/{{ quizz.questions.length }}</p>
    <p @click="resetQuizz">Recommencer</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      finalScore: 0,
      currentIndex: 0,
      answers: [],
      test: "HI",
      quizz: {
        title: "Voici le quizz de SWAPI",
        questions: [
          {
            title: "Comment ",
            answers: [
              {
                title: "La reponse A",
                isCorrect: true,
              },
              {
                title: "La reponse B",
                isCorrect: false,
              },
              {
                title: "La reponse C",
                isCorrect: false,
              },
              {
                title: "La reponse D",
                isCorrect: false,
              },
            ],
          },
          {
            title: "Quoi ",
            answers: [
              {
                title: "La reponse E",
                isCorrect: false,
              },
              {
                title: "La reponse F",
                isCorrect: true,
              },
              {
                title: "La reponse G",
                isCorrect: false,
              },
              {
                title: "La reponse H",
                isCorrect: false,
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    submitAnswer(isCorrect) {
      this.answers.push(isCorrect);
      console.log(this.answers);
      this.currentIndex++;
    },
    finishQuizz() {
      this.answers.forEach((el) => {
        if (el === true) {
          this.finalScore++;
        }
      });
    },
    resetQuizz() {
      this.currentIndex = 0;
      this.answers = [];
      this.finalScore = 0;
    },
  },
};
</script>
