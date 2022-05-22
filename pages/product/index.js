import { Card, CardContent, CardMedia, Fade, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

export default function Product() {
    return (

        <Fade in={true}>

            <Grid
                container
                style={{ minHeight: '85vh' }}
                justifyContent="center"
                alignItems={"center"}
            >

                <Card sx={{ display: 'flex', height: "350px",  }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 500 }}
                        image="/Picture/03.jpg"
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: "600px" }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Grid container direction={"column"} alignItems={"center"} justifyContent="center">

                                <Typography fontFamily={"K2D"} component="div" variant="h4" sx={{marginBottom:"40px", marginTop:"20px"}}>
                                    PRODUCT DETAIL
                                </Typography>
                                <Typography fontFamily={"K2D"} variant="subtitle1" color="text.secondary" component="div">
                                    - Available for working person<br/>
                                    - Can contain a lot of stuff <br/>
                                    - Safe to daily activities<br/>
                                    - Function more than function<br/>
                                </Typography>
                                <Typography fontFamily={"K2D"} variant="subtitle1" color="text.secondary" component="div">
                                    
                                </Typography>
                                <Typography fontFamily={"K2D"} variant="subtitle1" color="text.secondary" component="div">
                                    
                                </Typography>
                                <Typography fontFamily={"K2D"} variant="subtitle1" color="text.secondary" component="div">
                                    
                                </Typography>

                                <Link href={`/product/detail`} passHref>
                                    <Typography
                                        variant="subtitle1"
                                        color="text.secondary"
                                        component="div"
                                        fontFamily="K2D"
                                        display="inline"
                                        sx={{
                                            marginTop: "40px",
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

                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                        </Box>
                    </Box>

                </Card>

            </Grid>
        </Fade>
    )
}