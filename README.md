# Blood Donation Management System

A full-stack platform that helps communities and hospitals coordinate blood donations efficiently with secure authentication, donor discovery, emergency request management, and an admin analytics dashboard.

## Tech Stack

- **Frontend:** React (Vite), Tailwind CSS, React Router, Axios
- **Backend:** Node.js, Express.js, JWT Authentication
- **Database:** MongoDB (Mongoose ODM)

## Features

- Secure **JWT-based authentication** (register/login)
- **Donor search** by blood group and location
- **Emergency blood request** posting and tracking
- **Location-aware donor discovery** via city/area filtering
- **Admin dashboard** with key operational statistics
- RESTful API architecture ready for scaling

## Project Structure

```
blood-donation-system/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── context/
    │   ├── pages/
    │   ├── services/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── tailwind.config.js
```

## Getting Started

### 1) Clone and install

```bash
git clone <your-repo-url>
cd blood-donation-system

cd backend && npm install
cd ../frontend && npm install
```

### 2) Environment Variables

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/blood-donation
JWT_SECRET=your_super_secret_key
```

### 3) Run the application

Backend:

```bash
cd backend
npm run dev
```

Frontend:

```bash
cd frontend
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Donors
- `GET /api/donors/search?bloodGroup=O+&location=Boston`

### Emergency Requests
- `GET /api/emergency`
- `POST /api/emergency` (authenticated)
- `PATCH /api/emergency/:id/status` (admin)

### Admin
- `GET /api/admin/dashboard` (admin)

## Roadmap

- Geospatial search using map coordinates
- SMS/email alerts for critical requests
- Donation eligibility checks by last donation date
- Role management UI for admin users

## License

MIT
