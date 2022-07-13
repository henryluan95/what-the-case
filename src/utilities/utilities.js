//Create a function to format camelCase
export const camelCase = (text) => {
  //When there are line breaks
  if (text.includes("\n")) {
    const sentenceArray = text.split("\n");
    const sentences = [];
    for (const sentence of sentenceArray) {
      const wordsArray = sentence.split(" ");
      const formattedWordsArray = wordsArray.map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        } else {
          const firstLetter = word.slice(0, 1);
          return firstLetter.toUpperCase() + word.slice(1);
        }
      });
      sentences.push(formattedWordsArray.join(""));
    }
    return sentences.join("\n");
  }

  //When there is no line break
  const sentenceArray = text.split(". ");
  const sentences = [];
  for (const sentence of sentenceArray) {
    const wordsArray = sentence.split(" ");
    const formattedWordsArray = wordsArray.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        const firstLetter = word.slice(0, 1);
        return firstLetter.toUpperCase() + word.slice(1);
      }
    });
    sentences.push(formattedWordsArray.join(""));
  }
  return sentences.join(". ");
};

//Create a function to format Pascal Case
export const pascalCase = (text) => {
  //When there are line breaks
  if (text.includes("\n")) {
    const sentenceArray = text.split("\n");
    const sentences = [];
    for (const sentence of sentenceArray) {
      const wordsArray = sentence.split(" ");
      const formattedWordsArray = wordsArray.map((word, index) => {
        const firstLetter = word.slice(0, 1);
        return firstLetter.toUpperCase() + word.slice(1);
      });
      sentences.push(formattedWordsArray.join(""));
    }
    return sentences.join("\n");
  }

  //When there is no line break
  const sentenceArray = text.split(". ");
  const sentences = [];
  for (const sentence of sentenceArray) {
    const wordsArray = sentence.split(" ");
    const formattedWordsArray = wordsArray.map((word, index) => {
      const firstLetter = word.slice(0, 1);
      return firstLetter.toUpperCase() + word.slice(1);
    });
    sentences.push(formattedWordsArray.join(""));
  }
  return sentences.join(". ");
};

//Create a function to format Train-Case
export const trainCase = (text) => {
  //When there are line breaks
  if (text.includes("\n")) {
    const sentenceArray = text.split("\n");
    const sentences = [];
    for (const sentence of sentenceArray) {
      const wordsArray = sentence.split(" ");
      const formattedWordsArray = wordsArray.map((word, index) => {
        const firstLetter = word.slice(0, 1);
        return firstLetter.toUpperCase() + word.slice(1);
      });
      sentences.push(formattedWordsArray.join("-"));
    }
    return sentences.join("\n");
  }

  //When there is no line break
  const sentenceArray = text.split(". ");
  const sentences = [];
  for (const sentence of sentenceArray) {
    const wordsArray = sentence.split(" ");
    const formattedWordsArray = wordsArray.map((word, index) => {
      const firstLetter = word.slice(0, 1);
      return firstLetter.toUpperCase() + word.slice(1);
    });
    sentences.push(formattedWordsArray.join("-"));
  }
  return sentences.join(". ");
};

//Create a function to format kebab case
export const kebabCase = (text) => {
  const sentenceArray = text.split("\n");
  const sentences = [];
  for (const sentence of sentenceArray) {
    const wordsArray = sentence.split(" ");
    const formattedWordsArray = wordsArray.map((word) => word.toLowerCase());
    sentences.push(formattedWordsArray.join("-"));
  }
  return sentences.join("\n");
};

//Create a function to format snake_case
export const snakeCase = (text) => {
  const sentenceArray = text.split("\n");
  const sentences = [];
  for (const sentence of sentenceArray) {
    const wordsArray = sentence.split(" ");
    const formattedWordsArray = wordsArray.map((word) => word.toLowerCase());
    sentences.push(formattedWordsArray.join("_"));
  }
  return sentences.join("\n");
};

//Create a function to format screaming snake_case
export const screamingSnakeCase = (text) => {
  const formattedString = text.replace(/[,.]/g, "");
  const wordsArray = formattedString.split(" ");
  const formattedWordsArray = wordsArray.map((word, index) =>
    word.toUpperCase()
  );
  return formattedWordsArray.join("_");
};

//Create a function to track number of word
export const countWord = (text) => {
  if (text.length === 0) {
    return 0;
  } else {
    const textArray = text.match(/(\w+)/g);
    if (textArray === null) {
      return 0;
    }
    return textArray.length;
  }
};

//Create a function to track line break
export const countLineBreak = (text) => {
  return (text.match(/\n/g) || []).length;
};
