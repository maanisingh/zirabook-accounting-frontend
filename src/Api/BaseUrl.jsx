// Use environment variable for API URL, fallback to production URL
const BaseUrl = import.meta.env.VITE_API_URL || 'https://backend-api-production-dd10.up.railway.app/api/v1';

export default BaseUrl;