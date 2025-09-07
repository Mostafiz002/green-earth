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
      <p
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
  fetch("https://openapi.programming-hero.com/api/plants");
};

loadCategories();
