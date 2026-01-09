import * as React from "react"
import { cn } from "@/utils/cn"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, error, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full border-b border-tech-black bg-transparent px-3 py-2 text-sm placeholder:text-tech-black/40 focus:outline-none focus:border-signal-red focus:border-b-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors rounded-none",
                    error && "border-signal-red text-signal-red placeholder:text-signal-red/50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
