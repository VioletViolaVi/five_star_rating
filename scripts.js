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
      threeStars.style.color = "#dcdcdc";
      fourStars.style.color = "#dcdcdc";
      fiveStars.style.color = "#dcdcdc";
    });
  };
  oneStarRating();

  // two star rating
  const twoStarRating = () => {
    const secondBtn = document.getElementById("secondBtn");
    secondBtn.addEventListener("click", () => {
      oneStar.style.color = "#fdff00";
      twoStars.style.color = "#fdff00";
      threeStars.style.color = "#dcdcdc";
      fourStars.style.color = "#dcdcdc";
      fiveStars.style.color = "#dcdcdc";
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
      fourStars.style.color = "#dcdcdc";
      fiveStars.style.color = "#dcdcdc";
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
      fiveStars.style.color = "#dcdcdc";
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
