function processImage() {
  document.getElementById("result").innerHTML =
    "🧠 Scanning your fridge...";

  setTimeout(() => {
    document.getElementById("result").innerHTML =
      "🥚 Detected: Eggs, Milk, Bread<br><br>🔥 Recipe: Egg Sandwich";
  }, 2000);
}

function generateRecipe() {
  const recipes = [
    "🍳 Egg Sandwich with Toast",
    "🥛 Milk Pancakes",
    "🍅 Tomato Omelette",
    "🥗 Simple Veg Bowl"
  ];

  const random = recipes[Math.floor(Math.random() * recipes.length)];

  document.getElementById("result").innerHTML =
    "🔥 Suggested Recipe: " + random;
}
