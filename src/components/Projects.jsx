import { Box, Container, Typography, Paper, Grid, Button, Chip, Tabs, Tab } from '@mui/material'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaFigma, FaCode, FaPalette, FaLaptopCode, FaMobile, FaDesktop, FaLock, FaCar, FaCloud, FaCompass, FaCoffee, FaRobot, FaMotorcycle } from 'react-icons/fa'
import { useState } from 'react'

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const developmentProjects = [
    {
      title: 'EthicalLogger',
      description: 'A comprehensive Python-based keylogger with integrated spyware-like functionalities, developed for ethical purposes. Features include screenshot capture, screen recording, and secure email integration.',
      image: '/path-to-your-image.jpg',
      technologies: ['Python', 'Cryptography', 'Email Integration', 'Screen Recording'],
      githubLink: 'https://github.com/Raagsss/Keylogger',
    },
    {
      title: 'Carpooling System',
      description: 'A web-based carpooling platform connecting passengers with drivers. Features include user authentication via Firebase, ride matching, booking management, and real-time updates for secure and eco-friendly travel.',
      image: '/path-to-your-image.jpg',
      technologies: ['HTML/CSS', 'JavaScript', 'Firebase Auth', 'Firestore', 'Python'],
      githubLink: 'https://github.com/Raagsss/Carpooling',
    },
    {
      title: 'WeatherU',
      description: 'A dynamic weather application that provides real-time weather information based on city names using API integration. Features an intuitive interface for easy weather lookups.',
      image: '/path-to-your-image.jpg',
      technologies: ['HTML/CSS', 'JavaScript', 'Weather API', 'REST API'],
      githubLink: 'https://github.com/Raagsss/WeatherU--API-',
    },
    {
      title: 'Adventure Tales',
      description: 'A travel information website featuring a beautiful user interface. Provides comprehensive travel guides and information with an engaging visual design.',
      image: '/path-to-your-image.jpg',
      technologies: ['HTML/CSS', 'JavaScript', 'UI Design', 'Responsive Design'],
      githubLink: 'https://github.com/Raagsss/Adventure-Tales',
    }
  ];

  const uiuxProjects = [
    {
      title: 'Biobot.farm Dashboard',
      description: 'A comprehensive dashboard design for Biobot.farm, focusing on data visualization and user-friendly interface for managing agricultural automation systems.',
      image: '/path-to-your-image.jpg',
      technologies: ['Figma', 'UI Design', 'Dashboard Design', 'Data Visualization'],
      figmaLink: 'https://www.figma.com/design/nB5daWv3AcB2M8o9Ax0FPC/biobot.farm-Assignment',
    },
    {
      title: 'Zypp User App',
      description: 'A modern mobile application design for Zypp, featuring intuitive navigation and seamless user experience for electric vehicle rentals and management.',
      image: '/path-to-your-image.jpg',
      technologies: ['Figma', 'Mobile UI', 'User Experience', 'App Design'],
      figmaLink: 'https://www.figma.com/design/zatfeXoGNwomo1csETFJZt/Zypp-User-App',
    },
    {
      title: 'Coffee App Design',
      description: 'An elegant and minimalist coffee ordering application design with focus on smooth user flow and engaging visual elements.',
      image: '/path-to-your-image.jpg',
      technologies: ['Figma', 'Mobile UI', 'Visual Design', 'UX Flow'],
      figmaLink: 'https://www.figma.com/design/GDQ9GutmIogg6uciuFDsrN/Coffee-App',
    },
    {
      title: 'Zypp User Website',
      description: 'A sophisticated admin interface design for Zypp, enabling efficient management of electric vehicle fleet and user data.',
      image: '/path-to-your-image.jpg',
      technologies: ['Figma', 'Dashboard UI', 'Admin Panel', 'System Design'],
      figmaLink: 'https://www.figma.com/design/b87b5sZGJyl7b9UteLpjSR/Zypp-UI',
    }
  ];

  const renderProjects = (projects, isUiUx = false) => (
    <Grid 
      container 
      spacing={4} 
      justifyContent="flex-start"
      sx={{
        width: '100%',
        maxWidth: '100%',
        mx: 0,
        px: 2,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        pb: 2,
        '&::-webkit-scrollbar': {
          height: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'rgba(230, 177, 126, 0.1)',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(230, 177, 126, 0.3)',
          borderRadius: '4px',
          '&:hover': {
            background: 'rgba(230, 177, 126, 0.5)',
          },
        },
      }}
    >
      {projects.map((project, index) => (
        <Grid 
          item 
          key={index}
          sx={{
            width: { xs: '320px', sm: '380px', md: '450px' },
            flexShrink: 0,
            px: { xs: 1, sm: 2 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{ height: '100%' }}
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
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 20px rgba(230, 177, 126, 0.2)',
                },
              }}
            >
              <Box
                sx={{
                  height: '160px',
                  background: 'linear-gradient(135deg, rgba(230, 177, 126, 0.15) 0%, rgba(240, 196, 163, 0.15) 100%)',
                  borderRadius: '12px',
                  mb: { xs: 2, md: 3 },
                  border: '1px solid rgba(230, 177, 126, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 50% 50%, rgba(230, 177, 126, 0.1) 0%, transparent 70%)',
                  }
                }}
              >
                {isUiUx ? (
                  <>
                    <Box sx={{ mb: 2 }}>
                      {(() => {
                        switch(project.title) {
                          case 'Biobot.farm Dashboard':
                            return <FaRobot size={40} color="#E6B17E" />;
                          case 'Zypp User App':
                            return <FaMotorcycle size={40} color="#E6B17E" />;
                          case 'Coffee App Design':
                            return <FaCoffee size={40} color="#E6B17E" />;
                          case 'Zypp User Website':
                            return <FaDesktop size={40} color="#E6B17E" />;
                          default:
                            return <FaPalette size={40} color="#E6B17E" />;
                        }
                      })()}
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#E6B17E',
                        fontWeight: 500,
                        textAlign: 'center',
                        px: 2
                      }}
                    >
                      {(() => {
                        switch(project.title) {
                          case 'Biobot.farm Dashboard':
                            return 'Agriculture Automation';
                          case 'Zypp User App':
                            return 'EV Rental Platform';
                          case 'Coffee App Design':
                            return 'Food & Beverage';
                          case 'Zypp User Website':
                            return 'Fleet Management';
                          default:
                            return 'UI/UX Design';
                        }
                      })()}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Box sx={{ mb: 2 }}>
                      {(() => {
                        switch(project.title) {
                          case 'EthicalLogger':
                            return <FaLock size={40} color="#E6B17E" />;
                          case 'Carpooling System':
                            return <FaCar size={40} color="#E6B17E" />;
                          case 'WeatherU':
                            return <FaCloud size={40} color="#E6B17E" />;
                          case 'Adventure Tales':
                            return <FaCompass size={40} color="#E6B17E" />;
                          default:
                            return <FaCode size={40} color="#E6B17E" />;
                        }
                      })()}
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#E6B17E',
                        fontWeight: 500,
                        textAlign: 'center',
                        px: 2
                      }}
                    >
                      {(() => {
                        switch(project.title) {
                          case 'EthicalLogger':
                            return 'Security Tool';
                          case 'Carpooling System':
                            return 'Transportation Platform';
                          case 'WeatherU':
                            return 'Weather Service';
                          case 'Adventure Tales':
                            return 'Travel Platform';
                          default:
                            return 'Web Application';
                        }
                      })()}
                    </Typography>
                  </>
                )}
              </Box>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#E6B17E',
                  fontWeight: 600,
                  mb: 2,
                  fontSize: { xs: '1.2rem', sm: '1.25rem' }
                }}
              >
                {project.title}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#FFFFFF',
                  height: '120px',
                  overflow: 'auto',
                  fontSize: { xs: '0.875rem', md: '0.9rem' },
                  lineHeight: '1.5',
                }}
              >
                {project.description}
              </Typography>
              <Box 
                sx={{ 
                  flexGrow: 1,
                  my: 2,
                  minHeight: '80px',
                }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <Chip
                    key={techIndex}
                    label={tech}
                    size="small"
                    sx={{
                      mr: 1,
                      mb: 1,
                      background: 'rgba(230, 177, 126, 0.1)',
                      color: 'primary.main',
                      '&:hover': {
                        background: 'rgba(230, 177, 126, 0.2)',
                      },
                    }}
                  />
                ))}
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  mt: 'auto',
                  height: '40px',
                  justifyContent: 'center'
                }}
              >
                {isUiUx ? (
                  <Button
                    variant="contained"
                    startIcon={<FaFigma />}
                    href={project.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      background: 'linear-gradient(135deg, #E6B17E 0%, #F0C4A3 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #F0C4A3 0%, #E6B17E 100%)',
                      },
                      minWidth: '150px'
                    }}
                  >
                    View in Figma
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    startIcon={<FaGithub />}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      background: 'linear-gradient(135deg, #E6B17E 0%, #F0C4A3 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #F0C4A3 0%, #E6B17E 100%)',
                      },
                      minWidth: '150px'
                    }}
                  >
                    View on GitHub
                  </Button>
                )}
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 80% 80%, rgba(230, 177, 126, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 20% 20%, rgba(45, 48, 71, 0.1) 0%, transparent 50%)
          `,
        },
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

      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #E6B17E 0%, #F0C4A3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Projects
        </Typography>

        <Box sx={{ width: '100%', mb: 4 }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            centered
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#E6B17E',
              },
              '& .MuiTab-root': {
                color: '#FFFFFF',
                '&.Mui-selected': {
                  color: '#E6B17E',
                },
              },
            }}
          >
            <Tab label="Development" />
            <Tab label="UI/UX Design" />
          </Tabs>
        </Box>

        {selectedTab === 0 ? renderProjects(developmentProjects) : renderProjects(uiuxProjects, true)}
      </Container>
    </Box>
  )
}

export default Projects 