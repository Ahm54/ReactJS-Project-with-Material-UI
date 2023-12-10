import React from 'react';
import SosyalMedya from './SosyalMedya';
import Navbar from './Navbar';
import { Stack, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Wellnes() {

  const navigate = useNavigate();


  return (
    <div>
      <Navbar />
      <br />
      <SosyalMedya />
      <br />
      <Stack sx={{display:'flex', flexDirection:'column', backgroundColor:'gray', width:'70%', marginLeft:'180px', borderRadius:'10px'}}>
        <Typography variant='h3' sx={{ textAlign: 'center', marginBottom:'30px', marginTop:'30px' }}>WELLNESS HAKKINDA</Typography>
        <ul>
          <li>
            <Typography variant='h6' sx={{ textAlign: 'left' }}>
              Wellness bir seçimdir, optimal sağlığa doğru hareket etmek için verdiğiniz bir karardır. Wellness, farkındalığın aktif sürecidir ve sağlıklı bir yaşama doğru seçimler yapmaktır.
            </Typography>
          </li>
        </ul>
        <ul>
          <li>
            <Typography variant='h6' sx={{ textAlign: 'left' }}>
              Wellness yaşam için bir yoldur, esenlik için en yüksek potansiyelinizi elde etmek için tasarladığınız bir yaşam biçimidir.
            </Typography>
          </li>
        </ul>
        <ul>
          <li>
            <Typography variant='h6' sx={{ textAlign: 'left' }}>
              Wellness bir süreçtir, sadece hasta olmamak değildir. Son noktası olmayan bir gelişim farkındalığıdır, fakat sağlık ve mutlululuğun her an burada ve şimdi olma ihtimali vardır. Wellness, değişim ve büyüme için dinamik bir süreçtir.
            </Typography>
          </li>
        </ul>
        <ul>
          <li>
            <Typography variant='h6' sx={{ textAlign: 'left' }}>
              Wellness beden, beyin ve ruhun entegrasyonudur, yaptığınız her şeyde değer artışı; düşünme, hissetme ve inancın sağlık durumunuz üzerinde bir etkisi vardır.
            </Typography>
          </li>
        </ul>
        <ul>
          <li>
            <Typography variant='h6' sx={{ textAlign: 'left' }}>
              Wellness kendinizi sevmeyi kabullenmek ve benimsemektir
            </Typography>
          </li>
        </ul>
        <ul>
          <li>
            <Typography variant='h6' sx={{ textAlign: 'left' }}>
              Fiziksel Wellness
              Bizim için 7 bölümden ağırlıklı kullanılan bölüm olan fiziksel wellness;
            </Typography>
          </li>
        </ul>
        <ul>
          <li>
            <Typography variant='h6' sx={{ textAlign: 'left' }}>
              Sağlıklı bir beden, iyi beslenme, düzenli egzersiz, zararlı alışkanlıklardan kaçınmak, sağlık ile ilgili bilgi ve sorumluluk kararları vermek ve ihtiyaç duyulduğu zaman tıbbi destek aramak ile korunur. İyi durumda kalmak, fiziksel sağlığınızı korumak için, iyi beslenme, egzersiz yapmak, ideal kiloyu korumak, yeterli uykuyu almak, riskli cinsel davranıştan kaçınmak ve zararlı maddelerin alımını kısıtlamak bir gereklilik ve fiziksel wellness için ihtiyaç duyulan basamaklardır.
            </Typography>
          </li>
        </ul>
      </Stack>
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

export default Wellnes
