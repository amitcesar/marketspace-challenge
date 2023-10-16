import { YStack } from "tamagui";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <YStack f={1} bg="$gray_700">
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </YStack>
  );
}
