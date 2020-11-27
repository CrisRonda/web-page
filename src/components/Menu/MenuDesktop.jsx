import { makeStyles, Button, Box, Typography, Hidden } from '@material-ui/core';
import Link from 'next/link';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LogoInitgrammers from '#svg/LogoInitgrammers';
import styles from './styles/MenuDesktop';

const useStyles = makeStyles(styles);

const menu = [
  { label: 'Portafolio', href: '#' },
  { label: '¿Quiénes somos?', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contacto', href: '#' },
];

const MenuDesktop = ({ showServices, handleDrawerOpen }) => {
  const classes = useStyles();
  return (
    <Box className={classes.menuApp}>
      <Button className={classes.logo} aria-label="logo Initgrammers">
        <LogoInitgrammers />
      </Button>
      <Box className={classes.sectionMenu}>
        <Button
          aria-label="Servicios"
          aria-controls="menu-servicios"
          aria-haspopup="true"
          onClick={handleDrawerOpen}
          color="inherit"
          endIcon={showServices ? <ExpandLess /> : <ExpandMore />}
        >
          <Typography className={classes.services} variant="body2">
            Servicios
          </Typography>
        </Button>

        {menu.map((item, key) => (
          <Link key={key} href={item.href}>
            <a className={classes.button}>
              <Typography variant="body2">{item.label}</Typography>
            </a>
          </Link>
        ))}
      </Box>
      <Box>
        <Button
          aria-label="Servicios"
          aria-controls="menu-servicios"
          aria-haspopup="true"
          color="inherit"
        >
          <Typography className={classes.services} variant="body2">
            Agenda una ascesoría
          </Typography>
        </Button>
        <Hidden mdDown>
          <Button
            aria-label="Contácatanos"
            aria-haspopup="true"
            onClick={handleDrawerOpen}
            color="primary"
            variant="contained"
            className={classes.contactUs}
          >
            Contáctanos
          </Button>
        </Hidden>
      </Box>
    </Box>
  );
};

export default MenuDesktop;
