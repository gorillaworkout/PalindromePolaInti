function checkPalindrome (kata) {
    console.log(kata)
    return kata == kata.split('').reverse().join('');
  }

  console.log(checkPalindrome('hannah'))