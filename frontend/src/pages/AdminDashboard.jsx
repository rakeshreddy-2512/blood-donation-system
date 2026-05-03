import { useEffect, useState } from 'react';
import api from '../services/api';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  useEffect(() => { api.get('/admin/dashboard').then((r) => setStats(r.data)); }, []);

  if (!stats) return <p className="p-6">Loading...</p>;
  return (
    <section className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {Object.entries(stats).map(([key, value]) => <div key={key} className="bg-white p-4 rounded shadow"><p className="text-sm text-slate-500">{key}</p><p className="text-2xl font-bold">{value}</p></div>)}
      </div>
    </section>
  );
}
