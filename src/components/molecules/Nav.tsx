import Link from 'next/link';
import { cn } from "@/utils/cn";

interface NavItem {
    label: string;
    href: string;
}

interface NavProps {
    items?: NavItem[];
    className?: string;
}

export const Nav = ({ items = [], className }: NavProps) => {
    return (
        <nav className={cn("flex gap-8", className)}>
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-tech-black hover:text-signal-red transition-colors relative group"
                >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-signal-red transition-all group-hover:w-full" />
                </Link>
            ))}
        </nav>
    );
};
