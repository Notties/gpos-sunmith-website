"use client";

import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue }: Props) {
  const router = useRouter();

  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  }

  return (
    <select
      value={defaultValue}
      onChange={(e) => onSelectChange(e.target.value)}
      className="text-black"
    >
      {routing.locales.map((locale) => (
        <option key={locale} value={locale} className="text-black">
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
