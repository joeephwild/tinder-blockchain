import React from 'react'
import Card from './Card'
import Header from './Header'


const style = {
    wrapper: `h-screen w-screen flex flex-col bg-[#222229]`,
    cardsContainer: `flex mt-9 flex-col items-center justify-center flex-1`,
  }

const HomePage = () => {
  return (
    <div>
        <Header  />
        <div className={style.cardsContainer}> 
        <Card />
      </div>
    </div>
  )
}

export default HomePage