import { Box, Container, Typography, TextField, Button, Snackbar, Alert, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    user_name: '',
    user_message: '',
    user_phone: '',
  })
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    emailjs
      .sendForm(
        "service_akd4j6n",
        "template_p8oo2ha",
        form.current,
        "teGMxfaMSzkswVjEm"
      )
      .then(
        () => {
          setSnackbar({
            open: true,
            message: 'Message sent successfully!',
            severity: 'success',
          })
          setFormData({ user_name: '', user_message: '', user_phone: '' })
        },
        (error) => {
          console.error('EmailJS error:', error);
          setSnackbar({
            open: true,
            message: `Failed to send message: ${error.text || error}`,
            severity: 'error',
          })
        }
      )
  }

  return (
    <Box
      id="contact"
      sx={{
        minHeight: '100vh',
        py: 8,
        position: 'relative',
        background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 100%)',
        color: '#FFFFFF',
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

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: '#E6B17E',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  Get in Touch
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#FFFFFF',
                    my: 2,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  Have a project in mind or just want to say hi? I'd love to hear from you.
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <FaEnvelope color="#E6B17E" />
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '0.9rem', md: '1rem' },
                    }}
                  >
                    hacksterguru@gmail.com
                  </Typography>
                </Box>
                
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  ref={form}
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    p: 4,
                    borderRadius: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(230, 177, 126, 0.2)',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 4,
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #E6B17E 0%, #F0C4A3 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textAlign: 'center',
                    }}
                  >
                    Send Me a Message
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <TextField
                      required
                      fullWidth
                      label="Name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'rgba(230, 177, 126, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(230, 177, 126, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#E6B17E',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                      }}
                    />
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      name="user_message"
                      value={formData.user_message}
                      onChange={handleChange}
                      multiline
                      minRows={4}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'rgba(230, 177, 126, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(230, 177, 126, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#E6B17E',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Phone (optional)"
                      name="user_phone"
                      value={formData.user_phone}
                      onChange={handleChange}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'rgba(230, 177, 126, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(230, 177, 126, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#E6B17E',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                      }}
                    />
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 4,
                      background: 'linear-gradient(135deg, #E6B17E 0%, #F0C4A3 100%)',
                      color: '#000000',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #F0C4A3 0%, #E6B17E 100%)',
                        boxShadow: '0 5px 15px rgba(230, 177, 126, 0.3)',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Contact 