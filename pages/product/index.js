import { Button, Divider, Fade, Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import FavoriteIcon from '@mui/icons-material/Favorite';
import bag_data from '../../data/bag_data'
import Link from 'next/link';


export default function Product() {

    function createItemList() {
        return bag_data.map((value, index) => {
            return (
                <Grid item key={index}>

                    <Grid container dirention="row">
                        <Grid item xs sx={{ padding: "10px" }}>

                            <Grid container direction={"column"} >
                                <Grid item>
                                    <Typography fontFamily="Zen+Antique" sx={{ zIndex: 10, position: "absolute" }}>
                                        <IconButton sx={{ backgroundColor: "#E5E9E7" }}>

                                            <FavoriteIcon sx={{ color: "#923F38" }} />
                                        </IconButton>
                                    </Typography>
                                    <Typography fontFamily="Zen+Antique" sx={{ zIndex: 0 }}>

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
                                                fontFamily="Zen+Antique"
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
                style={{ minHeight: '85vh', paddingTop: "50px", paddingLeft: "10%", paddingRight: "10%" }}
                direction="column"

                justifyContent="center"

            >
                <Box sx={{
                    maxWidth: "140px",
                    padding: "10px",
                    borderRadius: 20,
                    marginBottom: "50px",
                    border: 0.5,
                }} >
                    <Grid container alignItems="center" justifyContent="center" >

                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }} fontFamily="Zen+Antique">

                            PRODUCT
                        </Typography>
                    </Grid>
                </Box>
                <Grid container direction="row" >

                    {createItemList()}

                </Grid>

            </Grid>
        </Fade>
    )


}

