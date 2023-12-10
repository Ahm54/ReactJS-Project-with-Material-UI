import React from 'react'
import { Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

function SosyalMedya() {
    return (
        <div>
            <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '120px', float: 'right', marginRight: '60px' }}>
                <a href="www.facebook.com" target='_blank' rel='noreferrer'><FacebookIcon sx={{ fontSize: '35px' }} /></a>
                <a href="https://www.instagram.com/maraton_otizm_kulubu?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_blank' rel="noreferrer">
                    <InstagramIcon sx={{ fontSize: '35px' }} />
                </a>
                <GoogleIcon sx={{ fontSize: '35px' }} />
            </Grid>
        </div>
    )
}

export default SosyalMedya
