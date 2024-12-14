import { Card, CardContent } from "@/components/ui/card"
import { Printer, Users, ThumbsUp, Zap } from 'lucide-react'
import Image from "next/image"
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

export default async function AboutPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  const founders = [
    {
      name: "Leghrib Rami",
      role: "Co-Founder",
      image: "/Rami.jpg" // Replace with actual image
    },
    {
      name: "Karim Iarkane",
      role: "Co-Founder",
      image: "/karim.jpg" // Replace with actual image
    },
    {
      name: "Bouchareb Ramy",
      role: "Co-Founder",
      image: "/Ramy.jpg" // Replace with actual image
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">{dict.about.title}</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dict.about.description}
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 py-12">
              <p className="text-gray-500 dark:text-gray-400">
                {dict.about.history}
              </p>
              
              {/* Founders Section */}
              <div className="py-8">
                <h2 className="text-2xl font-bold text-center mb-8">{dict.about.ourFounders}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {founders.map((founder, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold">{founder.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{founder.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="text-2xl font-bold">{dict.about.missionTitle}</h2>
              <p className="text-gray-500 dark:text-gray-400">
                {dict.about.missionDescription}
              </p>
              <h2 className="text-2xl font-bold">{dict.about.whyChooseUsTitle}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <Printer className="mb-4 h-12 w-12" />
                    <h3 className="text-lg font-semibold">{dict.about.technology}</h3>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                      {dict.about.technologyDescription}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <Users className="mb-4 h-12 w-12" />
                    <h3 className="text-lg font-semibold">{dict.about.expertTeam}</h3>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                      {dict.about.expertTeamDescription}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <ThumbsUp className="mb-4 h-12 w-12" />
                    <h3 className="text-lg font-semibold">{dict.about.customerSatisfaction}</h3>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                      {dict.about.customerSatisfactionDescription}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <Zap className="mb-4 h-12 w-12" />
                    <h3 className="text-lg font-semibold">{dict.about.quickTurnaround}</h3>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                      {dict.about.quickTurnaroundDescription}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
