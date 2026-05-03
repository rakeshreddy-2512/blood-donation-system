import { useEffect, useState } from 'react';
import api from '../services/api';

export default function EmergencyRequests() {
  const [requests, setRequests] = useState([]);
  const [form, setForm] = useState({ patientName: '', hospital: '', bloodGroup: '', unitsNeeded: 1, contactName: '', contactPhone: '', location: '' });

  const load = async () => setRequests((await api.get('/emergency')).data);
  useEffect(() => { load(); }, []);

  const submit = async (e) => {
    e.preventDefault();
    await api.post('/emergency', form);
    setForm({ patientName: '', hospital: '', bloodGroup: '', unitsNeeded: 1, contactName: '', contactPhone: '', location: '' });
    load();
  };

  return <section className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6"><form onSubmit={submit} className="bg-white p-4 rounded shadow space-y-2"><h2 className="text-xl font-bold">Create Emergency Request</h2>{Object.keys(form).map((k) => <input key={k} className="w-full border p-2" placeholder={k} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />)}<button className="bg-red-600 text-white px-4 py-2 rounded">Submit</button></form><div><h2 className="text-xl font-bold mb-2">Active Requests</h2>{requests.map((r) => <div key={r._id} className="bg-white p-3 rounded shadow mb-2"><p className="font-semibold">{r.patientName} ({r.bloodGroup})</p><p>{r.hospital} - {r.location}</p><p>Status: {r.status}</p></div>)}</div></section>;
}
