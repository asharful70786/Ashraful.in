import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';  // ✅ import context

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { checkAuth } = useAuth();  // ✅ pull checkAuth function

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('https://backend.ashraful.in/login-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        await checkAuth();  // ✅ after login, update auth context
        navigate('/admin');
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong');
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-10">Admin Login</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="input input-bordered w-full" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="input input-bordered w-full" required />
        <button type="submit" className="btn btn-primary w-full">Login</button>
        {error && <p className="text-red-500 font-semibold">{error}</p>}
      </form>
    </div>
  );
}
