import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SoftwarePage from './pages/SoftwarePage';
import NetworkingPage from './pages/NetworkingPage';
import BlogPage from './pages/BlogPage';
import PostDetail from './pages/PostDetail';
import Contact from './components/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import PostList from './pages/admin/PostList';
import PostForm from './pages/admin/PostForm';
import ProjectList from './pages/admin/ProjectList';
import ProjectForm from './pages/admin/ProjectForm';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/software" element={<SoftwarePage />} />
              <Route path="/networking" element={<NetworkingPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<PostDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route element={<AdminLayout />}>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/posts" element={<PostList />} />
                <Route path="/admin/posts/new" element={<PostForm />} />
                <Route path="/admin/posts/edit/:id" element={<PostForm />} />
                <Route path="/admin/projects" element={<ProjectList />} />
                <Route path="/admin/projects/new" element={<ProjectForm />} />
                <Route path="/admin/projects/edit/:id" element={<ProjectForm />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;