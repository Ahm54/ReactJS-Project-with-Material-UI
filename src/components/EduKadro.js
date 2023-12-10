import React from 'react';
import Navbar from './Navbar';
import SosyalMedya from './SosyalMedya';
import { Stack, Box, Typography, CardMedia, Button } from '@mui/material';
import EduKadro1 from '../assets/EduKadro1.jpeg';
import EduKadro2 from '../assets/EduKadro2.jpeg';
import EduKadro3 from '../assets/EduKadro3.jpeg';
import { useNavigate } from 'react-router-dom';



function EduKadro() {


  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <br />
      <SosyalMedya />
      <br />
      <br />
      <Typography variant='h2' sx={{ textAlign: 'center', color: 'black' }}>EĞİTMENLERİMİZ</Typography>
      <br />
      <Stack sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'yellow', width:'70%', marginLeft:'200px' }}>
        <CardMedia component='img' image={EduKadro3} alt='myImage' sx={{ height: '280px', width: '200px', marginRight: '40px' }} />
        <Box>
          <Typography variant='h6' sx={{ color: 'black', textAlign: 'left', textDecoration: 'underline' }}>BİLAL ÜKÜNÇ</Typography>
          <br />
          <br />
          <Typography sx={{ color: 'black', textAlign: 'left' }}>MEZUNİYET TARİHİ: 2014 - 2018</Typography>
          <br />
          <Typography sx={{ color: 'black', textAlign: 'left' }}>ÜNİVERSİTE: ULUDAĞ ÜNİVERSİTESİ SPOR BİLİMLERİ <br /> FAKÜLTESİ BEDEN EĞİTİMİ ÖĞRETMENLİĞİ</Typography>
          <br />
          <Typography sx={{ color: 'black', textAlign: 'left' }}>BRANŞI: HENTBOL, TENİS, JİMNASTİK</Typography>
          <br />
          <Typography sx={{ color: 'black', textAlign: 'left' }}>UZMANLIK ALANI: YAŞAM KOÇU</Typography>
        </Box>
      </Stack>
      <br />
      <Stack sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'yellow', width:'70%', marginLeft:'200px' }}>
        <CardMedia component='img' image={EduKadro1} alt='myImage' sx={{ height: '280px', width: '200px', marginRight: '40px' }} />
        <Box>
          <Typography variant='h6' sx={{ color: 'black', textDecoration: 'underline', textAlign: 'left' }}>AHMET SAİT BÜRKÜK</Typography>
          <br />
          <br />
          <Typography sx={{ color: 'black', textAlign: 'left' }}>MEZUNİYET TARİHİ: 2018 - 2021</Typography>
          <br />
          <Typography sx={{ color: 'black', textAlign: 'left' }}>ÜNİVERSİTE: ARDAHAN ÜNİVERSİTESİ <br /> SPOR BİLİMLERİ FAKÜLTESİ BEDEN EĞİTİMİ ÖĞRETMENLİĞİ</Typography>
          <br />
          <Typography sx={{ color: 'black', textAlign: 'left' }}>BRANŞ: YÜZME, BASKETBOL, MASA TENİSİ, HENTBOL, VOLEYBOL</Typography>
          <br />
          <Typography sx={{ color: 'black', textAlign: 'left' }}>UZMANLIK ALANI: TENİS</Typography>
        </Box>
      </Stack>
      <br />
      <Stack sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'yellow', width:'70%', marginLeft:'200px' }}>
        <CardMedia component='img' image={EduKadro2} alt='myImage' sx={{ height: '280px', width: '200px', marginRight: '40px' }} />
        <Box>
          <Typography variant='h6' sx={{ color: 'black', textAlign: 'left', textDecoration: 'underline' }}>RIDVAN ÜKÜNÇ</Typography>
          <br />
          <br />
          <Typography sx={{ color: 'black', textAlign: 'left' }}>MEZUNİYET TARİHİ: 2016 - 2020</Typography>
          <br />
          <Typography sx={{ color: 'black', textAlign: 'left' }}>ÜNİVERSİTE: SAKARYA ÜNİVERSİTESİ SPOR BİLİMLERİ <br /> FAKÜLTESİ BEDEN EĞİTİMİ ÖĞRETMENLİĞİ</Typography>
          <br />
          <Typography sx={{ color: 'black', textAlign: 'left' }}>BRANŞI: YÜZME, TENİS, VOLEYBOL, JİMNASTİK</Typography>
          <br />
          <Typography sx={{ color: 'black', textAlign: 'left' }}>UZMANLIK ALANI: YÜZME</Typography>
        </Box>
      </Stack>
      <br />
      <br />
      <br />
      <br />
      <Stack sx={{ backgroundColor: 'orange', marginTop: '0' }}>
        <Box>
          <Typography sx={{ color: 'black' }} variant='h4'>Bilgi almak için bizimle iletişime geçiniz...</Typography>
          <br />
          <Typography sx={{ color: 'white', backgroundColor: 'black' }}>Cep Tel: +90 543 274 74 92</Typography>
        </Box>
        <br />
        <Box>
          <Typography sx={{ color: 'crimson', fontSize: '24px' }}>ADRES</Typography>
          <Typography sx={{ color: 'black', textAlign: 'center' }} variant='h6'>Bademli Mah. 21. Sokak No:32 Mudanya/B Bursa</Typography>
        </Box>
        <br />
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', }}>
          <SosyalMedya />
          <Button variant='contained' sx={{ marginBottom: '10px' }} onClick={() => navigate('/Contact')}>Bize mesaj göndermek için tıklayınız!</Button>
        </Box>
      </Stack>
      <br />
    </div>
  )
}

export default EduKadro
