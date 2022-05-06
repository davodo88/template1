import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <>
      <header className="w-screen">
        <Navbar />
      </header>

      <body className="bg-slate-50 p-1 font-serif w-screen">
        
      </body>

      <footer className="font-serif  bg-black text-white h-15 text-xs lg:text-lg lg:justify-around w-screen">
        <Footer /> 
      </footer>
    </>
  );
}

export default Home