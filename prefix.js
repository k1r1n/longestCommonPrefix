const longestCommonPrefix = (wordList) => {
    if (!wordList.length) {
      return "";
    }
    if (wordList.length < 1 || wordList.length > 200) {
      throw new Error("Input array length must be between 1 and 200");
    }
  
    for (const word of wordList) {
      if (word.length < 0 || word.length > 200) {
        throw new Error("Individual string length must be between 0 and 200");
      }
    }
  
    let prefix = "";
    for (let index = 0; index < wordList[0].length; index++) {
      const character = wordList[0][index];
  
      if (wordList.every(str => str.charAt(index) === character)) {
        prefix += character;
      } else {
        break;
      }
    }
  
    return prefix;
  }

  
const wordList = ["flower","flow","foight"]
const prefix = longestCommonPrefix(wordList);

console.log(prefix); // Output: "fl"