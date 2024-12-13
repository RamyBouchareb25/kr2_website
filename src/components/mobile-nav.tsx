"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

export function MobileNav({ lang }: { lang: Locale }) {
  const [open, setOpen] = React.useState(false)
  const [dict, setDict] = React.useState<any>({})

  React.useEffect(() => {
    getDictionary(lang).then(setDict)
  }, [lang])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0">
        <nav className="flex flex-col space-y-4">
          <Link
            href={`/${lang}/services`}
            className="text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            {dict.nav?.services}
          </Link>
          <Link
            href={`/${lang}/portfolio`}
            className="text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            {dict.nav?.portfolio}
          </Link>
          <Link
            href={`/${lang}/about`}
            className="text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            {dict.nav?.about}
          </Link>
          <Link
            href={`/${lang}/blog`}
            className="text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            {dict.nav?.blog}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className="text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            {dict.nav?.contact}
          </Link>
          <Link
            href={`/${lang}/quote`}
            className="text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            {dict.nav?.getQuote}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
