import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-grey-100">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="flex flex-col justify-start items-start gap-6">
                <Image src="/logo.svg" height={18} width={118} alt='logo' className="class-contain"></Image>
                <p className="text-base text-gray-700 ">
                    Carhub 2023<br/>
                    All rights reserved &copy;
                    </p>
            </div>
            <div className="footer__links ">
                {footerLinks.map((some) => (
                    <div key={some.title} className='footer__link flex justify-center items-center'>
                        <h3 className='font-bold'>{some.title}</h3>
                        { some.links.map((item) =>(
                                <Link key={item.title}
                                href={item.url}
                                className='text-gray-500'>{item.title}</Link>
                            ))}
                        </div>
                ))}
            </div>
            </div>
            <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
                <div className="flex-1 flex justify-evenly items-center">
                    <p>@2023 Carhub. All Rights Reserved</p>
                    <div className="flex-1 flex justify-end ">
                    <Link href="/" className='text-gray-500 mr-7'>
                        Privacy Policy
                    </Link>
                    <Link href="/" className='text-gray-500'>
                        Terms and Conditions
                    </Link>
                    </div>
                </div>
            </div>
    </footer>
  )
}

export default Footer
