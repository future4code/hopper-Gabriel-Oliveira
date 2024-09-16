export const stringCompression = (input: any) => {
  const substring = [];
  let lastChar = input[0];
  let charCount = 0;

  for (const char of input) {
    if (char != lastChar) {
      substring.push(lastChar + charCount);
      lastChar = char;
      charCount = 0;
    }
    charCount++;
  }

  substring.push(lastChar + charCount);
  let result = "";
  for (const key of substring) {
    result += key;
  }

  return result.length > input.length ? input : result;
};
console.log(stringCompression("aaabbbbccrrrrrrfff"));
