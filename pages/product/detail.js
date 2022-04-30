
import { Button, Divider, Fade, FormControl, FormControlLabel, Grid, IconButton, Radio, RadioGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter, NextRouter } from 'next/router'
import { useState } from 'react';
import bag_data from '../../data/bag_data';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';
import PaymentIcon from '@mui/icons-material/Payment';
import CircleIcon from '@mui/icons-material/Circle';
import Image from 'next/image';

import { createTheme } from '@mui/material/styles';




const PayMethod = {
    creditCard: "creditCard",
    qrCode: "qrCode",
    bankTranfer: "bankTranfer",
    cash: "cash"

}

const Detail = () => {
    const bag_item = {
        id: "001",
        name: "Ori-JITSU CLUTCH BAG",
        price: 3000.00,
        available: 10
    }

    const [itemCount, setItemCount] = useState(0);
    const [selectedPayMethod, setSelectedPayMethod] = useState(PayMethod.creditCard);

    const clickIncrease = () => {
        if (itemCount < bag_item.available) {
            setItemCount(itemCount + 1)

        }
    }
    const clickDecrease = () => {
        if (itemCount > 0) {
            setItemCount(itemCount - 1)

        }
    }

    const handleRadioChange = (event) => {
        setSelectedPayMethod(event.target.value);
    }

    return (
        <Fade in={true}>
            <Grid
                container
                style={{ minHeight: '85vh', paddingTop: "0px", paddingLeft: "10%", paddingRight: "10%" }}
                direction="row"

                justifyContent="center"
                alignItems="center"

            >
                <Grid item xs sm={6}>
                    <Grid container direction="column" alignItems={"center"} justifyContent="center">
                        <Grid item>
                            <Image src={"/Picture/Square_product_1-12.png"} width={"300px"} height={"300px"} />

                        </Grid>
                        <Grid item>
                            <Typography fontFamily={"K2D"} fontSize="18px">

                                Price {bag_item.price} ฿
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs sm={6}>
                    <Grid container direction="column">
                        <Grid item >
                            <Box sx={{
                                maxWidth: "150px",
                                padding: "5px",
                                borderRadius: 20,
                                border: 1,
                            }} >
                                <Grid container alignItems="center" justifyContent="center" >

                                    <Typography sx={{ fontSize: 20, fontWeight: "bold", }} fontFamily="K2D">

                                        YOUR ORDER
                                    </Typography>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item sx={{ width: "100%", marginLeft: "80px" }}>
                            <Grid container direction={"row"} alignItems="center" justifyContent={"center"}>
                                <Grid item xs>
                                    <Typography fontFamily={"K2D"} >

                                        {bag_item.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Grid container direction={"row"} alignItems="center"  >
                                        <Grid item>
                                            <Typography fontFamily={"K2D"}>

                                                Amount
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction={"column"} alignItems="center" justifyContent="center" >
                                                <Grid item>
                                                    <IconButton onClick={clickIncrease} disableRipple sx={{ padding: 0 }}>
                                                        <ArrowDropUpIcon sx={{ fontSize: "50px", color: "#A8927C" }} />
                                                    </IconButton>

                                                </Grid>
                                                <Grid item>
                                                    <Typography fontFamily={"K2D"}>

                                                        {itemCount}
                                                    </Typography>

                                                </Grid>
                                                <Grid item>
                                                    <IconButton onClick={clickDecrease} disableRipple sx={{ padding: 0, }}>
                                                        <ArrowDropDownIcon fontSize='large' sx={{ fontSize: "50px", color: "#A8927C", }} />
                                                    </IconButton>

                                                </Grid>
                                            </Grid>

                                        </Grid>
                                        <Grid item>
                                            <Typography fontFamily={"K2D"}>

                                                Piece(s)
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>



                            </Grid>
                        </Grid>

                        <Grid item >
                            <Typography fontFamily={"K2D"}>

                                Total Price : {bag_item.price * itemCount} ฿
                            </Typography>

                        </Grid>
                        <Grid item sx={{ marginTop: "10px" }}>
                            <Grid container direction={"column"} >
                                <Grid item sx={{ marginY: "10px" }}>
                                    <Grid container direction={"row"} alignItems="center" >
                                        <Box sx={{
                                            maxWidth: "200px",
                                            paddingX: "10px",
                                            paddingY: "4px",
                                            borderRadius: 20,

                                            bgcolor: "#923F38",

                                        }} >


                                            <Typography fontFamily="K2D" sx={{ fontSize: 20, fontWeight: "bold", color: "#E5E9E7" }}>

                                                Payment Method
                                            </Typography>

                                        </Box>

                                    </Grid>
                                </Grid>
                                <Grid item sx={{ paddingLeft: "20px" }}>
                                    <FormControl>

                                        <RadioGroup
                                            value={selectedPayMethod}
                                            onChange={handleRadioChange}
                                        >


                                            <FormControlLabel
                                                value={PayMethod.creditCard}
                                                control={
                                                    <Radio

                                                        icon={<CircleIcon />}
                                                        sx={{
                                                            fontFamily: "K2D",
                                                            marginRight: "10px",
                                                            padding: 0,
                                                            marginTop: "5px",
                                                            color: "#E5E9E7",
                                                            // backgroundColor:"green",
                                                            "&.Mui-checked": {
                                                                color: "#000000"
                                                            },
                                                        }}
                                                    />}
                                                label={<Typography fontFamily={"K2D"}>Credit Card</Typography>}
                                            />

                                            <FormControlLabel
                                                value={PayMethod.bankTranfer}
                                                control={<Radio

                                                    icon={<CircleIcon />}
                                                    sx={{
                                                        marginRight: "10px",
                                                        padding: 0,
                                                        marginTop: "5px",
                                                        color: "#E5E9E7",
                                                        // backgroundColor:"green",
                                                        "&.Mui-checked": {
                                                            color: "#000000"
                                                        },
                                                    }}
                                                />}
                                                label={<Typography fontFamily={"K2D"}>Bank Tranfer</Typography>}
                                                
                                            />
                                            <FormControlLabel
                                                value={PayMethod.cash}
                                                control={<Radio

                                                    icon={<CircleIcon />}
                                                    sx={{
                                                        marginRight: "10px",
                                                        padding: 0,
                                                        marginTop: "5px",
                                                        color: "#E5E9E7",
                                                        // backgroundColor:"green",
                                                        "&.Mui-checked": {
                                                            color: "#000000"
                                                        },
                                                    }}
                                                />}
                                                
                                                label={<Typography fontFamily={"K2D"}>Cash On Delivery</Typography>}
                                            />

                                        </RadioGroup>
                                    </FormControl>

                                </Grid>

                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>

            </Grid>
            {/* <Grid
                container
                style={{ minHeight: '85vh', paddingTop: "50px", paddingLeft: "10%", paddingRight: "10%" }}
                direction="column"

                justifyContent="center"
                alignItems="center"

            >
                <Box sx={{
                    maxWidth: "200px",
                    padding: "10px",
                    borderRadius: 20,
                    marginBottom: "50px",
                    border: 0.5,
                }} >
                    <Grid container alignItems="center" justifyContent="center" >

                        <Typography sx={{ fontSize: 20, fontWeight: "bold", color: "#A9937C" }} fontFamily="K2D">

                            YOUR ORDER
                        </Typography>
                    </Grid>
                </Box>
                <Grid container direction="row" justifyContent={"center"} sx={{ width: "100%" }}>
                    <Grid item sm={5} sx={{ padding: "50px" }} >
                        <Grid container alignItems={"end"}>

                            <Grid container direction="column" alignItems="center"  >
                                <Grid item>


                                    Bag Picture
                                </Grid>
                                <Grid item sx={{ marginTop: "30px" }}>
                                    {bag_item.name}
                                </Grid>
                                <Grid item>
                                    Price : {bag_item.price} ฿
                                </Grid>
                                <Grid item>
                                    <Grid container direction={"row"} alignItems="center"  >
                                        <Grid item>
                                            Amount :
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction={"column"} alignItems="center" justifyContent="center" >
                                                <Grid item>
                                                    <IconButton onClick={clickIncrease} sx={{ padding: 0 }}>
                                                        <ArrowDropUpIcon fontSize='large' />
                                                    </IconButton>

                                                </Grid>
                                                <Grid item>
                                                    {itemCount}

                                                </Grid>
                                                <Grid item>
                                                    <IconButton onClick={clickDecrease} sx={{ padding: 0 }}>
                                                        <ArrowDropDownIcon fontSize='large' />
                                                    </IconButton>

                                                </Grid>
                                            </Grid>

                                        </Grid>
                                        <Grid item>
                                            Piece(s)
                                        </Grid>
                                    </Grid>
                                </Grid>


                            </Grid>
                            <Link href={"/product"} passHref>
                                <Grid item >
                                    <Box sx={{ display: 'inline-flex' }}>
                                        <Grid container direction={"column"}>

                                            <Button


                                                sx={{ color: "#000000", p: "2px" }}
                                            >

                                                <Typography fontFamily="K2D">


                                                    Shop more


                                                </Typography>

                                            </Button>

                                            <Divider display="inline" sx={{ bgcolor: "#923F38", borderBottomWidth: 2 }} />
                                            <Box sx={{




                                                position: "relative",
                                                top: -2,
                                                right: "20%",
                                                // bottom: -30,
                                                left: "70%",
                                                // zIndex: "modal"
                                            }} >

                                                <Image src={"/assets/shopping-basket.png"} width={30} height={30} />

                                            </Box>
                                        </Grid>
                                    </Box>

                                </Grid>
                            </Link>
                        </Grid>

                    </Grid>

                    <Divider orientation='vertical' flexItem />
                    <Grid item sm={5} sx={{ padding: "50px" }}>

                        <Grid container direction="column" alignItems="center" >

                            <Grid item sx={{ marginTop: "30px" }}>
                                {bag_item.name} {itemCount} piece(s)
                            </Grid>
                            <Grid item>
                                Total Price : {bag_item.price * itemCount} ฿
                            </Grid>



                        </Grid>
                        <Grid container direction={"column"} alignItems="center">
                            <Grid item>
                                <Grid container direction={"row"} alignItems="center" >
                                    <Box sx={{
                                        maxWidth: "200px",
                                        padding: "10px",
                                        borderRadius: 20,

                                        bgcolor: "#923F38",

                                    }} >


                                        <Typography fontFamily="K2D" sx={{ fontSize: 20, fontWeight: "bold", color: "#E5E9E7" }}>

                                            Payment Method
                                        </Typography>

                                    </Box>
                                    <PaymentIcon fontSize='large' />
                                </Grid>
                            </Grid>
                            <Grid item sx={{ paddingLeft: "20px" }}>
                                <FormControl>

                                    <RadioGroup
                                        value={selectedPayMethod}
                                        onChange={handleRadioChange}
                                    >
                                        <FormControlLabel
                                            value={PayMethod.creditCard}
                                            control={<Radio

                                                icon={<CircleIcon />}
                                                sx={{
                                                    marginRight: "10px",
                                                    padding: 0,
                                                    color: "#E5E9E7",
                                                    // backgroundColor:"green",
                                                    "&.Mui-checked": {
                                                        color: "#000000"
                                                    },
                                                }}
                                            />}
                                            label="Credit Card"
                                        />
                                        <FormControlLabel
                                            value={PayMethod.bankTranfer}
                                            control={<Radio

                                                icon={<CircleIcon />}
                                                sx={{
                                                    marginRight: "10px",
                                                    padding: 0,
                                                    color: "#E5E9E7",
                                                    // backgroundColor:"green",
                                                    "&.Mui-checked": {
                                                        color: "#000000"
                                                    },
                                                }}
                                            />}
                                            label="Bank Tranfer"
                                        />
                                        <FormControlLabel
                                            value={PayMethod.cash}
                                            control={<Radio

                                                icon={<CircleIcon />}
                                                sx={{
                                                    marginRight: "10px",
                                                    padding: 0,
                                                    color: "#E5E9E7",
                                                    // backgroundColor:"green",
                                                    "&.Mui-checked": {
                                                        color: "#000000"
                                                    },
                                                }}
                                            />}
                                            label="Cash On Delivery" />
                                    </RadioGroup>
                                </FormControl>

                            </Grid>

                        </Grid>
                    </Grid>


                </Grid>
                <Grid item style={{ width: "100%", marginTop: "50px" }}>

                    <Grid container direction={"row"} alignItems="end" justifyContent="end" style={{ width: "100%" }} sx={{ width: "100%", }} >
                        <Box sx={{
                            maxWidth: "100px",
                            padding: "10px",
                            borderRadius: 20,
                            ":hover": {
                                cursor: "pointer"
                            },
                            bgcolor: "#3A685D",

                        }} >


                            <Typography fontFamily="K2D" sx={{ fontSize: 20, fontWeight: "bold", color: "#E5E9E7" }}>

                                Order Confirm
                            </Typography>

                        </Box>
                    </Grid>
                </Grid>
            </Grid> */}
        </Fade>
    )

}

export default Detail;