import React from 'react';
import Navbar from './Navbar';
import SosyalMedya from './SosyalMedya';
import { Stack, Typography, Box, Button, CardMedia, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Foto1 from '../assets/foto2.jpeg';
import Foto2 from '../assets/foto4.jpeg';
import Foto3 from '../assets/foto5.jpeg';
import Foto4 from '../assets/foto10.jpeg';
import Foto5 from '../assets/foto7.jpeg';
import Foto9 from '../assets/foto9.jpeg';




function Programs() {

  const navigate = useNavigate();


  return (
    <div>
      <Navbar />
      <br />
      <SosyalMedya />
      <br />
      <Typography variant='h2' sx={{ textAlign: 'center', color: 'gold' }}>PROGRAMLARIMIZ</Typography>
      <Divider />
      <Stack>
        <Typography variant='h4' gutterBottom sx={{ marginTop: '50px' }}>
          YAŞAM KOÇLUĞU PROGRAMI
        </Typography>
        <br />
        <CardMedia component='img' alt='Foto' image={Foto9} sx={{ height: '500px', width: '70%', marginLeft: '220px', objectFit: 'fill' }} />
        <Typography variant='h6' gutterBottom sx={{ margin: '30px' }}>
          Bireye yapılan testlerden sonra bireyin özelliklerine göre hazırlanan programin, spor lideri tarafından uygulanmasıdır.
        </Typography>
      </Stack>
      <br />
      <br />
      <Divider />
      <Stack>
        <Typography variant='h4' gutterBottom sx={{ marginTop: '50px' }}>
          SPORTİF BECERİ KAZANDIRMA
        </Typography>
        <br />
        <CardMedia component='img' alt='Foto' image={Foto1} sx={{ height: '500px', width: '70%', marginLeft: '220px', objectFit: 'fill' }} />
        <Typography variant='h6' gutterBottom sx={{ margin: '30px' }}>
          Bireye yapılan testlerden sonra bireyin özelliklerine göre hazırlanan programin, spor lideri tarafından uygulanmasıdır.
        </Typography>
      </Stack>
      <br />
      <Stack>
        <Typography variant='h4' gutterBottom sx={{ marginTop: '50px' }}>
          SOSYALLEŞME
        </Typography>
        <br />
        <CardMedia component='img' alt='Foto2' image={Foto2} sx={{ height: '500px', width: '70%', marginLeft: '220px', objectFit: 'fill' }} />
        <Typography variant='h6' gutterBottom sx={{ margin: '30px' }}>
          Bireyin çevresiyle ve etrafındaki kişilerle iletişime geçmesi olarak özetleyebiliriz. Otizmli bireylerdeki en büyük problemlerden birisidir. Sosyal özgüven kazandırarak sosyalleşme üzerine yapılan çalışmalardır
        </Typography>
      </Stack>
      <br />
      <Stack>
        <Typography variant='h4' gutterBottom sx={{ marginTop: '50px' }}>
          ÖZBAKIM BECERİLERİ
        </Typography>
        <br />
        <CardMedia component='img' alt='Foto3' image={Foto3} sx={{ height: '500px', width: '70%', marginLeft: '220px', objectFit: 'fill' }} />
        <Typography variant='h6' gutterBottom sx={{ margin: '30px' }}>
          Günlük hayatta yaşamını devam ettirebilecek olan becerilerini kazandırmaya yönelik olan eğitimimizdir.
        </Typography>
      </Stack>
      <br />
      <Stack>
        <Typography variant='h4' gutterBottom sx={{ marginTop: '50px' }}>
          İLETİŞİM BECERİLERİ EĞİTİMİ
        </Typography>
        <br />
        <CardMedia component='img' alt='Foto4' image={Foto4} sx={{ height: '500px', width: '70%', marginLeft: '220px', objectFit: 'fill' }} />
        <Typography variant='h6' gutterBottom sx={{ margin: '30px' }}>
          Bireyin ilgisini çeken nesne ve etkinlerle konuşma konusu olabilecek , bilişsel, duyusal ve psikomotor becerilerini de kapsayan davranış kazandırmaya yönelik çalışmalardır.
        </Typography>
      </Stack>
      <br />
      <Stack>
        <Typography variant='h4' gutterBottom sx={{ marginTop: '50px' }}>
          KİŞİSEL FARKINDALIK
        </Typography>
        <br />
        <CardMedia component='img' alt='Foto5' image={Foto5} sx={{ height: '500px', width: '70%', marginLeft: '220px', objectFit: 'fill' }} />
        <Typography variant='h6' gutterBottom sx={{ margin: '30px' }}>
          Spor liderinin bireyi destekleyerek, bireyin kendisini tanıması, keşfetmesi ve güçlü yönlerinin açığa çıkmasını sağlayarak farkındalığın artmasına yönelik yapılan çalışmalardır.
        </Typography>
      </Stack>
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

export default Programs
