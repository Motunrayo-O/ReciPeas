import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColourModeSwitch from "./ColourModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="60px"></Image>
      <ColourModeSwitch />
    </HStack>
  );
};

export default NavBar;
