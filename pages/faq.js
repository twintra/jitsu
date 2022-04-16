import { Fade, Grid } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/Index.module.css'

export default function FAQ() {
    return (

        <Fade in={true}>
            <Grid
                container
                style={{ minHeight: '85vh' }}
            >
                <Grid item styles={{ backgroundColor: "red" }}>FAQ</Grid>

            </Grid>

        </Fade>
    )
}