import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { UserMenu } from "./UserMenu";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold text-xl hover:text-primary transition-colors"
        >
          SAPA SAINS
        </Link>
        <div className="flex items-center gap-4">
          <UserMenu />
          <div className="border-l pl-4 dark:border-gray-800">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
