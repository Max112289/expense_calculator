
import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { User } from '../types/User';
import { getUser } from '../apiController/getUser';
import { useAuth } from './AuthContext';
import { getFinancesByUserId } from '../apiController/getFinance';
  
interface UserContextType {
    user: User | null;
    setUser: (user: User) => void;
    handleUpdateFinance: () => void;
}
  
export const UserContext = createContext<UserContextType | undefined>(undefined);

const initialUser: User = {
    id: 0,
    documentId: '',
    firstName: '',
    lastName: '',
    username: '',
    email: 'ivan@example.com',
    photo: '',
    paymentDetails: []
  };
  
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const { token } = useAuth();

    useEffect(() => {
        setUser(initialUser);
        if (token) {
            getUser(token).then((response) => {
                console.log(response);
                setUser({
                    ...initialUser,
                    firstName: response.username,
                    id: response.id,
                    documentId: response.documentId,
                })
            });
        }
    }, [token])

    useEffect(() => {
        if (user?.id && token && user.documentId) {
            getFinancesByUserId(user.id, token).then((response) => {
                console.log(user.id)
                setUser(prev => prev ? { ...prev, bills: response.data } : prev);
            })
        }
    }, [user?.documentId]);

    const handleUpdateFinance = () => {
        if (!user?.id || !token) return;
        getFinancesByUserId(user.id, token).then((response) => {
            console.log(response);
            setUser(prev => prev ? { ...prev, bills: response.data } : prev);
        });
    }
  
    return (
        <UserContext.Provider value={{ user, setUser, handleUpdateFinance }}>
            {children}
        </UserContext.Provider>
    );
};