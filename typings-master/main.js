// Get document element
const textDisplay = document.querySelector('#text-display');
const inputField = document.querySelector('#input-field');

//make sure all commas are '⹁' and hamzahs to be 'ٴ' and ' di ' and ' ke ' are handled.
//remember to normalize commas, semicolons, and " د " and " ک "
const mytexts = {
    mudah: [
        "دلاڠيت يڠ ميره⹁ رانوم سڤرتي اڠݢور⹁ واجهمو ممبواي ميمڤيکو.",
        "ڤاتوتکه کران کامو دبري ڤرايڠتن دان نصيحت⹁ مک کامو مڠنچم کامي؟",
        "ستياڤ ميڠݢو⹁ موڽيت٢ ايت اکن مڠاداکن ڤرسمبهن دان مڠهيبورکن ڤندودوق کامڤوڠ.",
        "کلداي ايت براس ايري هاتي دان مولا منيرو ڤرلاکوان انجيڠ ايت.",
        "کيت تيدق ممڤو مڽمبوڽيکن سيکڤ سمولا جادي والاوڤون کيت چوبا منيرو ڤربواتن اورڠ لاٴين.",
        "ڤتاني ايت تردڠر ترياقن کلدايڽ دان چوبا اونتوق ممبنتوڽ.",
        "مڽسل اکو بري کاو ڤينجم موتوسيکل اکو ايت. سکارڠ⹁ تيڠوق اڤ ده جادي!",
        "بوڠا کانچيڠ باجو تومبوه دڠن باتڠ يڠ منجالر دأتس ڤرموکاٴن تانه.",
        "ناسي جولوف اداله هيدڠن يڠ ڤاليڠ عموم دتموکن دولايه افريک بارت.",
        "لبيه باٴيق ناکل تاڤي جوجور درڤد باٴيق ڤدحال منافق!",

        "کران کلق يڠ کيت چاري اداله اورڠ يڠ ممبوات کيت برهنتي منچاري.",
        "سنجات يڠ ڤاليڠ امڤوه دموک بومي اين اداله جيوا سأورڠ يڠ سدڠ درونديڠ اسمارا.",
        "چينتا دان کاسيه سايڠ يڠ دداسري دڠن کتلوسن هاتي تق اکن ڤرنه اد هابيسڽ.",
        "اومبق مموتيه درنتاو ڤنجڠ⹁ کاڤل برلاير دلاٴوت بيرو. سماکين کاسيه سماکين سايڠ⹁ ترايڠين بنر هندق برتمو.",
        "اد باڽق بواه تتاڤي تيدق سمواڽ باٴيق دان باڽق علمو ڤڠتاهوان تتاڤي تيدق سمواڽ برݢونا.",
        "ڤوڽا کماجوان ڤرلاهن لبيه باٴيق درڤد تيدق ڤوڽا کماجوان لڠسوڠ.",
        "کݢاݢلن بوکنله کݢاݢلن يڠ سبنرڽ کچوالي جک کيت تيدق بلاجر درڤداڽ.",
        "ماسق کوڤي اٴيرڽ منته⹁ کمبڠ ملاتي اتس کارڠ. ساي برميمڤي کريسکو ڤاته⹁ جنتوڠ هاتي دأمبيل اورڠ.",
        "ارنب اتاو کلينچي موده دکنلي دڠن تليڠاڽ يڠ ڤنجڠ دان تيروس.",
        "حيوان ممڤوڽاٴي ببراڤ چيري٢ يڠ ممبيذاکنڽ درڤد هيدوڤن٢ يڠ لاٴين.",
        "",

        "دڠن براني⹁ دي ملومڤت دري ڤونچق ݢونوڠ کدالم اٴير يڠ بيرو.",
        "تورونن ثلجي ممڤڠاروهي کݢياتن سهارين ماٴنسي دالم ببراڤ اسڤيک:",
        "للاکي ايت مڠاڽم تيکر دڠن تليتي⹁ منجاديکن داٴون ڤندن منجادي کاريا اينده.",
        "ڤلاجر ايت منومڤوکن ڤرهاتين کڤد ݢورو⹁ لاڤر اکن ڤڠتاهوان بارو.",
        "ڤتاني ايت بکرجا کرس دساوه ڤادي⹁ برهارڤ ڤانين تاهون اين باٴيق.",
        "ڤراياٴن هاري راي دکامڤوڠ ممبريکن کنڠن مانيس يڠ سوکر دلوڤاکن.",
        "دالم کهنيڠن مالم⹁ سوارا بوروڠ هنتو منجادي لاݢو ڤڠهانتر تيدور.",
        "ݢاديس ايت مڠهمڤيري کروسي ݢويڠ اونتوق ممباچ نوۏل کسوکاٴنڽ.",
        "سمبيل دودوق دباوه ڤوکوق دورين⹁ دي منعمتي بواه يڠ بارو جاتوه.",
        "کريتا اڤي ملونچور لاجو ملالوٴي لنسکڤ نݢارا⹁ ممباوا ڤنومڤڠ منوجو ديستيناسي.",
    //end of easy
    ],

    sederhana: [
        "موڠکين مخلوق ايت چوبا اونتوق ماسوق⹁ تتاڤي ڤينتو يڠ تله دسلق باتڠ بسي تيدق ممبوليهکن مريک اونتوق منچروبوه. عقيله دان إبراهيم ترمڠه-مڠه عاقبة برلاري.",
        "بوروڠ ݢارودا برسايڤ اڤي ايت تربڠ مڠليليڠي ڤنونتون ددالم ديوان. مولوت ڤنونتون دسيتو ترڠاڠا لواس اڤابيلا مليهت مونچولڽ بوروڠ ݢرݢاسي ايت دأودارا.",
        "ممندڠکن اي ڤندميک يڠ ممبري ايمڤک سلوروه دنيا⹁ سموا ڤيهق⹁ کراجاٴن دان سواستا سڠݢوڤ مڽومبڠ ڤولوهن بيليون کأتس ڤڠحاصيلن ۏکسين.",
        "سماکين برتمبهڽ اوسيا سسأورڠ مک سماکين رنتن ڤولا اورڠ ترسبوت اونتوق ترجاڠکيت سواتو ڤڽاکيت. سبنرڽ⹁ بوکن هاڽ اورڠ توا ساج يڠ ڤرلو خواطير.",
        "اخلاسله منجادي ديري سنديري اݢر هيدوڤ ڤنوه دڠن کتلوسن دان کأمانن. هيدوڤ تنڤا ڤݢڠن عبارت بوٴيه٢ سابون. بيلا٢ ماس اي اکن ڤچه.",
        "نوسنتارا اداله ايستيله بهاس کاوي وجود ڤد زمان مجاڤاهيت دڤرينته ڤڠليما ݢاجه مادا مروجوع کڤد ݢوݢوسن ڤولاو مڠليليڠي ڤولاو جاوا دلاٴوتن اسيا تڠݢارا يڠ منجادي ڤوست کراجاٴن ترسبوت زمان ايت.",
    ],

    sulit: [
        "سيستم توليسن دان ايجاٴن جاوي يڠ دݢوناکن دمليسيا سکارڠ اياله سيستم يڠ ترداڤت دالم بوکو ڤدومن ايجاٴن جاوي يڠ دسمڤورناکن ( ڤي. إي. جيه. واي. دي. ) تربيتن راسمي ديوان بهاس دان ڤوستاک ( دي. بي. ڤي ) ڤد تاهون ١٩٨٦ (ايديسي کدوا⹁ ١٩٨٧⁏ ايديسي کتيݢ⹁ ١٩٩٣). سيستم اين مروڤاکن سيستم ايجاٴن جاوي يڠ براساسکن قاعده ايجاٴن جاوي زعبا (سباݢايمان يڠ ترداڤت دالم بوکو دفتر ايجاٴن ملايو جاوي-رومي⹁ ١٩٤٩).",
        "ايليکترون اداله ساتو ذره سوباتوم کعنصورن برجيسيم ريڠن يڠ ممباوا چس ايليکتريک نيݢاتيف. ايليکترون ممڤوڽاٴي سڤين ١/٢ (فرميون)⹁ تيدق ترليبت ددالم ساليڠتيندق قوات (ليڤتون)⹁ دان تيدق ممڤوڽاٴي سوبستروکتور. برسام دڠن نوکليوس اتوم⹁ ايليکترون ممبينا اتوم٢⁏ مريک برتڠݢوڠجواب کڤد ايکتن کيميا.",
        "سجومله ٢٦٥ کيس اينسيفاليتيس اکوت دڠن ١٠٥ کماتين يڠ دسببکن اوليه ۏيروس ايت دلاڤورکن دتيݢ نݢري سڤنجڠ وابق ايت. ڤيهق برکواس کصيحتن مليسيا ڤد ڤميکيرن ڤرتام اينسيفاليتيس جڤون ( جيه. أي. ) منجادي ڤڽبب اوتام جاڠکيتن يڠ منججسکن ڤڠݢوناٴن لڠکه٢ برکسن اونتوق منچݢه ڤڽيبارن سبلوم اخيرڽ دکنل ڤستي اوليه سأورڠ اهلي ۏيروس تمڤتن دسببکن اوليه اݢين يڠ بارو دتوبوهکن برنام ۏيروس نيڤه⹁ ڤڽاکيت موت سڤرتي ڤڽاکيت ۏيروس ايبولا ( إي. ۏي. دي. ) دمان اي مڽرڠ سيستم اوتق بربنديڠ دڠن يڠ مڽرڠ سالورن داره.",
        "ايکسترک ميتانول درڤد بهاݢين داٴون ڤوکوق اين جوݢ دداڤتي داڤت مڠورڠکن ڤمبنتوقن رادڠ ڤد اڠݢوتا بادن حيوان کاجين. دالم کاجين انتيرادڠ⹁ تيکوس معمل دأروه دڠن باهن کيميا⹁ سڤرتي کاراݢينن دان فورمالين اونتوق مڠحاصيلکن بڠکق دان ايدما ڤد کاکي دان دڠن باهن کيميا زيلينا اونتوق مڠحاصيلکن رادڠ ڤد تليڠا تيکوس.",
        "اونيۏرسيتي ساٴين‌س مليسيا مروڤاکن سبواه اونيۏرسيتي عوام دمليسيا. کمڤوس اوتاماڽ ترلتق دجورج تاٴون⹁ ڤولاو ڤينڠ. ترداڤت تيݢ بواه کمڤوس لاٴين ياٴيت سبواه دسبرڠ ڤراي دان سبواه لاݢي دکلنتن دان سبواه کمڤوس لوار نݢارا يڠ مناورکن کورسوس ساٴين‌س ڤراوبتن دأوتر ڤراديش⹁ اينديا. يو.ايس.عيم. ممڤوڽاٴي جومله ڤلاجر سکيتر ٢٩٧٨٩ اورڠ ڤد ٢٠٠٦. حال اين منجاديکنڽ اي سبواه اونيۏرسيتي تربسر دمليسيا دري سݢي بيلڠن ڤلاجر.",
    ]
    //end of sulit

}

