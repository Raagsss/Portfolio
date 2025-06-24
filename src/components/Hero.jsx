import { Box, Container, Typography, Button, Grid, IconButton } from '@mui/material'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  const mainSkills = [
    { name: 'UI/UX Design', level: 'Advanced' },
    { name: 'Figma', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate' },
  ]

  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        pt: { xs: '64px', md: '72px' },
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 3D Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          '& > div': {
            position: 'absolute',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(230, 177, 126, 0.1) 0%, rgba(45, 48, 71, 0.1) 100%)',
            filter: 'blur(40px)',
          },
        }}
      >
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            width: '300px',
            height: '300px',
            top: '10%',
            left: '10%',
          }}
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            width: '400px',
            height: '400px',
            bottom: '10%',
            right: '10%',
          }}
        />
      </Box>

      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 2,
              background: 'linear-gradient(135deg, #E6B17E 0%, #F0C4A3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Hi, I'm{' '}
            <TypeAnimation
              sequence={[
                'Raghav Rana',
                2000,
                'a UI/UX Designer',
                2000,
                'a Certified Ethical Hacker',
                2000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
              style={{ 
                display: 'inline-block',
                color: '#E6B17E',
                WebkitTextFillColor: '#E6B17E',
              }}
            />
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              fontWeight: 500,
              color: '#FFFFFF',
              mb: 4,
            }}
          >
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative', zIndex: 10 }}
        >
          <Typography 
            variant="h6" 
            align="center" 
            sx={{ 
              color: '#F0C4A3', 
              fontWeight: 600, 
              mb: 2,
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}
          >
            Designing Secure, Intuitive, and Impactful Digital Solutions
          </Typography>
          <Typography 
            variant="body1" 
            align="center" 
            sx={{ 
              color: '#FFFFFF', 
              maxWidth: '700px', 
              mx: 'auto', 
              mb: 4,
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }}
          >
            I specialize in UI/UX design, cybersecurity, and coding, delivering seamless and secure user experiences. My passion lies in solving complex challenges and building digital products that are both beautiful and resilient.
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: 'center', 
              mb: 4, 
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 10
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => handleScroll('projects')}
              sx={{
                background: 'linear-gradient(135deg, #E6B17E 0%, #F0C4A3 100%)',
                color: '#000000',
                padding: '10px 24px',
                position: 'relative',
                zIndex: 10,
                '&:hover': {
                  background: 'linear-gradient(135deg, #F0C4A3 0%, #E6B17E 100%)',
                  boxShadow: '0 5px 15px rgba(230, 177, 126, 0.3)',
                },
                cursor: 'pointer',
              }}
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => handleScroll('contact')}
              sx={{
                borderColor: '#E6B17E',
                color: '#E6B17E',
                padding: '10px 24px',
                position: 'relative',
                zIndex: 10,
                '&:hover': {
                  borderColor: '#F0C4A3',
                  background: 'rgba(230, 177, 126, 0.1)',
                },
                cursor: 'pointer',
              }}
            >
              Contact Me
            </Button>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ position: 'relative', zIndex: 10 }}
        >
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            justifyContent: 'center',
            position: 'relative',
            zIndex: 10
          }}>
            <IconButton
              component="a"
              href="https://github.com/raagsss"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#E6B17E',
                position: 'relative',
                zIndex: 10,
                '&:hover': {
                  background: 'rgba(230, 177, 126, 0.1)',
                },
              }}
            >
              <FaGithub size={24} />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/raghav-rana-80b234256/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#E6B17E',
                position: 'relative',
                zIndex: 10,
                '&:hover': {
                  background: 'rgba(230, 177, 126, 0.1)',
                },
              }}
            >
              <FaLinkedin size={24} />
            </IconButton>
            <IconButton
              component="a"
              href="https://x.com/Raghav__Rana"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#E6B17E',
                position: 'relative',
                zIndex: 10,
                '&:hover': {
                  background: 'rgba(230, 177, 126, 0.1)',
                },
              }}
            >
              <FaTwitter size={24} />
            </IconButton>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Hero 