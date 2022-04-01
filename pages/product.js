import { Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import styles from '../styles/Index.module.css'

export default function Product() {

    const dataList = [
        {
            id: "001",
            name: "bag1",
            price: 100.00,
            available: 10
        },
        {
            id: "002",
            name: "bag2",
            price: 500.00,
            available: 15
        },
        {
            id: "003",
            name: "bag3",
            price: 1000.00,
            available: 20
        }
    ]

    return (

        <Grid
            container
            style={{ minHeight: '85vh', paddingTop: "50px", paddingLeft: "10%", paddingRight: "10%" }}
            direction="column"

            justifyContent="center"

        >
            <Box sx={{
                maxWidth: "160px",
                padding: "10px",
                borderRadius: 20,
                marginBottom: "50px",
                border: 0.5,
            }} >
                <Grid container alignItems="center" justifyContent="center" >

                    <Typography sx={{ fontSize: 25, fontWeight: "bold" }}>

                        PRODUCT
                    </Typography>
                </Grid>
            </Box>
            <Grid container direction="row" style={{ backgroundColor: "#FAFDB6" }}>
                {dataList.map((value, index) => {
                    return (
                        <Grid item>

                            <Grid container dirention="row">
                                <Grid item xs sx={{ padding: "10px" }}>

                                    <Grid container direction={"column"} >
                                        <Grid item>
                                            Bag Picture
                                        </Grid>
                                        <Grid item>
                                            {value.name}
                                        </Grid>
                                        <Grid item>
                                            price
                                        </Grid>




                                    </Grid>
                                </Grid>


                                {index !== dataList.length - 1 ?


                                    <Divider orientation='vertical' flexItem />


                                    :
                                    null
                                }


                            </Grid>



                        </Grid>
                    )
                })}

            </Grid>

        </Grid>
    )
}

