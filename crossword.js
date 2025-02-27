array1 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
let number = 0;
check = document.getElementById("check");
check.addEventListener("click", checkfunction);
for (let i = 0; i <= 16; i++){
  hint = document.getElementById(`${array1[i]}input`);
  hint.addEventListener("click", hintfunction);
  
}


function hintfunction(){
  const hintnumber = this.id.replace("input", "");
  if(hintnumber == "one"){
    alert("This website name is in your browser.");
  }
  if(hintnumber == "two"){
    alert("Go to Poisonous V. Venomous Page");
  }
  if(hintnumber == "three"){
    alert("Go to Poster and Brochure Design");
  }
  if(hintnumber == "four"){
    alert("Go to Reptile Taxonomy");
  }if(hintnumber == "five"){
    alert("Go to Ways You Don't Know You Are Hurting Reptiles");
  }
  if(hintnumber == "six"){
    alert("Go to Author Bio");
  }
  if(hintnumber == "seven"){
    alert("Go to species bios number 2");
  }
  if(hintnumber == "eight"){
  alert("Go to Ways You Don't Know You Are Hurting Reptiles");
  }
  if(hintnumber == "ten"){
    alert("Go to Reptile Taxonomy");
  }
  if(hintnumber == "eleven"){
    alert("Go to Author Bio");
  }if(hintnumber == "twelve"){
    alert("Go to Reptile Fun Facts");
  }
  if(hintnumber == "thirteen"){
    alert("Go to Reptile Fun Facts");
  }if(hintnumber == "fourteen"){
    alert("Go to Benefits of Reptiles");
  }if(hintnumber == "fifteen"){
    alert("Go to Poster and Brochure Designs");
  }if(hintnumber == "sixteen"){
    alert("Go to Reptile Taxonomy");
  }if(hintnumber == "seventeen"){
    alert("Go to Crocodalia in Reptile Taxonomy");
  }
  
}



