import { cn } from "@/utils/cn";
import Link from "next/link";

export const Logo = ({ className }: { className?: string }) => (
    <Link href="/" aria-label="Back to Homepage">
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("w-10 h-10 text-tech-black", className)}
            aria-label="The Zero Anchor"
        >
            {/* Abstract Structural Zero / Anchor */}
            <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="10" fill="currentColor" />
            <line x1="50" y1="20" x2="50" y2="40" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="60" x2="50" y2="80" stroke="currentColor" strokeWidth="1" />
            <line x1="20" y1="50" x2="40" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="60" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" />
            {/* Red Point (Signal) */}
            <circle cx="80" cy="20" r="2" className="text-signal-red" fill="currentColor" />
        </svg>
    </Link>
);
