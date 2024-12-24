import { apiClient } from "./apiClient";

export const createFinance = async (name: string, userId: number, token: string) => {
    try {
      const response = await apiClient.post(
        '/finances',
        {
            data: {
                name,
                users_permissions_user: userId,
            }
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };