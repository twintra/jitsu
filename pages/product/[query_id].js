
import { Button, Divider, FormControl, FormControlLabel, Grid, IconButton, Radio, RadioGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter, NextRouter } from 'next/router'
import { useState } from 'react';
import bag_data from '../../data/bag_data';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';
import PaymentIcon from '@mui/icons-material/Payment';
import CircleIcon from '@mui/icons-material/Circle';

const PayMethod = {
    creditCard: "creditCard",
    qrCode: "qrCode",
    bankTranfer: "bankTranfer",
    cash: "cash"

}

const Item = () => {
    let router = useRouter();
    const { query_id } = router.query;
    const bag_item = bag_data.find(item => item.id === query_id);

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
        bag_item === undefined ?
            <Grid
                container
                style={{ minHeight: '85vh', paddingTop: "50px", paddingLeft: "10%", paddingRight: "10%" }}
                direction="column"

                justifyContent="center"
                alignItems="center"

            >
                no item
            </Grid> :
            <Grid
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

                        <Typography sx={{ fontSize: 20, fontWeight: "bold", color: "#A9937C" }}>

                            YOUR ORDER
                        </Typography>
                    </Grid>
                </Box>
                <Grid container direction="row" >
                    <Grid item xs >
                        <Grid container direction="column" alignItems="center"  >
                            <Grid item>


                                Bag Picture
                            </Grid>
                            <Grid item sx={{ marginTop: "30px" }}>
                                {bag_item.name }
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

                                <Button
                                    sx={{ color: "#000000", }}
                                >

                                    <Typography >
                                        Shop more

                                    </Typography>
                                </Button>
                            </Grid>
                        </Link>

                    </Grid>

                    <Divider orientation='vertical' flexItem />
                    <Grid item xs>

                        <Grid container direction="column" alignItems="center" >

                            <Grid item sx={{ marginTop: "30px" }}>
                                {bag_item.name} {itemCount} piece
                            </Grid>
                            <Grid item>
                                Total Price : {bag_item.price * itemCount} ฿
                            </Grid>



                        </Grid>
                        <Grid container direction={"column"} alignItems="start">
                            <Grid item>
                                <Grid container direction={"row"} alignItems="center" >
                                    <Box sx={{
                                        maxWidth: "200px",
                                        padding: "10px",
                                        borderRadius: 20,

                                        bgcolor: "#923F38",

                                    }} >


                                        <Typography sx={{ fontSize: 20, fontWeight: "bold", color: "#E5E9E7" }}>

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
                            maxWidth: "200px",
                            padding: "10px",
                            borderRadius: 20,
                            ":hover": {
                                cursor: "pointer"
                            },
                            bgcolor: "#3A685D",

                        }} >


                            <Typography sx={{ fontSize: 20, fontWeight: "bold", color: "#E5E9E7" }}>

                                Order Confirm
                            </Typography>

                        </Box>
                    </Grid>
                </Grid>
            </Grid>
    )

}

export default Item;