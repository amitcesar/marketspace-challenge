import { useCallback, useState } from "react";
import {
  Dimensions,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

import { XStack, YStack, Stack, Image } from "tamagui";

type OnScrollEventHandler = (
  event: NativeSyntheticEvent<NativeScrollEvent>
) => void;

export const ImageCarousel = () => {
  const dataImages = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = Dimensions.get("window");

  const handleScrollEnd: OnScrollEventHandler = useCallback(
    (event) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const newIndex = Math.round(offsetX / width);
      setActiveIndex(newIndex);
    },
    [activeIndex]
  );

  return (
    <YStack mt="$6">
      <FlatList
        data={dataImages}
        style={{ maxHeight: width }}
        pagingEnabled
        horizontal
        scrollEventThrottle={16}
        onMomentumScrollEnd={handleScrollEnd}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item?.id)}
        renderItem={({ item }) => (
          <YStack>
            <Image
              source={{
                width: width,
                height: 280,
                uri: item.image,
              }}
              resizeMode="cover"
            />

            {dataImages.length > 1 ? (
              <XStack ai="center">
                {dataImages.map((_, index) => (
                  <Stack
                    p={2}
                    key={index}
                    bg={index === activeIndex ? "$gray_700" : "$gray_500"}
                    w={width / 3}
                    h="$1"
                    borderRadius={4}
                    pb={1}
                  />
                ))}
              </XStack>
            ) : null}
          </YStack>
        )}
      />
    </YStack>
  );
};
