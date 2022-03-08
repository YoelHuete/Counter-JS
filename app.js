// Set initial count
let count = 0;

// Select value and
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
      value.textContent = count;
    } else if (styles.contains("increase")) {
      count++;
      value.textContent = count;
    } else {
      count = 0;
      value.textContent = count;
    }
    if (count >= 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }

    if (count === 0) {
      value.style.color = "#222";
    }
  });
});
