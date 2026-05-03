import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const submit = async (e) => {
    e.preventDefault();
    await login(form.email, form.password);
    nav('/');
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow space-y-3">
      <h2 className="text-xl font-semibold">Login</h2>
      <input className="w-full border p-2" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="w-full border p-2" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button className="bg-red-600 text-white px-4 py-2 rounded">Sign In</button>
    </form>
  );
}
