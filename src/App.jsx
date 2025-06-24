import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import CodingProfiles from './components/CodingProfiles'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#E6B17E',
      light: '#F0C4A3',
      dark: '#D49B5F',
    },
    secondary: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F0',
    },
    text: {
      primary: '#000000',
      secondary: '#333333',
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '8px 24px',
        },
        contained: {
          background: 'linear-gradient(135deg, #E6B17E 0%, #F0C4A3 100%)',
          color: '#000000',
          '&:hover': {
            background: 'linear-gradient(135deg, #F0C4A3 0%, #E6B17E 100%)',
            boxShadow: '0 5px 15px rgba(230, 177, 126, 0.3)',
          },
        },
        outlined: {
          borderColor: '#E6B17E',
          color: '#E6B17E',
          '&:hover': {
            borderColor: '#F0C4A3',
            background: 'rgba(230, 177, 126, 0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Education />
          <Skills />
          <CodingProfiles />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
