import { ModeToggle } from "@/components/ui/mode-toggle";
import { SignIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      <ModeToggle/>
    </div>
  );
}
