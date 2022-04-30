import { Container, Grid } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import Appbar from "./appbar";
import Footer from "./footer";



export default function Layout({ children }) {
    const router = useRouter();
    const showHeader = router.pathname === '/' ? false : true;
    return (
        <>
            <Head>
                <title>Jitsu</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap" rel="stylesheet" />
            </Head>
            {showHeader && <Appbar />}
            {children}
            {showHeader && <Footer />}
        </>

    )
}