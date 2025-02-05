import useIngredients from "../hooks/useIngredients";
import { Button, List, ListItem } from "@chakra-ui/react";

interface Props {
  onIngredientSelected: (ingredient: string) => void;
}

const IngredientsList = ({ onIngredientSelected }: Props) => {
  const ingredients = useIngredients();

  return (
    <List styleType="none">
      {ingredients.map((ingredient) => (
        <ListItem key={ingredient} marginY={4} style={{ textAlign: "left" }}>
          <Button
            fontSize="lg"
            variant="link"
            onClick={() => onIngredientSelected(ingredient)}
          >
            {ingredient}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default IngredientsList;
