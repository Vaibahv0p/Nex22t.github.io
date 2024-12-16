const sounds = {
  C: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'),
  'C-sharp': new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'),
  D: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'),
  'D-sharp': new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'),
  E: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'),
  F: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'),
  'F-sharp': new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'),
  G: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'),
  'G-sharp': new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'),
  A: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'),
  'A-sharp': new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3'),
  B: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3'),
  C2: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3')
};

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', () => {
    const note = key.id;
    sounds[note].currentTime = 0;
    sounds[note].play();
  });
});

document.querySelectorAll('.black-key').forEach(key => {
  key.addEventListener('click', () => {
    const note = key.id;
    sounds[note].currentTime = 0;
    sounds[note].play();
  });
});