// Initialize typing mode variables
let typingMode = 'difficulty';
let typingDifficulty;
let wordCount;
let timeCount;

// Initialize dynamic variables
let randomWords = [];
let wordList = [];
let currentWord = 0;
let correctKeys = 0;
let startDate = 0;
let timer;
let timerActive = false;
let punctuation = false;

// Get cookies
getCookie('theme') === '' ? setTheme('light') : setTheme(getCookie('theme'));
//getCookie('language') === '' ? setLanguage('english') : setLanguage(getCookie('language'));
//getCookie('wordCount') === '' ? setWordCount(50) : setWordCount(getCookie('wordCount'));
getCookie('typingDifficulty') === '' ? setTypingDifficulty('mudah') : setTypingDifficulty(getCookie('typingDifficulty'));
//getCookie('timeCount') === '' ? setTimeCount(60) : setTimeCount(getCookie('timeCount'));
//getCookie('typingMode') === '' ? setTypingMode('difficulty') : setTypingMode(getCookie('typingMode'));
getCookie('punctuation') === '' ? setPunctuation('false') : setPunctuation(getCookie('punctuation'));








// Find a list of words and display it to textDisplay
function setText(e) {
  e = e || window.event;
  var keepWordList = e && e.shiftKey;

  // Reset
  if (!keepWordList) {
    wordList = [];
  }
  currentWord = 0;
  correctKeys = 0;
  inputField.value = '';
  timerActive = false;
  clearTimeout(timer);
  textDisplay.style.display = 'block';
  inputField.className = '';

  switch (typingMode) {
    case 'wordcount':
      textDisplay.style.height = 'auto';
      textDisplay.innerHTML = '';
      if (!keepWordList) {
        wordList = [];
        while (wordList.length < wordCount) {
          const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
          if (wordList[wordList.length - 1] !== randomWord || wordList[wordList.length - 1] === undefined || getCookie('language') === 'dots') {
            wordList.push(randomWord);
          }
        }
      }
      break;

    case 'time':
      textDisplay.style.height = '3.2rem';
      document.querySelector(`#tc-${timeCount}`).innerHTML = timeCount;
      textDisplay.innerHTML = '';
      if (!keepWordList) {
        wordList = [];
        for (i = 0; i < 500; i++) {
          let n = Math.floor(Math.random() * randomWords.length);
          wordList.push(randomWords[n]);
        }
      }
      break;

    case 'difficulty':
      textDisplay.style.height = 'auto';
      textDisplay.innerHTML = '';
      if (!keepWordList) {

        sentence = mytexts[typingDifficulty][Math.floor(Math.random() * mytexts[typingDifficulty].length)];
        wordList = sentence.split(/\s+/);
        console.log('hi');
      }
  }

  if (punctuation) addPunctuations();
  showText();
  inputField.focus();
}






