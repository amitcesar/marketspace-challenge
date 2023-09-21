import { Spinner, YStack } from "tamagui";

export function Loading() {
  return (
    <YStack f={1} ai="center" jc="center">
      <Spinner size="large" color="$green10" />
    </YStack>
  );
}
