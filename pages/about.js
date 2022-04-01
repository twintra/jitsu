import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'

export default function About() {
    return (

        <Grid
            container
            style={{ minHeight: '85vh' }}
        >
            <Grid item xs sm={5}>
                <Grid container direction="column" alignItems="end" justifyContent="center" height="100%" sx={{ height: "100%" }}>

                    <Grid container alignItems="center" justifyContent="center" direction={"column"} width="50%">

                        <Grid item>
                            Picture here
                        </Grid>
                        <Box width={"100%"}>
                            <Typography sx={{ whiteSpace: 'pre-line' }}>

                                แบรนด์ "จิตสุ" ได้ก่อตั้งขึ้นมาเนื่องจากได้
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
            <Grid item  xs sm={2}>
                <Grid container direction="column" alignItems="center" justifyContent="center" justify="center" height="100%" sx={{ height: "100%" }}>


                    {/* <svg width='100%' height='100%' viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <line x1="30" y1="80" x2="70" y2="20" vectorEffect="non-scaling-stroke" stroke="#9E4A40" strokeWidth={"3px"} />
                    </svg> */}

                </Grid>
            </Grid>
            <Grid item  xs sm={5}>
                <Grid container direction="column" alignItems="start" justifyContent="center" height="100%" sx={{ height: "100%" }}>

                    <Grid container alignItems="center" justifyContent="center" direction="column" width="50%">

                        <Grid item sm={8}>
                            <Box marginBottom={"5vh"}>
                                <Typography  >


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
                                <Typography>
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
                        <Grid item sm={4}>
                            Picture here
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}