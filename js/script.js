// arrays to generate usernames
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
// SHOW / HIDE PASSWORD
let passwordInput = document.getElementById('password');
let showHideBtn = document.querySelector('.show-hide');
let isHidden = true;

showHideBtn.onclick = function () {
  if (isHidden) {
    passwordInput.type = 'text';
    isHidden = false;
  } else {
    passwordInput.type = 'password';
    isHidden = true;
  }
};
