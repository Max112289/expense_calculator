import { apiClient } from "./apiClient";

// POST /api/auth/login
export const loginUser = async (email: string, password: string) => {
    try {
      const response = await apiClient.post('/auth/local', {
        identifier:email,
        password,
      });
      return response.data; // Обычно возвращает токен JWT
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };
  