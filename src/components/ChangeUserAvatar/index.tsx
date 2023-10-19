import { Avatar, AvatarImageProps } from "tamagui";
import defaultAvatarImage from "@assets/Avatar.png";

type Props = AvatarImageProps & {
  size: number;
};

export function ChangeUserAvatar({ size, ...rest }: Props) {
  return (
    <Avatar circular size={size} {...rest}>
      <Avatar.Image src={defaultAvatarImage} />
      <Avatar.Fallback bc="$gray_500" />
    </Avatar>
  );
}
