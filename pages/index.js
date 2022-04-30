import { Fade, Grid } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  const logoSizeRatio = 0.7;
  return (

    <Fade in={true}>
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: '100vh' }}
      >
        <Link href="/home" passHref>
          <Grid container alignItems={"center"} justifyContent="center" sx={{ width: "100%", height: "100%", }}>
            <Grid item zIndex={10} sx={{ position: "absolute", top: "0", left: "5vw", transform: "scaleX(-1)" }}>
              <Image src={"/Picture/Decor_clound-12.png"} width={300} height={300} />
            </Grid>
            <Grid item zIndex={10} sx={{ position: "absolute", top: "10vh", left: "0vw", transform: "scaleX(-1)" }}>
              <Image src={"/Picture/Decor_clound2-12.png"} width={500} height={500} />
            </Grid>
            <Grid item zIndex={10} sx={{ position: "absolute", top: "12vh" }}>
              <Image src={"/Picture/MAINLOGO_vertical_1200x630.png"} width={1200 * logoSizeRatio} height={630 * logoSizeRatio} />

            </Grid>
            <Grid item zIndex={10} sx={{ position: "absolute", top: "8vh", right: "5vw" }}>
              <Image src={"/Picture/Decor_clound-12.png"} width={300} height={300} />
            </Grid>
            <Grid item zIndex={10} sx={{ position: "absolute", top: "28vh", right: "0vw" }}>
              <Image src={"/Picture/Decor_clound2-12.png"} width={500} height={500} />
            </Grid>

            <Grid item zIndex={10} sx={{ position: "absolute", bottom: "24vh", left: "40vw", transform: "rotate(30deg)" }}>
              <Image src={"/Picture/Decor_Fw_R-12.png"} width={150} height={150} />
            </Grid>
            <Grid item zIndex={10} sx={{ position: "absolute", bottom: "8vh", transform: "rotate(180deg)" }}>
              <Image src={"/Picture/kunai-12.png"} width={180} height={180} />
            </Grid>
            <Grid item zIndex={10} sx={{ position: "absolute", bottom: "8vh", right: "38vw", transform: "rotate(20deg)" }}>
              <Image src={"/Picture/Decor_Fw_allred-12.png"} width={150} height={150} />
            </Grid>


            <Grid item zIndex={10} sx={{ position: "absolute", bottom: "0", left: "5vw", }}>
              <Image src={"/Picture/Decor_Wave.png"} width={2500 * 0.12} height={1574 * 0.12} />
            </Grid>
            <Grid item zIndex={10} sx={{ position: "absolute", bottom: "0px", right: "5vw", }}>
              <Image src={"/Picture/Decor_Wave.png"} width={2500 * 0.15} height={1574 * 0.15} />
            </Grid>


          </Grid>
        </Link>
      </Grid>

    </Fade>
  )
}