function addPunctuations() {
  if (wordList[0] !== undefined) {
    // Capitalize first word
    wordList[0] = wordList[0][0].toUpperCase() + wordList[0].slice(1);

    // Add comma, fullstop, question mark, exclamation mark, semicolon. Capitalize the next word
    for (i = 0; i < wordList.length; i++) {
      const ran = Math.random();
      if (i < wordList.length - 1) {
        if (ran < 0.03) {
          wordList[i] += ',';
        } else if (ran < 0.05) {
          wordList[i] += '.';
          wordList[i + 1] = wordList[i + 1][0].toUpperCase() + wordList[i + 1].slice(1);
        } else if (ran < 0.06) {
          wordList[i] += '?';
          wordList[i + 1] = wordList[i + 1][0].toUpperCase() + wordList[i + 1].slice(1);
        } else if (ran < 0.07) {
          wordList[i] += '!';
          wordList[i + 1] = wordList[i + 1][0].toUpperCase() + wordList[i + 1].slice(1);
        } else if (ran < 0.08) {
          wordList[i] += ';';
        }
      }
    }
    wordList[wordList.length - 1] += '.';

    // Add quotation marks
  }
}






// Display text to textDisplay
function showText() {
  wordList.forEach(word => {
    let span = document.createElement('span');
    span.innerHTML = word + ' ';
    textDisplay.appendChild(span);
  });
  textDisplay.firstChild.classList.add('highlight');
}




