// This file communicates with the API (through the proxy) and collects the necessary information
// about each restaurant for the postal code inserted by the user.
// The list of postal codes can be further extended.
//
// The information returned for the first 10 restaurants is: name, rating, address and cuisine type.
// The restaurant's logo is also printed for better presentation.

const validPostcodes = [
  "CT12EH", "BS14DJ", "L40TH", "NE97TY",
  "SW1A1AA", "CF118AZ", "M160RA", "EH11RE",
  "BN11AE", "CB74DL", "LS27HY", "G38AG",
  "PL40DW", "B263QJ", "DH45QZ", "BT71NN",
  "EC4M7RF", "W92JE"
];

// function to make the user's input work regardless of lower/upper case or space in the text 
function normalizePostcode(postcode) {
  return postcode.replace(/\s+/g, '').toUpperCase();
}

function displayRestaurants(restaurants) {
  const container = document.getElementById('results');
  container.innerHTML = '';

  restaurants.forEach(restaurant => {
    const name = restaurant.name;
    const rating = restaurant.rating.starRating;
    // the address is a combination of the firstLine + City + Postal Code
    const address = `${restaurant.address.firstLine}, ${restaurant.address.city}, ${restaurant.address.postalCode}`;
    // There are multiple entries on the "cuisines" category so it's better to divide them using a coma
    const cuisines = restaurant.cuisines.map(c => c.name).join(', ');

    // Create a box (card) for each restaurant's information in order to look better
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <img src="${restaurant.logoUrl}" alt="${name} logo" />
    <div class="card-info">
      <h3>${name}</h3>
      <p><strong>Rating:</strong> ${rating}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Cuisines:</strong> ${cuisines}</p>
    </div>
    `;
    container.appendChild(card);
  });
}

document.getElementById('searchBtn').addEventListener('click', async () => {
  const input = normalizePostcode(document.getElementById('postcode').value);
  const errorEl = document.getElementById('error');
  const container = document.getElementById('results');

  // Validate postcode
  if (!validPostcodes.includes(input)) {
    errorEl.textContent = 'Invalid postcode. Please use one from the approved list.';
    container.innerHTML = '';
    return;
  }

  errorEl.textContent = '';
  container.innerHTML = '<p>Loading...</p>';

  try {
    const response = await fetch(`http://localhost:3000/restaurants/${input}`);
    const data = await response.json();
    const selected = data.restaurants.slice(0,10); // show only the first 10
    displayRestaurants(selected);
  } catch (err) {
    // Add this error option to make sure that the user has opened the proxy
    errorEl.textContent = 'Failed to fetch data. Is the proxy running?';
    container.innerHTML = '';
  }
});
// Fix that the app shows results not only by clicking the Search button but by also hitting Enter
document.getElementById('postcode').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.getElementById('searchBtn').click();
  }
});
