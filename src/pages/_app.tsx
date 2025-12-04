import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          theme="colored"
          pauseOnHover
        />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
