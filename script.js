function letterCombinations(digits) {
  //Complete the function

	 if (!digits || digits.length === 0) return [];

  const phoneMap = {
    "0": "0",
    "1": "1",
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };

  let result = [];

  function backtrack(index, path) {
    if (index === digits.length) {
      result.push(path);
      return;
    }

    const possibleLetters = phoneMap[digits[index]];
    for (let char of possibleLetters) {
      backtrack(index + 1, path + char);
    }
  }

  backtrack(0, "");

  // Sort results lexicographically
  return result.sort();
		
	
}

module.exports = letterCombinations;
