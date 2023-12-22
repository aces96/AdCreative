import { useState } from "react";
import { Box, Button, Container, Typography, createTheme } from "@mui/material";
import Image from "next/image";

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

    export const HomeHeader = () => {
    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);

    const handleMouseMove = (e: any) => {
        const box = e.currentTarget.getBoundingClientRect();
        const mouseY = e.clientY - box.top;
        const mouseX = e.clientX - box.left;

        const maxRotation = 20; // Adjust the maximum rotation angle as needed

        // Calculate rotation along the X-axis (vertical)
        const rotationXValue = (mouseY / box.height - 0.5) * 2 * maxRotation;

        // Calculate rotation along the Y-axis (horizontal)
        const rotationYValue = (mouseX / box.width - 0.5) * 2 * maxRotation;

        setRotationX(rotationXValue);
        setRotationY(rotationYValue);
    };

    return (
        <Container
            className="bg-white bg-opacity-50 h-full w-screen rounded-3xl border-2 border-white flex flex-col items-center p-0"
            maxWidth="lg"
        >
            <Box className="w-full flex flex-row items-center justify-center">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    height={150}
                    width={150}
                />
            </Box>
            <Typography
            className="text-6xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600"
            variant="h1"
            style={{fontFamily: "Arial"}}
            >
            #Revolutionize Your Ads
            <br /> Next Gen
            <br />
            Creative Tools
            </Typography>

            <Typography
            className="text-3xl text-center text-indigo-700 font-normal mt-5"
            variant="h3"
            style={{fontFamily: "Arial"}}
            >
            Generate advertising creations that surpass those of your competitors.
            </Typography>

            <button className="bg-rose-500 hover:bg-indigo-600 w-52 h-16 shadow-lg shadow-rose-500 hover:shadow-indigo-500 w text-white mt-16 rounded-xl text-lg text-bold">
            Try for free
            </button>

            <Box
            onMouseMove={handleMouseMove}
            style={{
                transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
            }}
            className="relative h-80 w-5/12 mt-24 flex items-center justify-center mb-24"
            >
            <div className="absolute bg-yellow-300 right-0 h-80 w-72 z-0 rounded-2xl"></div>

            <div className="absolute shadow-lg bg-green-400 left-1/2 transform -translate-x-1/2 h-96 w-72 z-50 rounded-2xl"></div>

            <div className="absolute bg-blue-400 left-0 h-80 w-72 z-0 rounded-2xl"></div>
            </Box>
        </Container>
    );
};
