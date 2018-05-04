alert("Welcome to the DCY safe space, hope you find everything well. =]")
document.getElementById("columnA").onclick=numbas;
document.getElementById("columnB").onclick=strategy;
document.getElementById("columnC").onclick=helpLine;
document.getElementById("getIt").onclick=blog;
document.getElementById("getItB").onclick=login;
document.getElementById("getItC").onclick=signup;

$(document).ready(function(){

  var carousel = ["mental/pic4.png","mental/pic7.png","mental/pic5.png","mental/pic2.png",
  "mental/pic8.png","mental/pic6.png","mental/images-1.jpg"];
  var indexV = 0;
  var clickCount = 0;
  //create event listener
  //= is assignment
  //zebra-- \\
  //random on 3rd selection
  $(".buttonA").eq(1).on("click", function(){
    clickCount++
    // if(clickCount === 3){
    //   clickCount = 0;
    //   var random = Math.round(Math.random()*carousel.length-1)
    //   $("carousel").attr("src",carousel[random]);
    //   indexV = random
    // }
    if(indexV == carousel.length-1){
      indexV = 0
    }
    else{
      indexV = indexV + 1
    }
    $("#slot").attr("src",carousel[indexV]);
    console.log(carousel)
  });
  //zebra++\\
  //clickCount--
  //if(clickCount === 3){
  //  clickCount = 0;
  //  var random = Math.round(Math.random()*7)
  //  $("carousel").attr("src",carousel[random]);
  //  indexV = random
  $(".buttonA").eq(0).on("click",function(){
    if(indexV == 0){
      indexV = carousel.length-1
    }
    else{
      indexV = indexV - 1
    }
    $("#slot").attr("src",carousel[indexV]);
    console.log(carousel)
  });
});

function numbas() {
  var stats = window.open('https://www.nimh.nih.gov/health/statistics/mental-illness.shtml#part_154784')
}
function strategy() {
  var cope = window.open('http://www.mhww.org/strategies.html')
}
function helpLine() {
  var help = window.open('https://www.nami.org/Find-Support/NAMI-HelpLine')
}
function blog() {
  var post = window.open('http://localhost:8080/')
}
function login() {
  var post = window.open('http://localhost:8080/login')
}
function signup() {
  var post = window.open('http://localhost:8080/signup')
}
