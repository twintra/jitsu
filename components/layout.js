import { Container, Grid } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import Appbar from "./appbar";
import Footer from "./footer";



export default function Layout({ children }) {
    const router = useRouter();
    const showHeader = router.pathname === '/' ? false : true;
    return (
        <Grid container sx={{ backgroundColor: "#D5D9DE" }}>
            <Head>
                <title>
                    Jitsu
                </title>
            </Head>
            {showHeader && <Appbar />}
            {children}
            {showHeader && <Footer />}
        </Grid>

    )
}