import { redirect } from "next/navigation";

export const metadata = {
  title: "Client & Business Plans | AMC MEP 24x7 One App",
  description:
    "Choose client access or a business workspace plan in the AMC MEP 24x7 One App.",
};

export default function LegacyPartnerPage() {
  redirect("/pricing");
}
