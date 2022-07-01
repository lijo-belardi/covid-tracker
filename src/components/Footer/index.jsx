import React from 'react'
import { useNavigate } from 'react-router-dom'
// MUI Components
import { Container, Grid, Box, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
// Style
import styles from './index.module.scss'
// Others import
import { FooterLinksToPages } from './footerItems'
import { motion } from 'framer-motion'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer>
      <Container>
        <Grid container spacing={5}>

          <Grid item xs={6} sm={6} md={6} lg={6}>
            <Typography
              variant='h5'
              align='center'
              sx={{ borderBottom: '1px solid #FAF8FF', marginBottom: '0.5rem', padding: '0.5rem' }}
            >
              Pages
            </Typography>

            <Box sx={{
              display: 'flex',
              flexDirection: ['column', 'row'],
              alignItems: 'center',
              justifyContent: 'space-around',
              minHeight: ['12rem', '4rem']
            }}>
              {FooterLinksToPages.map((page) => {
                const { pageTitle, url } = page
                return (
                  <Box key={pageTitle}>
                    <Typography
                      onClick={() => navigate(url)}
                      sx={{ borderRadius: '2px', maxWidth: 'fit-content' }}
                      component={motion.div}
                      whileHover={{ backgroundColor: '#FAF8FF', color: '#1a76d3', cursor: 'pointer' }}>
                      {pageTitle}
                    </Typography>
                  </Box>
                )
              })}
            </Box>
          </Grid>

          {/* Contacts's section */}
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <Typography
              variant='h5'
              align='center'
              sx={{ borderBottom: '1px solid #FAF8FF', marginBottom: '0.5rem', padding: '0.5rem' }}
            >
              Contacts
            </Typography>

            <Box sx={{
              display: 'flex',
              flexDirection: ['column', 'row'],
              alignItems: 'center',
              justifyContent: 'space-around',
              minHeight: ['12rem', '4rem'],
            }}>
              <GitHubIcon
                onClick={() => window.open('https://github.com/lijo-belardi', '_blank')}
                sx={{ '&:hover': { cursor: 'pointer', backgroundColor: '#FAF8FF', color: '#1a76d3' } }}
              />

              <LinkedInIcon
                onClick={() => window.open('https://www.linkedin.com/in/lijo-belardi/', '_blank')}
                sx={{ '&:hover': { cursor: 'pointer', backgroundColor: '#FAF8FF', color: '#1a76d3' } }}
              />
              <InstagramIcon
                onClick={() => window.open('https://www.instagram.com/lijo.belardi/', '_blank')}
                sx={{ '&:hover': { cursor: 'pointer', backgroundColor: '#FAF8FF', color: '#1a76d3' } }}
              />
              <FacebookIcon
                onClick={() => window.open('https://www.facebook.com/lijo.belardi.75', '_blank')}
                sx={{ '&:hover': { cursor: 'pointer', backgroundColor: '#FAF8FF', color: '#1a76d3' } }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{
          textAlign: 'center',
          marginTop: '3rem',
          minHeight: '4rem',
          paddingTop: '1rem',
          borderTop: '1px solid #FAF8FF'
        }}>
          <Typography>
            Made by Lijo &reg; {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </footer>
  )
}

export default Footer