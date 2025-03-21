import React from "react";
import useFilteredRecipes from "../hooks/useFilteredRecipes";
import { SimpleGrid } from "@chakra-ui/react";
import RecipeCard from "./RecipeCard";
import SkeletonRecipeCard from "./SkeletonRecipeCard";

interface Props {
  selectedIngredient: string;
}

const FilteredRecipesGrid = ({ selectedIngredient }: Props) => {
  const dummyRecipes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { recipes, error, isLoading } = useFilteredRecipes(selectedIngredient);

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        padding="10px"
        spacing={10}
      >
        {isLoading && dummyRecipes.map((i) => <SkeletonRecipeCard key={i} />)}

        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default FilteredRecipesGrid;
