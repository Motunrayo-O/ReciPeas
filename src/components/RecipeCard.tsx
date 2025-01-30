import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Recipe } from "../hooks/useRecipes";
import DietIconList from "./DietIconList";

interface Props {
  recipe: Recipe;
}
const RecipeCard = ({ recipe }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={recipe.image} />
      <CardBody>
        <Heading fontSize="2xl">{recipe.title}</Heading>
        <DietIconList diets={recipe.diets}></DietIconList>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
