import { Container, Typography } from "@mui/material"




export const  HomeHeader = ()=>{
    return (
        <>
            <Container className="bg-white bg-opacity-50 h-screen w-screen pt-24" maxWidth="xl">
                    <Typography className="text-7xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600" variant="h1" >
                        #Revolutionize Your Ads<br /> Next Gen<br />Creative Tools
                    </Typography>  

                    <Typography className="text-3xl text-center font-extrabold text-indigo-700 mt-5" variant="h3" >
                        Generate advertising creations that surpass those of your competitors.
                    </Typography>  
            </Container>
        </>
    )
}