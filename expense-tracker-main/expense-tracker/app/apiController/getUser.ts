import { apiClient } from "./apiClient";

export const getUser = async (token: string) => {
    try {
      const response = await apiClient.get(`/users/me?populate=*`, {
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