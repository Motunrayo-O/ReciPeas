import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Recipe } from "./useRandomRecipes";

const useRecipes = (selectedIngredient: string) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  console.log("selectedIngredient: " + selectedIngredient);

  useEffect(() => {
    const controller = new AbortController();

    const params = {
      number: 5,
      includeNutrition: false,
      ingredients: selectedIngredient,
    };

    setLoading(true);
    console.log("useFilteredRecipes params: " + JSON.stringify(params));
    apiClient
      .get<Recipe[]>("/findByIngredients", {
        signal: controller.signal,
        params,
      })
      .then((response) => {
        console.log("response.data: " + JSON.stringify(response.data));
        setRecipes(response.data);
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
