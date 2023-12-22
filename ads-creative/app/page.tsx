"use client"

import Image from 'next/image'
import { HomeHeader } from './components/home.header'
import { SocialMediaComponent } from './components/social-media'
import { Box, Typography, createTheme } from '@mui/material'
import { DescriptionCards } from './components/description.cards'
import Head from 'next/head'

export default function Home() {
  const theme = createTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        },
    });

  return (
    <Box className="overflow-x-hidden">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="min-h-screen w-screen pt-12 pb-12 bg-gradient-to-t from-pink-200 to-purple-300 relative">
        <HomeHeader/> 
        <SocialMediaComponent/>
      </main>
      <Box className="min-h-screen w-screen pt-12 bg-indigo-900">
        <Box className="w-full flex flex-row items-center justify-center mt-8">
          <Typography style={{textAlign: 'center', fontFamily: "Arial"}} variant='h6' className='text-white'>
          The immeasurable <span className='text-yellow-400'>secret of over 2,000,000</span> creators and businesses.
          </Typography>
        </Box>

        <DescriptionCards/>

      </Box>
    </Box>
  )
}
