import { useState, createContext, useEffect} from 'react'
import { faker } from '@faker-js/faker'
import { useMoralis } from 'react-moralis'
import { ethers } from 'ethers'


export const TinderContext = createContext()


export const TinderProvider = ({ children }) => {
    const [cardsData, setCardsData] = useState([])
    const [currentAccount, setCurrentAccount] = useState()
    const [currentUser, setCurrentUser] = useState()
    const [error, setError] = useState()
        
    //check wallet connection
    const checkWalletConnect = async() => {
      if(!window.ethereum) return setError('please install metamask');

      const account = await window.ethereum.request({method: "eth_accounts"});

      if (account.length) {
        setCurrentAccount(account[0]);
      }else {
        setError('please install metamask and relaod');
      }
    }

    //a function to check if wallet is connected and retrieve the address and set the
    //currentAccount to the user data
   const walletConnection = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
      if(window.ethereum)
        return setError("pls install metamask")
      const account = await window.ethereum.request({method: "eth_requestAccounts"});
      setCurrentAccount(account[0])
   }
   
   //a function to connect the user wallet to the app
   const accountChangedHandler = async (newAccount) => {
    const address = await newAccount.getAddress();
    setCurrentAccount(address);
  }
  
  //disconnect the user wallet from the app
  const disconnectWallet = () => {
    setCurrentAccount('')
  }
  
  useEffect(() => {
    checkWalletConnect()
    walletConnection()
  })
  
    return (
        <TinderContext.Provider
        value={{
            walletConnection,
            disconnectWallet,
            currentAccount,
            currentUser,
          }} >
            {children}
        </TinderContext.Provider>
    )
}