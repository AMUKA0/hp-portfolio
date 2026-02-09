"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

type TransitionLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => void;
};

export function TransitionLink({ href, className, children }: TransitionLinkProps) {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    const doc = document as ViewTransitionDocument;

    if (doc.startViewTransition) {
      doc.startViewTransition(() => {
        router.push(href);
      });
      return;
    }

    router.push(href);
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}