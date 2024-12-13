'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '@/i18n-config'
import { useTheme } from 'next-themes'

export default function LanguageSwitcher() {
  const pathName = usePathname()
  const currentLang = pathName.split('/')[1]
  const { theme } = useTheme()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="flex flex-wrap space-x-2 rtl:space-x-reverse">
      {i18n.locales.map((locale) => (
        <Link
          key={locale}
          href={redirectedPathName(locale)}
          className={`px-3 py-2 rounded mb-2 ${
            currentLang === locale ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
          }`}
          onClick={(e) => {
            // Prevent the default link behavior
            e.preventDefault()
            // Get the current theme
            const currentTheme = theme
            // Change the language
            window.location.href = redirectedPathName(locale)
            // Set the theme back to what it was
            localStorage.setItem('theme', currentTheme || 'system')
          }}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}
