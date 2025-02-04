import useIngredients from "../hooks/useIngredients";
import { Button, List, ListItem } from "@chakra-ui/react";

const IngredientsList = () => {
  const ingredients = useIngredients();

  function handleIngredientClick(): void {
    console.log("clicked");
  }

  return (
    <List styleType="none">
      {ingredients.map((ingredient) => (
        <ListItem key={ingredient} marginY={4} style={{ textAlign: "left" }}>
          <Button fontSize="lg" variant="link" onClick={handleIngredientClick}>
            {ingredient}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default IngredientsList;
