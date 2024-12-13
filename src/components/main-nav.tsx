"use client"

import Link from "next/link"
import { useEffect, useState } from 'react'
import { Locale } from '@/i18n-config'
import { fetchDictionary } from '@/get-dictionary'

export function MainNav({ lang, className }: { lang: Locale; className?: string }) {
  const [dict, setDict] = useState<any>({})

  useEffect(() => {
    fetchDictionary(lang).then(setDict)
  }, [lang])

  return (
    <nav className={`flex items-center space-x-4 lg:space-x-6 ${className}`}>
      <Link
        href={`/${lang}/services`}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        {dict.nav?.services}
      </Link>
      <Link
        href={`/${lang}/portfolio`}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        {dict.nav?.portfolio}
      </Link>
      <Link
        href={`/${lang}/about`}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        {dict.nav?.about}
      </Link>
      <Link
        href={`/${lang}/blog`}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        {dict.nav?.blog}
      </Link>
    </nav>
  )
}
    