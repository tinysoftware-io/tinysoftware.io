import Image from 'next/image'
import { TextIntro } from '@/components/TextIntro'
import { Footer } from '@/components/Footer'

const Home: React.FC = () => {
    return (
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
    )
}

export default Home
