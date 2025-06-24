import { Box, Container, Typography, IconButton, Link, Grid, Button, Divider } from '@mui/material'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername' },
  ]

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1A1A1A 0%, #000000 100%)',
        color: '#FFFFFF',
        py: { xs: 4, md: 6 },
        borderTop: '1px solid rgba(230, 177, 126, 0.2)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 2 }} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#E6B17E' }}>
              Raghav Rana
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              UI/UX Designer & Creative Developer
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Box>
              {['home', 'education', 'skills', 'projects', 'contact'].map((item) => (
                <Button 
                  key={item}
                  href={`#${item}`} 
                  sx={{ 
                    color: '#FFFFFF', 
                    textTransform: 'capitalize',
                    mx: 1
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Box>
              <IconButton href="https://github.com/Raagsss" target="_blank" sx={{ color: '#FFFFFF' }}>
                <FaGithub />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/raghav-rana-80b234256/" target="_blank" sx={{ color: '#FFFFFF' }}>
                <FaLinkedin />
              </IconButton>
              <IconButton href="https://x.com/Raghav__Rana" target="_blank" sx={{ color: '#FFFFFF' }}>
                <FaTwitter />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(230, 177, 126, 0.2)' }} />

        <Typography 
          variant="body2" 
          align="center"
          sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
        >
          © {new Date().getFullYear()} Raghav Rana. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer 