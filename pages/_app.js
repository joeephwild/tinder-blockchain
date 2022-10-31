import { MoralisProvider } from 'react-moralis'
import { TinderProvider } from '../context/TinderContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <TinderProvider>
     <Component {...pageProps} />
     </TinderProvider>
  )
}

export default MyApp
