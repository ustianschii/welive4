"use client";

import { usePathname } from "next/navigation";
import PageTransition from "@/components/page-transition";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return <PageTransition pathname={pathname}>{children}</PageTransition>;
}
