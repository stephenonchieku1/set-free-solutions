import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {  FaTwitter, FaInstagram, FaGithubAlt, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="min-h-[10vh] w-full p-8 flex items-center justify-center">
     
      <Box>
      <Typography color="text.secondary" variant="body2" sx={{ mb: 4 }}>
        Copyright © {new Date().getFullYear()} SET FREE SOLUTIONS .
      </Typography>
      <Typography>
        <div>
         <ul className='footer-social-links flex flex-c '>
                    <li>
                        <a href = "https://github.com/stephenonchieku1" className='text-white'>
                            <FaGithubAlt/>
                        </a>
                    </li>
                    <li>
                        <a href = "https://twitter.com/StephenOnchieku" className='text-white'>
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href = "https://www.instagram.com/xtrevasone/" className='text-white'>
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href = "https://www.linkedin.com/in/stephen-onchieku-70297121b/" className='text-white'>
                            <FaLinkedin />
                        </a>
                    </li>
                 
                 
                </ul>
                </div> hi
      </Typography>
      <Typography>
        Developed by Stephen onchieku

      </Typography>
      </Box>

    </footer>
  );
};

export default Footer;