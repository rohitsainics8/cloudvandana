function reverseWordsInSentence(sentence) {
  // Split the sentence into words
  const words = sentence.split(' ');

  // Reverse each word and store them in a new array
  const reversedWords = words.map(word => {
    // Use split('') to split the word into an array of characters,
    // reverse it with reverse(), and then join it back into a word.
    return word.split('').reverse().join('');
  });

  // Join the reversed words back into a sentence
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);

console.log(reversedSentence); // This si a ynnus yad
