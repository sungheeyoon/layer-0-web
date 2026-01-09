import { Logo } from "@/components/atoms/Logo";
import { Nav } from "@/components/molecules/Nav";

const NAV_ITEMS = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Agency', href: '/agency' },
    { label: 'Contact', href: '/contact' },
];

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-off-white/80 backdrop-blur-sm border-b border-tech-black/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Logo />
                    <span className="text-xl font-bold tracking-tight text-tech-black hidden md:block">
                        LAYER 0
                    </span>
                </div>

                <Nav items={NAV_ITEMS} className="hidden md:flex" />

                {/* Mobile Menu Trigger (Placeholder) */}
                <button className="md:hidden text-tech-black">
                    Wait
                </button>
            </div>
        </header>
    );
};
