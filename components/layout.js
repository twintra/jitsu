import { Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import Appbar from "./appbar";
import Footer from "./footer";



export default function Layout({ children }) {
    const router = useRouter();
    const showHeader = router.pathname === '/' ? false : true;
    return (
        <>
            {showHeader && <Appbar />}
            {children}
            {showHeader && <Footer />}
        </>

    )
}