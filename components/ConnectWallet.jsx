import Image from 'next/image'
import React from 'react'
import logo from '../public/assets/tinder_logo_white.png'
import { AiOutlineMenu } from 'react-icons/ai'

const ConnectWallet = () => {
  return (
    <div className='bg-black'>
      <nav className='flex py-6 px-4 items-center justify-between'>
        <Image src={logo} width={90} height={90} objectFit="contain" alt='' />
        <div className='text-white text-xl'>
          <AiOutlineMenu />
        </div>
      </nav>
    </div>
  )
}

export default ConnectWallet