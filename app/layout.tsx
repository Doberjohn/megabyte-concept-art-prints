import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
import {Analytics} from '@vercel/analytics/react';

import { Metadata } from 'next';

export const metadata: Metadata = {
   generator: 'Next.js',
   metadataBase: new URL('https://megabyte-concept-art-prints.vercel.app/'),
   alternates: {
      canonical: "/",
   },
   applicationName: 'Megabyte Concept Art Prints Shop',
   referrer: 'strict-origin-when-cross-origin',
   keywords: [
      'Megabyte Concept',
      'Wall Art',
      'Paintings',
      'Interior Design',
      'House Decoration',
      'Digital Art',
      'AI Art',
      'Canvas',
      'Posters',
      'Art Prints',
      'Posters',
      'Framed Art'
   ],
   authors: [
      { name: 'John', url: 'https://mbconcept.art'}
   ],
   creator: 'John Fanidis',
   publisher: 'John Fanidis',
   openGraph: {
      title: 'Megabyte Concept Art Prints',
      description: 'The largest collection of beautiful art prints tailored to your house',
      url: 'https://megabyte-concept-art-prints.vercel.app/',
      siteName: 'Megabyte Concept Art Prints',
      images: [
         {
            url: '/opengraph-image.jpg',
            width: 1686,
            height: 882,
         },
      ],
      locale: 'en_US',
      type: 'website',
   },
   title: 'Megabyte Concept Art Prints Shop',
   description: 'Megabyte Concept Arts Prints brings the largest collection of beautiful art prints tailored to your house.',
}

export default function RootLayout({children}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
      <head>
         <meta name="ahrefs-site-verification" content="b40e1e496d70d0a69334176e4f5dd63b621c6e908a2f503ae813209895e9d5fe"/>
      </head>
      <body className={`${inter.className} antialiased`}>
      {children}
      <Analytics/>
      </body>
      </html>
   );
}
