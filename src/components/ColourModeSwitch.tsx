import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColourModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch colorScheme="green"
        isChecked={colorMode === "light"}
        onChange={toggleColorMode}
      ></Switch>
      <Text>Light mode</Text>
    </HStack>
  );
};

export default ColourModeSwitch;
