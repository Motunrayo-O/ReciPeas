import { Text } from "@chakra-ui/react";
import useRecipes from "../hooks/useRecipes";

const RecipesGrid = () => {
  const { recipes, error } = useRecipes();

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
