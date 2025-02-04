import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}
const RecipeCardContainer = ({ children }: Props) => {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default RecipeCardContainer;
