function main() {
  const growMe = document.getElementById("grow-me");
  growMe.classList.add("big");
  const shrinkMe = document.getElementById("shrink-me");
  shrinkMe.classList.remove("big");

  const list = document.getElementsByTagName("li");
  console.log(list.textContent);

  const newLink = document.querySelector(".link");
  newLink.href = "https://www.example.com";
  newLink.textContent = "Somewhere";

  document.getElementById("hide-me").style.display = "none";
  document.getElementById("show-me").style.display = "block";

  const userName = document.getElementById("name").value;

  document.querySelector(
    "h1"
  ).textContent = `Welcome, ${userName}! Glad to have you here.`;
}
