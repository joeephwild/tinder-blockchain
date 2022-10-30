import { MoralisProvider } from 'react-moralis'
import { TinderProvider } from '../context/TinderContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider>
    <TinderProvider>
     <Component {...pageProps} />
     </TinderProvider>
  </MoralisProvider>
  )
}

export default MyApp
