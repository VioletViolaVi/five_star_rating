document.addEventListener("DOMContentLoaded", () => {
  // star ids
  const oneStar = document.getElementById("oneStar");
  const twoStars = document.getElementById("twoStars");
  const threeStars = document.getElementById("threeStars");
  const fourStars = document.getElementById("fourStars");
  const fiveStars = document.getElementById("fiveStars");

  // one star rating
  const oneStarRating = () => {
    const firstBtn = document.getElementById("firstBtn");
    firstBtn.addEventListener("click", () => {
      oneStar.style.color = "#fdff00";
      twoStars.style.color = "#dcdcdc";
    });
  };
  oneStarRating();

  // two star rating
  const twoStarRating = () => {
    const secondBtn = document.getElementById("secondBtn");
    secondBtn.addEventListener("click", () => {
      oneStar.style.color = "#fdff00";
      twoStars.style.color = "#fdff00";
    });
  };
  twoStarRating();
});
