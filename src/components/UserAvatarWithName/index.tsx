import { XStack, Avatar, Text } from "tamagui";

type UserAvatarWithNameProps = {
  name: string;
};
export const UserAvatarWithName = ({ name }: UserAvatarWithNameProps) => {
  return (
    <XStack>
      <Avatar circular size="$6" borderWidth={2} borderColor="$blue_light">
        <Avatar.Image src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Avatar.Fallback bc="$gray_600" />
      </Avatar>

      <Text fontFamily={"$body"} fontSize={"$md"} color="$gray_100" pl="$2">
        {name}
      </Text>
    </XStack>
  );
};
