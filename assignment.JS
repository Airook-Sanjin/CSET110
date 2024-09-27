function multiple() {
  let userinput = prompt("Give me a number");
  let howmany = prompt("How many times do you want to mulitply this number");
  let container = document.getElementById("question1");
  for (i = 0; i <= howmany; i++) {
    let sum = userinput * i;
    let ele = document.createElement("p");

    ele.innerHTML = `${userinput} * ${i} = ${sum}`;
    container.appendChild(ele);
    console.log(ele);
  }
}
function createBox() {
  let count = 1;
  let question2 = document.getElementById("question2");
  let b1 = document.getElementById("b1");
  let buttons = [];
  let originalcolors = [];

  let redbtn = document.createElement("BUTTON");
  let greenbtn = document.createElement("BUTTON");
  let bluebtn = document.createElement("BUTTON");
  let rdmbtn = document.createElement("BUTTON");

  for (i = 0; i <= 9; i++) {
    const originalr = Math.floor(Math.random() * 256);
    const originalg = Math.floor(Math.random() * 256);
    const originalb = Math.floor(Math.random() * 256);
    let btn = document.createElement("BUTTON");
    var original = `rgb(${originalr}, ${originalg}, ${originalb})`;
    btn.innerHTML = `Button` + count++;
    btn.style.backgroundColor = original;
    question2.appendChild(btn);
    buttons.push(btn);
    originalcolors.push(original);
    console.log(btn);
  }
  function colorChanger(color) {
    buttons.forEach((btn) => {
      btn.style.backgroundColor = color;
    });
  }
  question2.appendChild(document.createElement("br"));
  question2.appendChild(document.createElement("br"));

  redbtn.innerHTML = `Red`;
  redbtn.addEventListener("click", function () {
    colorChanger(`rgb(${256}, ${0}, ${0})`);
  });
  bluebtn.innerHTML = `Blue`;
  bluebtn.addEventListener("click", function () {
    colorChanger(`rgb(${0}, ${0}, ${256})`);
  });
  greenbtn.innerHTML = `Green`;
  greenbtn.addEventListener("click", function () {
    colorChanger(`rgb(${0}, ${256}, ${0})`);
  });
  rdmbtn.innerHTML = `Random`;

  rdmbtn.addEventListener("click", function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    colorChanger(`rgb(${r}, ${g}, ${b})`);
  });
  b1.remove();
  question2.appendChild(redbtn);
  question2.appendChild(bluebtn);
  question2.appendChild(greenbtn);
  question2.appendChild(rdmbtn);
  question2.appendChild(document.createElement("br"));
  question2.appendChild(document.createElement("br"));
  let resetbtn = document.createElement("BUTTON");

  resetbtn.innerHTML = "Reset Colors";
  resetbtn.addEventListener("click", function () {
    buttons.forEach((btn, index) => {
      btn.style.backgroundColor = originalcolors[index];
    });
  });
  question2.appendChild(resetbtn);
}
