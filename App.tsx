import { ReactNode, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack, TamaguiProvider, H1 } from "tamagui";
import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";
import { HomeScreen } from "@screens/Home";
import { Routes } from "@routes/index";

import config from "./tamagui.config";
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
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack onLayout={onLayoutRootView} f={1}>
            {children}
          </Stack>
        </GestureHandlerRootView>
      </TamaguiProvider>
    );
  };

  return (
    <StyleProvider>
      <StatusBar style="dark" translucent />
      <Routes />
    </StyleProvider>
  );
}
