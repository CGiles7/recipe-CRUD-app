import React, { useState } from "react";

function RecipeCreate({ onAdd }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    };
    onAdd(newRecipe);
    // Clear the form fields after adding the recipe
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

 return (
    <tbody>
      <tr>
        <td>
          <form name="create" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"
            />
          </form>
        </td>
        <td>
          <form name="create" onSubmit={handleSubmit}>
            <input
              type="text"
              name="cuisine"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              required
              placeholder="Cuisine"
            />
          </form>
        </td>
        <td>
          <form name="create" onSubmit={handleSubmit}>
            <input
              type="text"
              name="photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              required
              placeholder="URL"
            />
          </form>
        </td>
        <td>
          <form name="create" onSubmit={handleSubmit}>
            <textarea
              name="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
              placeholder="Ingredients"
            />
          </form>
        </td>
        <td>
          <form name="create" onSubmit={handleSubmit}>
            <textarea
              name="preparation"
              value={preparation}
              onChange={(e) => setPreparation(e.target.value)}
              required
              placeholder="Preparation"
             />
          </form>
        </td>
        <td>
          <form name="create" onSubmit={handleSubmit}>
            <button type="submit">Create</button>
          </form>
        </td>
      </tr>
    </tbody>
  );
}

export default RecipeCreate;
