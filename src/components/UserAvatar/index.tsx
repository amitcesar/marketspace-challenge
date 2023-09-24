import { Avatar, AvatarImageProps } from "tamagui";
import defaultAvatarImage from "@assets/Avatar.png";

type Props = AvatarImageProps & {
  size: number;
};

export function UserAvatar({ size, ...rest }: Props) {
  return (
    <Avatar circular size={size}>
      <Avatar.Image src={defaultAvatarImage} {...rest} />
      <Avatar.Fallback bc="$gray_500" />
    </Avatar>
  );
}
