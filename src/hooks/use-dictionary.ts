import { useState, useEffect } from 'react'
import { Locale } from '@/i18n-config'
import { fetchDictionary } from '@/get-dictionary'

export function useDictionary(lang: Locale) {
  const [dict, setDict] = useState<any>({})

  useEffect(() => {
    fetchDictionary(lang).then(setDict)
  }, [lang])

  return dict
}
