import { Grid, Typography } from '@mui/material'
import Link from 'next/link'


export default function Footer({ children }) {
    return (
        <Grid container style={{ backgroundColor: "#252629", padding: "10px" }}>

            <Grid item xs sm={6}>
                <Grid container direction="row" alignItems="start" justify="center">
                    <Grid item xs sm={4} paddingRight="10px">
                        <Grid container direction="column" alignItems="end" justify="center">

                            <Typography sx={{
                                textDecoration: 'underline',
                                color: "#E5E9E8",
                                fontWeight: "bold"
                            }}
                            >
                                Contract
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs sm={8}>
                        <Grid container direction="column" alignItems="start" justify="center">
                            <Grid container direction="row">
                                <Grid item style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                    <Link href={"/faq"}>
                                        WEB LOGO HERE
                                    </Link>
                                </Grid>

                                <Typography color="#E5E9E8">
                                    <Link href={"/faq"}>

                                        Jitsu.com


                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid container direction="row">
                                <Grid item style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                    <Link href={"/faq"}>
                                        Facebook LOGO HERE
                                    </Link>
                                </Grid>
                                <Typography color="#E5E9E8">
                                    <Link href={"/faq"}>
                                        Jitsu
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid container direction="row">
                                <Grid item style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                    <Link href={"/faq"}>
                                        Instagram LOGO HERE
                                    </Link>
                                </Grid>
                                <Typography color="#E5E9E8">
                                    <Link href={"/faq"}>
                                        jitsu.official
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs sm={6}>
                <Grid container direction="column" alignItems="center" justify="center">

                    <Typography

                        sx={{
                            textDecoration: 'underline',
                            color: "#E5E9E8",
                            fontWeight: "bold"
                        }}
                    >
                        <Link href={"/faq"}>
                            FAQ
                        </Link>
                    </Typography>

                </Grid>

            </Grid>
        </Grid>

    )
}