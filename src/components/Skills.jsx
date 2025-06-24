import { Box, Container, Typography, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { 
  FaCode, FaJs, FaHtml5, FaCss3, FaPython, FaTasks, FaFlask, FaJava, FaDatabase
} from 'react-icons/fa'
import { 
  SiFigma, SiVscodium, SiIntellijidea, SiAdobexd, SiCplusplus, SiFirebase, SiGithub, SiAndroid, SiJira, SiSketch
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages and Frameworks',
      icon: <FaCode size={24} color="#fff" />,
      skills: [
        
        { name: 'JavaScript', icon: <FaJs size={24} /> },
        { name: 'HTML5', icon: <FaHtml5 size={24} /> },
        { name: 'CSS3', icon: <FaCss3 size={24} /> },
        { name: 'Python', icon: <FaPython size={24} /> },
        { name: 'Scrum', icon: <FaTasks size={24} /> },
        { name: 'Flask', icon: <FaFlask size={24} /> },
        { name: 'C++', icon: <SiCplusplus size={24} /> },
        { name: 'Java', icon: <FaJava size={24} /> },    
      ],
    },
    {
      title: 'Tools and Platforms',
      icon: <FaDatabase size={24} color="#fff" />,
      skills: [
        
        { name: 'GitHub', icon: <SiGithub size={24} /> },
        { name: 'Jira', icon: <SiJira size={24} /> },
        { name: 'Firebase', icon: <SiFirebase size={24} /> },
        { name: 'Figma', icon: <SiFigma size={24} /> },
        { name: 'Sketch', icon: <SiSketch size={24} /> },
        { name: 'Android Studio', icon: <SiAndroid size={24} /> },
        { name: 'Adobe Xd', icon: <SiAdobexd size={24} /> },
        { name: 'VsCode', icon: <SiVscodium size={24} /> },
        { name: 'IntelliJ IDEA', icon: <SiIntellijidea size={24} /> },
      ],
    },
    
  ]

  // Create duplicated arrays for seamless scrolling
  const duplicatedSkills = skillCategories.map(category => ({
    ...category,
    skills: [...category.skills, ...category.skills, ...category.skills],
  }))

  return (
    <Box
      id="skills"
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
              mb: 2,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #E6B17E 0%, #F0C4A3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Skills
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: '#FFFFFF',
              fontWeight: 400,
              mb: 4,
              mt: 0,
              textAlign: 'center',
              display: 'block',
            }}
          >
            Design tools and technologies I work with
          </Typography>
        </Box>

        <Box sx={{ overflow: 'hidden', mb: 4 }}>
          {duplicatedSkills.map((category, categoryIndex) => (
            <Box key={categoryIndex} sx={{ mb: 6 }}>
              <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <motion.div
                  animate={{
                    x: categoryIndex % 2 === 0 ? [0, -1000] : [0, 1000],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30,
                      ease: "linear",
                    },
                  }}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    justifyContent: 'center',
                  }}
                >
                  {category.skills.map((skill, index) => (
                    <Paper
                      key={index}
                      elevation={0}
                      sx={{
                        minWidth: '160px',
                        height: '140px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 2,
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, rgba(230, 177, 126, 0.1) 0%, rgba(240, 196, 163, 0.1) 100%)',
                        border: '1px solid rgba(230, 177, 126, 0.2)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 8px 20px rgba(230, 177, 126, 0.2)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          color: '#E6B17E',
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        {skill.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#FFFFFF',
                          fontWeight: 600,
                          mb: 1,
                          fontSize: { xs: '0.875rem', sm: '1rem' }
                        }}
                      >
                        {skill.name}
                      </Typography>
                    </Paper>
                  ))}
                </motion.div>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Skills 