import React, { useState } from 'react';
import Navbar from './Navbar';
import SosyalMedya from './SosyalMedya';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './Styles/swiper.css';
import { Navigation, Mousewheel, FreeMode, Keyboard, Thumbs } from 'swiper/modules';
import { Stack, Button, Typography, Box, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Foto1 from '../assets/foto1.jpeg';
import Foto2 from '../assets/foto2.jpeg';
import Foto3 from '../assets/foto3.jpeg';
import Foto4 from '../assets/foto4.jpeg';
import Foto5 from '../assets/foto8.jpeg';
import Foto6 from '../assets/foto7.jpeg';
import Foto7 from '../assets/foto6.jpeg';
import Foto8 from '../assets/foto9.jpeg';
import Foto9 from '../assets/foto11.jpeg';
import Foto10 from '../assets/foto10.jpeg';



function Galeri() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigate = useNavigate();


  return (
    <div>
      <Navbar />
      <br />
      <SosyalMedya />
      <br />
      <Swiper className='swiper'
        loop={true}
        cssMode={true}
        mousewheel={true}
        navigation={true}
        pagination={true}
        thumbs={{ swiper: thumbsSwiper }}
        keyboard={true}
        modules={[Navigation, Mousewheel, FreeMode, Keyboard, Thumbs]}
      >
        <SwiperSlide className='swiper-1'>
          <CardMedia component='img' image={Foto1} alt='Foto1' sx={{height:'500px', width:'90%', objectFit:'fill', marginLeft:'65px'}} />
        </SwiperSlide>
        <SwiperSlide className='swiper-2'>
          <CardMedia component='img' image={Foto2} alt='Foto2' sx={{height:'500px', width:'90%', objectFit:'fill', marginLeft:'65px'}} />
        </SwiperSlide>
        <SwiperSlide className='swiper-3'>
          <CardMedia component='img' image={Foto3} alt='Foto3' sx={{height:'500px', width:'90%', objectFit:'fill', marginLeft:'65px'}} />
        </SwiperSlide>
        <SwiperSlide className='swiper-4'>
          <CardMedia component='img' image={Foto4} alt='Foto4' sx={{height:'500px', width:'90%', objectFit:'fill', marginLeft:'65px'}} />
        </SwiperSlide>
        <SwiperSlide className='swiper-5'>
          <CardMedia component='img' image={Foto5} alt='Foto5' sx={{height:'500px', width:'90%', objectFit:'fill', marginLeft:'65px'}} />
        </SwiperSlide>
        <SwiperSlide className='swiper-6'>
          <CardMedia component='img' image={Foto6} alt='Foto6' sx={{height:'500px', width:'90%', objectFit:'fill', marginLeft:'65px'}} />
        </SwiperSlide>
        <SwiperSlide className='swiper-7'>
          <CardMedia component='img' image={Foto7} alt='Foto7' sx={{height:'500px', width:'90%', objectFit:'fill', marginLeft:'65px'}} />
        </SwiperSlide>
        <SwiperSlide className='swiper-8'>
          <CardMedia component='img' image={Foto8} alt='Foto8' sx={{height:'500px', width:'90%', objectFit:'fill', marginLeft:'65px'}} />
        </SwiperSlide>
        <SwiperSlide className='swiper-9'>
          <CardMedia component='img' image={Foto9} alt='Foto9' sx={{height:'500px', width:'90%', objectFit:'fill', marginLeft:'65px'}} />
        </SwiperSlide>
        <SwiperSlide className='swiper-10'>
          <CardMedia component='img' image={Foto10} alt='Foto10' sx={{height:'500px', width:'90%', objectFit:'fill', marginLeft:'65px'}} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide className='mySwiper1'>
          <CardMedia component='img' image={Foto1} alt='Foto1' sx={{height:'100px', marginTop:'10px', width:'300px', objectFit:'fill'}} />
        </SwiperSlide>
        <SwiperSlide className='mySwiper2'>
          <CardMedia component='img' image={Foto2} alt='Foto2' sx={{height:'100px', marginTop:'10px', width:'300px', objectFit:'fill'}} />
        </SwiperSlide>
        <SwiperSlide className='mySwiper3'>
          <CardMedia component='img' image={Foto3} alt='Foto3' sx={{height:'100px', marginTop:'10px', width:'300px', objectFit:'fill'}} />
        </SwiperSlide>
        <SwiperSlide className='mySwiper4'>
          <CardMedia component='img' image={Foto4} alt='Foto4' sx={{height:'100px', marginTop:'10px', width:'300px', objectFit:'fill'}} />
        </SwiperSlide>
        <SwiperSlide className='mySwiper5'>
          <CardMedia component='img' image={Foto5} alt='Foto5' sx={{height:'100px', marginTop:'10px', width:'300px', objectFit:'fill'}} />
        </SwiperSlide>
        <SwiperSlide className='mySwiper6'>
          <CardMedia component='img' image={Foto6} alt='Foto6' sx={{height:'100px', marginTop:'10px', width:'300px', objectFit:'fill'}} />
        </SwiperSlide>
        <SwiperSlide className='mySwiper7'>
          <CardMedia component='img' image={Foto7} alt='Foto7' sx={{height:'100px', marginTop:'10px', width:'300px', objectFit:'fill'}} />
        </SwiperSlide>
        <SwiperSlide className='mySwiper8'>
          <CardMedia component='img' image={Foto8} alt='Foto8' sx={{height:'100px', marginTop:'10px', width:'300px', objectFit:'fill'}} />
        </SwiperSlide>
        <SwiperSlide className='mySwiper9'>
          <CardMedia component='img' image={Foto9} alt='Foto9' sx={{height:'100px', marginTop:'10px', width:'300px', objectFit:'fill'}} />
        </SwiperSlide>
        <SwiperSlide className='mySwiper10'>
          <CardMedia component='img' image={Foto10} alt='Foto10' sx={{height:'100px', marginTop:'10px', width:'300px', objectFit:'fill'}} />
        </SwiperSlide>
      </Swiper>
      <Stack sx={{ backgroundColor: 'orange', marginTop:'0' }}>
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

export default Galeri
