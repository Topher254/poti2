import React, { createContext, useState, useContext, useEffect } from 'react';
import API from '../services/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try {
      const res = await API.post('/auth/login', { email, password });
      if (res.data.email) {
        localStorage.setItem('admin', JSON.stringify({ email: res.data.email }));
        setUser({ email: res.data.email });
        return true;
      }
      return false;
    } catch (err) {
      console.error('Login error:', err.response?.data);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('admin');
    setUser(null);
  };

  const checkAuth = () => {
    const stored = localStorage.getItem('admin');
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};