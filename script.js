function playSound() { 
    var randomNoise = Math.floor((Math.random() * 10)%3); 
    console.log(randomNoise);
    var sound = document.getElementById("AudioRoulette" + randomNoise); 
    sound.play(); 
  } 