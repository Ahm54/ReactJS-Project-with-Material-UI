import React from 'react';
import Navbar from './Navbar';
import SosyalMedya from './SosyalMedya';
import { Box, CardMedia, Stack, Typography, Button } from '@mui/material';
import './Styles/AboutUs.css';
import AboutUs1 from '../assets/Otizmm.jpg';
import { useNavigate } from 'react-router-dom';


function AboutUs() {

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <br />
      <SosyalMedya />
      <br />
      <Stack>
        <Box>
          <CardMedia component='img' alt='Foto' image={AboutUs1} sx={{ height: '400px', width: '90%', marginLeft: '70px', marginBottom: '50px', objectFit:'fill' }} />
        </Box>
        <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width:'80%', marginLeft:'100px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h4' sx={{ color: 'crimson', textAlign: 'left', marginLeft: '40px' }}>MİSYONUMUZ</Typography>
            <Typography variant='h6' sx={{ margin:'30px', textAlign: 'left' }}>Otizmli bireylerin becerilerini ve enerjilerini doğru kanallara aktarmasını sağlayarak nitelikli  yaşam sürmelerini gerçekleştirmek, özgüvenlerini sağlayacak ve yoksunluklarını ortadan kaldıracak, bireysel olarak yaşama bağımsızlıklarını oluşturacak, sporla entegre olacak becerileri kazandırmak, ailelerinin sosyal sorunlarının önlenmesi ve çözümlenmesine yardımcı olacak yaşam koşullarının iyileştirilmesini sağlayacak sistemli,düzenli ve devamlı bir eğitim ortamı oluşturarak bu alanla ilgili tüm kesimlerle işbirliği içinde olmak yönünde çalışmaları yürütmek.</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h4' sx={{ color: 'crimson', textAlign: 'left', marginLeft: '40px' }}>VİZYONUMUZ</Typography>
            <Typography variant='h6' sx={{textAlign:'left',margin:'30px'}}>Otizmli bireyler ve aileleri için objektif, proaktif çözümler üreten, ulaşılabilir, nitelikli yaşamlar sağlayan, ulusal ve uluslarası platformlarda Otizmli bireylerin gerçekleştirdikleri gelişmeler konusunda bilgisine ve deneyimine başvurulan, kamuoyunu bu konuda bilinçlendirmeyi ve gönüllülüğü arttırmayı hedefleyen ve bu konuda tedbirler alan, bilimsel çalışmaları bizzat gerçekleştiren ve akademik çevreyi yönlendiren danışman ve bu alandaki hizmetlerini sosyal ortamlara yayma alanında lider bir kurum olmak</Typography>
          </Box>
        </Stack>
      </Stack>
      <br />
      <Box sx={{ backgroundColor: 'crimson' }}>
        <Typography variant='h6' sx={{ color: 'white' }}>Maraton Otizm ve Özel Çocuklar Spor Tesisi; Bursa İli, Nilüfer
          ilçesinde Özlüce Mahallesinde şehir gürültüsünden uzak
          doğayla iç içe 350 m2si kapalı olan ve bahçesinde
          yeşilliğin bol olduğu çocuklarımızın oyun oynayıp dinlene-
          bileceği yerlerin bulunduğu toplam 900 m2 üzerine kurul-
          muş bir kurumdur. </Typography>
        <br />
        <Typography variant='h6' sx={{ color: 'white' }}>   Tüm enerjimizle, hep beraber bir aile olarak, ortaya
          koyduğumuz yüreğimiz, özverimiz, sevgimiz, öğrenci
          odaklılığımız, ileri görüşlülüğümüz, üretkenliğimiz, karar-
          lığımızla sahip olduğumuz öğrencilerimiz, onların başarıya
          ulaştıklarında sahip oldukları mutluluk, velilerimiz ve
          onlara kurduğumuz çok değerli dostluklarda</Typography>
        <Typography variant='h5' sx={{ color: 'black' }}>OTİZMLİ ve TÜM ÖZEL GEREKSİNİMLİ BİREYLERE</Typography>
        <Typography variant='h6' sx={{ color: 'white' }}>hizmet ediyor olmaktan gurur duyuyoruz.</Typography>
      </Box>
      <br />
      <br />
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

export default AboutUs
