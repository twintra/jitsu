import { Fade, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Index.module.css'

export default function JoinUS() {
    return (

        <Fade in={true}>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '85vh' }}
            >
                <Typography sx={{ whiteSpace: 'pre-line', marginBottom: "0px" }} fontFamily="K2D" fontWeight={"Bold"} fontSize="70px" >
                    Join us
                </Typography>
                <Typography sx={{ whiteSpace: 'pre-line', marginBottom: "60px" }} fontFamily="K2D" fontWeight={"medium"} fontSize="25px" >
                    Register or Sign In
                </Typography>


                <Box sx={{
                    // maxWidth: "200px",
                    width: "500px",
                    padding: "15px",
                    paddingRight: "30px",
                    paddingLeft: "30px",
                    borderRadius: 4,
                    ":hover": {
                        cursor: "pointer"
                    },
                    bgcolor: "#3A685D",

                }} >

                    <Grid container direction={"row"}>
                        <Grid item sm={2}>
                            <Typography sx={{ fontSize: 20, fontWeight: "medium", color: "#E5E9E7" }} fontFamily="K2D"  >

                                Email:
                            </Typography>
                        </Grid>
                        <Grid item sm={10}>
                            <TextField
                                
                                style={{ width: "100%" }}
                                variant='standard'
                                InputProps={{ disableUnderline: true, }}
                                sx={{
                                    input: {
                                        color:'#E5E9E7',
                                        fontFamily:"K2D"
                                    }
                                }}

                            />
                        </Grid>



                    </Grid>

                </Box>

            </Grid>
        </Fade>
    )
}