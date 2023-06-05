import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer: React.FC = () => {
    const WHAT_YEAR_IS_IT = new Date().getFullYear()
    return (
        <footer className="bg-black">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    <a href="https://www.linkedin.com/company/tiny-software-io" className="text-gray-400 hover:text-gray-500">
                        <FaLinkedin className="h-6 w-6" aria-hidden="true" />
                    </a>
                    <a href="https://www.twitter.com/tinysoftware_io" className="text-gray-400 hover:text-gray-500">
                        <FaTwitter className="h-6 w-6" aria-hidden="true" />
                    </a>
                    <a href="https://www.github.com/tinysoftware-io" className="text-gray-400 hover:text-gray-500">
                        <FaGithub className="h-6 w-6" aria-hidden="true" />
                    </a>



                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-gray-500">
                        &copy; {WHAT_YEAR_IS_IT} Tiny Software, LLC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

