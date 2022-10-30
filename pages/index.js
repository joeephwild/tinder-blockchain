import ConnectWallet from "../components/ConnectWallet";
import HomePage from '../components/HomePage'
import { useContext } from "react";
import { TinderContext } from '../context/TinderContext'

const style = {
  wrapper: `h-screen w-screen flex flex-col bg-[#222229]`,
  cardsContainer: `flex flex-col items-center justify-center flex-1`,
}

export default function Home() {
  const { connectWallet, currentAccount, disconnectWallet } =
    useContext(TinderContext)
  return (
    <div className={style.wrapper}>
     {!currentAccount
      ? (<ConnectWallet />) 
     : 
     (
     
     <HomePage />
     )}
    
    </div>
  )
}
