import {
  Box,
  Typography,
  Container,
  makeStyles,
  Button,
} from '@material-ui/core';
import Image from 'next/image';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';

// TODO remove styles & depencies
const useStyles = makeStyles((theme) => ({
  detailsContent: {
    paddingTop: theme.spacing(8),
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  description: {
    padding: `${theme.spacing(4)}px 0`,
    color: theme.palette.common.black,
  },
  actionButton: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.secondary.main,
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'center',
    padding: `${theme.spacing(4)}px 0`,
  },
  image: {
    width: 288,
    height: 235,
    position: 'relative',
  },
  [theme.breakpoints.up('sm')]: {
    detailsContent: {
      paddingTop: theme.spacing(12),
    },
    containerImage: {
      padding: `${theme.spacing(5)}px 0`,
    },
    image: {
      width: 544,
      height: 449,
    },
  },
  [theme.breakpoints.up('lg')]: {
    container: {
      display: 'flex',
    },
    detailsContent: {
      flex: 5,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: 0,
      paddingRight: theme.spacing(2),
    },
    containerImage: {
      flex: 5,
      padding: `${theme.spacing(8)}px 0`,
    },
    image: {
      width: 504,
      height: 382,
    },
  },
}));
const Banner = () => {
  const classes = useStyles();
  return (
    <Box component="section" position="relative" bgcolor="secondary.light">
      <BackgroundImage
        image="/assets/images/figures/webDevelopment/bloque2.png"
        height={511}
      />
      <CustomContainer>
        <Box className={classes.container}>
          <Box component="article" className={classes.detailsContent}>
            <Typography variant="h2" className={classes.title}>
              Aumenta la visibilidad de tu empresa
            </Typography>
            <Typography variant="body1" className={classes.description}>
              Una buena presencia en línea ayudará a conseguir más clientes
              potenciales. Nuestro trabajo es crear páginas web con diseños
              atractivos y funcionales. Una página web permite que todo el mundo
              te encuentre y sepa qué es lo que haces y ofreces a tus
              consumidores.
            </Typography>
          </Box>
          <Box className={classes.containerImage}>
            <Box component="figure" className={classes.image}>
              <Image
                quality={100}
                priority
                src="/assets/images/aumenta-la-visibilidad-de-tu-empresa.png"
                layout="fill"
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Banner;
