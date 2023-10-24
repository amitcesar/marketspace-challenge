import { Checkbox, XStack, YStack, Text } from "tamagui";
import { X, Check } from "phosphor-react-native";

const options = [
  "Boleto",
  "Pix",
  "Dinheiro",
  "Cartão de Crédito",
  "Depósito Bancário",
];

export const PaymentOptions = () => {
  return (
    <YStack mt="$3" gap="$2">
      {options.map((paymentOptions, index) => (
        <XStack ai={"center"}>
          <Checkbox
            key={index}
            backgroundColor={"$blue_light"}
            borderColor={"$white"}
            borderRadius={4}
            w={22}
            h={22}
          >
            <Checkbox.Indicator>
              <Check color="#fff" />
            </Checkbox.Indicator>
          </Checkbox>

          <Text fontSize={"$md"} fontFamily={"$body"} color="$gray_200" pl="$2">
            {paymentOptions}
          </Text>
        </XStack>
      ))}
    </YStack>
  );
};
