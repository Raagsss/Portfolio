import { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material'
import { motion } from 'framer-motion'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const navLinks = ['home', 'education', 'skills', 'projects', 'contact'];

  const drawer = (
    <Box
      sx={{ width: 250, background: 'rgba(0, 0, 0, 0.9)', height: '100%' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((text) => (
          <ListItem button key={text} component="a" href={`#${text}`}>
            <ListItemText 
              primary={text} 
              sx={{ 
                textTransform: 'capitalize',
                color: '#E6B17E',
                textAlign: 'center'
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(230, 177, 126, 0.2)' : 'none',
        transition: 'all 0.3s ease',
        width: { xs: '100%', md: '1100px' },
        left: { xs: 0, md: '50%' },
        transform: { xs: 'none', md: 'translateX(-50%)' },
        borderRadius: scrolled ? { xs: 0, md: '0 0 10px 10px' } : 'none',
        marginTop: scrolled ? { xs: 0, md: '10px' } : '0',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #E6B17E 0%, #F0C4A3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.5rem',
            }}
          >
            RR
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5 }}>
            {navLinks.map((item) => (
              <Button
                key={item}
                href={`#${item}`}
                sx={{
                  color: scrolled ? '#E6B17E' : '#E6B17E',
                  textTransform: 'capitalize',
                  position: 'relative',
                  fontSize: '0.85rem',
                  px: 1.5,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    background: 'linear-gradient(135deg, #E6B17E 0%, #F0C4A3 100%)',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover': {
                    color: '#F0C4A3',
                    '&::after': {
                      width: '100%',
                    },
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#E6B17E' }}
          >
            <FaBars />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              '& .MuiDrawer-paper': {
                background: 'transparent'
              }
            }}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar 