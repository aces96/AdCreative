import { Box, Typography } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '@fontsource/roboto/500.css';





export const SocialMediaComponent = ()=>{

    return (
      <Box className='absolute -bottom-14 left-0 right-0 m-auto bg-white  h-20 w-2/6 border-2 border-pink-700 rounded-3xl flex flex-row items-center justify-between'>
            <Box className="border-r-2  border-gray-300 w-1/3 p-4">
                <Typography className="text-black text-lg" variant="h5">
                    Find us on :
                </Typography>                    
            </Box>
            <Box className='w-2/3 flex flex-row items-center justify-around'>
                <FacebookIcon fontSize="large"/>
                <InstagramIcon fontSize="large"/>
                <GoogleIcon fontSize="large"/>
                <LinkedInIcon fontSize="large"/>
                <TwitterIcon fontSize="large"/>
            </Box>
      </Box>  
    )
}