import type { Metadata } from "next";
import "./globals.css";
import { Providers } from './providers'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import { bebasNeue } from '@/fonts/localFonts'

export const metadata: Metadata = {
  title: "Liteflix",
  description: "Liteflix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.className} ${bebasNeue.variable}`}>
      <body>
        <ThemeRegistry>
          <Providers>
            {children}
          </Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}
