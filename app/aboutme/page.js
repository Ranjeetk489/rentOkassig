

import React from 'react';
import LandingPage from '@/components/LandingPage';
import { headers } from 'next/headers';

const IndexPage = () => {
  // get subdomain
  const subdomain = headers().get('x-forwarded-host');

  return (
    <div>
       <LandingPage subdomain={subdomain} /> 
      
    </div>
  );
}

export default IndexPage;
