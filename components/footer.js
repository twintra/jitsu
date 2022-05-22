import { Divider, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer({ children }) {
    return (
        <Grid container style={{ backgroundColor: "#252629", padding: "10px" }}>
            <Grid item xs sm={1} />
            <Grid item xs sm={8}>
                <Grid container direction="column" alignItems="start" justify="center">



                    <Typography sx={{
                        textDecoration: 'underline',
                        color: "#E5E9E8",
                        fontWeight: "bold"
                    }}
                        fontFamily="K2D"
                    >
                        Contract
                    </Typography>




                    <Grid container direction="row" sx={{ marginTop: "10px" }}>


                        <Typography color="#E5E9E8" fontFamily="K2D">
                            <Link href={"/faq"} passHref>

                                Jitsu.com


                            </Link>
                        </Typography>
                    </Grid>
                    <Link href={"/faq"} passHref>

                        <Grid container direction="row" sx={{ marginTop: "10px" }}>
                            <Grid item style={{ paddingLeft: "0px", paddingRight: "10px" }}>
                                <Image src={"/assets/fb_icon.png"} width={"30px"} height={"30px"} />

                            </Grid>
                            <Typography color="#E5E9E8" fontFamily="K2D">

                                Jitsu

                            </Typography>
                        </Grid>
                    </Link>
                    <Link href={"/faq"} passHref>
                        <Grid container direction="row" sx={{ marginTop: "10px" }}>
                            <Grid item style={{ paddingLeft: "0px", paddingRight: "10px" }}>

                                <Image src={"/assets/ig_icon.png"} width={"30px"} height={"30px"} />

                            </Grid>
                            <Typography color="#E5E9E8" fontFamily="K2D">

                                jitsu.official

                            </Typography>
                        </Grid>
                    </Link>


                </Grid>

            </Grid>
            <Grid item xs sm={3}>

                <Grid container direction="row" alignItems="end" justifyContent="end">
                    <Grid item xs>

                        <Typography
                            fontFamily="K2D"
                            sx={{
                                textDecoration: 'underline',
                                color: "#E5E9E8",
                                fontWeight: "bold"
                            }}
                        >
                            <Link href={"/faq"} passHref>
                                FAQ
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs>

                        <Grid container direction={"row"} >
                            <Grid item sx={{ paddingRight: "5px" }}>
                                <Typography
                                    fontFamily={"K2D"}
                                    sx={{
                                        ":hover": {
                                            cursor: "pointer"
                                        },
                                        color: "#FFFFFF",

                                    }}
                                    onClick={() => { console.log("th") }}
                                >
                                    TH
                                </Typography>
                            </Grid>

                            <Divider orientation='vertical' flexItem sx={{ borderRightWidth: 2, background: "#FFFFFF" }} />
                            <Grid item sx={{ paddingLeft: "5px" }}>
                                <Typography
                                    fontFamily={"K2D"}
                                    sx={{
                                        ":hover": {
                                            cursor: "pointer"
                                        },
                                        color: "#FFFFFF"

                                    }}
                                    onClick={() => { console.log("en") }}
                                >
                                    EN
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        </Grid>

    )
}