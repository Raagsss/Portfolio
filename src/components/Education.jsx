import { Box, Container, Typography, Paper, Grid, Chip, Divider } from '@mui/material'
import { motion } from 'framer-motion'
import { FaUniversity, FaSchool, FaTrophy, FaAward, FaMedal, FaCertificate } from 'react-icons/fa'
import { educationData } from '../data/educationData'

const Education = () => {
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

  return (
    <Box
      id="education"
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 100%)',
        color: '#FFFFFF',
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
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        sx={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230, 177, 126, 0.1) 0%, transparent 70%)',
          top: '10%',
          left: '5%',
          zIndex: 0,
        }}
      />
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        sx={{
          position: 'absolute',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45, 48, 71, 0.1) 0%, transparent 70%)',
          bottom: '10%',
          right: '5%',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              background: 'linear-gradient(135deg, #E6B17E 0%, #F0C4A3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1,
            }}
          >
            Education
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#FFFFFF',
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.1rem' },
              opacity: 0.85,
              mb: 0,
            }}
          >
            My academic journey and achievements
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {educationData.map((education, index) => (
            <Grid 
              item 
              xs={12} 
              sm={10}
              md={6} 
              key={index} 
              sx={{ 
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ height: '100%', width: '100%' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    background: 'linear-gradient(135deg, rgba(230, 177, 126, 0.1) 0%, rgba(240, 196, 163, 0.1) 100%)',
                    borderRadius: '16px',
                    p: { xs: 2, md: 3 },
                    height: '100%',
                    border: '1px solid rgba(230, 177, 126, 0.2)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 20px rgba(230, 177, 126, 0.2)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #E6B17E 0%, #F0C4A3 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                      }}
                    >
                      {education.school === 'Bennett University' ? (
                        <FaUniversity size={20} color="#fff" />
                      ) : (
                        <FaSchool size={20} color="#fff" />
                      )}
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#E6B17E',
                          fontWeight: 600,
                          mb: 1,
                          fontSize: { xs: '1.2rem', md: '1.3rem' },
                        }}
                      >
                        {education.school}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: '#FFFFFF',
                          fontWeight: 500,
                          fontSize: { xs: '1rem', md: '1.1rem' },
                        }}
                      >
                        {education.school === 'Bennett University' ? education.degree : 'Secondary Education'}
                      </Typography>
                    </Box>
                  </Box>

                  {education.school === 'Bennett University' ? (
                    <Box sx={{ mb: 2 }}>
                      <Grid container spacing={1} justifyContent="center">
                        {education.specialization.map((spec, specIndex) => (
                          <Grid item xs={12} sm={6} key={specIndex}>
                            <Paper
                              elevation={0}
                              sx={{
                                p: 1.5,
                                borderRadius: '12px',
                                background: 'rgba(230, 177, 126, 0.05)',
                                border: '1px solid rgba(230, 177, 126, 0.2)',
                                textAlign: 'center',
                              }}
                            >
                              <Typography
                                variant="subtitle2"
                                sx={{
                                  fontWeight: 600,
                                  color: '#E6B17E',
                                  mb: 0.5,
                                  fontSize: '0.8rem',
                                  textAlign: 'center',
                                }}
                              >
                                {spec.name}
                              </Typography>
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
                                <Chip
                                  label={`Duration: ${spec.duration}`}
                                  size="small"
                                  sx={{
                                    background: 'rgba(45, 48, 71, 0.1)',
                                    color: '#FFFFFF',
                                    fontWeight: 500,
                                    height: '20px',
                                    '& .MuiChip-label': {
                                      px: 1,
                                      fontSize: '0.7rem',
                                    },
                                  }}
                                />
                                <Chip
                                  label={`GPA: ${spec.score}`}
                                  size="small"
                                  sx={{
                                    background: 'rgba(230, 177, 126, 0.1)',
                                    color: '#FFFFFF',
                                    fontWeight: 500,
                                    height: '20px',
                                    '& .MuiChip-label': {
                                      px: 1,
                                      fontSize: '0.7rem',
                                    },
                                  }}
                                />
                              </Box>
                            </Paper>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  ) : (
                    <Box sx={{ mb: 2 }}>
                      <Grid container spacing={1} justifyContent="center">
                        {education.schooling.map((level, levelIndex) => (
                          <Grid item xs={12} sm={6} key={levelIndex}>
                            <Paper
                              elevation={0}
                              sx={{
                                p: 1.5,
                                borderRadius: '12px',
                                background: 'rgba(230, 177, 126, 0.05)',
                                border: '1px solid rgba(230, 177, 126, 0.2)',
                                textAlign: 'center',
                              }}
                            >
                              <Typography
                                variant="subtitle2"
                                sx={{
                                  fontWeight: 600,
                                  color: '#E6B17E',
                                  mb: 0.5,
                                  fontSize: '0.8rem',
                                  textAlign: 'center',
                                }}
                              >
                                {level.level}
                              </Typography>
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
                                {level.branch && (
                                  <Chip
                                    label={`Branch: ${level.branch}`}
                                    size="small"
                                    sx={{
                                      background: 'rgba(230, 177, 126, 0.1)',
                                      color: '#FFFFFF',
                                      fontWeight: 500,
                                      height: '20px',
                                      '& .MuiChip-label': {
                                        px: 1,
                                        fontSize: '0.7rem',
                                      },
                                    }}
                                  />
                                )}
                                <Chip
                                  label={`Duration: ${level.duration}`}
                                  size="small"
                                  sx={{
                                    background: 'rgba(45, 48, 71, 0.1)',
                                    color: '#FFFFFF',
                                    fontWeight: 500,
                                    height: '20px',
                                    '& .MuiChip-label': {
                                      px: 1,
                                      fontSize: '0.7rem',
                                    },
                                  }}
                                />
                                <Chip
                                  label={`Score: ${level.score}`}
                                  size="small"
                                  sx={{
                                    background: 'rgba(230, 177, 126, 0.1)',
                                    color: '#FFFFFF',
                                    fontWeight: 500,
                                    height: '20px',
                                    '& .MuiChip-label': {
                                      px: 1,
                                      fontSize: '0.7rem',
                                    },
                                  }}
                                />
                              </Box>
                            </Paper>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  )}

                  {education.achievements && education.achievements.length > 0 && (
                    <Box sx={{ mt: 3, textAlign: 'left', px: { xs: 1, md: 2 } }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: '#E6B17E',
                          fontWeight: 600,
                          mb: 2,
                          fontSize: { xs: '1.1rem', md: '1.2rem' },
                          textAlign: 'left',
                        }}
                      >
                        Achievements
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {education.achievements.map((achievement, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1.5,
                            }}
                          >
                            <Box
                              sx={{
                                minWidth: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#E6B17E',
                                flexShrink: 0,
                              }}
                            >
                              {idx === 0 ? <FaTrophy size={16} /> :
                               idx === 1 ? <FaCertificate size={16} /> :
                               idx === 2 ? <FaAward size={16} /> :
                               <FaMedal size={16} />}
                            </Box>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontSize: { xs: '0.875rem', md: '0.9rem' },
                                lineHeight: 1.4,
                                flex: 1,
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              {achievement}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  )}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Education 