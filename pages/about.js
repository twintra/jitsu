import { Fade, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'

export default function About() {
    return (

        <Fade in={true}>

            <Grid
                container
                style={{ minHeight: '85vh' }}
            >
                <Grid item xs sm={5}>
                    <Grid container direction="column" alignItems="end" justifyContent="center" height="100%" sx={{ height: "100%" }}>

                        <Grid container alignItems="center" justifyContent="center" direction={"column"} width="50%">

                            <Grid item marginBottom={"40px"}>
                                <Image src={"/Picture/PicLOGO-11.png"} width={"200px"} height={"200px"} />
                            </Grid>
                            <Box width={"100%"}>
                                <Typography sx={{ whiteSpace: 'pre-line' }} fontFamily="K2D" fontWeight={500}>

                                    แบรนด์ &quot;จิตสึ&quot; ได้ก่อตั้งขึ้นมาเนื่องจากได้
                                    พบปัญหาความประมาทที่อยู่ในจิตใจหรือความคิด
                                    ของกลุ่มวัยรุ่นและวัยทำงาน ซึ่งส่งผลกระทบต่อชีวิต
                                    ประจำวันอยู่เสมอ ทางแบรนด์จึงได้ศึกษาแนวคิดที่
                                    สามารถนำมาลดปัญหาที่อาจเกิดขึ้นมาจากความ
                                    ประมาท ซึ่งสามารถนำมาประยุกต์ใช้ผ่านการสื่อสาร
                                    การบริการ หรือสินค้าของทางแบรนด์
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs sm={2}>
                    <Grid container direction="column" alignItems="center" justifyContent="center" height="100%" sx={{ height: "100%" }}>
                        <Grid item width={"100%"} >
                            <Grid container alignItems="end" justifyContent={"end"} sx={{ transform: "rotate(-10deg)" }}>

                                <Image src={"/Picture/Decor_Fw_Ivory-12.png"} width={"150px"} height={"150px"} />
                            </Grid>
                        </Grid>
                        <Grid item >
                            <Grid container alignItems={"end"} justifyContent="center" >

                                <Grid item zIndex={10} sx={{ position: "absolute", transform:"rotate(-30deg)" }} >
                                    <Image src={"/Picture/kunai-12.png"} width={"300px"} height={"300px"} />
                                </Grid>
                                <Grid item>

                                    <svg width='100%' height='100%' viewBox='0 0 100 100' preserveAspectRatio='none'>
                                        <line x1="30" y1="100" x2="70" y2="0" vectorEffect="non-scaling-stroke" stroke="#9E4A40" strokeWidth={"5px"} >

                                        </line>
                                    </svg>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs sm={5}>
                    <Grid container direction="column" alignItems="start" justifyContent="center" height="100%" sx={{ height: "100%" }}>

                        <Grid container alignItems="center" justifyContent="center" direction="column" width="50%">

                            <Grid item xs>
                                <Box marginBottom={"5vh"}>
                                    <Typography sx={{ whiteSpace: 'pre-line' }} fontFamily="K2D" fontWeight={500}>


                                        อัตลักษณ์ของแบรนด์ได้รับแรงบันดาลใจ
                                        มาจากความสนใจในวิถีนินจา ในปัจจุบันวิถี
                                        นินจาหรือนินจาที่มีอยู่จริง นั้นเริ่มจางหายไป
                                        เนื่องจากความก้าวหน้าของเศรษฐกิจ สังคม
                                        และเทคโนโลยีฯ ส่งผลให้ความเข้าใจเกี่ยวกับ
                                        นินจานั้นเปลี่ยนแปลงไป ไม่ว่าจะเป็นนินจานั้น
                                        คือยอดมนุษย์ มีพลังเหนือคนธรรมดา



                                    </Typography>
                                </Box>
                                <Box width={"100%"}>
                                    <Typography sx={{ whiteSpace: 'pre-line' }} fontFamily="K2D" fontWeight={500}>
                                        แต่ทว่านินจานั้นก็เป็นคนธรรมดาที่มีการเป็น
                                        อยู่แบบคนปกติเพียงแต่มีการฝึกฝนทั้งกายและ
                                        จิตใจให้พร้อมกับสถานการณ์ต่างๆ ที่อาจเกิดขึ้น
                                        ตลอดเวลา ดังนั้นพวกเขาจึงมีทักษะต่างๆ
                                        ที่สามารถเอาตัวรอดจากศัตรูได้ เนื่องจากหาก
                                        นินจาถูกจับได้มีทางเดียวเท่านั้นที่พวกเขาไปได้
                                        นั้นคือ ทางแห่งความตาย

                                    </Typography>
                                </Box>
                            </Grid>
                            

                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Fade>
    )
}