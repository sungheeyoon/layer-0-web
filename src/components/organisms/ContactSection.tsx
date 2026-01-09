import { ContactForm } from "./ContactForm";
import { Typography } from "@/components/atoms/Typography";

export const ContactSection = () => {
    return (
        <section className="w-full py-32 px-6 flex flex-col items-center justify-center bg-off-white" aria-label="Contact Us">
            <div className="max-w-4xl mx-auto w-full text-center mb-16">
                <Typography variant="h2" className="text-4xl font-bold mb-4">
                    Ready to Build?
                </Typography>
                <Typography variant="body" className="max-w-xl mx-auto">
                    Starts with a blueprint. Ends with a masterpiece.
                    <br />
                    설계부터 완벽하게. LAYER 0와 함께하세요.
                </Typography>
            </div>
            <ContactForm />
        </section>
    );
};
