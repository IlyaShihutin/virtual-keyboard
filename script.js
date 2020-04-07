const eventCode = [
  "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",
  "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete",
  "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",
  "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight",
  "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"
];

const eventKeyCode = [
  96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8,
  9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 127,
  20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13,
  16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38, 16,
  17, 0, 18, 32, 18, 37, 40, 39, 17
];
const KEYILYA = [

  [
    "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
    "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del",
    "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
    "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "↑", "Shift",
    "Ctrl", "win", "Alt", "Space", "Alt", "←", "↓", "→", "Ctrl"
  ],

  [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
    "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del",
    "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
    "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift",
    "Ctrl", "win", "Alt", "Space", "Alt", "←", "↓", "→", "Ctrl"
  ],

  [
    "Ё", "1", '2', "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
    "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "\\", "Del",
    "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter",
    "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "↑", "Shift",
    "Ctrl", "win", "Alt", "Space", "Alt", "←", "↓", "→", "Ctrl"
  ],

  [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
    "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "Del",
    "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter",
    "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "↑", "Shift",
    "Ctrl", "win", "Alt", "Space", "Alt", "←", "↓", "→", "Ctrl"
  ],
 
  [
    "Ё", "!", '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace",
    "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del",
    "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter",
    "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "↑", "Shift",
    "Ctrl", "win", "Alt", "Space", "Alt", "←", "↓", "→", "Ctrl"
  ],

  [
    "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace",
    "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del",
    "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', "Enter",
    "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "↑", "Shift",
    "Ctrl", "win", "Alt", "Space", "Alt", "←", "↓", "→", "Ctrl"
  ],
];

const textarea = '<div class = "textarea"><textarea name = "textarea" rows="8" cols="100" readonly></textarea></div>';
const body = document.querySelector('body');
body.insertAdjacentHTML('beforeend', textarea);
body.insertAdjacentHTML('afterend', '<div class="comment">Change language: Alt + Ctrl <br>Made on Windows</div>');

let KeyBoardSpace = document.createElement('div');
KeyBoardSpace.className = "keyboard";
document.body.append(KeyBoardSpace);
let flagLang;
if (localStorage.getItem('language') === 'English') {
  {
    localStorage.setItem('language', 'English');
    init(1);
    flagLang = true;
  }
} else {
  {
    localStorage.setItem('language', 'Russian');
    init(0);
    flagLang = false;
  }
}

function init(n) {
  let out = '';
  for (let i = 0; i < 64; i++) {
    if (i == 14 || i == 29 || i == 42 || i == 55) {
      out += '<div class="clearfix"></div>'
    }
    out += '<div class="btn ' + eventCode[i] + '" data = "' + eventKeyCode[i] + '">' + KEYILYA[n][i] + '</div>';
  }
  document.querySelector('.keyboard').innerHTML = out;
}


let caps = false;
let Shift = false;
const TextArea = document.querySelector('textarea');

document.onkeydown = function (event) {
  switch (eventCode.indexOf(event.code)) {
    case 13:
      TextArea.value = TextArea.value.substr(0, TextArea.value.length - 1);
      break;
    case 55:
    case 57:
    case 59:
    case 63:
      CtrlAlt();
      break;
    case 42:
    case 54:
      shiftKey();
      break;
    case 58:
      TextArea.value += ' ';
      break;
    case 41:
      TextArea.value += '\n';
      break;
    case 14:
      TextArea.value += '   ';
      break;
    case 29:
      CapsLock();
      break;
    case -1:
      TextArea.value += '';
      break;
    default:
      if (localStorage.getItem('language') === 'English') {
        if (Shift && !caps) {
          TextArea.value += KEYILYA[5][eventCode.indexOf(event.code)];
        } else if (!Shift && !caps) {
          TextArea.value += KEYILYA[1][eventCode.indexOf(event.code)];
        }
        if (!Shift && caps) {
          TextArea.value += KEYILYA[3][eventCode.indexOf(event.code)];
        }
        if (Shift && caps) {
          TextArea.value += KEYILYA[1][eventCode.indexOf(event.code)];
        }
      } else {
        if (Shift && !caps) {
          TextArea.value += KEYILYA[4][eventCode.indexOf(event.code)];
        } else if (!Shift && !caps) {
          TextArea.value += KEYILYA[0][eventCode.indexOf(event.code)];
        }
        if (!Shift && caps) {
          TextArea.value += KEYILYA[2][eventCode.indexOf(event.code)];
        }
        if (Shift && caps) {
          TextArea.value += KEYILYA[0][eventCode.indexOf(event.code)];
        }

      }
  }

  if (eventCode.indexOf(event.code) != (-1))
    document.querySelector('.keyboard > .' + event.code + '').classList.add('active');
}
document.onkeyup = function (event) {
  switch (event.keyCode) {
    case 16:
      CloseshiftKey();
      break;
    default:

      if (!event.keyCode) document.querySelector('.keyboard > .' + event.code + '').classList.remove('active');
  }

}


