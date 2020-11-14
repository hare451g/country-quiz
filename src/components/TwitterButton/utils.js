const twitterURL = 'https://twitter.com/intent/tweet';

const createShareableURL = (points) => {
  const text = `I've got ${points} points in country quiz!`;
  const hashtags = 'DevChalllenge';
  const related = 'DevChalllenge.io';
  const url = 'https://dev-challenge-country-quiz.netlify.app/';
  const via = 'sadevva_';

  return `${twitterURL}?text=${text}&hashtags=${hashtags}&related=${related}&url=${url}&via=${via}`;
};

export { createShareableURL };
