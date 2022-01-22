import React, { useState } from "react";

const kapilsss = {
  leatherStripe: 2,
};

const jjj = {
  ...kapilsss,
  leather: 3,
};

const Recipes = () => {
  const [recipe, setRecipe] = useState({});

  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(kapilsss)}>Kapil</button>
      <button onClick={() => setRecipe(jjj)}>Rahul</button>
      <ul>
        {Object.keys(recipe).map((material, index) => (
          <li key={index}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
