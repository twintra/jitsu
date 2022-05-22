import { Button, Grid } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function SlideShowTest() {
    const [currentImage, setCurrentImage] = useState(0);
    const imageList = [
        "/Picture/144_thumbnail_2.jpg",
        "/Picture/1920x1080_1.jpg",

    ]

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % imageList.length)
    }

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
                            <Image src={image_path} width={1920 * 0.3} height={1080 * 0.3} />
                        )
                    }
                })
            }


            <Button onClick={nextImage}>
                apple {currentImage}
            </Button>
        </Grid>
    );
}