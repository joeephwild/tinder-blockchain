import ConnectWallet from "../components/ConnectWallet";
import HomePage from '../components/HomePage'
import { useContext } from "react";
import { TinderContext } from '../context/TinderContext'

const style = {
  wrapper: ``,
}

export default function Home() {
  const { currentAccount } = useContext(TinderContext)
  return (
    <div className={style.wrapper}>
     {currentAccount
      ? (<HomePage />) 
     : 
     (
      <ConnectWallet />
     
     )}
    
    </div>
  )
}
