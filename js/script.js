// USERNAME ARRAYS
// current possibilities: 5,412
let adjectives = [
  'adorable',
  'beautiful',
  'busy',
  'clean',
  'dirty',
  'elegant',
  'fancy',
  'glamorous',
  'handsome',
  'long',
  'magnificent',
  'condescending',
  'wise',
  'plain',
  'quaint',
  'sparkling',
  'ugliest',
  'unsightly',
  'angry',
  'bewildered',
  'clumsy',
  'defeated',
  'embarrassed',
  'fierce',
  'grumpy',
  'helpless',
  'itchy',
  'jealous',
  'lazy',
  'mysterious',
  'nervous',
  'obnoxious',
  'panicky',
  'repulsive',
  'scary',
  'thoughtless',
  'uptight',
  'worried',
  'cheerful',
  'greedy',
  'perplexed',
  'frothy',
  'gritty',
  'bored',
  'intrigued',
];
let animals = [
  'aardvark',
  'alligator',
  'alpaca',
  'antelope',
  'ape',
  'armadillo',
  'baboon',
  'badger',
  'bat',
  'bear',
  'beaver',
  'bison',
  'boar',
  'buffalo',
  'bull',
  'camel',
  'canary',
  'capybara',
  'cat',
  'chameleon',
  'cheetah',
  'chimpanzee',
  'chinchilla',
  'chipmunk',
  'cougar',
  'cow',
  'coyote',
  'crocodile',
  'crow',
  'deer',
  'dingo',
  'dog',
  'donkey',
  'dromedary',
  'elephant',
  'elk',
  'ferret',
  'finch',
  'fish',
  'fox',
  'frog',
  'gazelle',
  'brontosaurus',
  'giraffe',
  'gnu',
  'goat',
  'gopher',
  'gorilla',
  'hamster',
  'hedgehog',
  'hippopotamus',
  'hog',
  'horse',
  'hyena',
  'ibex',
  'iguana',
  'impala',
  'jackal',
  'jaguar',
  'kangaroo',
  'koala',
  'lamb',
  'lemur',
  'leopard',
  'lion',
  'lizard',
  'llama',
  'lynx',
  'mandrill',
  'marmoset',
  'mink',
  'mole',
  'mongoose',
  'monkey',
  'moose',
  'dodo',
  'mouse',
  'mule',
  'muskrat',
  'mustang',
  'narwhal',
  'ocelot',
  'opossum',
  'orangutan',
  'otter',
  'panda',
  'panther',
  'parakeet',
  'parrot',
  'pig',
  'platypus',
  'porcupine',
  'porpoise',
  'puma',
  'rabbit',
  'raccoon',
  'ram',
  'rat',
  'reindeer',
  'reptile',
  'rhinoceros',
  'salamander',
  'seal',
  'sheep',
  'shrew',
  'skunk',
  'sloth',
  'snake',
  'squirrel',
  'tapir',
  'tiger',
  'toad',
  'turtle',
  'walrus',
  'warthog',
  'weasel',
  'whale',
  'wildcat',
  'wolf',
  'wolverine',
  'wombat',
  'woodchuck',
  'yak',
  'zebra',
];

/* RANDOM USER VALUE FUNCTION
    generates a user using a random selection from an array of 
    adjectives plus a random selection from an array of animals. 
    */
let usedNames = [];
// generates a value for the user and automatically assigns it
function generateUsername() {
  let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  let animal = animals[Math.floor(Math.random() * animals.length)];
  let username = `${adjective}_${animal}`;
  // checks if the user value is not present in the "usedNames" array.
  if (usedNames.indexOf(username) === -1) {
    usedNames.push(username);
    return username;
  } else {
    if (usedNames.length == 5412) {
      return;
    }
    return generateUsername();
  }
}
// automatically set the generated username as the input value
function setUsername() {
  let username = generateUsername();
  document.getElementById('user').value = username;
}
setUsername();

// REGENERATE USERNAME
let usernameInput = document.getElementById('user');
let generateBtn = document.querySelector('.re-gen');
let rotateIcon = document.querySelector('.spin');

