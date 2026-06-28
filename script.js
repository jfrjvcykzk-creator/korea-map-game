const data = [
  {
    q: "강원도의 도청 소재지는?",
    choices: ["춘천", "원주", "강릉", "속초"],
    answer: "춘천"
  },
  {
    q: "경상북도의 도청 소재지는?",
    choices: ["포항", "대구", "안동", "구미"],
    answer: "안동"
  },
  {
    q: "전라남도의 도청 소재지는?",
    choices: ["목포", "여수", "순천", "광주"],
    answer: "무안"
  }
];

let index = 0;
let life = 4;
let level = 1;
let score = 0;

function loadQuestion() {
  const q = data[index];
  document.getElementById("question").innerText = q.q;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  q.choices.forEach(c => {
    const btn = document.createElement("button");
    btn.innerText = c;
    btn.onclick = () => checkAnswer(c);
    choicesDiv.appendChild(btn);
  });
}

function checkAnswer(choice) {
  const q = data[index];

  if (choice === q.answer) {
    document.getElementById("result").innerText = "✅ 정답!";
    score++;
  } else {
    document.getElementById("result").innerText = "❌ 틀림!";
    life--;
    document.getElementById("life").innerText = life;
  }

  if (score >= 3) level = 2;
  if (score >= 6) level = 3;

  document.getElementById("level").innerText = level;

  index++;
  if (index >= data.length || life <= 0) {
    document.getElementById("question").innerText = "게임 종료!";
    document.getElementById("choices").innerHTML = "";
    return;
  }

  setTimeout(loadQuestion, 800);
}

loadQuestion();
