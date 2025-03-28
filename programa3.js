const textToMorseMap = {
    'A': ".-",
    'B': "-...",
    'C': "-.-.",
    'D': "-..",
    'E': ".",
    'F': "..-.",
    'G': "--.",
    'H': "....",
    'I': "..",
    'J': ".---",
    'K': "-.-",
    'L': ".-..",
    'M': "--",
    'N': "-.",
    'O': "---",
    'P': ".--.",
    'Q': "--.-",
    'R': ".-.",
    'S': "...",
    'T': "-",
    'U': "..-",
    'V': "...-",
    'W': ".--",
    'X': "-..-",
    'Y': "-.--",
    'Z': "--..",
    '0': "-----",
    '1': ".----",
    '2': "..---",
    '3': "...--",
    '4': "....-",
    '5': ".....",
    '6': "-....",
    '7': "--...",
    '8': "---..",
    '9': "----.",
    '0': "-----"
  };
  
  const morseToTextMap = {};
  for (const key in textToMorseMap) {
    morseToTextMap[textToMorseMap[key]] = key;
  }
  
  function textToMorse(text) {
    return text
      .toUpperCase()
      .split(' ')
      .map(word =>
        word
          .split('')
          .map(letter => textToMorseMap[letter] || '')
          .join(' ')
      )
      .join('  ');
  }
  
  function morseToText(morse) {
    return morse
      .trim()
      .split('  ')
      .map(word =>
        word
          .split(' ')
          .map(code => morseToTextMap[code] || '')
          .join('')
      )
      .join(' ');
  }
  
  function convertirMorse() {
    const input = document.getElementById('inputMorse').value.trim();
    const resultDiv = document.getElementById('result3');

    const isMorse = input.split('').every(char => ['-', '.', ' '].includes(char));
  
    let result;
    if (isMorse) {
      result = morseToText(input);
    } else {
      result = textToMorse(input);
    }
  
    resultDiv.innerHTML = `<p>${result}</p>`;
  }
  