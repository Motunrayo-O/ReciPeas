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

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchRecipesResponse>("/random?number=1&includeNutrition=false", {
        signal: controller.signal,
      })
      .then((response) => {
        console.log(response.data.recipes[0]);
        setRecipes(response.data.recipes);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
  }, []);

  return { recipes, error };
};

export default useRecipes;
