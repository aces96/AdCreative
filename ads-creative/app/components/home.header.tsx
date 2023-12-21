import { Box, Button, Container, Typography } from "@mui/material"
import { createTheme } from '@mui/material/styles';

import '@fontsource/roboto/700.css';





export const  HomeHeader = ()=>{
    return (
        <>
            <Container className="bg-white bg-opacity-50 h-screen w-screen pt-24 rounded-3xl border-2 border-white flex flex-col items-center" maxWidth="xl">
                    <Typography className="text-7xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600" variant="h1" >
                        #Revolutionize Your Ads<br /> Next Gen<br />Creative Tools
                    </Typography>  

                    <Typography className="text-3xl text-center text-indigo-700 font-normal mt-5" variant="h3" >
                        Generate advertising creations that surpass those of your competitors.
                    </Typography> 

                    <button className="bg-rose-500 hover:bg-indigo-600 w-52 h-16 shadow-lg	shadow-rose-500 hover:shadow-indigo-500 w  text-white mt-16 rounded-xl text-lg text-bold">Try for free</button> 

                    <Box className="relative  h-80 w-5/12 mt-24 flex items-center justify-center">
                        <div className="absolute bg-yellow-300 right-0 h-80 w-72 z-0 rounded-2xl">

                        </div>

                        <div className="absolute shadow-lg bg-green-400 left-1/2 transform -translate-x-1/2 h-96 w-72 z-50 rounded-2xl">

                        </div>


                        <div className="absolute bg-blue-400 left-0 h-80 w-72 z-0 rounded-2xl">

                        </div>

                    </Box>
            </Container>
        </>
    )
}
