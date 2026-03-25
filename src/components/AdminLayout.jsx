import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../context/AuthContext';

const AdminLayout = () => {
  const { user, loading } = useAuth();
  if (loading) return <div className="bg-black text-white p-8">Loading...</div>;
  if (!user) return <Navigate to="/admin/login" />;
  return <Outlet />;
};

export default AdminLayout;