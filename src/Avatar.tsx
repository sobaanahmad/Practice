import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export function AvatarDemo() {
  return (
    <div className="absolute right-10 top-6">
      <Avatar className="w-9 h-9">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
