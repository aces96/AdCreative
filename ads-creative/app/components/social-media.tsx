import { Box, Typography, createTheme } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '@fontsource/roboto/500.css';





export const SocialMediaComponent = ()=>{
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
      <Box className='absolute -bottom-14 left-0 right-0 m-auto bg-white  h-20 w-2/6 border-2 border-pink-700 rounded-3xl flex flex-row items-center justify-between'>
            <Box className="border-r-2  border-gray-300 w-1/3 p-4">
                <Typography style={{fontFamily: 'Arial'}} className="text-black text-lg" variant="h5">
                    Find us on :
                </Typography>                    
            </Box>
            <Box className='w-2/3 flex flex-row items-center justify-around'>
                <FacebookIcon style={{color: "black"}} fontSize="large"/>
                <InstagramIcon style={{color: "black"}} fontSize="large"/>
                <GoogleIcon style={{color: "black"}} fontSize="large"/>
                <LinkedInIcon style={{color: "black"}} fontSize="large"/>
                <TwitterIcon style={{color: "black"}} fontSize="large"/>
            </Box>
      </Box>  
    )
}