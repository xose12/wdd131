const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Campinas Brazil",
    location: "Campinas, Sao Paulo, Brazil",
    dedicated: "2002, May, 17",
    area: 48100,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-1030031-wallpaper.jpg",
  },
  {
    templeName: "Saratoga Springs Utah",
    location: "Saratoga Springs, Utah, United States",
    dedicated: "2023, August, 13",
    area: 97836,
    imageUrl:
      "https://www.thechurchnews.com/resizer/v2/5MQP3TGEBO3VNJKTD7LUFDSNHU.jpg?auth=4fc6b781f2fc82b2f2562f90b1797c9e886a8c5f888b9a151ccd2a0b5030116f&focal=2709%2C1801&width=400&height=250",
  },
  {
    templeName: "Columbia South Carolina",
    location: "Hopkins, South Carolina, United States",
    dedicated: "1999, October, 16",
    area: 10700,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbia-south-carolina/400x250/columbia-temple-768161-wallpaper.jpg",
  },
  {   templeName: "Accra, Ghana",
    location: "Greater Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 20560,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/800x450/accra-ghana-temple-detail-249022-2400x1200.jpg",
 },
  // Add more temple objects here...
];

const mainNav = document.querySelector(".navigation");
const hamburgerButton = document.querySelector("#menu");
const homeButton = document.querySelector("#home");
const oldButton = document.querySelector("#old");
const newButton = document.querySelector("#new");
const largeButton = document.querySelector("#large");
const smallButton = document.querySelector("#small");
const filterIndicator = document.querySelector("#filter-indicator");

const toggleMenu = () => {
  mainNav.classList.toggle("open");
  hamburgerButton.classList.toggle("open");
};

const setActiveButton = (button, filterText) => {
  document.querySelectorAll(".navigation button").forEach((btn) => {
    btn.classList.remove("active");
  });
  button.classList.add("active");
  filterIndicator.textContent = filterText;
};

const filterTemples = (criteria) => {
  return temples.filter(criteria);
};

const showTemples = (templeList) => {
  const templePictures = document.querySelector(".temple-listings");
  templePictures.innerHTML = "";
  templeList.forEach((temple) => {
    const templeCard = document.createElement("section");
    templeCard.id = temple.templeName.replace(" ", "-").toLowerCase();
    templeCard.className = "temple-card";
    templeCard.innerHTML = `
      <h3>${temple.templeName}</h3>
      <div class="temple-detail">
          <span class="detail-label">Location:</span>
          <span class="detail-value">${temple.location}</span>
      </div>
      <div class="temple-detail">
          <span class="detail-label">Dedicated:</span>
          <span class="detail-value">${temple.dedicated}</span>
      </div>
      <div class="temple-detail">
          <span class="detail-label">Size:</span>
          <span class="detail-value">${temple.area} sq ft</span>
      </div>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" width="400" height="250" loading="lazy">
    `;
    templePictures.appendChild(templeCard);
  });
};

const getYearFromDedication = (temple) =>
  parseInt(temple.dedicated.split(",")[0]);

hamburgerButton.addEventListener("click", toggleMenu);

homeButton.addEventListener("click", () => {
  showTemples(temples);
  setActiveButton(homeButton, "Home");
});

oldButton.addEventListener("click", () => {
  const oldTemples = filterTemples(
    (temple) => getYearFromDedication(temple) < 1900
  );
  showTemples(oldTemples);
  setActiveButton(oldButton, "Old");
});

newButton.addEventListener("click", () => {
  const newTemples = filterTemples(
    (temple) => getYearFromDedication(temple) > 2000
  );
  showTemples(newTemples);
  setActiveButton(newButton, "New");
});

largeButton.addEventListener("click", () => {
  const largeTemples = filterTemples((temple) => temple.area > 90000);
  showTemples(largeTemples);
  setActiveButton(largeButton, "Large");
});

smallButton.addEventListener("click", () => {
  const smallTemples = filterTemples((temple) => temple.area < 10000);
  showTemples(smallTemples);
  setActiveButton(smallButton, "Small");
});

showTemples(temples);
