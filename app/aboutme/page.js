


import React from 'react';
import { useRouter } from 'next/router';
import LandingPage from '@/components/LandingPage';

const IndexPage = () => {
  const router = useRouter();
  const { subdomain } = router.query;

  return (
    <div>
       <LandingPage subdomain={subdomain} /> 
      
    </div>
  );
}

export default IndexPage;
