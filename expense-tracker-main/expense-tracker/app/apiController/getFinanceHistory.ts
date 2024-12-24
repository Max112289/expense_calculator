import { apiClient } from "./apiClient";

// GET /api/finance-histories?filters[finance][id][$eq]=5
export const getFinanceHistoriesByFinanceId = async (financeId: number, token: string) => {
    try {
      const response = await apiClient.get('/finance-histories', {
        params: {
          'filters[finance][id][$eq]': financeId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching finance histories:', error);
      throw error;
    }
  };
  