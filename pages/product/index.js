import { Button, Divider, Fade, Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import FavoriteIcon from '@mui/icons-material/Favorite';
import bag_data from '../../data/bag_data'
import Link from 'next/link';
import Image from 'next/image';


export default function Product() {

    function createItemList() {
        return bag_data.map((value, index) => {
            return (
                <Grid item key={index}>

                    <Grid container dirention="row">
                        <Grid item xs sx={{ padding: "10px" }}>

                            <Grid container direction={"column"} >
                                <Grid item>
                                    <Typography fontFamily="K2D" sx={{ zIndex: 10, position: "absolute" }}>
                                        <IconButton sx={{ backgroundColor: "#E5E9E7" }}>

                                            <FavoriteIcon sx={{ color: "#923F38" }} />
                                        </IconButton>
                                    </Typography>
                                    <Typography fontFamily="K2D" sx={{ zIndex: 0 }}>

                                    </Typography>
                                    Bag Picture
                                </Grid>
                                <Grid item sx={{ marginTop: "30px" }}>
                                    {value.name}
                                </Grid>
                                <Grid item>
                                    Price : {value.price} ฿
                                </Grid>
                                <Grid item>

                                    <Link href={`/product/${value.id}`} passHref>

                                        <Button
                                            variant="contained"
                                            sx={{
                                                marginTop: "30px",
                                                padding: "10px",
                                                borderRadius: "0px",
                                                color: "#FFFFFF",
                                                backgroundColor: "#252629",
                                                textTransform: 'none',
                                                ":hover": {
                                                    backgroundColor: "#000000"
                                                }
                                            }}

                                        >
                                            <Typography
                                                sx={{
                                                    // textDecoration: 'underline',
                                                    // color: "#E5E9E8",
                                                    fontWeight: "bold",
                                                    fontSize: 15
                                                }}
                                                fontFamily="K2D"
                                            >
                                                Order now
                                            </Typography>
                                        </Button>
                                    </Link>
                                </Grid>




                            </Grid>
                        </Grid>


                        {index !== bag_data.length - 1 ?


                            <Divider orientation='vertical' flexItem />


                            :
                            null
                        }


                    </Grid>



                </Grid>
            )
        })
    }


    return (
        <Fade in={true}>

            <Grid
                container
                style={{ minHeight: '85vh', paddingLeft: "10%", paddingRight: "10%", }}
                direction="row"
                alignItems={"center"}
                justifyContent="center"

            >
                <Grid item xs sm={6}>
                    <Grid container alignItems={"center"} justifyContent="center">
                        <Image src={"/Picture/Square_product_1-12.png"} width={"400px"} height={"400px"} />

                    </Grid>

                </Grid>
                <Grid item xs sm={6}>
                    <Grid container direction="column"  alignItems={"center"} justifyContent="center">
                        <Grid item sx={{paddingBottom:"10px"}}>

                            <Grid container direction={"row"} alignItems="center" justifyContent={"center"}>
                                <Grid item>
                                    <Image src={"/Picture/Decor_Fw_B-12.png"} width={"100px"} height={"100px"} />
                                </Grid>
                                <Grid item>
                                    <Typography fontFamily={"K2D"} fontSize="32px">
                                        Product Detail
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ width: "100%" }}>

                            <Grid container direction={"row"} sx={{ width: "100%" }} alignItems="center" justifyContent={"center"}>
                                <Grid item xs sm={4}>
                                    <Grid container justifyContent={"center"}>
                                        <Image src={"/Picture/Square_product_FRT-01.png"} width={"150px"} height={"150px"} />

                                    </Grid>
                                </Grid>
                                <Grid item xs sm={4}>
                                    <Grid container justifyContent={"center"} sx={{ paddingY: "10px" }}>
                                        <Image src={"/Picture/Square_product_BCK-01-01.png"} width={"150px"} height={"150px"} />
                                    </Grid>

                                </Grid>
                                <Grid item xs sm={4}>
                                    <Grid container justifyContent={"center"} sx={{ paddingY: "10px" }}>
                                        <Image src={"/Picture/Square_product_Inside-01.png"} width={"150px"} height={"150px"} />
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ width: "100%" }}>


                            <Grid container direction={"row"} sx={{ width: "100%" }} alignItems="center" justifyContent={"center"}>

                                <Grid item xs sm={4}>
                                    <Grid container justifyContent={"center"} sx={{ paddingY: "10px" }}>
                                        <Image src={"/Picture/Square_product_LFT-01.png"} width={"150px"} height={"150px"} />
                                    </Grid>

                                </Grid>
                                <Grid item xs sm={4}>
                                    <Grid container justifyContent={"center"} sx={{ paddingY: "10px" }}>
                                        <Image src={"/Picture/Square_product_RGT-01.png"} width={"150px"} height={"150px"} />
                                    </Grid>

                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
                {/* <Box sx={{
                    maxWidth: "140px",
                    padding: "10px",
                    borderRadius: 20,
                    marginBottom: "50px",
                    border: 0.5,
                }} >
                    <Grid container alignItems="center" justifyContent="center" >

                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }} fontFamily="K2D">

                            PRODUCT
                        </Typography>
                    </Grid>
                </Box>
                <Grid container direction="row" >

                    {createItemList()}

                </Grid> */}

            </Grid>
        </Fade>
    )


}

