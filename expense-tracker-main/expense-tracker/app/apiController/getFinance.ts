import { apiClient } from "./apiClient";

// GET /api/finances?filters[users_permissions_user][id]=1
export const getFinancesByUserId = async (userId: number, token: string) => {
    try {
      const response = await apiClient.get('/finances', {
        params: {
          'filters[users_permissions_user][id]': userId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching finances:', error);
      throw error;
    }
  };
  