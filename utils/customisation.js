
const defaultImagePath = ''
const defaultColorScheme = ''
const defaultStyles = {}
const defaultContent = {}



const colorSchemes = {
    'subdomain1.example.com': {
      primaryColor: '#ff0000', 
      secondaryColor: '#ffffff', 
    },
    'subdomain2.example.com': {
      primaryColor: '#00ff00', // Green
      secondaryColor: '#000000', // Black
    },
  };
  
  // Get color scheme based on the current subdomain
  const getColorScheme = (subdomain) => {
    return colorSchemes[subdomain] || defaultColorScheme; // defaultColorScheme is a fallback if subdomain not found
  };

  // Define content for each subdomain
const content = {
    'subdomain1.example.com': {
      heading: 'Welcome to Subdomain 1',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    'subdomain2.example.com': {
      heading: 'Welcome to Subdomain 2',
      paragraph: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  
  };
  
  
  const getContent = (subdomain) => {
    return content[subdomain] || defaultContent; // defaultContent is a fallback if subdomain not found
  };
  
  // Define image paths for each subdomain
const imagePaths = {
    'subdomain1.example.com': '/img/subdomain1-image.jpg',
    'subdomain2.example.com': '/img/subdomain2-image.jpg',
    // Add more subdomains and image paths as needed
  };
  
  // Get image path based on the current subdomain
  const getImagePath = (subdomain) => {
    return imagePaths[subdomain] || defaultImagePath; // defaultImagePath is a fallback if subdomain not found
  };
  
  // Define styles for each subdomain
const styles = {
    'subdomain1.example.com': {
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      // Add more styles as needed
    },
    'subdomain2.example.com': {
      fontFamily: 'Verdana, sans-serif',
      fontSize: '18px',
      // Add more styles as needed
    },
    
  };
  
  // Get styles based on the current subdomain
  const getStyles = (subdomain) => {
    return styles[subdomain] || defaultStyles; // defaultStyles is a fallback if subdomain not found
  };
  


  export {
    getColorScheme,
    getContent,
    getImagePath,
    getStyles,
  }