

import React from 'react';
import { getColorScheme, getContent, getImagePath, getStyles } from '../utils/customization';

const LandingPage = ({ subdomain }) => {
  const colorScheme = getColorScheme(subdomain);
  const { heading, paragraph } = getContent(subdomain);
  const imagePath = getImagePath(subdomain);
  const styles = getStyles(subdomain);

  return (
    <div style={{ backgroundColor: colorScheme.primaryColor }}>
      <h1 style={{ color: colorScheme.secondaryColor, ...styles }}>
        {heading}
      </h1>
      <p style={{ color: colorScheme.secondaryColor, ...styles }}>
        {paragraph}
      </p>
      <img src={imagePath} alt="Subdomain Image" />
    </div>
  );
}

export default LandingPage;
