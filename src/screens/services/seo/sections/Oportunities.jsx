import React from 'react';
import CallToActionSection from '#Components/CallToActionSection';
import theme from 'theme';

const imageSizes = {
  xs: {
    width: 288,
    height: 235,
  },
  sm: {
    width: 552,
    height: 449,
  },
  md: {
    width: 544,
    height: 443,
  },
  lg: {
    width: 608,
    height: 496,
  },
};

const IncreaseClics = () => (
  <CallToActionSection
    titlePart1="Posiciona tu página web, "
    titlePart2="y genera más oportunidades de negocio"
    description="Genera más tráfico a tu web, impulsa tu marca y conviertete en un referente del mercado."
    image="/assets/images/oportunidades-para-negocio.png"
    backgroundImage="/assets/images/figures/webDevelopment/bloque6.png"
    heightImage={944}
    imageSizes={imageSizes}
    backgroundColor={theme.palette.secondary.fade}
  />
);

export default IncreaseClics;
