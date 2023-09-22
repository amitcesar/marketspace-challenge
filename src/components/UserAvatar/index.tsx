import { Avatar } from "tamagui";
import defaultAvatarImage from "@assets/Avatar.png";
export function UserAvatar() {
  return (
    <Avatar circular size={88}>
      <Avatar.Image src={defaultAvatarImage} />
      <Avatar.Fallback bc="$gray_500" />
    </Avatar>
  );
}
