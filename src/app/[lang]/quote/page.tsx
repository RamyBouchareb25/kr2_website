'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { useDictionary } from '@/hooks/use-dictionary'
import { Locale } from '@/i18n-config'

export default function QuotePage({ params: { lang } }: { params: { lang: Locale } }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const dict = useDictionary(lang)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/send-quote', {
      method: 'POST',
      body: formData,
    })

    setIsSubmitting(false)

    if (response.ok) {
      toast({
        title: "Success",
        description: "Your quote request has been sent successfully.",
      })
      event.currentTarget.reset()
    } else {
      toast({
        title: "Error",
        description: "There was a problem sending your quote request. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">{dict.quote?.title}</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dict.quote?.description}
              </p>
            </div>
            <Card className="mx-auto max-w-2xl mt-8">
              <CardHeader>
                <CardTitle>{dict.quote?.formTitle}</CardTitle>
                <CardDescription>{dict.quote?.formDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label htmlFor="name">{dict.quote?.nameLabel}</label>
                    <Input id="name" name="name" placeholder={dict.quote?.namePlaceholder} required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email">{dict.quote?.emailLabel}</label>
                    <Input id="email" name="email" placeholder={dict.quote?.emailPlaceholder} required type="email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone">{dict.quote?.phoneLabel}</label>
                    <Input id="phone" name="phone" placeholder={dict.quote?.phonePlaceholder} type="tel" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service">{dict.quote?.serviceLabel}</label>
                    <Select name="service">
                      <SelectTrigger>
                        <SelectValue placeholder={dict.quote?.servicePlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="roll-ups">{dict.services?.rollups.title}</SelectItem>
                        <SelectItem value="stickers">{dict.services?.stickers.title}</SelectItem>
                        <SelectItem value="t-shirts">{dict.services?.tshirts.title}</SelectItem>
                        <SelectItem value="business-cards">{dict.services?.businessCards}</SelectItem>
                        <SelectItem value="large-format">{dict.services?.largeFormat}</SelectItem>
                        <SelectItem value="other">{dict.quote?.otherService}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="details">{dict.quote?.detailsLabel}</label>
                    <Textarea 
                      className="min-h-[100px]" 
                      id="details" 
                      name="details" 
                      placeholder={dict.quote?.detailsPlaceholder}
                      required 
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : dict.quote?.submitButton}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
