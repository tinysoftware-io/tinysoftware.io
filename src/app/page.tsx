import Image from 'next/image'
import { TextIntro } from '@/components/TextIntro'
import { Footer } from '@/components/Footer'
import Script from 'next/script'

const Home: React.FC = () => {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
            </Script>
            <div className="flex flex-col min-h-screen">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                    <Image
                        src="/tiny_software_logo.svg"
                        alt="Tiny Softare Logo"
                        width={250}
                        height={42}
                        priority
                    />
                </div>

                <main className="my-auto sm:px-6 lg:px-8">
                    <TextIntro />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Home
