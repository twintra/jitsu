import { Grid } from '@mui/material'
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
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <Link href="/home">
            <Image src={"/MAINLOGO_Vertical_630x1200.png"} width={630 * logoSizeRatio} height={1200 * logoSizeRatio} />
          </Link>
        </Grid>
      </Grid>

    </Fade>
  )
}

