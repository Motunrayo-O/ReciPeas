import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import RecipeCardContainer from "./RecipeCardContainer";

const SkeletonRecipeCard = () => {
  return (
    <RecipeCardContainer>
      <Card>
        <Skeleton>
          <CardBody height="300px">
            <SkeletonText></SkeletonText>
          </CardBody>
        </Skeleton>
      </Card>
    </RecipeCardContainer>
  );
};

export default SkeletonRecipeCard;
