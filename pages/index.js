import ConnectWallet from "../components/ConnectWallet";
import HomePage from '../components/HomePage'

const style = {
  wrapper: `h-screen w-screen flex flex-col bg-[#222229]`,
  cardsContainer: `flex flex-col items-center justify-center flex-1`,
}

const currentAccount = "0xB6A573eB3bC7FfB2A21bf2F81D44de948eb92c38"
export default function Home() {
  return (
    <div className={style.wrapper}>
     {!currentAccount ? (<ConnectWallet />) 
     : 
     (
     
     <HomePage currentAccount={currentAccount} />)}
    
    </div>
  )
}
