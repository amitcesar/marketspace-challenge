import { Button as ButtonT, ButtonProps, Text } from "tamagui";

type Props = ButtonProps & {
  title: string;
  color: string;
  fontSize?: string;
};
export function Button({ title, color, fontSize, ...rest }: Props) {
  return (
    <ButtonT h={42} borderRadius={6} w={279} mb={48} {...rest}>
      <Text
        color={color}
        fontSize={fontSize ? fontSize : "$md"}
        fontFamily={"$heading"}
        fontWeight={"700"}
      >
        {title}
      </Text>
    </ButtonT>
  );
}
