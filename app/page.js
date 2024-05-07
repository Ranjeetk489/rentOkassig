// pages/index.js
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { getColorScheme, getContent, getImagePath, getStyles } from '../utils/customisation';

const LandingPage = () => {
  const router = useRouter();
  const { subdomain } = router.query || {}

  // Retrieve customizations based on the current subdomain
  const colorScheme = getColorScheme(subdomain);
  const content = getContent(subdomain);
  const imagePath = getImagePath(subdomain);
  const styles = getStyles(subdomain);

  return (
    <div style={{ backgroundColor: colorScheme.primaryColor, ...styles }}>
      <h1 style={{ color: colorScheme.secondaryColor }}>{content.heading}</h1>
      <p style={{ color: colorScheme.secondaryColor }}>{content.paragraph}</p>
      <img src={imagePath} alt="Subdomain Image" />
    </div>
  );
}

export default LandingPage;
