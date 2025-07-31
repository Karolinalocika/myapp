// app/page.tsx
import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/app/components/navbar'
import Hero from '@/app/components/hero'
import Sluzby from '@/app/components/sluzby'
import SocialProof from '@/app/components/social'
import ContactForm from '@/app/components/contactform'
import Footer from '@/app/components/footer'
import LazySection from '@/app/components/LazySection'

export const metadata: Metadata = {
  title: {
    default: 'Woofdesign – grafický design & ilustrace na míru',
    template: '%s | Woofdesign',
  },
  description:
    'Woofdesign – profesionální grafický design a ilustrace od Karolíny Jurečky Krobové. Tvorba loga, vizuální identity, tiskovin a grafiky pro sociální sítě.',
  keywords: [
    'grafický design',
    'ilustrace',
    'tvorba loga',
    'vizuální identita',
    'tiskoviny',
    'grafika pro sociální sítě',
    'Woofdesign',
  ],
  openGraph: {
    title: 'Woofdesign – grafický design & ilustrace',
    description:
      'Originální tvorba loga, vizuální identity, tiskovin a ilustrací na míru. Kontaktujte Karolínu Jurečku Krobovou.',
    url: 'https://www.woofdesign.art',
    siteName: 'Woofdesign',
    images: [
      {
        url: 'https://www.woofdesign.art/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ukázka grafického designu a ilustrací Woofdesign',
      },
    ],
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Woofdesign – grafický design & ilustrace',
    description:
      'Tvorba loga, vizuální identity, tiskovin a originálních ilustrací pro firmy i jednotlivce.',
    creator: '@karolina_krobova',
    images: ['https://www.woofdesign.art/og-image.png'],
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Služby – lazy-load s threshold 400px */}
      <section className="mt-16">
        <LazySection thresholdPx={400} placeholder={<SluzbySkeleton />}>
          <Sluzby />
        </LazySection>
      </section>

      {/* 3. Sociální důkazy */}
      <section className="mt-16">
        <LazySection thresholdPx={400} placeholder={<SocialProofSkeleton />}>
          <SocialProof />
        </LazySection>
      </section>

      {/* 4. Kontaktní formulář */}
      <section className="mt-16">
        <LazySection thresholdPx={400} placeholder={<ContactFormSkeleton />}>
          <ContactForm />
        </LazySection>
      </section>

      <Footer />
    </div>
  )
}

/* ------------------------------------------------------------------------
   Skeleton komponenty pro vizuální fallback při načítání
   ------------------------------------------------------------------------ */
function SluzbySkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-0 animate-pulse">
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="h-64 bg-gray-200 rounded-2xl shadow-inner"
          />
        ))}
    </div>
  )
}

function SocialProofSkeleton() {
  return (
    <div className="space-y-6 px-4 lg:px-0 animate-pulse">
      <div className="h-6 bg-gray-200 w-1/3 rounded" />
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="h-48 bg-gray-200 rounded-lg"
          />
        ))}
    </div>
  )
}

function ContactFormSkeleton() {
  return (
    <div className="max-w-xl mx-auto p-4 space-y-4 animate-pulse">
      <div className="h-10 bg-gray-200 rounded" />
      <div className="h-40 bg-gray-200 rounded" />
      <div className="h-10 bg-gray-200 rounded w-1/3" />
    </div>
  )
}
