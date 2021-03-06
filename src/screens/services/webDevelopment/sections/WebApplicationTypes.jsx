import React from 'react';
import SectionApplicationTypes from '#Components/SectionApplicationTypes';
import { webApplicationTypes } from '#constants/services/webDevelopment';

const MobileApplicationTypes = () => (
  <SectionApplicationTypes
    sectionTitle={webApplicationTypes.title}
    typesApplication={webApplicationTypes.typesApplication}
    image={webApplicationTypes.image}
    imageSizes={webApplicationTypes.imageSizes}
    backgroundPrimayLight={webApplicationTypes.backgroundPrimayLight}
  />
);

export default MobileApplicationTypes;
