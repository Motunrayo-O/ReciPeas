import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Recipe } from "../hooks/useRecipes";
import DietIconList from "./DietIconList";
import PreparationTime from "./PreparationTime";

interface Props {
  recipe: Recipe;
}
const RecipeCard = ({ recipe }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={recipe.image} />
      <CardBody>
        <Heading fontSize="2xl">{recipe.title}</Heading>

        <HStack justifyContent="space-between">
          <DietIconList diets={recipe.diets}></DietIconList>
          <PreparationTime time={recipe.readyInMinutes} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
