<!DOCTYPE html>  
<html lang="ko">  
<head>  
<meta charset="UTF-8">  
<title>**한국** **지도** **암기** **게임**</title>  
  
<style>  
body {  
  text-align: center;  
  font-family: Arial;  
  background: #f2f2f2;  
}  
  
h1 {  
  margin-top: 20px;  
}  
  
#stats {  
  display: flex;  
  justify-content: space-around;  
  margin: 10px;  
  font-weight: bold;  
}  
  
#timer {  
  font-size: 20px;  
  margin: 10px;  
}  
  
.map {  
  position: relative;  
  width: 90vw;  
  max-width: 400px;  
  margin: auto;  
}  
  
.map img {  
  width: 100%;  
}  
  
/* **클릭** **영역** */  
.region {  
  position: absolute;  
  opacity: 0.3;  
}  
  
/* **위치** (**대충** **학습용**) */  
.gangwon { top: 15%; right: 15%; width: 30%; height: 25%; background: green; }  
.gyeonggi { top: 30%; left: 25%; width: 30%; height: 25%; background: blue; }  
.gyeongnam { bottom: 10%; right: 20%; width: 30%; height: 25%; background: red; }  
  
.correct { outline: 5px solid lime; }  
.wrong { outline: 5px solid red; }  
</style>  
</head>  
  
<body>  
  
<h1>**한국** **지도** **암기** **게임**</h1>  
  
<div id="stats">  
  <div id="lives">❤️❤️❤️❤️</div>  
  <div id="score">**점수**: 0</div>  
  <div id="level">**레벨**: 1</div>  
</div>  
  
<div id="question">**게임** **시작** **버튼을** **눌러주세요**</div>  
<div id="timer">⏱ 10</div>  
  
<div class="map">  
  <!-- **간단** **지도** **대신** **박스** **구조** -->  
  <img src="https://i.imgur.com/8b1ZQ0h.png">  
  
  <div class="region gangwon" onclick="check('**강원도**')"></div>  
  <div class="region gyeonggi" onclick="check('**경기도**')"></div>  
  <div class="region gyeongnam" onclick="check('**경상남도**')"></div>  
</div>  
  
<br>  
<button onclick="startGame()">START</button>  
  
<script>  
let regions = ["**강원도**","**경기도**","**경상남도**"];  
let answer = "";  
let lives = 4;  
let score = 0;  
let level = 1;  
let timer;  
let time = 10;  
  
function startGame(){  
  lives=4; score=0; level=1;  
  updateUI();  
  next();  
}  
  
function next(){  
  answer = regions[Math.floor(Math.random()*regions.length)];  
  document.getElementById("question").innerText = answer + " **찾기**!";  
  startTimer();  
}  
  
function check(sel){  
  if(sel===answer){  
    score+=10;  
    flash(sel,true);  
    next();  
  }else{  
    lives--;  
    flash(sel,false);  
    if(lives<=0){  
      alert("**게임** **종료**! **점수**:"+score);  
      location.reload();  
    }  
  }  
  updateUI();  
}  
  
function updateUI(){  
  document.getElementById("lives").innerText="❤️".repeat(lives);  
  document.getElementById("score").innerText="**점수**: "+score;  
  document.getElementById("level").innerText="**레벨**: "+level;  
}  
  
function startTimer(){  
  clearInterval(timer);  
  time=10;  
  timer=setInterval(()=>{  
    document.getElementById("timer").innerText="⏱ "+time;  
    time--;  
    if(time<0){  
      lives--;  
      updateUI();  
      next();  
    }  
  },1000);  
}  
  
function flash(sel,ok){  
  let el=document.querySelector("."+ (sel==="**강원도**"?"gangwon":sel==="**경기도**"?"gyeonggi":"gyeongnam"));  
  if(!el) return;  
  el.classList.add(ok?"correct":"wrong");  
  setTimeout(()=>el.classList.remove("correct","wrong"),500);  
}  
</script>  
  
</body>  
</html>  
