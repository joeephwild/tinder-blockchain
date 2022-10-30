import { useState, createContext, useEffect} from 'react'
import { faker } from '@faker-js/faker'
import { useMoralis } from 'react-moralis'

export const TinderContext = createContext()

export const TinderProvider = ({ children }) => {
    const { authenticate, isAuthenticated, user, Moralis } = useMoralis()
    const [cardsData, setCardsData] = useState([])
    const [currentAccount, setCurrentAccount] = useState()
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        checkWalletConnection()
    
        if (isAuthenticated) {
          requestUsersData(user.get('ethAddress'))
          requestCurrentUserData(user.get('ethAddress'))
        }
      }, [isAuthenticated])

    //a function to check if wallet is connected and retrieve the address and set the
    //currentAccount to the user data
   const checkWalletConnection = async() => {
    if (isAuthenticated) {
        const address = user.get('ethAddress')
        setCurrentAccount(address)
        requestToCreateUserProfile(address, faker.name.findName())
      } else {
        setCurrentAccount('')
      }
   }
   
   //a function to connect the user wallet to the app
   const connectWallet = async () => {
    if (!isAuthenticated) {
      try {
        await authenticate({
          signingMessage: 'Log in using Moralis',
        })
      } catch (error) {
        console.error(error)
      }
    }
  }
  
  //disconnect the user wallet from the app
  const disconnectWallet = async () => {
    await Moralis.User.logOut()
    setCurrentAccount('')
  }

    return (
        <TinderContext.Provider
        value={{
            connectWallet,
            disconnectWallet,
            currentAccount,
            currentUser,
          }} >
            {children}
        </TinderContext.Provider>
    )
}