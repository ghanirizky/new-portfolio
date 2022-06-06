import '../styles/globals.css'
import '../public/css/bootstrap.min.css'
import '../public/css/unicons.css'
import '../public/css/tooplate-style.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
