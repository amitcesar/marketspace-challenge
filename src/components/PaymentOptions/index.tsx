import {
  Checkbox,
  XStack,
  YStack,
  Text,
  SizeTokens,
  CheckboxProps,
} from "tamagui";
import { X, Check } from "phosphor-react-native";

const options = [
  "Boleto",
  "Pix",
  "Dinheiro",
  "Cartão de Crédito",
  "Depósito Bancário",
];
// {...checkboxProps} :CheckboxProps
export const PaymentOptions = () => {
  return (
    <YStack mt="$3" gap="$2">
      {options.map((paymentOptions) => (
        <XStack ai={"center"}>
          <Checkbox
            key={paymentOptions}
            backgroundColor={"$blue_light"}
            borderColor={"$white"}
            // size={"$12"}
            size={"$12"}
            borderRadius={4}
            // {...checkboxProps}
          >
            <Checkbox.Indicator>
              <Check color="#fff" size={16} />
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
