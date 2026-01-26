import { rootMetadata } from '@/config';
import { neue_montreal } from '@/fonts';
import { Offcanvas } from '@/layout';
import { Providers } from '@/providers';
import './globals.css';

if (typeof window !== 'undefined') {
  window.cloudinary = null;
}

/** @type {import('next').Metadata} */
export const metadata = {
  ...rootMetadata,

  // ✅ FAVICON SETTINGS (THIS IS THE KEY PART)
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', // optional, only if exists
  },
};

/** @param {import('react').PropsWithChildren<unknown>} */
export default function RootLayout({ children }) {
  return (
    <html lang='en' dir='ltr' className={neue_montreal.variable}>
      <body className={neue_montreal.className}>
        <Providers>
          <Offcanvas />
          {children}
        </Providers>
      </body>
    </html>
  );
}
