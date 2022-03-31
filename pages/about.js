import { Grid } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/Index.module.css'

export default function About() {
    return (

        <Grid 
        container 
        style={{ minHeight: '85vh' }}
        >
            <Grid item styles={{ backgroundColor: "red" }}>about</Grid>

        </Grid>
    )
}