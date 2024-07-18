const config = {
    API_URL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api'
  };
  
  console.log('API_URL:', config.API_URL); // Add this line to log the API URL
  
  export default config;
  