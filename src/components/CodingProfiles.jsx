import { Box, Container, Typography, Paper, Grid, Button, Link, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import { FaGithub, FaCode, FaExternalLinkAlt } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const CodingProfiles = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const codingProfiles = [
    {
      platform: 'GitHub',
      username: 'Raagsss',
      url: 'https://github.com/Raagsss',
      description: 'Check out my repositories',
    },
    {
      platform: 'LeetCode',
      username: 'itsraghavx',
      url: 'https://leetcode.com/itsraghavx/',
      description: 'See my problem-solving journey',
    },
    {
      platform: 'Coding Ninjas',
      username: 'itsraghavx',
      url: 'https://www.codingninjas.com/codestudio/profile/itsraghavx',
      description: 'Explore my coding challenges',
    },
  ];

  const getIcon = (platform) => {
    switch (platform) {
      case 'GitHub':
        return <FaGithub size={28} />;
      case 'LeetCode':
        return <SiLeetcode size={28} style={{ color: '#FFA116' }} />;
      case 'Coding Ninjas':
        return <FaCode size={28} style={{ color: '#FF6600' }} />;
      default:
        return null;
    }
  };

  return (
    <Box
      id="coding-profiles"
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 100%)',
        color: '#FFFFFF',
      }}
    >
      {/* Background Elements */}
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
            x: [0, -100, 0],
            y: [0, -50, 0],
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
            right: '10%',
          }}
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
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
            left: '10%',
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 1,
                textAlign: 'center',
                background: 'linear-gradient(135deg, #E6B17E 0%, #F0C4A3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Coding Profiles
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#FFFFFF',
                fontWeight: 400,
                mb: 6,
                mt: 0,
                textAlign: 'center',
                display: 'block',
              }}
            >
              Check out my coding journey and achievements
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {codingProfiles.map((profile, index) => (
            <Grid item xs={12} sm={8} md={4} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <Paper
                  elevation={0}
                  sx={{
                    background: 'linear-gradient(135deg, rgba(230, 177, 126, 0.1) 0%, rgba(240, 196, 163, 0.1) 100%)',
                    borderRadius: '16px',
                    p: { xs: 2, md: 3 },
                    height: '100%',
                    border: '1px solid rgba(230, 177, 126, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'all 0.3s ease-in-out',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 20px rgba(230, 177, 126, 0.2)',
                    },
                  }}
                >
                  <Box
                    className="platform-icon"
                    sx={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #2D3047 0%, #3D4163 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      color: '#fff',
                      transition: 'transform 0.3s ease-in-out',
                      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {getIcon(profile.platform)}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#E6B17E',
                      fontWeight: 600,
                      mb: 1,
                      fontSize: { xs: '1.2rem', md: '1.3rem' }
                    }}
                  >
                    {profile.platform}
                  </Typography>
                  <Chip
                    label={`@${profile.username}`}
                    size="small"
                    sx={{
                      background: 'rgba(230, 177, 126, 0.1)',
                      color: '#E6B17E',
                      border: '1px solid rgba(230, 177, 126, 0.2)',
                      fontWeight: 500,
                      mb: 3,
                      '&:hover': {
                        background: 'rgba(230, 177, 126, 0.2)',
                      },
                    }}
                  />
                  <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', my: 4 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#FFFFFF',
                        fontStyle: 'italic',
                        fontSize: { xs: '0.9rem', md: '1rem' }
                      }}
                    >
                      {profile.description}
                    </Typography>
                  </Box>
                  <Button
                    className="profile-button"
                    component={Link}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    endIcon={<FaExternalLinkAlt size={14} />}
                    sx={{
                      mt: 'auto',
                      background: 'linear-gradient(135deg, #E6B17E 0%, #F0C4A3 100%)',
                      color: '#000000',
                      transition: 'all 0.3s ease',
                      textTransform: 'none',
                      py: 1.5,
                      px: 3,
                      borderRadius: '30px',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                      '&:hover': {
                        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
                      },
                    }}
                  >
                    Visit Profile
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default CodingProfiles 