import { useState } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
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

      <ul>
        {ingredients.map((ingredient) => (
          <li key="ingredient">{ingredient}</li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
