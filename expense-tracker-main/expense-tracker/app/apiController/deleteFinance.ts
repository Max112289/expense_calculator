import axios from 'axios';

export const deleteFinance = async (id: string, token: string) => {
    const url = `http://localhost:1337/api/finances/${id}`;
    return axios.delete(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export default deleteFinance;
