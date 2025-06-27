  
export const CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5169',
  DEFAULT_TIMEOUT: 30000,
  TOKEN_KEYS: {
    ACCESS: 'access_token',
    REFRESH: 'refresh_token'
  },
  ENDPOINTS: {
    REFRESH: '/auth/refresh'
  }
} as const; 