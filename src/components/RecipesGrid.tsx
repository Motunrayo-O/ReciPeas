import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";

interface Recipe {
  id: number;
  title: string;
}

interface FetchRecipesResponse {
  recipes: Recipe[];
}

const RecipesGrid = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchRecipesResponse>("/random?number=10")
      .then((response) => {
        setRecipes(response.data.recipes);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Text>{recipe.title}</Text>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RecipesGrid;
