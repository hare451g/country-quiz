import randomizer from '../../utils/randomizer';

const createChoices = (data) =>
  ['A', 'B', 'C', 'D'].map((label) => ({
    ...data.filter(({ name }) => !!name)[randomizer(data.length - 1)],
    label,
  }));

const getQuestionedCountry = (data) => data[randomizer(data.length - 1)];

const capitalQuestion = (country) => ({
  question: `${country.capital} is the capital of`,
  flag: null,
});

const flagQuestion = (country) => ({
  question: 'Which country does this flag belong to?',
  flag: country.flag,
});

const createQuestions = (countryData, maxQuestion = 10) =>
  [...Array(maxQuestion)]
    // then create question
    .reduce((previous, _) => {
      const choices = createChoices(countryData);
      const questionedCountry = getQuestionedCountry(choices);
      // shuffle questions randomly
      const currentQuestion =
        randomizer(2) === 2
          ? capitalQuestion(questionedCountry)
          : flagQuestion(questionedCountry);
      // merge with last questions
      return [
        ...previous,
        {
          ...currentQuestion,
          correctAnswer: questionedCountry.name,
          userAnswer: null,
          choices,
        },
      ];
    }, []);

const questionUtils = {
  createChoices,
  getQuestionedCountry,
  capitalQuestion,
  flagQuestion,
  createQuestions,
};

export default questionUtils;
