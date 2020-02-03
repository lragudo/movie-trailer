// console.log('OK');

const player = new Plyr("#player", {
    controls: ['captions'],
    keyboard: {focused: true, global: true},
    ads: { enabled: false, publisherId: '' },
    autoplay: true,
    clickToPlay: true,
    loop: { active: true }
    
  });
  console.log(player);  
  