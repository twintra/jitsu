import * as React from 'react';

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import Image from 'next/image';
import { Button, Grid } from '@mui/material';



export default function SlideShow(props) {
    const itemWidth = props.width;
    const itemHeight = props.height;
    const timeInterval = props.interval;
    const containerRef = React.useRef(null);
    const [currentImage, setCurrentImage] = React.useState(0);

    const imageList = [
        "/Picture/144_thumbnail_2.jpg",
        "/Picture/1920x1080_1.jpg",
        "/Picture/144_thumbnail_2.jpg",
        "/Picture/1920x1080_1.jpg",
        "/Picture/144_thumbnail_2.jpg",
        "/Picture/1920x1080_1.jpg",
        "/Picture/144_thumbnail_2.jpg",
        "/Picture/1920x1080_1.jpg",

    ]

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % imageList.length)
    }


    React.useEffect(() => {
        let interval = null;
        let imageIndex = currentImage;
        interval = setInterval(() => {
            imageIndex = (imageIndex + 1) % imageList.length;
            setCurrentImage(imageIndex);
        }, timeInterval);

        return () => clearInterval(interval);

    }, [currentImage])

    return (

        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            justify="center"
            height="100%"
            sx={{
                height: "100%",
            }}
        >
            {
                imageList.map((image_path, index) => {
                    if (index === currentImage) {
                        return (
                            <Box
                                key={index}
                                sx={{

                                    display: 'flex',
                                    padding: 2,
                                    borderRadius: 1,

                                    overflow: 'hidden',
                                }}
                                ref={containerRef}
                            >
                                <Box >

                                    <Slide direction="left" in={true} container={containerRef.current}>
                                        <Paper sx={{ m: 1, width: itemWidth, height: itemHeight }} elevation={0}>
                                            <Image src={image_path} width={itemWidth} height={itemHeight} />
                                        </Paper>
                                    </Slide>
                                </Box>
                            </Box>
                        )
                    }
                })
            }

            {/* <Button onClick={nextImage}>
                nextImage {currentImage}
            </Button> */}

        </Grid>
    );
}
