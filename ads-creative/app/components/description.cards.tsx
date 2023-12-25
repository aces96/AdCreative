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
            <Typography className="text-3xl text-center font-bold text-indigo-400 mb-3">
                All-in-One
            </Typography>
            <Typography
            className="text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600"
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


