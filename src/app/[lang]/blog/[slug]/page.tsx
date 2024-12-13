/* eslint-disable */
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

async function getBlogPost(slug: string) {
  const posts = [
    {
      slug: 'the-future-of-printing-technology',
      title: 'The Future of Printing Technology',
      content: `
        <p>The printing industry is on the cusp of a technological revolution. With advancements in 3D printing, smart inks, and AI-driven design, the future of printing is both exciting and transformative.</p>
        
        <h2>3D Printing: Beyond Prototyping</h2>
        <p>3D printing has moved beyond simple prototyping and is now being used for end-use parts in industries ranging from aerospace to healthcare. The ability to print complex geometries and use a wide range of materials is opening up new possibilities in manufacturing and design.</p>
        
        <h2>Smart Inks: Interactive Print</h2>
        <p>Smart inks are bringing static prints to life. These inks can change color based on temperature, light, or even touch. Imagine packaging that changes color when a product is at the perfect temperature or business cards that reveal additional information when heated.</p>
        
        <h2>AI-Driven Design</h2>
        <p>Artificial Intelligence is revolutionizing the design process. AI algorithms can now generate countless design variations, optimize layouts for different print mediums, and even predict which designs will perform best with target audiences.</p>
        
        <h2>Sustainability in Printing</h2>
        <p>The future of printing is also green. New eco-friendly inks, recycled papers, and energy-efficient printers are reducing the environmental impact of the printing industry. Many companies are now offering carbon-neutral printing options.</p>
        
        <h2>Conclusion</h2>
        <p>As we look to the future, it's clear that the printing industry will continue to evolve and innovate. At K2 Printing, we're committed to staying at the forefront of these technological advancements, ensuring that we can offer our clients the most cutting-edge printing solutions available.</p>
      `,
      date: '2024-03-15',
      image: "https://picsum.photos/seed/printing-tech/800/600"
    },
    {
      slug: 'sustainable-printing-practices',
      title: 'Sustainable Printing Practices',
      content: `
        <p>In an era of increasing environmental awareness, the printing industry is making significant strides towards sustainability. At K2 Printing, we're committed to adopting and promoting eco-friendly printing practices. Here's how we're making a difference:</p>
        
        <h2>Eco-Friendly Inks</h2>
        <p>We've transitioned to using soy-based and other vegetable-based inks. These inks are not only more environmentally friendly in their production, but they also make it easier to recycle paper products. They produce vibrant colors and are less likely to release volatile organic compounds (VOCs) during the printing process.</p>
        
        <h2>Recycled and Sustainable Papers</h2>
        <p>We offer a wide range of recycled and sustainably sourced paper options. From 100% post-consumer waste paper to papers made from alternative fibers like bamboo or cotton, we ensure that our clients have eco-friendly choices without compromising on quality.</p>
        
        <h2>Energy-Efficient Printers</h2>
        <p>Our printing facility is equipped with the latest energy-efficient printers. These machines not only reduce our energy consumption but also minimize waste through precise color matching and reduced setup times.</p>
        
        <h2>Digital Printing for Short Runs</h2>
        <p>For smaller print runs, we recommend digital printing. This process eliminates the need for printing plates and reduces chemical use and waste. It's perfect for on-demand printing, reducing overproduction and storage needs.</p>
        
        <h2>Waste Reduction and Recycling</h2>
        <p>We have implemented comprehensive recycling programs in our facility. From paper scraps to ink cartridges, we ensure that as much waste as possible is recycled or properly disposed of. We also work with our clients to optimize designs to reduce paper waste.</p>
        
        <h2>Water-Based Coatings</h2>
        <p>Instead of solvent-based varnishes, we use water-based coatings. These provide the same protective and aesthetic benefits while being more environmentally friendly and easier to de-ink during the recycling process.</p>
        
        <h2>Conclusion</h2>
        <p>Sustainable printing is not just about being environmentally responsible; it's about providing our clients with high-quality products that they can feel good about. At K2 Printing, we're constantly exploring new ways to reduce our environmental impact without compromising on quality. Join us in our commitment to sustainable printing!</p>
      `,
      date: '2024-03-10',
      image: "https://picsum.photos/seed/eco-printing/800/600"
    },
    {
      slug: 'choosing-the-right-paper-for-your-project',
      title: 'Choosing the Right Paper for Your Project',
      content: `
        <p>The choice of paper can make or break your printing project. At K2 Printing, we understand the importance of selecting the right paper for each unique job. Here's a guide to help you make the best choice for your next printing project:</p>

        <h2>Understanding Paper Weight</h2>
        <p>Paper weight is typically measured in GSM (grams per square meter). The higher the GSM, the thicker and more durable the paper. For example:</p>
        <ul>
          <li>80-100 GSM: Standard office paper, suitable for everyday printing</li>
          <li>120-170 GSM: Ideal for flyers and posters</li>
          <li>200-300 GSM: Perfect for business cards and book covers</li>
        </ul>

        <h2>Coated vs. Uncoated Paper</h2>
        <p>Coated papers have a smooth finish that enhances color vibrancy and sharpness. They're great for glossy magazines and brochures. Uncoated papers have a more natural feel and are easier to write on, making them ideal for letterheads and notebooks.</p>

        <h2>Specialty Papers</h2>
        <p>For unique projects, consider specialty papers:</p>
        <ul>
          <li>Recycled paper: Eco-friendly option with a distinctive look</li>
          <li>Textured paper: Adds a tactile element to your print</li>
          <li>Metallic paper: Creates a luxurious, eye-catching effect</li>
        </ul>

        <h2>Considering Your Project Needs</h2>
        <p>Think about the purpose of your printed material. Will it be handled frequently? Does it need to be durable? Is color accuracy crucial? These factors will guide your paper choice.</p>

        <h2>Conclusion</h2>
        <p>Choosing the right paper is an art and a science. At K2 Printing, we're here to help you navigate these choices to ensure your printed materials look and feel exactly as you envision. Don't hesitate to reach out for personalized advice on your next project!</p>
      `,
      date: '2024-03-05',
      image: "https://picsum.photos/seed/paper-choice/800/600"
    }
  ]

  return posts.find(post => post.slug === slug)
}

export default async function BlogPost({ params: { lang, slug } }: { params: { lang: Locale, slug: string } }) {
  const dict: any = await getDictionary(lang)
  const post = await getBlogPost(slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="prose lg:prose-xl mx-auto">
          <h1>{dict.blog[post.slug]?.title || post.title}</h1>
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg my-4" />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
    </div>
  )
}
