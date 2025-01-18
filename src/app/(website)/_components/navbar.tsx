import { MenuIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const LandingPageNavBar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='text-3xl font-semibold flex items-center gap-x-3'>
        <MenuIcon className="w-6 h-6" />
        
      </div>
    </div>
  )
}

export default LandingPageNavBar