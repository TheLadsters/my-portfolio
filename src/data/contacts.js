import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


const iconStyle = {
    fontSize: 75,
  };

const contacts = [
{
    link: 'https://www.instagram.com/itsyaboiblaise/',
    social: 'Instagram',
    icon: <InstagramIcon style={iconStyle} />,
    name: 'itsyaboiblaise'
},
    {
    link: 'https://www.facebook.com/shkamberblaise/',
    social: 'Facebook',
    icon: <FacebookIcon style={iconStyle} />,
    name: 'Jerald Blaise Magsipoc'
},
{
    link: 'https://www.linkedin.com/in/jerald-blaise-magsipoc-b0800027b/',
    social: 'LinkedIn',
    icon: <LinkedInIcon style={iconStyle} />,
    name: 'Jerald Blaise Magsipoc'
},
{
    link: 'https://github.com/TheLadsters',
    social: 'Github',
    icon: <GitHubIcon style={iconStyle} />,
    name: 'TheLadsters'
},
];

export default contacts;