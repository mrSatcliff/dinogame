const character = getElementById("character");
const block = getElementById("block");
let counter = 0;
function jump() {
  if(character.classList == "jump-animation") {return}
    character.classList.add("jump-animation");
    setTimeout(function(){
      character.classList.remove("jump-animation");
    },300);
  }

let checkDead = setInterval(function() {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top"));
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<20 && blockLeft>-20 && characterTop >=130){
      block.style.animation = "none";
      block.style.display = "none";
      alert ("Your score : "+Math.floor(counter/100));
      counter=0;
      block.style.animation = "block 1s infinite linear";
    }else{
      counter++;
    }

},0);

