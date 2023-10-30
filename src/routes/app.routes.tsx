import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import HomeSvg from "@assets/IconHome.svg";
import ExitSvg from "@assets/exit.svg";
import ProductSvg from "@assets/product.svg";
import { HomeScreen } from "@screens/Home";
import { ProductDetailsScreen } from "@screens/ProductDetails";
import { MyAdvertisements } from "@screens/MyAdvertisements";

import { LoginScreen } from "@screens/Login";

type AppRoutes = {
  home: undefined;
  productDetails: undefined;
  myAdvertisements: undefined;
  logout: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;
const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

const ICON_SIZE = 24;

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={ICON_SIZE} height={ICON_SIZE} />
          ),
        }}
      />

      <Screen
        name="myAdvertisements"
        component={MyAdvertisements}
        options={{
          tabBarIcon: ({ color }) => (
            <ProductSvg fill={color} width={ICON_SIZE} height={ICON_SIZE} />
          ),
        }}
      />

      <Screen
        name="logout"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <ExitSvg fill={color} width={ICON_SIZE} height={ICON_SIZE} />
          ),
        }}
      />

      <Screen
        name="productDetails"
        component={ProductDetailsScreen}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />
    </Navigator>
  );
}
