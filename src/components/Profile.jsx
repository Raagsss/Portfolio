import { Box, Container, Typography, Paper, Grid, Chip, Button, Link } from '@mui/material'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaCode, FaMapMarkerAlt, FaClock, FaExternalLinkAlt } from 'react-icons/fa'
import { profileData } from '../data/profileData'

const Profile = () => {
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

  const getIcon = (platform) => {
    switch (platform) {
      case 'LinkedIn':
        return <FaLinkedin size={20} />;
      case 'GitHub':
        return <FaGithub size={20} />;
      case 'LeetCode':
      case 'Naukri Code360':
        return <FaCode size={20} />;
      default:
        return null;
    }
  };

  return (
    <Box
      id="profile"
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
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
          background: 'radial-gradient(circle at 50% 50%, rgba(230, 177, 126, 0.05) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              background: 'linear-gradient(135deg, #2D3047 0%, #3D4163 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '3rem', md: '3.5rem' },
            }}
          >
            Profile
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              mb: 4,
            }}
          >
            Get to know me better
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {/* Profile Cards */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(230, 177, 126, 0.2)',
                  height: '100%',
                }}
              >
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 'bold',
                      color: '#2D3047',
                      mb: 2,
                    }}
                  >
                    {profileData.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <FaMapMarkerAlt color="#E6B17E" />
                      <Typography variant="body2" color="text.secondary">
                        {profileData.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <FaClock color="#E6B17E" />
                      <Typography variant="body2" color="text.secondary">
                        {profileData.timezone}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Profile Links */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2D3047', mb: 3 }}>
                    Connect With Me
                  </Typography>
                  <Grid container spacing={2}>
                    {profileData.socialLinks.map((link, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Button
                          component={Link}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          fullWidth
                          variant="outlined"
                          startIcon={getIcon(link.platform)}
                          endIcon={<FaExternalLinkAlt size={14} />}
                          sx={{
                            color: '#2D3047',
                            borderColor: 'rgba(230, 177, 126, 0.3)',
                            '&:hover': {
                              borderColor: '#E6B17E',
                              background: 'rgba(230, 177, 126, 0.05)',
                            },
                            textTransform: 'none',
                            py: 1,
                          }}
                        >
                          {link.platform}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* About Section */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2D3047', mb: 2 }}>
                    About Me
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#E6B17E' }}>
                        Currently Working On
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {profileData.aboutDetails.currentWork}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#E6B17E' }}>
                        Looking to Collaborate On
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {profileData.aboutDetails.collaboration}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#E6B17E' }}>
                        Currently Learning
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                        {profileData.aboutDetails.learning.map((item, index) => (
                          <Chip
                            key={index}
                            label={item}
                            size="small"
                            sx={{
                              background: 'rgba(230, 177, 126, 0.1)',
                              color: '#E6B17E',
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#E6B17E' }}>
                        Ask Me About
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {profileData.aboutDetails.askMeAbout}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#E6B17E' }}>
                        Fun Fact
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {profileData.aboutDetails.funFact}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Tech Stack */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(230, 177, 126, 0.2)',
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2D3047', mb: 3 }}>
                  Tech Stack
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {profileData.techStack.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      size="small"
                      sx={{
                        background: 'rgba(45, 48, 71, 0.1)',
                        color: '#2D3047',
                        fontWeight: 500,
                        '&:hover': {
                          background: 'rgba(230, 177, 126, 0.1)',
                          color: '#E6B17E',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Profile 