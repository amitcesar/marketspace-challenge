import { YStack, Text, Stack } from "tamagui";
import LogoSvg from "@assets/marketspaceLogo.svg";
import MarketspaceText from "@assets/marketspace.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function LoginScreen() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleUserToRegistrationScreen = () => {
    navigation.navigate("register");
  };
  return (
    <YStack
      f={1}
      bg="$gray_600"
      ai="center"
      justifyContent="space-between"
      borderRadius={6}
    >
      <YStack ai="center" space="$4" mt="$24">
        <LogoSvg />
        <Stack>
          <MarketspaceText />
          <Text fontSize={"$sm"} color="$gray_300" fontFamily={"$body"}>
            Seu espaço de compra e venda
          </Text>
        </Stack>
      </YStack>

      <YStack gap="$4" maxWidth={279} w={279} mt="$8">
        <Text
          fontSize={"$md"}
          color="$gray_200"
          fontFamily={"$body"}
          alignSelf="center"
        >
          Acesse sua conta
        </Text>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" secureTextEntry />
        <Button bg={"$blue_light"} title="Entrar" color="$gray_700" />
      </YStack>

      <Stack
        bg={"$white"}
        ai="center"
        alignSelf="flex-end"
        w="100%"
        gap="$3"
        pt="$10"
      >
        <Text
          fontSize={"$sm"}
          color="$gray_200"
          fontFamily={"$body"}
          alignSelf="center"
        >
          ainda não tem acesso?
        </Text>
        <Button
          title="Criar uma conta"
          color="$gray_200"
          bg={"$gray_500"}
          onPress={handleUserToRegistrationScreen}
        />
      </Stack>
    </YStack>
  );
}
