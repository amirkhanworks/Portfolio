import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact – Amir Khan",
  description:
    "Contact Amir Khan for Technical Product Manager and Product Analyst opportunities."
};

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <ContactForm />
    </div>
  );
}
