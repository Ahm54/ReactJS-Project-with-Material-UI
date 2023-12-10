import React from 'react'
import { Button, CardMedia, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/MarathonLogo.jpeg';




function Navbar() {

  const navigate = useNavigate();

  return (
    <Stack sx={{height:'75px', marginTop:'20px', marginBottom:'20px'}}>
      <nav className='navbar navbar-expand-lg bg-body-tertiary' sx={{ marginLeft: '20px' }}>
        <CardMedia component='img' alt='logo_img' image={Logo} sx={{height:'50px', width:'150px',marginBottom:'10px', objectFit:'fill'}} onClick={()=>navigate('/')} />
        <Button sx={{ color: 'black' }} onClick={() => navigate('/')} className='contained' >ANASAYFA</Button>
        <Button sx={{ color: 'black' }} onClick={() => navigate('/OtizmNedir')} className='outlined'>OTİZM NEDİR?</Button>
        <Button sx={{ color: 'black' }} onClick={() => navigate('/AboutUs')} className='contained'>HAKKIMIZDA</Button>
        <Button sx={{ color: 'black' }} onClick={() => navigate('/Programs')} className='outlined'>PROGRAMLARIMIZ</Button>
        <Button sx={{ color: 'black' }} onClick={() => navigate('/EduKadro')} className='contained'>EĞİTİM KADROMUZ</Button>
        <Button sx={{ color: 'black' }} onClick={() => navigate('/Galeri')} className='contained'>GALERİ</Button>
        <Button sx={{ color: 'black' }} onClick={() => navigate('/Contact')} className='contained'>İLETİŞİM</Button>
      </nav>
    </Stack>
  )
}

export default Navbar
