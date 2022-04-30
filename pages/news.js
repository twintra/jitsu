import { Fade, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image';
import news_items from '../data/news_data'
import styles from '../styles/Index.module.css'

export default function News() {
    const logoSizeRatio = 0.4;
    function createNewsItem() {
        return news_items.map((value, index) => {
            return (
                <Grid item key={index} style={{ marginBottom: "30px" }}>
                    <Grid container direction={"row"}>

                        <Grid item style={{ marginRight: "20px" }}>

                            <Image src={value.image_path === "" ? "/news_image/default_image.png" : value.image_path} width={1200 * logoSizeRatio} height={630 * logoSizeRatio} />
                        </Grid>
                        <Grid item style={{ marginLeft: "20px" }}>
                            <Grid container direction="column">
                                <Grid item xs style={{marginBottom:"2px"}}>
                                    <Typography sx={{ whiteSpace: 'pre-line' }} fontFamily="Zen+Antique" fontSize={"26px"} fontWeight={"Bold"}>
                                        {value.title.en}

                                    </Typography>
                                </Grid>
                                <Grid item xs style={{marginBottom:"4px"}}>
                                    <Typography sx={{ whiteSpace: 'pre-line' }} fontFamily="Zen+Antique" fontWeight={500} color={"#3A685D"} >
                                        {value.date}

                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography sx={{ whiteSpace: 'pre-line' }} fontFamily="Zen+Antique" fontWeight={500}>
                                        {value.description.en}

                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            );
        });
    }
    return (
        <Fade in={true}>

            <Grid
                container
                style={{ minHeight: '85vh' }}
            >
                <Grid xs item styles={{ backgroundColor: "red" }}>
                    <Grid
                        style={{
                            height: "100%",
                            paddingLeft: "80px",
                            paddingRight: "80px",
                            paddingBottom: "100px",
                            paddingTop: "50px"

                        }}
                        container
                        direction={"column"}

                        justifyContent={"center"}
                    >
                        {createNewsItem()}
                    </Grid>
                </Grid>

            </Grid>
        </Fade>
    )
}