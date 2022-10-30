import React from 'react'
import Header from './Header'


const style = {
    wrapper: `h-screen w-screen flex flex-col bg-[#222229]`,
    cardsContainer: `flex flex-col items-center justify-center flex-1`,
  }

const HomePage = () => {
  return (
    <div className={style.wrapper}>
        <Header />
        <div className={style.cardsContainer}>   </div>
    </div>
  )
}

export default HomePage