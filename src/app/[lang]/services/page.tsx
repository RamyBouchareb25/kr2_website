import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Printer, Sticker, ShirtIcon as TShirt } from 'lucide-react'
import Link from "next/link"
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

export default async function ServicesPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">{dict.services.title}</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dict.services.description}
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Printer className="w-12 h-12 mb-4" />
                  <CardTitle>{dict.services.rollups.title}</CardTitle>
                  <CardDescription>{dict.services.rollups_short_desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{dict.services.rollups_desc}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/${lang}/quote`}>{dict.services.getQuote}</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Sticker className="w-12 h-12 mb-4" />
                  <CardTitle>{dict.services.stickers.title}</CardTitle>
                  <CardDescription>{dict.services.stickers_short_desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{dict.services.stickers_desc}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/${lang}/quote`}>{dict.services.getQuote}</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <TShirt className="w-12 h-12 mb-4" />
                  <CardTitle>{dict.services.tshirts.title}</CardTitle>
                  <CardDescription>{dict.services.tshirts_short_desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{dict.services.tshirts_desc}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/${lang}/quote`}>{dict.services.getQuote}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
