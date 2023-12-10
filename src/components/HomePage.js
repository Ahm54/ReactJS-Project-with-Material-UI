import React from 'react'
import Navbar from '../components/Navbar';
import { Button, Typography, Stack, Box, CardMedia} from '@mui/material';
import './Styles/HomePage.css';
import SosyalMedya from './SosyalMedya';
import { useNavigate, Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import { InstagramEmbed } from 'react-social-media-embed';
import Foto from '../assets/foto3.jpeg';
import Foto2 from '../assets/foto4.jpeg';
import Foto3 from '../assets/foto8.jpeg';
import Foto5 from '../assets/foto10.jpeg';



function HomePage() {

    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <SosyalMedya />
            <br />
            <br />
            <div className='backGroundImage'>
                <Typography variant='h3' sx={{ zIndex: '1' }}> <br /> Otistik birey yoktur. Otizmli birey vardır.</Typography>
                <CardMedia component='img' alt='img' image={Foto} sx={{height:'400px', marginTop:'10px'}} />
            </div>
            <br />
            <br />
            <div className='container text-center'>
                <div className="row">
                    <div className="col">
                        <CardMedia component='img' alt='img' image={Foto2} sx={{height:'200px', objectFit:'fill', marginTop:'10px', width:'350px'}} />
                        <Button sx={{ color: 'black', marginTop: '20px', marginRight:'50px' }} onClick={() => navigate('/AboutUs')}>HAKKIMIZDA</Button>
                    </div>
                    <div className="col">
                        <CardMedia component='img' alt='img' image={Foto3} sx={{height:'200px', objectFit:'fill', marginTop:'10px', width:'350px'}} />
                        <Button sx={{ color: 'black', marginTop: '20px', marginRight:'50px' }} onClick={() => navigate('/Galeri')}>GALERİ</Button>
                    </div>
                    <div className="col">
                        <CardMedia component='img' alt='img' image={Foto5} sx={{height:'200px', objectFit:'fill', marginTop:'10px', width:'350px'}} />
                        <Button sx={{ color: 'black', marginTop: '20px', marginRight:'30px' }} onClick={() => navigate('/EduKadro')}>EĞİTİM KADROMUZ</Button>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <Typography variant='h3' sx={{ marginTop: '50px', color: 'crimson' }}>PROGRAMLARIMIZ</Typography>
            <Stack sx={{ display: 'flex', flexDirection: 'row', height: '500px', justifyContent: 'space-around' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <Button variant='contianed' sx={{ margin: '20px', marginLeft: '150px', color: 'white', backgroundColor: 'blue' }}>ÖZ BAKIM BECERİLERİ</Button>
                    <Button variant='contained' sx={{ margin: '20px', marginLeft: '120px', backgroundColor: 'blue' }}>SOSYALLEŞME</Button>
                    <Button variant='contained' sx={{ margin: '20px', backgroundColor: 'blue' }}>KİŞİSEL FARKINDALIK</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <Button variant='contained' sx={{ margin: '20px', marginRight: '150px', backgroundColor: 'blue' }}>İLETİŞİM BECERİLERİ</Button>
                    <Button variant='contained' sx={{ margin: '20px', marginRight: '120px', backgroundColor: 'blue' }}>YAŞAM KOÇLUĞU</Button>
                    <Button variant='contained' sx={{ margin: '20px', backgroundColor: 'blue' }}>SPORTİF BECERİ KAZANDIRMA</Button>
                </Box>
            </Stack>
            <Stack sx={{ height: '300px', width: '100%', backgroundColor: 'lightgray' }}>
                <Typography variant='h4' sx={{ marginTop: '40px' }}>AMACIMIZ</Typography>
                <Typography variant='h6' sx={{ marginTop: '15px' }}>Otizmli bireyler başta olmak üzere tüm özel gereksinimli bireyleri hayata hazırlamak, <br /> farkındalıklarını ve yaşam kalitesini arttırmak, bağımsız hareket edebilme becerilerini <br /> geliştirmek, sporla beraber bilişsel ve duyuşsal gelişimlerine destek olmak temel <br /> amacımızdır.</Typography>
            </Stack>
            <Stack sx={{ backgroundColor: 'lightblue', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Typography variant='h6' sx={{ textAlign: 'left' }}>
                    Özel sporcularımızın hayata bağlanıp bizden biri <br /> olduğunu hissetmeleri gerek. Bunun için <a href="/Wellness" className='a'>wellness</a><br />kültürü ile siz ailelerimiz ve sporcularımızın <br /> yanındayız...</Typography>
                <Button onClick={() => navigate('/Wellness')} sx={{ color: 'white', backgroundColor: 'blue', height: '60px', marginTop: '30px' }}>Wellness Nedir?
                    <Typography>(Tıklayınız)</Typography>
                </Button>
            </Stack>
            <br />
            <Stack>
                <Typography variant='h4'>SON PAYLAŞIMLARIMIZ</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='h5'>Instagram</Typography>
                        <Stack container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <InstagramEmbed url="https://www.instagram.com/p/C0lm4rcoJLU/" width='328px' height='400px' />
                            <br />
                            <InstagramEmbed url="https://www.instagram.com/p/C0a6w0doJyy/" width='328px' height='400px' />
                        </Stack>
                        <br />
                        <Link to='https://www.instagram.com/maraton_otizm_club/' target='_blank' style={{ textDecoration: 'none', color: 'white', backgroundColor: 'blue', height: '35px', width: '325px', borderRadius: '5px' }}><InstagramIcon /> INSTAGRAM'A GİT</Link>
                    </Box>
                </Box>
            </Stack>
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
                </Box>
            </Stack>
        </div>
    )
}

export default HomePage
