import { useState, createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Kiểm tra xem user đã đăng nhập trước đó chưa (lấy từ localStorage)
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
