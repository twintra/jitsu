import { Grid, Typography, Button, Fade } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import SlideShow from '../components/home_component/slideShow'
import SlideShowTest from '../components/home_component/slideShowTest'


export default function Home() {

    return (
        <Fade in={true}>
            <Grid
                container
                style={{ minHeight: '85vh' }}
            >
                <Grid item xs sm={6}>

                    <SlideShow width={1920 * 0.3} height={1080 * 0.3} interval={2000}/>
                </Grid>
                <Grid item xs sm={6}>
                    <Grid container direction="column" alignItems="center" justifyContent="center" justify="center" height="100%" sx={{ height: "100%" }}>

                        <Typography
                            fontFamily="K2D"
                            sx={{
                                // textDecoration: 'underline',
                                color: "#252629",
                                fontWeight: "bold",
                                fontSize: 40
                            }}
                        >
                            Ori-JITSU CLUTCH BAG
                        </Typography>
                        <Link href={`/product/order`} passHref>
                            <Button
                                variant="contained"
                                sx={{
                                    marginTop: "30px",
                                    padding: "15px",
                                    borderRadius: "0px",
                                    color: "#FFFFFF",
                                    backgroundColor: "#252629",
                                    ":hover": {
                                        backgroundColor: "#000000"
                                    }
                                }}
                            >
                                <Typography
                                    fontFamily="K2D"
                                    sx={{
                                        // textDecoration: 'underline',
                                        // color: "#E5E9E8",
                                        fontWeight: "bold",
                                        fontSize: 20
                                    }}>
                                    ORDER NOW
                                </Typography>
                            </Button>
                        </Link>
                        <Link href={`/product`} passHref>
                            <Typography
                                fontFamily="K2D"
                                display="inline"
                                sx={{
                                    ":hover": {
                                        cursor: "pointer"
                                    },
                                    // textDecoration: 'underline',
                                    textDecoration: 'underline',
                                    // fontWeight: "bold",
                                    fontSize: 18
                                }}
                            >
                                see more
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>


            </Grid>
        </Fade>
    )
}