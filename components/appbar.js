import { Button, Container, Divider, easing, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/layout.module.css'
import { borderBottom, Box, useTheme } from '@mui/system';


export default function Appbar({ children }) {
    const href = useRouter().pathname;
    const hrefList = href.split("/")
    const currentTab = hrefList[hrefList.length - 1];

    const logoSizeRatio = 0.2;
    const tabsList = ["about", "product", "news", "join_us"];
    const tabsListName = ["About", "Product", "News", "Join Us"];
    const [tab, setTab] = useState(`${currentTab}`);

    const handleClickTab = (value) => {
        setTab(value)

    }



    return (
        <Grid container
            direction={"row"}
            style={{
                // backgroundColor: "RED",
                paddingTop: "10px",

            }} >


            <Grid item xs sm={5} style={{ paddingLeft: "5vw" }}>

                {/* <Link href={"/home"} passHref>
                    <a href={href} onClick={() => handleClickTab("")}> */}
                        <Image src={"/MAINLOGO_Horizontal_1200x630.png"} width={1200 * logoSizeRatio} height={630 * logoSizeRatio} />
                    {/* </a>

                </Link> */}


            </Grid>
            <Grid item xs sm={7} style={{ paddingTop: "30px" }} >
                <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} >
                    <Grid item marginRight={"40px"} >
                        <Link href={"/home"} passHref>
                            <a href={href} onClick={() => handleClickTab("")}>

                                <Image src={"/Picture/shuriken-12.png"} width={"60px"} height={"60px"} />
                            </a>

                        </Link>
                    </Grid>

                    {tabsList.map((value, index) => {
                        return (
                            <Grid item xs key={index} >
                                <Link href={`/${value}`} passHref >
                                    <Grid
                                        style={{ paddingTop: "5px" }}
                                        item
                                        xs
                                        onClick={() => handleClickTab(value)}
                                        sx={{
                                            ":hover": {
                                                cursor: "pointer"
                                            },

                                            borderBottom: value === tab ? 5 : 0,
                                            borderColor: "#9E4A40",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            paddingBottom: "10px",
                                            marginLeft: "10px",
                                            marginRight: "10px",
                                            transition: (theme) => theme.transitions.create("all", {
                                                duration: theme.transitions.duration.short
                                            })
                                        }}

                                    >
                                        <Grid container justifyContent={"center"}  >


                                            <Typography display="inline" fontFamily="K2D">
                                                {tabsListName[index]}

                                            </Typography>


                                        </Grid>
                                    </Grid>
                                </Link>
                            </Grid>

                        )
                    })}
                    <Grid item xs justifyContent={"center"} >
                        <Link href={`/product/detail`} passHref >
                            <Box
                                onClick={() => handleClickTab("")}
                                sx={{
                                    pt: "5px",
                                    pb: "5px",


                                    borderRadius: 20,
                                    ":hover": {
                                        cursor: "pointer"
                                    },
                                    bgcolor: "#252629",
                                }}
                            >
                                <Grid container alignItems={"center"} justifyContent="center">
                                    <Typography fontFamily="K2D" color={"#E5E9E7"} >

                                        ORDER
                                    </Typography>



                                </Grid>





                            </Box>

                        </Link>
                        {/* <Box sx={{




                            position: "relative",
                            top: -10,
                            right: "0%",
                            left: "70%",
                            zIndex: "modal"
                        }} >

                            <Image src={"/assets/shopping-basket.png"} width={30} height={30} />

                        </Box> */}

                    </Grid>

                    <Grid item xs style={{ padding: "5px", paddingLeft: "40px" }}>
                        <Grid container direction={"row"} >
                            <Grid item sx={{ paddingRight: "5px" }}>
                                <Typography
                                    sx={{
                                        ":hover": {
                                            cursor: "pointer"
                                        }
                                    }}
                                    onClick={() => { console.log("th") }}
                                >

                                </Typography>
                            </Grid>
                            <Divider orientation='vertical' flexItem sx={{ borderRightWidth: 2, background: "#6F6F6F" }} />
                            <Grid item sx={{ paddingLeft: "5px" }}>
                                <Typography
                                    sx={{
                                        ":hover": {
                                            cursor: "pointer"
                                        }
                                    }}
                                    onClick={() => { console.log("en") }}
                                >

                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid >

    )
}