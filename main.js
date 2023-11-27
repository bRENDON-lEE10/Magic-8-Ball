// Magic 8 Ball

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a Random Number
  let randNum = Math.random();
  console.log(randNum);
  let response = document.getElementById("response").value;

  // Simulate responses
  if (response === "") {
    document.getElementById("output").innerHTML = "Please ask a question...";
  } else if (response === "Does a magic 8 ball actually work?") {
    document.getElementById("output").innerHTML = "How dare you doubt me!";
  } else if (response === "Is JavaScript awesome?") {
    document.getElementById("output").innerHTML = "Of Course!";
  } else if (randNum < 0.2) {
    document.getElementById("output").innerHTML = "Without a Doubt.";
  } else if (randNum < 0.4) {
    document.getElementById("output").innerHTML = "As I see it, yes.";
  } else if (randNum < 0.7) {
    document.getElementById("output").innerHTML = "Concentrate and ask again.";
  } else if (randNum < 0.8) {
    document.getElementById("output").innerHTML = "Don't count on it.";
  } else {
    document.getElementById("output").innerHTML = " Outlook not so good.";
  }
}
