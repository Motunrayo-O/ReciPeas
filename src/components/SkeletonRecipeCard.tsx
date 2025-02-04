import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonRecipeCard = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Skeleton>
        <CardBody height="300px">
          <SkeletonText></SkeletonText>
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default SkeletonRecipeCard;
