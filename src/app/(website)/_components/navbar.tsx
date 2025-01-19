import { Link as LucideLink, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type Props = {}

const LandingPageNavBar = () => {
  return (
    <nav className='flex justify-between items-center'>
      <div className='text-3xl font-semibold flex items-center gap-x-3'>
        <MenuIcon className="w-6 h-6" />
        <Image
          alt='logo'
          src='/streaman-logo.svg'
          width={40}
          height={40}
          priority
        />
        <span>Streaman</span>
      </div>
      <div className='hidden gap-x-10 items-center lg:flex'>
        <Link href='/' className='bg-[#7320DD] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80'>
          <span>Home</span>
        </Link>
        <Link href='/' className='py-2 px-5 font-semibold text-lg hover:text-[#7320DD]'>
          <span>Pricing</span>
        </Link>
        <Link href='/' className='py-2 px-5 font-semibold text-lg hover:text-[#7320DD]'>
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  )
}

export default LandingPageNavBar