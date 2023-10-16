import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { LoginScreen } from "@screens/Login";
import { RegisterScreen } from "@screens/Register";

type AuthRoutes = {
  login: undefined;
  register: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();
export function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="login" component={LoginScreen} />
      <Screen name="register" component={RegisterScreen} />
    </Navigator>
  );
}
