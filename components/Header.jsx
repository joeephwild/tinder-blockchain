import React from 'react'
import Image from 'next/image'
import logo from '../public/assets/tinder_logo_white.png'

const style = {
    wrapper: `h-24 py-11 text-white flex w-screen items-center px-9 justify-between`,
    main: `flex items-center gap-4`,
    tinderText: `text-5xl font-semibold mr-8 cursor-pointer`,
    leftMenu: `flex gap-8 text-lg`,
    menuItem: `cursor-pointer hover:text-red-400 duration-300 hover:scale-110`,
    rightMenu: `flex gap-3 items-center`,
    currentAccount: `px-2 py-1 border border-gray-500 rounded-full flex items-center`,
    accountAddress: `ml-2`,
    authButton: `bg-white text-black text-red-400 font-bold text-xl px-5 text-sm py-3 rounded-full`,
    logo: 'h-16 w-16 md:h-28 md:w-28 object-contain',
}

const Header = ({ currentAccount }) => {
  return (
    <div  className={style.wrapper}>
        <div className={style.main}>
        <Image className={style.logo} src={logo} layout='intrinsic' alt='logo' />
            <div className={style.leftMenu}>
                <div className={style.menuItem}>Products</div>
                <div className={style.menuItem}>Learn</div>
                <div className={style.menuItem}>Safety</div>
                <div className={style.menuItem}>Support</div>
                <div className={style.menuItem}>Download</div>
            </div>
            <div className={style.rightMenu}>
                <div>ENGLISH</div>
                {currentAccount ? (
          <>
            <div className={style.currentAccount}>
              <Image
                src={
                  'https://moralis.io/wp-content/uploads/2021/05/moralisWhiteLogo.svg'
                }
                alt='moralis'
                height={20}
                width={20}
              />
              <span className={style.accountAddress}>
                {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
              </span>
            </div>
            <button
              className={style.authButton}
              onClick={() => disconnectWallet()}
            >
              Logout
            </button>
          </>
        ) : (
          <button className={style.authButton} onClick={() => connectWallet()}>
            Connect
          </button>
        )}
            </div>
        </div>
    </div>
  )
}

export default Header