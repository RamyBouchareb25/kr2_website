import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Printer, Sticker, ShirtIcon as TShirt, Phone, Mail, MapPin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)
  return (
    <div className="flex min-h-screen flex-col">      
      {/* Hero Section */}
      <section className="relative">
        <div className="container flex flex-col items-center justify-center space-y-4 py-32 text-center md:py-36 lg:py-40">
          <Image
            src="/Logo-removebg-preview.png"
            alt="K2 Printing"
            width={200}
            height={200}
            className="mb-8 dark:hidden"
          />
          <Image
            src="/Logo-dark.png"
            alt="K2 Printing"
            width={200}
            height={200}
            className="mb-8 hidden dark:block"
          />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            {dict.home.title}
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            {dict.home.description}
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button size="lg" asChild>
              <Link href={`/${lang}/quote`}>{dict.home.getQuote}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={`/${lang}/portfolio`}>{dict.home.viewWork}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">{dict.services.title}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Printer className="mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-bold">{dict.services.rollups.title}</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  {dict.services.rollups.description}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Sticker className="mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-bold">{dict.services.stickers.title}</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  {dict.services.stickers.description}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <TShirt className="mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-bold">{dict.services.tshirts.title}</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  {dict.services.tshirts.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">{dict.contact.title}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Phone className="mb-4 h-8 w-8" />
                <h3 className="mb-2 text-lg font-semibold">{dict.contact.phone.title}</h3>
                <p className="text-center">+213 783 111 071</p>
                <p className="text-center">+213 559 894 496</p>
                <p className="text-center">+213 794 724 007</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Mail className="mb-4 h-8 w-8" />
                <h3 className="mb-2 text-lg font-semibold">{dict.contact.email.title}</h3>
                <p className="text-center">hello@kr2print.com</p>
                <p className="text-center">kr2printdz@gmail.com</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <MapPin className="mb-4 h-8 w-8" />
                <h3 className="mb-2 text-lg font-semibold">{dict.contact.address.title}</h3>
                <p className="text-center">Birkhadem, les vergers, alger</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
    </div>
  )
}
