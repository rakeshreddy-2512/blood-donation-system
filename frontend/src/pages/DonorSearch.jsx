import { useEffect, useState } from 'react';
import api from '../services/api';

export default function DonorSearch() {
  const [filters, setFilters] = useState({ bloodGroup: '', location: '' });
  const [donors, setDonors] = useState([]);

  const fetchDonors = async () => {
    const { data } = await api.get('/donors/search', { params: filters });
    setDonors(data);
  };

  useEffect(() => { fetchDonors(); }, []);

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Donor Search</h2>
      <div className="flex gap-3 mb-4">
        <input className="border p-2" placeholder="Blood Group" onChange={(e) => setFilters({ ...filters, bloodGroup: e.target.value })} />
        <input className="border p-2" placeholder="Location" onChange={(e) => setFilters({ ...filters, location: e.target.value })} />
        <button onClick={fetchDonors} className="bg-red-600 text-white px-4 rounded">Search</button>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        {donors.map((d) => <div key={d._id} className="bg-white p-4 rounded shadow"><h3 className="font-semibold">{d.name}</h3><p>{d.bloodGroup} • {d.location}</p><p>{d.phone}</p></div>)}
      </div>
    </section>
  );
}