hinttwoInput.addEventListener("click", hintfunction);
function checkfunction() {
  const hintoneInput = document.getElementById('hintoneInput');
  const hinttwoInput = document.getElementById('hinttwoInput');
  const hintthreeInput = document.getElementById('hintthreeInput');
  const hintfourInput = document.getElementById('hintfourInput');
  const hintfiveInput = document.getElementById('hintfiveInput');
  const hintsixInput = document.getElementById('hintsixInput');
  const hintsevenInput = document.getElementById('hintsevenInput');
  const hinteightInput = document.getElementById('hinteightInput');
  const hinttenInput = document.getElementById('hinttenInput');
  const hintelevenInput = document.getElementById('hintelevenInput');
  const hinttwelveInput = document.getElementById('hinttwelveInput');
  const hintthirteenInput = document.getElementById('hintthirteenInput');
  const hintfourteenInput = document.getElementById('hintfourteenInput');
  const hintfifteenInput = document.getElementById('hintfifteenInput');
  const hintsixteenInput = document.getElementById('hintsixteenInput');
  const hintseventeenInput = document.getElementById('hintseventeenInput');

  let onecorrect = "false";
  let twocorrect = "false";
  let threecorrect = "false";
  let fourcorrect = "false";
  let fivecorrect = "false";
  let sixcorrect = "false";
  let sevencorrect = "false";
  let eightcorrect = "false";
  let tencorrect = "false";
  let elevencorrect = "false";
  let twelvecorrect = "false";
  let thirteencorrect = "false";
  let fourteencorrect = "false";
  let fifteencorrect = "false";
  let sixteencorrect = "false";
  let seventeencorrect = "false";
  
  

  let Inputone = hintoneInput.value;
  let Inputtwo = hinttwoInput.value;
  let Inputthree = hintthreeInput.value;
  let Inputfour = hintfourInput.value;
  let Inputfive = hintfiveInput.value;
  let Inputsix = hintsixInput.value;
  let Inputseven = hintsevenInput.value;
  let Inputeight = hinteightInput.value;
  let Inputten = hinttenInput.value;
  let Inputeleven = hintelevenInput.value;
  let Inputtwelve = hinttwelveInput.value;
  let Inputthirteen = hintthirteenInput.value;
  let Inputfourteen = hintfourteenInput.value;
  let Inputfifteen = hintfifteenInput.value;
  let Inputsixteen = hintsixteenInput.value;
  let Inputseventeen = hintseventeenInput.value;
  if(Inputone == "herpetologyhub"){
    qoneone.innerHTML = "1h";
    qonetwo.innerHTML = "e";
    qonethree.innerHTML = "r";
    qonefour.innerHTML = "p";
    qonefive.innerHTML = "e";
    qonesix.innerHTML = "t";
    qoneseven.innerHTML = "o";
    qoneeight.innerHTML = "l";
    qonenine.innerHTML = "o";
    qoneten.innerHTML = "g";
    qoneeleven.innerHTML = "y";
    qonetwelve.innerHTML = "h";
    qonethirteen.innerHTML = "u";
    qonefourteen.innerHTML = "b";
    onecorrect = "true";
  }
  if(Inputtwo == "venomous"){
    qtwoone.innerHTML = "2v";
    qonefive.innerHTML = "e";
    qtwothree.innerHTML = "n";
    qtwofour.innerHTML = "o";
    qtwofive.innerHTML = "m";
    qtwosix.innerHTML = "o";
    qtwoseven.innerHTML = "u";
    qtwoeight.innerHTML = "s";
    twocorrect = "true";
  }
  if(Inputthree == "lymedisease"){
    qthreeone.innerHTML = "3l";
    qthreetwo.innerHTML = "y";
    qtwofive.innerHTML = "m";
    qthreefour.innerHTML = "e";
    qthreefive.innerHTML = "d";
    qthreesix.innerHTML = "i";
    qthreeseven.innerHTML = "s";
    qthreeeight.innerHTML = "e";
    qthreenine.innerHTML = "a";
    qthreeten.innerHTML = "s";
    qthreeeleven.innerHTML = "e";
    threecorrect = "true";
  }
  if(Inputfour == "squamata"){
    qtwoeight.innerHTML = "4s";
    qfourtwo.innerHTML = "q";
    qfourthree.innerHTML = "a";
    qfourfour.innerHTML = "u";
    qfourfive.innerHTML = "m";
    qfoursix.innerHTML = "a";
    qfourseven.innerHTML = "t";
    qfoureight.innerHTML = "a";
    fourcorrect = "true";
  }
  if(Inputfive == "gluetraps"){
    qoneten.innerHTML = "5g";
    qfivetwo.innerHTML = "l";
    qfivethree.innerHTML = "u";
    qthreeeight.innerHTML = "e";
    qfivefive.innerHTML = "t";
    qfivesix.innerHTML = "r";
    qfoursix.innerHTML = "a";
    qfiveeight.innerHTML = "p";
    qfivenine.innerHTML = "s";
    fivecorrect = "true";
  }
  if(Inputsix == "nacho"){
    qsixone.innerHTML = "6n";
    qfoureight.innerHTML = "a";
    qsixthree.innerHTML = "c";
    qsixfour.innerHTML = "h";
    qsixfive.innerHTML = "o";
    sixcorrect = "true";
  }
  if(Inputseven == "chinesealligator"){
    qsixthree.innerHTML = "7c";
    qseventwo.innerHTML = "h";
    qseventhree.innerHTML = "i";
    qsevenfour.innerHTML = "n";
    qsevenfive.innerHTML = "e";
    qsevensix.innerHTML = "s";
    qsevenseven.innerHTML = "e";
    qseveneight.innerHTML = "a";
    qsevennine.innerHTML = "l";
    qseventen.innerHTML = "l";
    qseveneleven.innerHTML = "i";
    qseventwelve.innerHTML = "g";
    qseventhirteen.innerHTML = "a";
    qsevenfourteen.innerHTML = "t";
    qsevenfifteen.innerHTML = "o";
    qsevensixteen.innerHTML = "r";
    sevencorrect = "true";
    
  }
  if(Inputeight == "outdoorcats"){
    qnineone.innerHTML = "9o";
    qninetwo.innerHTML = "u";
    qninethree.innerHTML = "t";
    qninefour.innerHTML = "d";
    qninefive.innerHTML = "o";
    qninesix.innerHTML = "o";
    qnineseven.innerHTML = "r";
    qnineeight.innerHTML = "c";
    qninenine.innerHTML = "a";
    qnineten.innerHTML = "t";
    qfivenine.innerHTML = "s";
    ninecorrect = "true";
  }
  if(Inputten == "crocodalia"){
    qtenone.innerHTML = "10c";
    qtentwo.innerHTML = "r";
    qtenthree.innerHTML = "o";
    qtenfour.innerHTML = "c";
    qtenfive.innerHTML = "o";
    qtensix.innerHTML = "d";
    qtenseven.innerHTML = "a";
    qteneight.innerHTML = "l";
    qtennine.innerHTML = "i";
    qseveneight.innerHTML = "a";
    tencorrect = "true";
  }
  if(Inputeleven == "educate"){
    qelevenone.innerHTML = "11e";
    qtensix.innerHTML = "d";
    qeleventhree.innerHTML = "u";
    qelevenfour.innerHTML = "c";
    qelevenfive.innerHTML = "a";
    qelevensix.innerHTML = "t";
    qelevenseven.innerHTML = "e";
    elevencorrect = "true";
  }
  if(Inputtwelve == "temperature"){
    qsevenfourteen.innerHTML = "12t";
    qtwelvetwo.innerHTML = "e";
    qtwelvethree.innerHTML = "m";
    qtwelvefour.innerHTML = "p";
    qtwelvefive.innerHTML = "e";
    qtwelvesix.innerHTML = "r";
    qtwelveseven.innerHTML = "a";
    qtwelveeight.innerHTML = "t";
    qtwelvenine.innerHTML = "u";
    qtwelveten.innerHTML = "r";
    qtwelveeleven.innerHTML = "e";
    twelvecorrect = "true";
  }
  if(Inputthirteen == "eyes"){
    qthirteenone.innerHTML = "13e";
    qthirteentwo.innerHTML = "y";
    qtwelveeleven.innerHTML = "e";
    qthirteenfour.innerHTML = "s";
    thirteencorrect = "true";
  }
  if(Inputfourteen == "ecosystem"){
    qfourteenone.innerHTML = "14e";
    qfourteentwo.innerHTML = "c";
    qfourteenthree.innerHTML = "o";
    qfourteenfour.innerHTML = "s";
    qfourteenfive.innerHTML = "y";
    qfourteensix.innerHTML = "s";
    qtwelveeight.innerHTML = "t";
    qfourteeneight.innerHTML = "e";
    qfourteennine.innerHTML = "m";
    fourteencorrect = "true";
  }
  if(Inputfifteen == "tourniquet"){
    qnineten.innerHTML = "15t";
    qfifteentwo.innerHTML = "o";
    qfifteenthree.innerHTML = "u";
    qfifteenfour.innerHTML = "r";
    qfifteenfive.innerHTML = "n";
    qfifteensix.innerHTML = "i";
    qfifteenseven.innerHTML = "q";
    qfifteeneight.innerHTML = "u";
    qfifteennine.innerHTML = "e";
    qfifteenten.innerHTML = "t";
    fifteencorrect = "true";
  }
  if(Inputsixteen == "testudine"){
    qsixteenone.innerHTML = "16t";
    qsixteentwo.innerHTML = "e";
    qsixteenthree.innerHTML = "s";
    qsixteenfour.innerHTML = "t";
    qsixteenfive.innerHTML = "u";
    qsixteensix.innerHTML = "d";
    qsixteenseven.innerHTML = "i";
    qsixteeneight.innerHTML = "n";
    qtwelvefive.innerHTML = "e";
    sixteencorrect = "true";
  }
  if(Inputseventeen == "two"){
    qsixteenone.innerHTML = "17t";
    qseventeentwo.innerHTML = "w";
    qseventeenthree.innerHTML = "o";
    seventeencorrect = "true";
  }
 
  if(onecorrect == "true" && twocorrect == "true" && threecorrect == "true" && fourcorrect == "true" && fivecorrect == "true" && sixcorrect == "true" && sevencorrect == "true" && ninecorrect == "true" && tencorrect == "true" && elevencorrect == "true" && twelvecorrect == "true" && thirteencorrect == "true" && fourteencorrect == "true" && fifteencorrect == "true" && seventeencorrect == "true"){
    location.href = 'http://www.herpetologyhub.com/index.html';
  }
}



