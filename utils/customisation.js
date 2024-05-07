
const defaultImagePath = ''
const defaultColorScheme = ''
const defaultStyles = {}
const defaultContent = {}



const colorSchemes = {
  'abc.anydomain.com:3000': {
    primaryColor: '#ff0000',
    secondaryColor: '#ffffff',
  },
  'localhost:3000': {
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
  'abc.localhost:3000': {
    heading: 'Welcome to Subdomain 1',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'cardData': {
      'Total Revenue': {
        value: "$50,000",
        subtext: "+50.1% from last month"
      },
      'Subscriptions': {
        value: '+700',
        subtext: "+180.1% from last month"
      },
      'Sales': {
        value: "+16,239",
        subtext: "+19% from last month"
      },
      'Active Now': {
        value: "389",
        subtext: "-9.68% from last month"
      }
    }
  },
  'abc1.localhost:3000': {
    heading: 'Welcome to Subdomain 2',
    paragraph: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'cardData': {
      'Total Revenue': {
        value: "$10,000",
        subtext: "+20.1% from last month"
      },
      'Subscriptions': {
        value: '+500',
        subtext: "+180.1% from last month"
      },
      'Sales': {
        value: "+12,239",
        subtext: "+19% from last month"
      },
      'Active Now': {
        value: "385",
        subtext: "-9.63% from last month"
      }
    }
  },
  'localhost:3000': {
    heading: 'Welcome to Subdomain 2',
    paragraph: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'cardData': {
      'Total Revenue': {
        value: "$10,000",
        subtext: "+20.1% from last month"
      },
      'Subscriptions': {
        value: '+500',
        subtext: "+180.1% from last month"
      },
      'Sales': {
        value: "+12,239",
        subtext: "+19% from last month"
      },
      'Active Now': {
        value: "385",
        subtext: "-9.63% from last month"
      }
    }
  }
};


const getContent = (subdomain) => {
  return content[subdomain] || defaultContent; // defaultContent is a fallback if subdomain not found
};

// Define image paths for each subdomain
const imagePaths = {
  'abc1.localhost:3000': 'https://plus.unsplash.com/premium_photo-1668708604243-8bf83328e1a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'abc.localhost:3000': 'https://plus.unsplash.com/premium_photo-1669380425625-864e482ecb12?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',


};

// Get image path based on the current subdomain
const getImagePath = (subdomain) => {
  return imagePaths[subdomain] || defaultImagePath; // defaultImagePath is a fallback if subdomain not found
};

// Define styles for each subdomain
const styles = {
  'abc.localhost:3000': {
    "--background": "0 0% 100%",
    "--foreground": "222.2 84% 4.9%",

    "--card": "0 0% 100%",
    "--card-foreground": "222.2 84% 4.9%",

    "--popover": "0 0% 100%",
    "--popover-foreground": "222.2 84% 4.9%",

    "--primary": "222.2 47.4% 11.2%",
    "--primary-foreground": "210 40% 98%",

    "--secondary": "210 40% 96.1%",
    "--secondary-foreground": "222.2 47.4% 11.2%",

    "--muted": "210 40% 96.1%",
    "--muted-foreground": "215.4 16.3% 46.9%",

    "--accent": "210 40% 96.1%",
    "--accent-foreground": "222.2 47.4% 11.2%",

    "--destructive": "0 84.2% 60.2%",
    "--destructive-foreground": "210 40% 98%",

    "--border": "214.3 31.8% 91.4%",
    "--input": "214.3 31.8% 91.4%",
    "--ring": "222.2 84% 4.9%",

    "--radius": "0.5rem",
  },
  'abc1.localhost:3000': {
    '--background': '0 0% 100%',
    '--foreground': '240 10% 3.9%',
    '--card': '0 0% 100%',
    '--card-foreground': '240 10% 3.9%',
    '--popover': '0 0% 100%',
    '--popover-foreground': '240 10% 3.9%',
    '--primary': '142.1 76.2% 36.3%',
    '--primary-foreground': '355.7 100% 97.3%',
    '--secondary': '240 4.8% 95.9%',
    '--secondary-foreground': '240 5.9% 10%',
    '--muted': '240 4.8% 95.9%',
    '--muted-foreground': '240 3.8% 46.1%',
    '--accent': '240 4.8% 95.9%',
    '--accent-foreground': '240 5.9% 10%',
    '--destructive': '0 84.2% 60.2%',
    '--destructive-foreground': '0 0% 98%',
    '--border': '240 5.9% 90%',
    '--input': '240 5.9% 90%',
    '--ring': '142.1 76.2% 36.3%',
    '--radius': '0.5rem',
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