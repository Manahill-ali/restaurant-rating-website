// Initial Ratings
const ratings = {
    Cleanliness: 4.7,
    Food: 3.4,
    Prices: 2.3,
    Services: 3.6
  }

  // Total Stars
  const starsTotal = 5;

  // Run getRatings when DOM loads
  document.addEventListener('DOMContentLoaded', getRatings);

  // Form Elements
  const termSelect = document.getElementById('term-select');
  const ratingControl = document.getElementById('rating-control');

  // Init term
  let term;

  // term select change
  termSelect.addEventListener('change', (e) => {
    term = e.target.value; //this means (term=what we have select)
    // console.log(term);  this allows me see what i clicked (food or whatever) from the list
    // Enable rating control
    ratingControl.disabled = false; //this allows me to write the raring in terms of the term that we select
    ratingControl.value = ratings[term];
  });

  // Rating control change
  ratingControl.addEventListener('blur', (e) => { //blur means change ones u escape the input
    const rating = e.target.value;

    // Make sure 5 or under
    if (rating > 5) {
      alert('Please rate 1 - 5');
      return;
    }

    // Change rating
    ratings[term] = rating;

    getRatings();
  });

  // Get ratings
  function getRatings() {
    for (let rating in ratings) {
      // Get percentage
      const starPercentage = (ratings[rating] / starsTotal) * 100;

      // Round to nearest 10
      const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`; 

      // Set width of stars-inner to percentage
      document.querySelector(`.${rating} .stars-inner`)
      .style.width = starPercentageRounded;

      // Add number rating
      document.querySelector(`.${rating} .number-rating`)
      .innerHTML = ratings[rating];
    }
  }

  