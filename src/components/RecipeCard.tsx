import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Recipe } from "../hooks/useRecipes";
import DietIconList from "./DietIconList";
import PreparationTime from "./PreparationTime";
import RecipeCardContainer from "./RecipeCardContainer";

interface Props {
  recipe: Recipe;
}
const RecipeCard = ({ recipe }: Props) => {
  return (
    <RecipeCardContainer>
      <Card>
        <Image src={recipe.image} />
        <CardBody>
          <Heading fontSize="2xl">{recipe.title}</Heading>

          <HStack justifyContent="space-between" marginY={1}>
            <DietIconList diets={recipe.diets}></DietIconList>
            <PreparationTime time={recipe.readyInMinutes} />
          </HStack>
        </CardBody>
      </Card>
    </RecipeCardContainer>
  );
};

export default RecipeCard;
