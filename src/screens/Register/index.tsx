import { YStack, Text, Button as ButtonTamagui, XStack } from "tamagui";
import LogoSvg from "@assets/marketspaceLogo.svg";

import { PencilSimpleLine } from "phosphor-react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ChangeUserAvatar } from "@components/ChangeUserAvatar";
const AVATAR_SIZE = 88;

export function RegisterScreen() {
  return (
    <YStack f={1} bg="$gray_600" ai="center">
      <YStack ai="center" jc="center" space="$2" mt={"$12"}>
        <LogoSvg />
        <Text
          color="$gray_100"
          fontFamily={"$body"}
          fontWeight="700"
          fontSize="$xl"
        >
          Boas vindas!
        </Text>
        <Text color="$gray_200" fontFamily={"$body"} fontSize="$sm">
          Crie sua conta e use o espaço para comprar {"\n"} itens variados e
          vender seus produtos
        </Text>
      </YStack>

      <XStack jc="flex-end" ai="flex-end" mt="$5" mb="$4">
        <ChangeUserAvatar size={AVATAR_SIZE} />
        <ButtonTamagui
          bg="$blue_light"
          w={40}
          h={40}
          borderRadius={50}
          iconAfter={<PencilSimpleLine color="#EDECEE" size={16} />}
          position="absolute"
        />
      </XStack>

      <YStack space="$3" maxWidth={279} w={279}>
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input placeholder="Telefone" />
        <Input placeholder="Senha" />
        <Input placeholder="Confirmar senha" />
        <Button title="Criar" color="$white" />
      </YStack>

      <YStack>
        <Text
          alignSelf="center"
          color="$gray_200"
          fontFamily={"$body"}
          fontSize="$sm"
          p="$2"
        >
          Já tem uma conta?
        </Text>
        <Button title="Ir para o login" color="$white" bg={"$gray_500"} />
      </YStack>
    </YStack>
  );
}
