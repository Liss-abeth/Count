// set inital cound
let count=0;

// select values and buttons

const values = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      values.style.color = "#EBD3F8";
    } else if (count < 0) {
      values.style.color = "#B6EADA";
    } else {
      values.style.color = "#F9E400";
    }
    values.textContent = count;
  });
}

console.log(btns);