function shiftKey() {
  if (localStorage.getItem('language') === 'Russian') {
    init(4);
    Shift = true;
  } else {
    init(5);
    Shift = true;
  }
}

function CloseshiftKey() {
  if (localStorage.getItem('language') === 'Russian') {
    init(0);
    Shift = false;
  } else {
    init(1);
    Shift = false;
  }
}

function CapsLock() {
  if (caps) {
    if (localStorage.getItem('language') === 'Russian') {
      caps = false;
      init(0);

    } else {
      caps = false;
      init(1);

    }
  } else {
    if (localStorage.getItem('language') === 'Russian') {
      caps = true;
      init(2);

    } else {
      caps = true;
      init(3);

    }
  }
}
let flag;
let smena = false;
function CtrlAlt() {
  document.addEventListener('keydown', (event) => {
    if (event.keyCode == 17) flag = true;
    document.addEventListener('keyup', (event) => {
      if (event.keyCode == 18 && flag && !(localStorage.getItem('language') === 'Russian')) {
        if (!caps) {
          init(0);
          localStorage.setItem('language', 'Russian');
        } else {
          init(2);
          localStorage.setItem('language', 'Russian');
        }
      } else if (event.keyCode == 18 && flag && (localStorage.getItem('language') === 'Russian')) {
        if (!caps) {
          init(1);
          localStorage.setItem('language', 'English');
        } else {
          init(3);
          localStorage.setItem('language', 'English');
        }
      }
      flag = false;
      smena = true;
    });
  });
}


document.querySelector('.keyboard').onclick = function (event) {
  switch (eventKeyCode.indexOf(Number(event.target.getAttribute('data')))) {
    case 13:
      TextArea.value = TextArea.value.substr(0, TextArea.value.length - 1);
      break;
    case 55:
    case 57:
    case 59:
    case 63:
      CtrlAlt();
      break;
    case 58:
      TextArea.value += ' ';
      break;
    case 41:
      TextArea.value += '\n';
      break;
    case 14:
      TextArea.value += '   ';
      break;
    case 56:
      TextArea.value += '';
      break;
    case 29:
      CapsLock();
      break;

    default:

      if (localStorage.getItem('language') === 'English') {
        if (Shift && !caps) {
          TextArea.value += KEYILYA[5][eventKeyCode.indexOf(Number(event.target.getAttribute('data')))];
        } else if (!Shift && !caps) {
          TextArea.value += KEYILYA[1][eventKeyCode.indexOf(Number(event.target.getAttribute('data')))];
        }
        if (!Shift && caps) {
          TextArea.value += KEYILYA[3][eventKeyCode.indexOf(Number(event.target.getAttribute('data')))];
        }
        if (Shift && caps) {
          TextArea.value += KEYILYA[1][eventKeyCode.indexOf(Number(event.target.getAttribute('data')))];
        }
      } else {
        if (Shift && !caps) {
          TextArea.value += KEYILYA[4][eventKeyCode.indexOf(Number(event.target.getAttribute('data')))];
        } else if (!Shift && !caps) {
          TextArea.value += KEYILYA[0][eventKeyCode.indexOf(Number(event.target.getAttribute('data')))];
        }
        if (!Shift && caps) {
          TextArea.value += KEYILYA[2][eventKeyCode.indexOf(Number(event.target.getAttribute('data')))];
        }
        if (Shift && caps) {
          TextArea.value += KEYILYA[0][eventKeyCode.indexOf(Number(event.target.getAttribute('data')))];
        }
      }
  }

  if (eventKeyCode.indexOf(Number(event.target.getAttribute('data'))) == 29) {
    if (caps) { document.querySelector('.keyboard > .' + 'CapsLock' + '').classList.add('active'); }
    else document.querySelector('.keyboard > .' + 'CapsLock' + '').classList.remove('active');
  }
  else {
    if (!event.target.classList.contains('keyboard')) event.target.classList.add('active');
    setTimeout(TimeOut, 200);
  }


};

function TimeOut() {
  document.querySelectorAll('.keyboard .btn').forEach((element) => {

    if (element.getAttribute('data') != 20)
      element.classList.remove('active');
  });
}