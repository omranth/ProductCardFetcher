import { Container, Typography, Box, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'primary.main',
        color: 'white',
        py: 3,
        mt: 'auto',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1">
          © {new Date().getFullYear()} / {new Date().getUTCMonth()} {` / `} {new Date().getDate()} My Website. All rights reserved.
        </Typography>

        <Typography variant="body2" color="inherit">
          <Link href="#" color="inherit" underline="hover">
            Privacy Policy
          </Link>
          {' | '}
          <Link href="#" color="inherit" underline="hover">
            Terms of Service
          </Link>
          {' | '}
          <Link href="#" color="inherit" underline="hover">
            Contact Us
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
