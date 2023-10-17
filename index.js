document.addEventListener("DOMContentLoaded", function() {
  const ageInput = document.getElementById("age");
  const searchButton = document.getElementById("btn-search");
  const resultText = document.getElementById("result-text");

  searchButton.addEventListener("click", function(event) {event.preventDefault();
      const age = parseInt(ageInput.value);

      if (isNaN(age)) {
          resultText.innerHTML = "Please enter your age.";
      } else if (age < 0 || age > 130) {
          resultText.innerHTML = "Unsupported Number.";
      } else if (age < 2) {
          resultText.innerHTML = '<a href="https://en.wikipedia.org/wiki/Infant" target="_blank">Your ages stage is INFANCY. Click for more... </a>';
      } else if (age >= 2 && age < 3) {
          resultText.innerHTML = '<a href="https://en.wikipedia.org/wiki/Early_childhood" target="_blank">Your ages stage is EARLYCHILDHOOD. Click for more... </a>';
      } else if (age >= 3 && age <= 5) {
          resultText.innerHTML = '<a href="https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/preschoolers.html" target="_blank">Your ages stage is PRE-SCHOOL. Click for more... </a>';
      } else if (age > 5 && age <= 11) {
          resultText.innerHTML = '<a href="https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/middle.html" target="_blank">Your ages stage is SCHOOL-AGE. Click for more... </a>';
      } else if (age > 11 && age <= 18) {
          resultText.innerHTML = '<a href="https://en.wikipedia.org/wiki/Adolescencet" target="_blank">Your ages stage is ADOLESCENE. Click for more... </a>';
      } else if (age > 18 && age <= 40) {
          resultText.innerHTML = '<a href="https://en.wikipedia.org/wiki/Young_adult" target="_blank">Your ages stage is YOUNG-ADULT. Click for more... </a>';
      } else if (age > 40 && age <= 65) {
          resultText.innerHTML = '<a href="https://en.wikipedia.org/wiki/Middle_age" target="_blank">Your ages stage is MIDDLE-ADULT. Click for more... </a>';
      } else {
          resultText.innerHTML = '<a href="https://en.wikipedia.org/wiki/Old_age" target="_blank">Your ages stage is MADURITY. Click for more... </a>';
      }
  });
});