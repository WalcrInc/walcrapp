import {
  CleaningIcon,
  CleaningIcon_Coloured,
  FurnitureIcon,
  FurnitureIcon_Coloured,
  HandymanIcon,
  HandymanIcon_Coloured,
  HeavyIcon,
  HeavyIcon_Coloured,
  MovingIcon,
  MovingIcon_Coloured,
  PaintingIcon,
  PaintingIcon_Coloured,
} from "@/Assets";

export const ServicesTypes = [
  {
    id: 1,
    name: " Assembly",
    details: "I want to assemble a material",
    icon: <FurnitureIcon_Coloured />,
  },
  {
    id: 2,
    name: "Cleaning",
    details: "I want to clean an item",
    icon: <CleaningIcon_Coloured />,
  },
  {
    id: 3,
    name: "Painting",
    details: "I want to do a painting work",
    icon: <PaintingIcon_Coloured />,
  },
  {
    id: 4,
    name: "Handyman",
    details: "I want to do fitting",
    icon: <HandymanIcon_Coloured />,
  },
  {
    id: 5,
    name: "Moving",
    details: "I want to move my belongings",
    icon: <MovingIcon_Coloured />,
  },
  {
    id: 6,
    name: "",
    details: "I want to lift a heavy object",
    icon: <HeavyIcon_Coloured />,
  },
];
