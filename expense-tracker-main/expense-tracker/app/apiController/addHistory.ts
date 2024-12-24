import axios from 'axios';

// Определяем типы данных для запроса и ответа
export interface CreateFinanceHistoryRequest {
  date: string;      // Дата операции
  amount: number;    // Сумма операции
  type: string;      // Тип операции (например, "Покупка еды")
  finance: string;   // ID связанной финансы
}

interface FinanceHistoryResponse {
  id: string;
  attributes: {
    date: string;
    amount: number;
    type: string;
    finance: string;
  };
}

// Функция для создания финансовой истории
export const createFinanceHistory = async (
  token: string,
  data: CreateFinanceHistoryRequest
): Promise<FinanceHistoryResponse> => {
  try {
    const response = await axios.post('http://localhost:1337/api/finance-histories', { data }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data; // Ответ от API
  } catch (error) {
    console.error('Error creating finance history:', error);
    throw error;
  }
};

export default createFinanceHistory;
