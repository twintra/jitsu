import { Container, Grid } from '@mui/material'
import Link from 'next/link'
import styles from '../styles/layout.module.css'

export default function Appbar({ children }) {
    return (
        <Grid container
            style={{
                // backgroundColor: "RED",
                paddingTop: "50px",
                paddingBottom: "0px",
            }} >

            <Grid item xs sm={5} style={{ paddingLeft: "5vw" }}>
                <Link href={"/home"}>
                    Logo here
                </Link>
            </Grid>
            <Grid item xs sm={7}>
                <Grid container>

                    <Grid item xs sm={2}>
                        <Link href={"/about"}>
                            About
                        </Link>
                    </Grid>
                    <Grid item xs sm={2}>
                        <Link href={"/product"}>
                            Product
                        </Link>
                    </Grid>
                    <Grid item xs sm={2}>
                        <Link href={"/news"}>
                            News
                        </Link>
                    </Grid>
                    <Grid item xs sm={2}>
                        <Link href={"/join_us"}>
                            Join us
                        </Link>
                    </Grid>
                    <Grid item xs sm={2}>
                        <Link href={"/order"}>
                            Order
                        </Link>
                    </Grid>
                    <Grid item xs sm={2}>
                        TH|EN
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid item xs sm={1}/> */}
        </Grid>

    )
}