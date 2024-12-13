import type { Locale } from './i18n-config'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  ar: () => import('./dictionaries/ar.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()

// Client-side dictionary fetching
export const fetchDictionary = async (locale: Locale) => {
  const response = await fetch(`/api/dictionnary?locale=${locale}`)
  if (!response.ok) {
    throw new Error('Failed to fetch dictionary')
  }
  return response.json()
}