function normalizeJawi(s) {
    var replacedString = s.replace(/ك/g, 'ک');
    replacedString = replacedString.replace(/ڬ/g, 'ݢ');
    replacedString = replacedString.replace(/ء/g, 'ٴ');
    replacedString = replacedString.replace(/،/g, '⹁');
    replacedString = replacedString.replace(/؛/g, '⁏');
    return replacedString;
}

// Key is pressed in input field
inputField.addEventListener('input', e => {
  // Add wrong class to input field
  switch (typingMode) {
    case 'wordcount':
      if (currentWord < wordList.length) inputFieldClass();
    case 'time':
      if (timerActive) inputFieldClass();
    case 'difficulty':
      if (currentWord < wordList.length) inputFieldClass();
  }
  function inputFieldClass() {
    let inputValue = inputField.value;  // get the current input value
    inputValue = normalizeJawi(inputValue);
    let currentWordSlice = wordList[currentWord].slice(0, inputValue.length);
    inputField.className = inputValue === currentWordSlice ? '' : 'wrong';
  }
//  function inputFieldClass() {
//
//    if (e.key === 'Backspace') {
//      let inputWordSlice = e.ctrlKey ? '' : inputField.value.slice(0, inputField.value.length - 1);
//      inputWordSlice = normalizeJawi(inputWordSlice);
//      let currentWordSlice = wordList[currentWord].slice(0, inputWordSlice.length);
//      inputField.className = inputWordSlice === currentWordSlice ? '' : 'wrong';
//    }
//
//    else if (e.key === ' ') {
//      inputField.className = '';
//    }
//
//    // woww novel bug fix! move the if to become an else and it works for jawi!
//    else if (e.key !== 'Shift' && e.key !== 'Alt' && e.key !== 'Control' && e.key !== 'Enter' && e.key !== 'Meta') {
//      let inputWordSlice = inputField.value + e.key;
//      inputWordSlice = normalizeJawi(inputWordSlice);
//      let currentWordSlice = wordList[currentWord].slice(0, inputWordSlice.length);
//      inputField.className = inputWordSlice === currentWordSlice ? '' : 'wrong';
//    }
//  }

});

