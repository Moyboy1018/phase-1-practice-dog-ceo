console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    // Challenge 1: Fetch and Display Dog Images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          imageContainer.appendChild(img);
        });
      });
  
    // Challenge 2 & 3: Fetch and Display Dog Breeds + Change Font Color on Click
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.getElementById('dog-breeds');
    let allBreeds = [];
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        allBreeds = Object.keys(data.message);
        renderBreeds(allBreeds);
      });
  
    // Challenge 3: Change font color of breed on click
    breedList.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue'; 
      }
    });
  
    // Challenge 4: Filter Breeds by First Letter
    const breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', function(event) {
      const selectedLetter = event.target.value;
      const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
      renderBreeds(selectedLetter === "all" ? allBreeds : filteredBreeds);
    });
  
    // Function to render breeds
    function renderBreeds(breeds) {
      breedList.innerHTML = '';  // Clear existing breeds
      breeds.forEach(breed => {
        const li = document.createElement('li');
        li.textContent = breed;
        breedList.appendChild(li);
      });
    }
  });
  