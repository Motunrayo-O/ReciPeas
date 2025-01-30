import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Recipe {
  id: number;
  title: string;
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
      .get<FetchRecipesResponse>("/random?number=2", {
        signal: controller.signal,
      })
      .then((response) => {
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