inputField.addEventListener('keydown', e => {

  // If it is the first character entered
  if (currentWord === 0 && inputField.value === '') {
    startDate = Date.now();

  }

  // If it is the space key check the word and add correct/wrong class
  if (e.key === ' ') {
    e.preventDefault();

    if (inputField.value !== '') {
      // Scroll down text when reach new line
      /*if (typingDifficulty === 'sederhana' || typingDifficulty === 'sulit') {
        const currentWordPosition = textDisplay.childNodes[currentWord].getBoundingClientRect();
        const nextWordPosition = textDisplay.childNodes[currentWord + 1].getBoundingClientRect();
        if (currentWordPosition.top < nextWordPosition.top) {
          for (i = 0; i < currentWord + 1; i++) textDisplay.childNodes[i].style.display = 'none';
        }
      }*/

      // If it is not the last word increment currentWord,
      if (currentWord < wordList.length - 1) {
        if (normalizeJawi(inputField.value) === wordList[currentWord]) {
          textDisplay.childNodes[currentWord].classList.add('correct');
          correctKeys += wordList[currentWord].length + 1;
        } else {
          textDisplay.childNodes[currentWord].classList.add('wrong');
        }
        textDisplay.childNodes[currentWord + 1].classList.add('highlight');
      } else if (currentWord === wordList.length - 1) {
        textDisplay.childNodes[currentWord].classList.add('wrong');
        showResult();
      }

      inputField.value = '';
      currentWord++;
    }

    // Else if it is the last word and input word is correct show the result
  } else if (currentWord === wordList.length - 1) {
    if (normalizeJawi(inputField.value + e.key) === wordList[currentWord]) {
      textDisplay.childNodes[currentWord].classList.add('correct');
      correctKeys += wordList[currentWord].length;
      currentWord++;
      showResult();
    }
  }
});








// Calculate and display result
function showResult() {
  let words, minute, acc;

      words = correctKeys / 5;
      minute = (Date.now() - startDate) / 1000 / 60;
      let totalKeys = -1;
      wordList.forEach(e => (totalKeys += e.length + 1));
      acc = Math.floor((correctKeys / totalKeys) * 100);
      console.log(words, minute, words/minute);

  let wpm = Math.floor(correctKeys/5 / minute);
  document.querySelector('#right-wing').innerHTML = `<b>WPM: ${wpm}</b> | کتڤتن: ${acc}`;
}

// Command actions
document.addEventListener('keydown', e => {
  // Modifiers Windows: [Alt], Mac: [Cmd + Ctrl]
  if (e.altKey || (e.metaKey && e.ctrlKey)) {
    // [mod + t] => Change the theme
    if (e.key === 't') {
      setTheme(inputField.value);
    }

    /*
    // [mod + l] => Change the language
    if (e.key === 'l') {
      setLanguage(inputField.value);
    }

    // [mod + m] => Change the typing mode
    if (e.key === 'm') {
      setTypingMode(inputField.value);
    }
    */

    // [mod + p] => Change punctuation active
    if (e.key === 'p') {
      setPunctuation(inputField.value);
    }
  } else if (!document.querySelector('#theme-center').classList.contains('hidden')) {
    if (e.key === 'Escape'){
      hideThemeCenter();
      inputField.focus();
    }
  } else if (e.key === 'Escape') {
    setText(e);
  }
});







function setTheme(_theme) {
  const theme = _theme.toLowerCase();
  fetch(`themes/${theme}.css`)
    .then(response => {
      if (response.status === 200) {
        response
          .text()
          .then(css => {
            setCookie('theme', theme, 90);
            document.querySelector('#theme').setAttribute('href', `themes/${theme}.css`);
            setText();
          })
          .catch(err => console.error(err));
      } else {
        console.log(`theme ${theme} is undefine`);
      }
    })
    .catch(err => console.error(err));
}





/*
function setLanguage(_lang) {
  const lang = _lang.toLowerCase();
  fetch('texts/random.json')
    .then(response => response.json())
    .then(json => {
      if (typeof json[lang] !== 'undefined') {
        randomWords = json[lang];
        setCookie('language', lang, 90);

        if (lang === "arabic") {
            textDisplay.style.direction = "rtl"
            inputField.style.direction = "rtl"
        } else {
            textDisplay.style.direction = "ltr"
            inputField.style.direction = "ltr"
        }

        setText();
      } else {
        console.error(`language ${lang} is undefine`);
      }
    })
    .catch(err => console.error(err));
}
*/




/*
function setTypingMode(_mode) {
  const mode = _mode.toLowerCase();
  switch (mode) {
    case 'wordcount':
      typingMode = mode;
      setCookie('typingMode', mode, 90);
      document.querySelector('#word-count').style.display = 'inline';
      document.querySelector('#time-count').style.display = 'none';
      setText();
      break;
    case 'time':
      typingMode = mode;
      setCookie('typingMode', mode, 90);
      document.querySelector('#word-count').style.display = 'none';
      document.querySelector('#time-count').style.display = 'inline';
      setText();
      break;
    case 'typingDifficulty':
      typingMode = mode;
      setCookie('typingMode', mode, 90);
      document.querySelector('#word-count').style.display = 'none';
      document.querySelector('#time-count').style.display = 'none';
      document.querySelector('#difficulties').style.display = 'inline';
      setText();
      break;
    default:
      console.error(`mode ${mode} is undefine`);
  }
}
*/




function setPunctuation(_punc) {
  const punc = _punc.toLowerCase();
  if (punc === 'true') {
    punctuation = true;
    setCookie('punctuation', true, 90);
    setText();
  } else if (punc === 'false') {
    punctuation = false;
    setCookie('punctuation', false, 90);
    setText();
  }
}




/*
function setWordCount(wc) {
  setCookie('wordCount', wc, 90);
  wordCount = wc;
  document.querySelectorAll('#word-count > span').forEach(e => (e.style.borderBottom = ''));
  document.querySelector(`#wc-${wordCount}`).style.borderBottom = '2px solid';
  setText();
}
*/
function setTypingDifficulty(difficulty) {
  setCookie('typingDifficulty', difficulty, 90);
  typingDifficulty = difficulty;
  document.querySelectorAll('#difficulties > span').forEach(e => (e.style.borderBottom = ''));
  document.querySelector(`#df-${difficulty}`).style.borderBottom = '2px solid';
  document.querySelector('#right-wing').innerHTML = 'WPM: XX | کتڤتن: XX';
  setText();
}




function setTimeCount(tc) {
  setCookie('timeCount', tc, 90);
  timeCount = tc;
  document.querySelectorAll('#time-count > span').forEach(e => {
    e.style.borderBottom = '';
    e.innerHTML = e.id.substring(3, 6);
  });
  document.querySelector(`#tc-${timeCount}`).style.borderBottom = '2px solid';
  setText();
}






function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}






function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

showAllThemes();
function showAllThemes(){
    fetch(`themes/theme-list.json`)
    .then(response => {
      if (response.status === 200) {
        response
          .text()
          .then(body => {
            let themes = JSON.parse(body);
            let keys = Object.keys(themes);
            let i;
            for(i = 0;i < keys.length; i ++){

              let theme = document.createElement('div');
              theme.setAttribute('class', 'theme-button');
              theme.setAttribute('onClick', `setTheme('${keys[i]}')`);
              theme.setAttribute('id', keys[i]);

              // set tabindex to current theme index + 4 for the test page
              theme.setAttribute('tabindex', i + 5);
              theme.addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                  setTheme(theme.id);
                  inputField.focus();

                }
              })

              if(themes[keys[i]]['customHTML'] != undefined){
                theme.style.background = themes[keys[i]]['background'];
                theme.innerHTML = themes[keys[i]]['customHTML']
              }else{
                theme.textContent = keys[i];
                theme.style.background = themes[keys[i]]['background'];
                theme.style.color = themes[keys[i]]['color'];
              }
              document.getElementById('theme-area').appendChild(theme);
            }
          })
          .catch(err => console.error(err));
      } else {
        console.log(`Cant find theme-list.json`);
      }
    })
    .catch(err => console.error(err));
}

// enter to open theme area
document.getElementById('show-themes').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    showThemeCenter();
    inputField.focus();
  }
});

function showThemeCenter() {
  document.getElementById('theme-center').classList.remove('hidden');
  document.getElementById('command-center').classList.add('hidden');
}

function hideThemeCenter() {
  document.getElementById('theme-center').classList.add('hidden');
  document.getElementById('command-center').classList.remove('hidden');
}
