"use client"

import { Box, Container, Typography, createTheme } from "@mui/material"
import RocketIcon from '@mui/icons-material/Rocket';








export const PricingSection = ()=>{

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
        <Box className="w-full h-screen mt-60" >
            <Box className="bg-rose-600 h-full w-4/5 m-auto  rounded-2xl relative">
                <Box className="absolute rounded-3xl -top-32 left-0 right-0 m-auto h-2/4 w-4/5 bg-violet-950 p-10">
                    <Box className="w-4/6">
                        <Typography style={{fontFamily: "Arial", fontWeight: "800"}} className="text-5xl text-white mb-5" variant="h2">
                            Who can use it?
                        </Typography>

                        <Typography style={{fontFamily: "Arial"}} className="text-lg w-3/6 text-stone-300 mt-5" variant="caption">
                            E-commerce stores, startups or marketing agencies with many accounts… Basically anyone <b>who needs an unfair advantage</b> thanks to our unique A.I.
                        </Typography>

                        
                    </Box>
                    <Box className="grid grid-cols-3 gap-4 w-full mt-10">
                            <Box sx={{backgroundColor: "rgba(255,255,255,0.2)"}} className="h-56 rounded-2xl p-5 relative">
                                <Typography variant="h3" className="text-2xl text-white font-bold" style={{fontFamily: "Arial"}}>Startups</Typography>
                                <Typography variant="caption" className="text-base text-white" style={{fontFamily: "Arial"}}>Spend your money on creatives that convert, make the most of the strongest artificial intelligence on the ad creation market.</Typography>
                            </Box>

                            <Box sx={{backgroundColor: "rgba(255,255,255,0.2)"}} className="h-56 rounded-2xl p-5 relative">
                                <Typography variant="h3" className="text-2xl text-white font-bold" style={{fontFamily: "Arial"}}>Ecommerce</Typography>
                                <Typography variant="caption" className="text-base text-white" style={{fontFamily: "Arial"}}>Spend your money on creatives that convert, make the most of the strongest artificial intelligence on the ad creation market.</Typography>
                            </Box>

                            <Box sx={{backgroundColor: "rgba(255,255,255,0.2)"}} className="h-56 rounded-2xl p-5 relative">
                                <Typography variant="h3" className="text-2xl text-white font-bold" style={{fontFamily: "Arial"}}>Agencies</Typography>
                                <Typography variant="caption" className="text-base text-white" style={{fontFamily: "Arial"}}>Spend your money on creatives that convert, make the most of the strongest artificial intelligence on the ad creation market.</Typography>
                            </Box>
                        </Box>
                </Box>

                <Typography style={{fontFamily: "Arial", fontWeight: "800"}} className="text-5xl text-white mb-5" variant="h2">
                        Pricing that pays for itself.
                </Typography>
                <Box sx={{backgroundColor: "rgba(255,255,255,0.2)"}} className="absolute rounded-3xl -bottom-32 left-0 right-0 m-auto h-2/4 w-4/5 p-10">
                    
                </Box>
            </Box>
        </Box>
    )
}