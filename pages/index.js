import ConnectWallet from "../components/ConnectWallet";
import HomePage from '../components/HomePage'



const currentAccount = "0xB6A573eB3bC7FfB2A21bf2F81D44de948eb92c38"
export default function Home() {
  return (
    <div>
     {!currentAccount ? (<ConnectWallet />) 
     : 
     (
     
     <HomePage currentAccount={currentAccount} />)}
    
    </div>
  )
}
