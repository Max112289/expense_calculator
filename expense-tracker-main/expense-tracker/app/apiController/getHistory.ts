import { apiClient } from "./apiClient";

export const getHistory = async (userId: string, token: string) => {
    try {
      const response = await apiClient.get('/finances', {
        params: {
          'filters[user][id][$eq]': userId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };