// Get document element
const textDisplay = document.querySelector('#text-display');
const inputField = document.querySelector('#input-field');
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
        "ناسي جولوف اداله هيدڠن يڠ ڤاليڠ عموم دتموکن دولايه افريک بارت."
    //end of easy
    ],

    sederhana: [
        "بوروڠ ݢارودا برسايڤ اڤي ايت تربڠ مڠليليڠي ڤنونتون ددالم ديوان. مولوت ڤنونتون دسيتو ترڠاڠا لواس اڤابيلا مليهت مونچولڽ بوروڠ ݢرݢاسي ايت دأودارا⹁ يڠ برمولا درڤد ڤرچيقن اڤي کچيل يڠ کمودينڽ ممبنتوق سايڤ⹁ يڠ سماکين لام سماکين بسر سهيڠݢاله منجادي سأيکور ݢارودا. تيدق چوکوڤ دڠن ايت⹁ دالم سکليڤ مات⹁ ڤوهون٢ يڠ مڠهياسي ڤنتس مولا ممبسر دان منومبوهکن بوڠا٢ ڤلباݢاي ورنا سهيڠݢ جاتوه کلنتاي.",
        "مريک برجاي ماسوق کبيليق تيليۏيشن.  روبين سݢرا منوتوڤ ڤينتو دان مڠونچي دڠن سلق بسي. بردنتوم-دنتوم داٴون ڤينتو دهنتم سسواتو. موڠکين مخلوق ايت چوبا اونتوق ماسوق⹁ تتاڤي ڤينتو يڠ تله دسلق باتڠ بسي تيدق ممبوليهکن مريک اونتوق منچروبوه. علي دان عقيله ترمڠه-مڠه عاقبة برلاري.  روبين بيارڤون کڤنتن⹁ ماسيه تنڠ.",
        "ممندڠکن اي ڤندميک يڠ ممبري ايمڤک سلوروه دنيا⹁ سموا ڤيهق⹁ کراجاٴن دان سواستا سڠݢوڤ مڽومبڠ ڤولوهن بيليون کأتس ڤڠحاصيلن ۏکسين. بربنديڠ ڤڽاکيت لاٴين⹁ هاڽ سݢلينتير يڠ سڠݢوڤ ملابورکن دوٴيت دالم اوسها سڤرتي اين. ترداڤت کولابوراسي سلوروه دنيا دري سݢي علمو⹁ تيکنولوݢي دان کڤاکرن.",
        "سماکين برتمبهڽ اوسيا سسأورڠ مک سماکين رنتن ڤولا اورڠ ترسبوت اونتوق ترجاڠکيت سواتو ڤڽاکيت. سبنرڽ بوکن هاڽ اورڠ توا ساج يڠ ڤرلو خواطر⹁ ستياڤ اورڠ مولاٴي دري انق٢ جوݢ هاروس سلالو وسڤادا ترهادڤ سرڠن ڤڽاکيت يڠ ممڤو داتڠ کاڤن ڤون هاڽ ساج⹁ دڠن برتمبه اوسيا مک داي تاهن توبوه ترهادڤ ڤڽاکيت جوݢ سماکين برکورڠ اڤالاݢي دتمبه دڠن ڤولا هيدوڤ يڠ تيدق صيحت.",
        "ايکسترک ميتانول درڤد بهاݢين داٴون ڤوکوق اين جوݢ دداڤتي داڤت مڠورڠکن ڤمبنتوقن رادڠ ڤد اڠݢوتا بادن حيوان کاجين. دالم کاجين انتيرادڠ⹁ تيکوس معمل دأروه دڠن باهن کيميا⹁ سڤرتي کاراݢينن دان فورمالين اونتوق مڠحاصيلکن بڠکق دان ايدما ڤد کاکي دان دڠن باهن کيميا زيلينا اونتوق مڠحاصيلکن رادڠ ڤد تليڠا تيکوس.",
        "مليهت کڤد کلمهن الترناتيف ڤرتام⹁ لي کوان يو منچادڠکن الترناتيف کدوا. ڤد فيکيرنڽ الترناتيف کدوا بوکن سهاج داڤت ممنوهي حسرت ڤندودوق دولايه بورنيو تتاڤي جوݢ داڤت مڽلسايکن مسئله سيڠاڤورا. لي منچادڠکن ساتو ڤرستوجوان اول ڤرلو دچاڤاي مڠناٴي اساس٢ ڤرلمباݢاٴن ݢاݢسن مليسيا ممندڠکن ڤد اول ڤرتڠهن تاهون ١٩٦٣. ڤرلمباݢاٴن سيڠاڤورا اکن دکاجي سمولا."
    ],

    sulit: [
        "سيستم توليسن دان ايجاٴن جاوي يڠ دݢوناکن دمليسيا سکارڠ اياله سيستم يڠ ترداڤت دالم بوکو ڤدومن ايجاٴن جاوي يڠ دسمڤورناکن ( ڤي. إي. جيه. واي. دي. ) تربيتن راسمي ديوان بهاس دان ڤوستاک ( دي. بي. ڤي ) ڤد تاهون ١٩٨٦ (ايديسي کدوا⹁ ١٩٨٧؛ ايديسي کتيݢ⹁ ١٩٩٣). سيستم اين مروڤاکن سيستم ايجاٴن جاوي يڠ براساسکن قاعده ايجاٴن جاوي زعبا (سباݢايمان يڠ ترداڤت دالم بوکو دفتر ايجاٴن ملايو جاوي-رومي⹁ ١٩٤٩). بوکو ڤدومن ايجاٴن جاوي يڠ دسمڤورناکن (١٩٨٦) دحاصيلکن درڤد روموسن کونۏينشن توليسن جاوي ڤريڠکت کبڠساٴن دکوالا ترڠݢانو⹁ يڠ دأداکن ڤد تاهون ١٩٨٤. حاصيل کونۏينشن تاهون ١٩٨٤ ايت تله دسلارسکن دان دڤرکمس دڠن معلومت يڠ دڤروليه درڤد کونۏينشن توليسن جاوي انجورن ڤوست إسلام⹁ جابتن ڤردان منتري ڤد تاهون ١٩٩١ دان سيمينر توليسن جاوي ڤريڠکت کبڠساٴن ڤد تاهون ١٩٩٣ هيڠݢ تاهون ١٩٩٤.",
        "ايليکترون اداله ساتو ذره سوباتوم کعنصورن برجيسيم ريڠن يڠ ممباوا چس ايليکتريک نيݢاتيف. ايليکترون ممڤوڽاٴي سڤين ١/٢ (فرميون)⹁ تيدق ترليبت ددالم ساليڠتيندق قوات (ليڤتون)⹁ دان تيدق ممڤوڽاٴي سوبستروکتور. برسام دڠن نوکليوس اتوم⹁ ايليکترون ممبينا اتوم٢؛ مريک برتڠݢوڠجواب کڤد ايکتن کيميا. ڤڠاليرن ايليکتريک دالم ڤڠالير (ڤڠکوندوکسي) ڤڤجل اداله دسببکن ڤرݢرقن ايليکترون٢. دالم سسواتو اتوم⹁ ايليکترون مڠليليڠي نوکليوس اتوم باݢي ڤروتون دان نيوترون دالم تاتاراجه ايليکترون. ايليکترون٢ يڠ برݢرق مڠحاصيلکن اروس ايليکتريک يڠ بوليه دڤرݢوناکن اوليه اهلي٢ ساٴين‌س دان جوروترا٢ اونتوق مڠوکور باڽق صيفت فيزيک. اروس ايليکتريک وجود اونتوق تيمڤوه يڠ ترباتس دان مڠحاصيلکن ايليکتريک (ڤرݢرقن چس) يڠ بوليه دمنفعتکن سباݢاي چارا يڠ ڤرکتيک اونتوق ملاکوکن کرجا.",
        "سجومله ٢٦٥ کيس اينسيفاليتيس اکوت دڠن ١٠٥ کماتين يڠ دسببکن اوليه ۏيروس ايت دلاڤورکن دتيݢ نݢري سڤنجڠ وابق ايت. ڤيهق برکواس کصيحتن مليسيا ڤد ڤميکيرن ڤرتام اينسيفاليتيس جڤون ( جيه. أي. ) منجادي ڤڽبب اوتام جاڠکيتن يڠ منججسکن ڤڠݢوناٴن لڠکه٢ برکسن اونتوق منچݢه ڤڽيبارن سبلوم اخيرڽ دکنل ڤستي اوليه سأورڠ اهلي ۏيروس تمڤتن دسببکن اوليه اݢين يڠ بارو دتوبوهکن برنام ۏيروس نيڤه⹁ ڤڽاکيت موت سڤرتي ڤڽاکيت ۏيروس ايبولا ( إي. ۏي. دي. ) دمان اي مڽرڠ سيستم اوتق بربنديڠ دڠن يڠ مڽرڠ سالورن داره. ۏيروس ايت مولا مڽرڠ لادڠ بابي دڤيڠݢير باندر ايڤوه دڤيرق دڠن برلاکوڽ ڤڽاکيت ڤرنفسن دان اينسيفاليتيس دکالڠن بابي دمان اي دأڠݢڤ ڤرتام دسببکن اوليه جيه. إي. کران ٤ سامڤل سيروم دري ٢٨ اورڠ يڠ دجاڠکيتي کاوسن يڠ دأوجي ڤوسيتيف اونتوق ايمونوبلوبولين عيم خصوس جيه. إي. يڠ جوݢ دصحکن اوليه ڤنموان ڤوست کرجاسام ڤڽاکيت تروڤيکا ڤرتوبوهن کصيحتن سدنيا ( دبليو. ايچ. او. ) داونيۏرسيتي ناݢاساکي.",
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
inputField.addEventListener('keydown', e => {
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

    if (e.key === 'Backspace') {
      let inputWordSlice = e.ctrlKey ? '' : inputField.value.slice(0, inputField.value.length - 1);
      inputWordSlice = normalizeJawi(inputWordSlice);
      let currentWordSlice = wordList[currentWord].slice(0, inputWordSlice.length);
      inputField.className = inputWordSlice === currentWordSlice ? '' : 'wrong';
    }

    else if (e.key === ' ') {
      inputField.className = '';
    }

    // woww novel bug fix! move the if to become an else and it works for jawi!
    else if (e.key !== 'Shift' && e.key !== 'Alt' && e.key !== 'Control' && e.key !== 'Enter' && e.key !== 'Meta') {
      let inputWordSlice = inputField.value + e.key;
      inputWordSlice = normalizeJawi(inputWordSlice);
      let currentWordSlice = wordList[currentWord].slice(0, inputWordSlice.length);
      inputField.className = inputWordSlice === currentWordSlice ? '' : 'wrong';
    }
  }

  // If it is the first character entered
  if (currentWord === 0 && inputField.value === '') {
    switch (typingMode) {
      case 'wordcount':
        startDate = Date.now();
        break;

      case 'difficulty':
        startDate = Date.now();
        break;


    }
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
  switch (typingMode) {
    case 'wordcount':
      words = correctKeys / 5;
      minute = (Date.now() - startDate) / 1000 / 60;
      //let totalKeys = -1;
      wordList.forEach(e => (totalKeys += e.length + 1));
      acc = Math.floor((correctKeys / totalKeys) * 100);
      break;

    case 'time':
      words = correctKeys / 5;
      minute = timeCount / 60;
      let sumKeys = -1;
      for (i = 0; i < currentWord; i++) {
        sumKeys += wordList[i].length + 1;
      }
      acc = acc = Math.min(Math.floor((correctKeys / sumKeys) * 100), 100);
      break;

    case 'difficulty':
      words = correctKeys / 5;
      minute = (Date.now() - startDate) / 1000 / 60;
      let totalKeys = -1;
      wordList.forEach(e => (totalKeys += e.length + 1));
      acc = Math.floor((correctKeys / totalKeys) * 100);
      console.log(words, minute, words/minute);

  }
  let wpm = Math.floor(correctKeys/5 / minute);
  document.querySelector('#right-wing').innerHTML = `<b>WPM: ${wpm}</b> / کتڤتن: ${acc}%`;
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
  document.querySelector('#right-wing').innerHTML = 'WPM: XX | کتڤتن: XX%';
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
