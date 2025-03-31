// pages/_app.js
import {ChakraProvider} from '@chakra-ui/react'
import '../styles/globals.css'
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

function MyApp({Component, pageProps}) {
    return (
        <ChakraProvider>
            <Navigation/>

            <Component {...pageProps} />

            <Footer/>
        </ChakraProvider>
    )
}

export default MyApp