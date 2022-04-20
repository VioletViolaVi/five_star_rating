document.addEventListener("DOMContentLoaded", function (event) {
  // one star function
  const oneStarRating = () => {
    const firstBtn = document.getElementById("firstBtn");
    firstBtn.addEventListener("click", () => {
      const oneStar = document.getElementById("oneStar");
      oneStar.style.color = "#fdff00";
    });
  };
  oneStarRating();
});
