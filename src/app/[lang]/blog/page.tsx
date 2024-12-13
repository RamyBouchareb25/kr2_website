import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

export default async function BlogPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  const blogPosts = [
    {
      title: dict.blog.post1.title,
      excerpt: dict.blog.post1.excerpt,
      date: "2024-03-15",
      image: "https://picsum.photos/seed/printing-tech/800/600",
      slug: "the-future-of-printing-technology"
    },
    {
      title: dict.blog.post2.title,
      excerpt: dict.blog.post2.excerpt,
      date: "2024-03-10",
      image: "https://picsum.photos/seed/eco-printing/800/600",
      slug: "sustainable-printing-practices"
    },
    {
      title: dict.blog.post3.title,
      excerpt: dict.blog.post3.excerpt,
      date: "2024-03-05",
      image: "https://picsum.photos/seed/paper-choice/800/600",
      slug: "choosing-the-right-paper-for-your-project"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">{dict.blog.title}</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dict.blog.description}
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={600}
                      className="rounded-lg object-cover mb-4 w-full h-48"
                    />
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <time className="text-sm text-gray-500 dark:text-gray-400">{post.date}</time>
                    <Button asChild variant="ghost">
                      <Link href={`/${lang}/blog/${post.slug}`}>{dict.blog.readMore}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
