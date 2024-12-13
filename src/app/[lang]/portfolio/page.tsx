import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

export default async function PortfolioPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  const portfolioItems = [
    { 
      title: dict.portfolio.item1, 
      image: "https://picsum.photos/seed/branding/600/400",
      description: dict.portfolio.item1Description
    },
    { 
      title: dict.portfolio.item2, 
      image: "https://picsum.photos/seed/banner/600/400",
      description: dict.portfolio.item2Description
    },
    { 
      title: dict.portfolio.item3, 
      image: "https://picsum.photos/seed/tshirt/600/400",
      description: dict.portfolio.item3Description
    },
    { 
      title: dict.portfolio.item4, 
      image: "https://picsum.photos/seed/labels/600/400",
      description: dict.portfolio.item4Description
    },
    { 
      title: dict.portfolio.item5, 
      image: "https://picsum.photos/seed/booth/600/400",
      description: dict.portfolio.item5Description
    },
    { 
      title: dict.portfolio.item6, 
      image: "https://picsum.photos/seed/menu/600/400",
      description: dict.portfolio.item6Description
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">{dict.portfolio.title}</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dict.portfolio.description}
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full aspect-[3/2] object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="text-sm text-gray-200">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
