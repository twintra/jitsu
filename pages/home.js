import { Grid, Typography, Button, Fade } from '@mui/material'
import Link from 'next/link'

export default function Home() {

    return (
        <Fade in={true}>
            <Grid
                container
                style={{ minHeight: '85vh' }}
            >
                <Grid item xs sm={6}>
                    <Grid container direction="column" alignItems="center" justifyContent="center" justify="center" height="100%" sx={{ height: "100%" }}>
                        Picture here
                    </Grid>
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
                        <Link href={`/product/001`} passHref>
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
                    </Grid>
                </Grid>


            </Grid>
        </Fade>
    )
}