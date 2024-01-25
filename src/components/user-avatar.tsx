import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarProps } from "@radix-ui/react-avatar";
import { User } from "lucide-react";

// interface UserAvatarProps extends AvatarProps {
//   user: Pick<User, "image" | "name">
// }
interface UserAvatarProps extends AvatarProps {}

// export function UserAvatar({ user, ...props }: UserAvatarProps) {
export function UserAvatar({ ...props }) {
  return (
    <Avatar {...props}>
      {/* {user.image ? (
        <AvatarImage alt="Picture" src={user.image} />
      ) : ( */}
      <AvatarFallback>
        <span className="sr-only">Nimesh Maharjan</span>
        <User className="h-4 w-4" />
      </AvatarFallback>
      {/* )} */}
    </Avatar>
  );
}
