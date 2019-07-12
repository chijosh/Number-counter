(function() {
  let counterValue = 0;

  // Get dom elements into js
  const buttons = document.querySelectorAll(".counterBtn");
  const counter = document.getElementById("counter");

  //loop through the buttons, and listen for clicks while looping.
  buttons.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      //check which button is clicked
      const value = event.target;

      //when button is clicked, increment or decrement value
      if (value.classList.contains("prevBtn")) {
        counterValue--;
      } else if (value.classList.contains("nextBtn")) {
        counterValue++;
      }
      //Pass the value to the dom
      counter.textContent = counterValue;
      //change value color depending of the below conditions
      if (counterValue === 0) {
        counter.style.color = "#333333";
      } else if (counterValue < 0) {
        counter.style.color = "#f6511d";
      } else if (counterValue > 0) {
        counter.style.color = "#7fb800";
      }
    });
  });
  //
})();
