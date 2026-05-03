import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="bg-red-700 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="font-bold">Blood Donation Management</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/donors">Donors</Link>
          <Link to="/emergency">Emergency</Link>
          {user?.role === 'admin' && <Link to="/admin">Admin</Link>}
          {user ? <button onClick={logout}>Logout</button> : <Link to="/login">Login</Link>}
        </div>
      </div>
    </nav>
  );
}
