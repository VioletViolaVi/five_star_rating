document.addEventListener("DOMContentLoaded", () => {
  // star icon ids
  const oneStar = document.getElementById("oneStar");
  const twoStars = document.getElementById("twoStars");
  const threeStars = document.getElementById("threeStars");
  const fourStars = document.getElementById("fourStars");
  const fiveStars = document.getElementById("fiveStars");

  // one star rating
  const oneStarRating = () => {
    const oneStar = document.getElementById("oneStar");
    oneStar.addEventListener("click", () => {
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
    const twoStars = document.getElementById("twoStars");
    twoStars.addEventListener("click", () => {
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
    const threeStars = document.getElementById("threeStars");
    threeStars.addEventListener("click", () => {
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
    const fourStars = document.getElementById("fourStars");
    fourStars.addEventListener("click", () => {
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
    const fiveStars = document.getElementById("fiveStars");
    fiveStars.addEventListener("click", () => {
      oneStar.style.color = "#fdff00";
      twoStars.style.color = "#fdff00";
      threeStars.style.color = "#fdff00";
      fourStars.style.color = "#fdff00";
      fiveStars.style.color = "#fdff00";
    });
  };
  fiveStarRating();
});
