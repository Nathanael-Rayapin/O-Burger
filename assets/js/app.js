const app = {
    configuration: {
        editoEl: null,
        linkEl: null
    },

    init: function() { 
    // Get Random Text
    const randomText = ['A little hungry ? take a bite', 'Huuuuum, Crunch it !','Hello, nice to meat you !', 'I love Burger'];
    const pickText = randomText[Math.floor(Math.random() * randomText.length)];

    app.configuration.editoEl = document.getElementById('random-text');
    app.configuration.editoEl.textContent = pickText;

    // Get Random Recipe
    app.configuration.linkEl = document.getElementById('link-recipe');
    app.configuration.linkEl.addEventListener('click', app.recipeGenerator);
    },

    recipeGenerator: function() {
        const randomRecipe = [
            'https://www.cuisineactuelle.fr/recettes/burger-maison-180380',
            'https://www.marmiton.org/recettes/recette_home-burger_93645.aspx',
            'https://www.hervecuisine.com/recette/recette-facile-des-burgers-maison/',
            'https://lescommis.com/recettes/burger-gourmand/'
        ];
        const pickRecipe = randomRecipe[Math.floor(Math.random() * randomRecipe.length)];
        app.configuration.linkEl.href = pickRecipe;
    }
}

document.addEventListener('DOMContentLoaded', app.init);
