import { Input as TInput, InputProps, Stack } from "tamagui";

export function Input({ ...rest }: InputProps) {
  return (
    <TInput
      h={45}
      bg="$gray_700"
      fontSize={"$md"}
      px={"$3"}
      borderRadius={4}
      borderWidth={0}
      placeholderTextColor="$gray_400"
      {...rest}
    />
  );
}
