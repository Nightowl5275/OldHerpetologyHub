one = document.getElementById("oneb");
onediv = document.getElementById("onediv");
two = document.getElementById("twob");
three = document.getElementById("threeb");
four= document.getElementById("fourb");
five = document.getElementById("fiveb");
six = document.getElementById("sixb");
seven = document.getElementById("sevenb");
eight = document.getElementById("eightb");

one.addEventListener("click", onebutton);
two.addEventListener("click", twobutton);
three.addEventListener("click", threebutton);
four.addEventListener("click", fourbutton);
five.addEventListener("click", fivebutton);
six.addEventListener("click", sixbutton);
seven.addEventListener("click",sevenbutton);
eight.addEventListener("click", eightbutton);
one.addEventListener("click", buttonpressed);
two.addEventListener("click", buttonpressed);
three.addEventListener("click", buttonpressed);
four.addEventListener("click", buttonpressed);
five.addEventListener("click", buttonpressed);
six.addEventListener("click", buttonpressed);
seven.addEventListener("click", buttonpressed);
eight.addEventListener("click", buttonpressed);
let buttoncount = 0;
let buttonOnePressed  = 0;
let buttonTwoPressed  = 0;
let buttonThreePressed  = 0;
let buttonFourPressed  = 0;
let buttonFivePressed  = 0;
let buttonSixPressed  = 0;
let buttonSevenPressed  = 0;
let buttonEightPressed  = 0;
let rowone = "false";
let rowtwo = "false";
let rowthree = "false";
let rowfour = "false";
function onebutton(){
  one = 1
}
function twobutton(){
  two = 1
}
function threebutton(){
  three = 1
}
function fourbutton(){
  four = 1
}
function fivebutton(){
  five = 1
}
function sixbutton(){
  six = 1
}
function sevenbutton(){
  seven = 1
}
function eightbutton(){
  eight = 1
}
function buttonpressed(){
  buttoncount++;
  if (buttoncount == 2){
    if(one == 1 && six == 1){
      rowone = "true";
      one = 0
      six = 0
      oneb.style.borderColor= "#3cb371";
      sixb.style.borderColor= "#3cb371";
    }
    else if(three == 1 && eight == 1){
      rowtwo = "true";
      three = 0
      eight = 0
      threeb.style.borderColor= "#3cb371";
      eightb.style.borderColor= "#3cb371";
    }
    else if(five == 1 && two == 1){
      rowthree = "true";
      five = 0
      two = 0
      fiveb.style.borderColor= "#3cb371";
      twob.style.borderColor= "#3cb371";
    }
    else if(seven == 1 && four == 1){
      rowfour = "true";
      seven = 0
      four = 0
      sevenb.style.borderColor= "#3cb371";
      fourb.style.borderColor= "#3cb371";
    }
    else{
      oneb.style.borderColor= "red";
      twob.style.borderColor= "red";
      threeb.style.borderColor= "red";
      fourb.style.borderColor= "red";
      fiveb.style.borderColor= "red";
      sixb.style.borderColor= "red";
      sevenb.style.borderColor= "red";
      eightb.style.borderColor= "red";
      
      setTimeout(() => {
        oneb.style.borderColor= "#545454";
        twob.style.borderColor= "#545454";
        threeb.style.borderColor= "#545454";
        fourb.style.borderColor= "#545454";
        fiveb.style.borderColor= "#545454";
        sixb.style.borderColor= "#545454";
        sevenb.style.borderColor= "#545454";
        eightb.style.borderColor= "#545454";
      }, 500);
      one = 0
      two = 0
      three = 0
      four = 0
      five = 0
      six = 0
      seven = 0
      eight = 0
    }
    buttoncount = 0
  }
  if(rowone == "true" && rowtwo == "true" && rowthree == "true" && rowfour == "true"){
    location.href = 'congrats.html';
  }
}
