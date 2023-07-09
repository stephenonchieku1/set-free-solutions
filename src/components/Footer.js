import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <footer className="min-h-[10vh] w-full p-8 flex items-center justify-center">
     
      <Box>
      <Typography color="text.secondary" variant="body2" sx={{ mb: 4 }}>
        Copyright © {new Date().getFullYear()} SET FREE SOLUTIONS .
      </Typography>
      <Typography>
        Developed by Stephen onchieku

      </Typography>
      </Box>

    </footer>
  );
};

export default Footer;