generateBtn.addEventListener('click', function (e) {
  e.preventDefault;
  generateBtn.classList.remove('spin');
  void generateBtn.offsetWidth;
  generateBtn.classList.add('spin');

  let newName = generateUsername();
  usedNames[usedNames.length - 1] = newName;
  usernameInput.value = newName;
});

// SHOW / HIDE PASSWORD
const passwordInput = document.getElementById('password');
const showHideBtn = document.querySelector('.show-hide');
let isHidden = true;

showHideBtn.onclick = function () {
  if (isHidden) {
    passwordInput.type = 'text';
    showHideBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M150.7 92.77C195 58.27 251.8 32 320 32C400.8 32 465.5 68.84 512.6 112.6C559.4 156 590.7 207.1 605.5 243.7C608.8 251.6 608.8 260.4 605.5 268.3C592.1 300.6 565.2 346.1 525.6 386.7L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zM189.8 123.5L235.8 159.5C258.3 139.9 287.8 128 320 128C390.7 128 448 185.3 448 256C448 277.2 442.9 297.1 433.8 314.7L487.6 356.9C521.1 322.8 545.9 283.1 558.6 256C544.1 225.1 518.4 183.5 479.9 147.7C438.8 109.6 385.2 79.1 320 79.1C269.5 79.1 225.1 97.73 189.8 123.5L189.8 123.5zM394.9 284.2C398.2 275.4 400 265.9 400 255.1C400 211.8 364.2 175.1 320 175.1C319.3 175.1 318.7 176 317.1 176C319.3 181.1 320 186.5 320 191.1C320 202.2 317.6 211.8 313.4 220.3L394.9 284.2zM404.3 414.5L446.2 447.5C409.9 467.1 367.8 480 320 480C239.2 480 174.5 443.2 127.4 399.4C80.62 355.1 49.34 304 34.46 268.3C31.18 260.4 31.18 251.6 34.46 243.7C44 220.8 60.29 191.2 83.09 161.5L120.8 191.2C102.1 214.5 89.76 237.6 81.45 255.1C95.02 286 121.6 328.5 160.1 364.3C201.2 402.4 254.8 432 320 432C350.7 432 378.8 425.4 404.3 414.5H404.3zM192 255.1C192 253.1 192.1 250.3 192.3 247.5L248.4 291.7C258.9 312.8 278.5 328.6 302 333.1L358.2 378.2C346.1 381.1 333.3 384 319.1 384C249.3 384 191.1 326.7 191.1 255.1H192z"/></svg>`;
    isHidden = false;
  } else {
    passwordInput.type = 'password';
    showHideBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"/></svg>`;
    isHidden = true;
  }
};

// REAL TIME VALIDATION
const toggleSvg1 = document.getElementById('display-valid1');
const toggleSvg2 = document.getElementById('display-valid2');
const toggleSvg3 = document.getElementById('display-valid3');

let lowercaseRegex = /[a-z]/;
let uppercaseRegex = /[A-Z]/;
let numRegex = /\d/;
let specialRegex = /[!@#$%^&*]/;
// validation on type
passwordInput.addEventListener('keyup', function () {
  // check length
  if (passwordInput.value.length >= 12 && passwordInput.value.length <= 30) {
    toggleSvg1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="rgb(138, 230, 175)" d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg>`;
  } else if (
    passwordInput.value.length < 12 ||
    passwordInput.value.length > 30
  ) {
    toggleSvg1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="rgb(85, 85, 85)" d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg>`;
  }
  // check upper / lowercase
  if (
    passwordInput.value.match(lowercaseRegex) &&
    passwordInput.value.match(uppercaseRegex)
  ) {
    toggleSvg2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="rgb(138, 230, 175)" d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg>`;
  } else {
    toggleSvg2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="rgb(85, 85, 85)" d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg>`;
  }
  // check numbers / special characters
  if (
    passwordInput.value.match(specialRegex) &&
    passwordInput.value.match(numRegex)
  ) {
    toggleSvg3.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="rgb(138, 230, 175)" d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg>`;
  } else {
    toggleSvg3.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="rgb(85, 85, 85)" d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg>`;
  }
});
