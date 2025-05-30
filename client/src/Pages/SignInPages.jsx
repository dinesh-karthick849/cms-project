 // src/Pages/SignInPages.jsx
import React, { useContext, useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function SignInPages() {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(form);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message);
    }
  };

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className="w-full mb-4 p-3 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
          className="w-full mb-6 p-3 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded">
          Sign In
        </button>
      </form>
    </div>
  );
}


