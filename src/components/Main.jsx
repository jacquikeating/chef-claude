import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../../ai.js";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);
  const [recipeFromAI, setRecipeFromAI] = useState({});

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function getRecipe() {
    const result = await getRecipeFromMistral(ingredients);
    setRecipeFromAI(result);
    setRecipeShown((prevShown) => !prevShown);
  }

  return (
    <main>
      <form action={addIngredient}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />

      {recipeShown && <ClaudeRecipe recipe={recipeFromAI} />}
    </main>
  );
};

export default Main;
