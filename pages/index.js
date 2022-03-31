import { Grid } from '@mui/material'
import Link from 'next/link'


export default function Home() {
  return (
    <Grid container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Link href="/home">
          Logo here
        </Link>
      </Grid>
    </Grid>
  )
}

