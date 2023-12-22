"use client"

import { Box, Container, Grid, Paper, Typography, styled } from "@mui/material"
import { CardDes } from "./card"







export const DescriptionCards = ()=>{
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
            <Container className="mt-20" maxWidth="md">
            <Typography className="text-2xl text-center font-bold text-white mb-3">
                All-in-One
            </Typography>
            <Typography
            className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-amber-500 mb-15"
            variant="h1"
            style={{fontFamily: "Arial"}}
            >
            The potency of advertising
            </Typography>
                <Box className="grid grid-cols-2 gap-8 mt-10">
                    <CardDes/>
                    <CardDes/>
                    <CardDes/>
                    <CardDes/>
                </Box>
            </Container>
    )
}


