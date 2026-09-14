import type { Metadata } from "next";
import { FrontendPage } from "@/components/stack-pages";

export const metadata: Metadata = {
  title: "Frontend Architecture | Laxmikant Karwa",
  description:
    "Frontend architecture, design systems, performance, and product-scale interfaces.",
};

export default function FrontendRoute() {
  return <FrontendPage />;
}
