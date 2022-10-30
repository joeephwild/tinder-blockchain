import Image from 'next/image'
import React from 'react'
import google from '../public/assets/google.svg'
import logo from '../public/assets/tinder_logo_white.png'
import { AiOutlineMenu } from 'react-icons/ai'

const style = {
  wrapper: ' bg-mobileImg relative md:bg-largeImage object-cover w-screen h-screen',
  backgroundBlur: 'bg-black/30  absolute top-0  w-full h-screen ',
  navWrapper: 'flex justify-between px-4 fixed h-20 w-full items-center z-50',
  logo: 'h-16 w-16 md:h-28 md:w-28 object-contain',
  menu: 'text-white flex text-end font-bold text-3xl',
  bigText: 'text-4xl md:text-8xl md:left-[18%] text-white absolute top-[27%] left-[16%] font-black capitalize mb-9',
  butttonWrap: ' flex items-center flex-col space-y-3 absolute top-[47%] left-[16%]',
  walletbutton: 'bg-white text-black font-bold text-xl px-8 md:w-[600px] py-3 rounded-full',
  google: 'md:h-[300px] w-[] md:w-[400px]',
  desc: 'text-xs absolute bottom-0 text-center text-gray-500 font-medium left-4'
}

const ConnectWallet = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.backgroundBlur} />
      <nav className={style.navWrapper}>
        <div>
          <Image className={style.logo} src={logo} layout='intrinsic' alt='logo' />
        </div>
        <div className={style.menu}>
          <AiOutlineMenu />
        </div>
      </nav>
      <div className='flex flex-col '>
        <span className={style.bigText}>swipe right</span>
        <div className={style.butttonWrap}>
        <button className={style.walletbutton}>Connect Wallet</button>
        <Image className={style.google} src={google} layout='intrinsic' alt='google' />
        </div>
      </div>
      <span className={style.desc}>All photos are of models and used for illustrative purpose only</span>
    </div>
  )
}

export default ConnectWallet