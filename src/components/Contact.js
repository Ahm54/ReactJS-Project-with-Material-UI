import React from 'react';
import Navbar from './Navbar';
import { Button, Typography, Stack, Box, Divider } from '@mui/material'
import SosyalMedya from './SosyalMedya';
import { useNavigate } from 'react-router-dom';





function Contact() {
 
  const isMobileDevice = () => {
    return window.innerWidth <= 768; // Varsayılan olarak mobil genişlik 768px olarak kabul edilebilir
  };

  const callPhone =()=>{
    if(isMobileDevice()){
      const url = 'tel: 05432747492';
      window.location.href = url;
    }
    else{
      alert('Bu buton sadece mobil cihazlarda çalışabilmektedir.');
    }
  }

  const navigate = useNavigate();


  return (
    <div>
      <Navbar />
      <br />
      <SosyalMedya />
      <br />
      <br />
      <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginLeft: '80px', width: '75%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h4' sx={{ color: 'red', textAlign: 'left' }}>ADRES</Typography>
          <br />
          <Typography variant='h5' sx={{ textAlign: 'left' }}>Bademli Mah. 21. Sokak No:32 Mudanya/B Bursa</Typography>
          <br />
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography variant='h5' sx={{ textAlign: 'left', color: 'red' }}>Telefon: </Typography>
            <Typography variant='h5' sx={{ textAlign: 'left', color: 'black' }}>0 (224) 413 03 73</Typography>
          </Box>
          <br />
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography variant='h5' sx={{ textAlign: 'left', color: 'red' }}>Cep Telefonu: </Typography>
            <Typography variant='h5' sx={{ textAlign: 'left', color: 'black' }}>+90 543 274 74 92</Typography>
          </Box>
        </Box>
        <br />
        <Box>
          <Typography variant='h5' sx={{textAlign:'right'}}>Bizi aramak için aşağıdaki butona tıklayınız.</Typography>
          <br />
          <br />
          <Button variant='contianed' onClick={callPhone} sx={{height:'40px',width:'180px', fontSize:'20px', color:'white', backgroundColor:'green'}}>ARA</Button>
        </Box>
      </Stack>
      <br />
      <Divider />
      <br />
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
          <br />
        </Box>
      </Stack>
      <br />
    </div>
  )
}

export default Contact
