import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { pathname } from "./pathname";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "fr", "de"],

  // Used when no locale matches
  defaultLocale: "en",
  pathnames: pathname,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);