"use client"

import { useEffect, useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import LanguageSwitcher from './language-switcher'
import Image from 'next/image'
import { ThemeToggle } from './theme-toggle'
import { fetchDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

export function SiteHeader({ lang }: { lang: Locale }) {
  const [dict, setDict] = useState<any>({})

  useEffect(() => {
    fetchDictionary(lang).then(setDict)
  }, [lang])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-sm:px-4 m-auto flex h-16 items-center justify-between">
        <Link href={`/${lang}`} className="mr-6 flex items-center space-x-2">
          <Image src="/Logo-removebg-preview.png" alt="K2 Printing" width={48} height={48} className="h-12 w-auto dark:hidden" />
          <Image src="/Logo-dark.png" alt="K2 Printing" width={48} height={48} className="h-12 w-auto hidden dark:block" />
        </Link>
        <MainNav lang={lang} className="hidden md:flex mx-auto" />
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-2">
            <Button asChild variant="ghost" className="hidden md:inline-flex">
              <Link href={`/${lang}/contact`}>{dict.nav?.contact}</Link>
            </Button>
            <Button asChild className="hidden md:inline-flex">
              <Link href={`/${lang}/quote`}>{dict.nav?.getQuote}</Link>
            </Button>
          </nav>
          <ThemeToggle />
          <LanguageSwitcher />
          <MobileNav lang={lang} />
        </div>
      </div>
    </header>
  )
}
