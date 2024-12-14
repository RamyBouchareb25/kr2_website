import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Link from "next/link";

const Footer = async ({ lang }: { lang: Locale }) => {
  const dict = await getDictionary(lang);

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {dict.footer.about.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {dict.footer.about.description}
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {dict.footer.quickLinks.title}
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href={`/${lang}/services`}
                className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
              >
                {dict.footer.quickLinks.services}
              </Link>
              <Link
                href={`/${lang}/portfolio`}
                className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
              >
                {dict.footer.quickLinks.portfolio}
              </Link>
              <Link
                href={`/${lang}/about`}
                className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
              >
                {dict.footer.quickLinks.about}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
              >
                {dict.footer.quickLinks.contact}
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {dict.footer.services.title}
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href={`/${lang}/services/rollups`}
                className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
              >
                {dict.footer.services.rollups}
              </Link>
              <Link
                href={`/${lang}/services/stickers`}
                className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
              >
                {dict.footer.services.stickers}
              </Link>
              <Link
                href={`/${lang}/services/tshirts`}
                className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
              >
                {dict.footer.services.tshirts}
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {dict.footer.contact.title}
            </h3>
            <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <p>Birkhadem, les vergers, alger</p>
              <p>Phone: +213 783 111 071</p>
              <p>Email: kr2printdz@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © 2024 K2 Printing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
