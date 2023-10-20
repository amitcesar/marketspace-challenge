import { Text } from "tamagui";

type TagProps = {
  label: "novo" | "usado";
};

export const Tag = ({ label }: TagProps) => {
  return (
    <Text
      fontFamily={"$body"}
      fontSize="$2xs"
      p="$1"
      borderRadius={12}
      backgroundColor={label === "novo" ? "$blue_light" : "$gray_200"}
      fontWeight={"600"}
      color="$white"
    >
      {label.toLocaleUpperCase()}
    </Text>
  );
};
