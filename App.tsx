import { ReactNode, useCallback } from "react";
import { StatusBar } from "expo-status-bar";

import { Stack, TamaguiProvider, H1 } from "tamagui";
import * as SplashScreen from "expo-splash-screen";

import config from "./tamagui.config";
import { useFonts } from "expo-font";
import { HomeScreen } from "@screens/Home";
import { Register } from "@screens/Register";

type StyleProviderProps = {
  children: ReactNode;
};

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Karla: require("./assets/fonts/Karla-Regular.ttf"),
    KarlaBold: require("./assets/fonts/Karla-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const StyleProvider = ({ children }: StyleProviderProps) => {
    return (
      <TamaguiProvider config={config}>
        <Stack onLayout={onLayoutRootView} f={1}>
          {children}
        </Stack>
      </TamaguiProvider>
    );
  };

  return (
    <StyleProvider>
      <StatusBar style="dark" translucent />
      <HomeScreen />
    </StyleProvider>
  );
}
