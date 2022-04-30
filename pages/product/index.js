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
                <Grid item sm={6} sx={{ height:"100%", }}>
                    <Grid container alignItems={"center"} justifyContent="center" sx={{height:"100%"}}>
                        <Grid item sx={{width:"75%"}}>

                            <Image src={"/Picture/Square_product_1-12.png"} layout="responsive" width={"500px"} height={"500px"} />
                        </Grid>



                    </Grid>

                </Grid>
                <Grid item sm={6} sx={{ width: "100%", height:"100%", paddingBottom:"4%"}}>
                    <Grid container direction="column" sx={{ width: "100%", height:"100%", }} alignItems={"center"} justifyContent="center">
                        <Grid item >
                            <Grid container direction={"row"} alignItems="center" justifyContent={"center"}>
                                <Grid item>
                                    <Image src={"/Picture/Decor_Fw_B-12.png"} width={"100px"} height={"100px"} />
                                </Grid>
                                <Grid item>
                                    <Typography fontFamily={"K2D"} fontSize="32px">
                                        PRODUCT DETAIL
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ width: "100%" }}>

                            <Grid container direction={"row"} alignItems="center" justifyContent={"center"} sx={{ paddingX:"30px",width: "100%", }} >
                                <Grid item sm={4} sx={{ paddingX: "10px", paddingY: "10px", }}>

                                    <Image src={"/Picture/Square_product_FRT-01.png"} layout="responsive" width={"300px"} height={"300px"} />

                                </Grid>
                                <Grid item sm={4} sx={{ paddingX: "10px", paddingY: "10px" }}>
                                    <Image src={"/Picture/Square_product_BCK-01-01.png"} layout="responsive" width={"300px"} height={"300px"} />
                                </Grid>
                                <Grid item sm={4} sx={{ paddingX: "10px", paddingY: "10px" }}>
                                    <Image src={"/Picture/Square_product_Inside-01.png"} layout="responsive" width={"300px"} height={"300px"} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ width: "100%" }}>
                            <Grid container direction={"row"} alignItems="center" justifyContent={"center"} sx={{ paddingX:"30px",width: "100%", }} >
                                <Grid item sm={2} />
                                <Grid item sm={4} sx={{ paddingX: "10px", paddingY: "10px" }}>
                                    <Image src={"/Picture/Square_product_LFT-01.png"} layout="responsive" width={"300px"} height={"300px"} />
                                </Grid>
                                <Grid item sm={4} sx={{ paddingX: "10px", paddingY: "10px" }}>
                                    <Image src={"/Picture/Square_product_RGT-01.png"} layout="responsive" width={"300px"} height={"300px"} />
                                </Grid>
                                <Grid item sm={2} />
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

