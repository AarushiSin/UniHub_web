const API_KEY = '9d0236ef4d9e4d45a05a9295ccb3cd3a'; // Replace with your Spoonacular API key

// Function to search for recipes
function searchRecipes() {
    const query = document.getElementById('recipe-search').value;
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&apiKey=${API_KEY}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayRecipes(data.results))
        .catch(error => console.error('Error fetching recipes:', error));
}

// Function to display recipes in HTML
function displayRecipes(recipes) {
    const resultsContainer = document.getElementById('recipe-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    recipes.forEach(recipe => {
        const recipeCard = `
            <div class="recipe-card">
                <h3>${recipe.title}</h3>
                <img src="${recipe.image}" alt="${recipe.title}">
                <a href="https://spoonacular.com/recipes/${recipe.title.replace(/ /g, '-').toLowerCase()}-${recipe.id}" target="_blank">View Recipe</a>
            </div>
        `;
        resultsContainer.innerHTML += recipeCard;
    });
}
