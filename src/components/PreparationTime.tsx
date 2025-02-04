import { Badge, HStack, Text } from "@chakra-ui/react";

interface Props {
  time: number;
}
const PreparationTime = ({ time }: Props) => {
  function getTextColour(time: number): string {
    if (time <= 20) return "green";
    else if (time <= 45) return "yellow";
    return "orange";
  }
  return (
    <HStack>
      <Badge
        colorScheme={getTextColour(time)}
        fontSize="14px"
        paddingX={2}
        borderRadius="4px"
      >
        <Text casing="lowercase">{time}m</Text>
      </Badge>
    </HStack>
  );
};

export default PreparationTime;
