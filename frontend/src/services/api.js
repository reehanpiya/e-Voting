import axios from 'axios';

/**
 * Centralized Axios API Client
 * Mengikuti Aturan Strict Code Style dari TASKS.md
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 15000,
});

// Request Interceptor: Otomatis menyematkan token JWT / Sanctum jika ada
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Format error terpusat
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const customError = {
      status: error.response?.status || 500,
      message: error.response?.data?.message || 'Terjadi kesalahan pada server.',
      errors: error.response?.data?.errors || null,
    };

    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
      // Opsional: Redirect ke halaman login admin jika unauthorized
    }

    return Promise.reject(customError);
  }
);

export default api;
