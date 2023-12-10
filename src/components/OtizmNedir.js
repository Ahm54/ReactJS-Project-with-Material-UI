import React from 'react';
import Navbar from './Navbar';
import SosyalMedya from './SosyalMedya';
import { Stack, Typography, Box, Button, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import OtizmNedir2 from '../assets/otizm.jpg';




function OtizmNedir() {

  const navigate = useNavigate();


  return (
    <div>
      <Navbar />
      <br />
      <SosyalMedya />
      <br />
      <br />
      <Stack className='bgImage'>
      <CardMedia component='img' alt='Foto' image={OtizmNedir2} sx={{height:'400px', width:'80%', marginLeft:'90px', marginBottom:'20px'}} />
      </Stack>
      <Stack sx={{ width: '100%' }}>
        <Typography variant='h5' sx={{ textAlign: 'left', marginLeft: '60px' }}>Otizm, bebeklik ve çocukluk döneminde başlayan <br /> nörogelişimsel bir bozukluktur.</Typography>
        <br />
        <br />
        <Stack sx={{ marginLeft: '40px' }}>
          <ul>
            <li>
              <Typography sx={{ textAlign: 'left' }} ml={1} mb={2} variant='h6'>Gelişim basamaklarında gecikme ile görülmektedir.</Typography>
            </li>
          </ul>
          <ul>
            <li>
              <Typography sx={{ textAlign: 'left' }} ml={1} mb={2} variant='h6'>Sosyal iletişimde ve etkileşimde bozukluklar, tekrarlayıcı davranışlar ve yaşam rutinleri, stereotipik hareketler ile seyretmektedir.</Typography>
            </li>
          </ul>
          <ul>
            <li>
              <Typography sx={{ textAlign: 'left' }} ml={1} mb={2} variant='h6'>Otizm alıcı ve ifade edici dili kullanmama, sosyal iletişim kurma isteğinin olmaması, göz teması kurmaması postür ve jestleri kullanmama, <br /> akranlarına karşı duygu ve paylaşımda bulunmama gibi belirtiler göstermektedir.</Typography>
            </li>
          </ul>
        </Stack>
        <Stack sx={{ backgroundColor: 'orange' }}>
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
      </Stack>
    </div>
  )
}

export default OtizmNedir
