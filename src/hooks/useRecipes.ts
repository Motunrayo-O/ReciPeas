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

  console.log(selectedIngredient);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchRecipesResponse>("/random", {
        signal: controller.signal,
        params: {
          number: 1,
          includeNutrition: false,
        },
      })
      .then((response) => {
        console.log(response.data.recipes[0]);
        setRecipes(response.data.recipes);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { recipes, error, isLoading };
};

export default useRecipes;
