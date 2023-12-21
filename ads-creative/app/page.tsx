"use client"

import Image from 'next/image'
import { HomeHeader } from './components/home.header'
import { SocialMediaComponent } from './components/social-media'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <>
      <main className="min-h-screen pt-12 pb-12 bg-gradient-to-t from-pink-200 to-purple-300 relative">
        <HomeHeader/> 
        <SocialMediaComponent/>
      </main>
      <Box className="min-h-screen pt-12 bg-indigo-900">
        {/* <Image
        alt="alt"
        src="/background.svg"
        layout='fill'
        objectFit='contain'
        style={{position: 'absolute', zIndex: 0}}
        /> */}

        {/* <div className='relative z-10 h-full w-full bg-transparent'>

        </div> */}

      </Box>
    </>
  )
}
