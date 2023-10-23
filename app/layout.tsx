import { ThemeProvider } from '@/components/providers/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { ConvexClientProvider } from '@/components/providers/convex-provider';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Upim',
  description: 'Let us do all the work for you so you don’t have to',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/UpimBlack.svg",
        href: "/UpimBlack.svg"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/UpimWhite.svg",
        href: "/UpimWhite.svg"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
            storageKey='upim-theme-2'
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
