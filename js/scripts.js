// console.log('OK');

const player = new Plyr("#player", {
    controls: ['captions'],
    keyboard: {focused: true, global: true},
    ads: { enabled: false, publisherId: '' },
    autoplay: true,
    loop: { active: true },
    captions: { active: true, language: 'auto'}
    
  });
  console.log(player);  
  