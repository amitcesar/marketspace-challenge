import { XStack, ScrollView } from "tamagui";

import { ProductCard } from "@components/ProductCard";
export const ListProducts = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <XStack
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        mt="$4"
        mx="$1"
      >
        <ProductCard havePhoto={false} />
        <ProductCard havePhoto={false} />
        <ProductCard havePhoto={false} />
        <ProductCard havePhoto={false} />
        <ProductCard havePhoto={false} />
      </XStack>
    </ScrollView>
  );
};
