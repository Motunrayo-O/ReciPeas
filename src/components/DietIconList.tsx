import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  LuMilkOff,
  LuWheatOff,
  LuVegan,
  LuFish,
  LuDrumstick,
} from "react-icons/lu";
import { TbAvocado } from "react-icons/tb";
import { GiRoastChicken } from "react-icons/gi";
import { TbTimeDuration30 } from "react-icons/tb";

interface Props {
  diets: string[];
}

const iconMap: { [Key: string]: IconType } = {
  "gluten free": LuWheatOff,
  "dairy free": LuMilkOff,
  vegan: LuVegan,
  pescatarian: LuFish,
  ketogenic: GiRoastChicken,
  primal: LuDrumstick,
  paleolithic: TbAvocado,
  "whole 30": TbTimeDuration30,
};

const DietIconList = ({ diets }: Props) => {
  return (
    <HStack marginY={1}>
      {diets.map((diet) => (
        <Icon key={diet} as={iconMap[diet]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default DietIconList;
