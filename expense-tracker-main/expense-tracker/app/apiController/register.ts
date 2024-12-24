import { apiClient } from "./apiClient";

// POST /api/auth/register
export const registerUser = async (email: string, password: string, username: string) => {
    try {
      const response = await apiClient.post('/auth/local/register', {
        email,
        password,
        username
      });
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };
  