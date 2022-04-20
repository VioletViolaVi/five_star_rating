document.addEventListener("DOMContentLoaded", () => {
  // star icon ids
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
      twoStars.style.color = "#5d3954";
      threeStars.style.color = "#5d3954";
      fourStars.style.color = "#5d3954";
      fiveStars.style.color = "#5d3954";
    });
  };
  oneStarRating();

  // two star rating
  const twoStarRating = () => {
    const secondBtn = document.getElementById("secondBtn");
    secondBtn.addEventListener("click", () => {
      oneStar.style.color = "#fdff00";
      twoStars.style.color = "#fdff00";
      threeStars.style.color = "#5d3954";
      fourStars.style.color = "#5d3954";
      fiveStars.style.color = "#5d3954";
    });
  };
  twoStarRating();

  // three star rating
  const threeStarRating = () => {
    const thirdBtn = document.getElementById("thirdBtn");
    thirdBtn.addEventListener("click", () => {
      oneStar.style.color = "#fdff00";
      twoStars.style.color = "#fdff00";
      threeStars.style.color = "#fdff00";
      fourStars.style.color = "#5d3954";
      fiveStars.style.color = "#5d3954";
    });
  };
  threeStarRating();

  // four star rating
  const fourStarRating = () => {
    const fourthBtn = document.getElementById("fourthBtn");
    fourthBtn.addEventListener("click", () => {
      oneStar.style.color = "#fdff00";
      twoStars.style.color = "#fdff00";
      threeStars.style.color = "#fdff00";
      fourStars.style.color = "#fdff00";
      fiveStars.style.color = "#5d3954";
    });
  };
  fourStarRating();

  // five star rating
  const fiveStarRating = () => {
    const fifthBtn = document.getElementById("fifthBtn");
    fifthBtn.addEventListener("click", () => {
      oneStar.style.color = "#fdff00";
      twoStars.style.color = "#fdff00";
      threeStars.style.color = "#fdff00";
      fourStars.style.color = "#fdff00";
      fiveStars.style.color = "#fdff00";
    });
  };
  fiveStarRating();
});
