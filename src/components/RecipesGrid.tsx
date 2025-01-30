import { SimpleGrid } from "@chakra-ui/react";
import useRecipes from "../hooks/useRecipes";
import RecipeCard from "./RecipeCard";

const RecipesGrid = () => {
  const { recipes, error } = useRecipes();

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
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default RecipesGrid;
