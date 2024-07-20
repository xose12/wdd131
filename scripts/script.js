document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" },
  ];

  const productSelect = document.getElementById("product");
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  const currentYear = document.querySelector("#currentyear");

  // Use the date object
  const todaysDate = new Date();
  currentYear.innerHTML = `${todaysDate.getFullYear()}`;

  // Last modified
  document.getElementById("lastModified").innerHTML = `Last Modified: ${new Date(document.lastModified)}`;

  // Handle review counter on review.html
  if (window.location.pathname.includes("review.html")) {
    const reviewCount = localStorage.getItem("reviewCount") || 0;
    localStorage.setItem("reviewCount", parseInt(reviewCount) + 1);
    document.body.innerHTML += `<p>Reviews submitted: ${parseInt(reviewCount) + 1}</p>`;
  }
});
