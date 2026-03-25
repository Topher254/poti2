import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email, password) => {
    // Hardcoded admin credentials
    if (email === 'raphaelsarota@gmail.com' && password === 'Topher254') {
      localStorage.setItem('admin', JSON.stringify({ email }));
      setUser({ email });
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('admin');
    setUser(null);
  };

  const checkAuth = () => {
    const stored = localStorage.getItem('admin');
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);
  };

  React.useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};