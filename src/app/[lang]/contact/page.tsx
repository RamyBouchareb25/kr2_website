'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import { useDictionary } from '@/hooks/use-dictionary'
import { Locale } from '@/i18n-config'

export default function ContactPage({ params: { lang } }: { params: { lang: Locale } }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const dict = useDictionary(lang)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: formData,
    })

    setIsSubmitting(false)

    if (response.ok) {
      toast({
        title: "Success",
        description: "Your message has been sent successfully.",
      })
      event.currentTarget.reset()
    } else {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">{dict.contact?.title}</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dict.contact?.description}
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>{dict.contact?.formTitle}</CardTitle>
                  <CardDescription>{dict.contact?.formDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label htmlFor="name">{dict.contact?.nameLabel}</label>
                      <Input id="name" name="name" placeholder={dict.contact?.namePlaceholder} required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email">{dict.contact?.emailLabel}</label>
                      <Input id="email" name="email" placeholder={dict.contact?.emailPlaceholder} required type="email" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message">{dict.contact?.messageLabel}</label>
                      <Textarea className="min-h-[100px]" id="message" name="message" placeholder={dict.contact?.messagePlaceholder} required />
                    </div>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : dict.contact?.submitButton}
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-4">
                <Card>
                  <CardContent className="flex items-center space-x-4 p-4">
                    <Phone className="h-5 w-5" />
                    <div>
                      <h3 className="font-semibold">{dict.contact?.phone.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">+213 783 111 071</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">+213 559 894 496</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">+213 794 724 007</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center space-x-4 p-4">
                    <Mail className="h-5 w-5" />
                    <div>
                      <h3 className="font-semibold">{dict.contact?.email.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">hello@kr2print.com</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">kr2printdz@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center space-x-4 p-4">
                    <MapPin className="h-5 w-5" />
                    <div>
                      <h3 className="font-semibold">{dict.contact?.address.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Birkhadem, les vergers, alger</p>
                    </div>
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
