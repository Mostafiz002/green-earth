//load modal
const loadLevelWord = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((data) => displayPlantDetails(data.plants));
};

const displayPlantDetails = (plant) => {
  const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML = `
            <div class="space-y-3">
              <h3 class="text-xl font-bold text-black">${plant.name}</h3>
              <img class="w-full h-[300px] object-cover rounded-lg" src="${plant.image}" alt="">
              <p class="-mt-1 text-[12px] text-gray-600">
                <span class="font-bold text-black">Category: </span>${plant.category}
                </p>
              <p class="-mt-1 text-[12px] text-gray-600">
                <span class="font-bold text-black">Price: </span>৳${plant.price}
                </p>
              <p class="-mt-1 text-[12px] text-gray-600">
                <span class="font-bold text-black">Description: </span>${plant.description}
                </p>
            </div>
    `;
  document.getElementById("word_modal").showModal();
};

// category
const loadCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/categories"
  );
  const data = await res.json();
  displayCategories(data.categories);
};

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";

  categories.forEach((cat) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
      <p onclick="loadSpecificCategory(${cat.id})" 
        class="py-2 px-2.5 rounded-sm text-black hover:bg-[#15803D] hover:text-white cursor-pointer text-base"
      >
        ${cat.category_name}
      </p>
    `;
    categoryContainer.appendChild(categoryDiv);
  });
};

// load all plants
const loadPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayPlants(data.plants));
};

const displayPlants = (plants) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  plants.forEach((plant) => {
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
        <div class="bg-white rounded-2xl p-4 space-y-3 h-full flex flex-col justify-between">
              <div class="space-y-3">
                <img class="rounded-lg h-[200px] object-cover w-full" src="${plant.image}" alt="" />
                <h3 onclick="loadLevelWord(${plant.id})" class="text-black cursor-pointer font-semibold text-sm">${plant.name}</h3>
                <p class="-mt-1 text-[12px] text-[#1F2937]">
                ${plant.description}
                </p>
              </div>
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                <p
                  class="text-[#15803D] bg-[#DCFCE7] rounded-3xl text-sm py-1 px-3"
                >
                  ${plant.category}
                </p>
                <p class="text-sm font-semibold"><span class="text-[11px] font-bold">৳</span>${plant.price}</p>
              </div>
              <button
                class="btn rounded-3xl w-full py-3 px-5 bg-[#15803D] text-white text-sm border-none shadow-none hover:bg-[#229c4d]"
              >
                Plant a Tree
              </button>
              </div>
            </div>
        `;
    cardContainer.appendChild(cardDiv);
  });
};

//specific category functionality
const loadSpecificCategory = (id) => {
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => displaySpecificCategory(data.plants));
};

const displaySpecificCategory = (plants) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  plants.forEach((plant) => {
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
        <div class="bg-white rounded-2xl p-4 space-y-3 h-full flex flex-col justify-between">
              <div class="space-y-3">
                <img class="rounded-lg h-[200px] object-cover w-full" src="${plant.image}" alt="" />
                <h3 onclick="loadLevelWord(${plant.id})" class="text-black cursor-pointer font-semibold text-sm">${plant.name}</h3>
                <p class="-mt-1 text-[12px] text-[#1F2937]">
                ${plant.description}
                </p>
              </div>
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                <p
                  class="text-[#15803D] bg-[#DCFCE7] rounded-3xl text-sm py-1 px-3"
                >
                  ${plant.category}
                </p>
                <p class="text-sm font-semibold"><span class="text-[11px] font-bold">৳</span>${plant.price}</p>
              </div>
              <button
                class="btn rounded-3xl w-full py-3 px-5 bg-[#15803D] text-white text-sm border-none shadow-none hover:bg-[#229c4d]"
              >
                Plant a Tree
              </button>
              </div>
            </div>
        `;
    cardContainer.appendChild(cardDiv);
  });
};

loadCategories();
loadPlants();
