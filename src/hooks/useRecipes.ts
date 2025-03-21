import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Recipe {
  id: number;
  title: string;
  image: string;
  diets: string[];
  readyInMinutes: number;
}

interface FetchRecipesResponse {
  recipes: Recipe[];
}

const useRecipes = (selectedIngredient: string | null) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  console.log("selectedIngredient: " + selectedIngredient);

  useEffect(() => {
    const controller = new AbortController();
    const endpoint = selectedIngredient ? "/findByIngredients" : "/random";

    const requestParams = {
      number: 1,
      includeNutrition: false,
    };
    const params = selectedIngredient
      ? requestParams
      : {
          ingredients: selectedIngredient,
          ...requestParams,
        };

    setLoading(true);
    apiClient
      .get<FetchRecipesResponse>(endpoint, {
        signal: controller.signal,
        params,
      })
      .then((response) => {
        console.log("response.data: " + JSON.stringify(response.data));
        if (selectedIngredient) setRecipes(response.data.recipes);
        else setRecipes(response.data.recipes);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
  }, [selectedIngredient]);

  return { recipes, error, isLoading };
};

export default useRecipes;
