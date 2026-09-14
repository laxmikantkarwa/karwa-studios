import type { Metadata } from "next";
import { BackendPage } from "@/components/stack-pages";

export const metadata: Metadata = {
  title: "Backend Systems | Laxmikant Karwa",
  description:
    "APIs, services, data flows, security, and cloud delivery behind dependable products.",
};

export default function BackendRoute() {
  return <BackendPage />;
}
