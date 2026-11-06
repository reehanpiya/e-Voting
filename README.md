# Platform E-Voting Sekolah (Single-Tenant Sequential)

Sistem pemilihan *e-voting* mandiri untuk sekolah (seperti Pemilihan Ketua OSIS) dengan prinsip kerahasiaan suara mutlak (*ballot secrecy*), verifikasi mandiri via smartphone, dan bilik suara digital (laptop kiosk mode).

---

## 📌 Dokumen Acuan Tim
1. **[PRD & Blueprint Teknis](./PRD%20Platform%20E-Voting%20Sekolah%20(Blueprint%20Teknis).md)**: Spesifikasi alur bisnis, arsitektur data, status pemilu, dan aturan keamanan.
2. **[Backlog Tugas & Strict Code Style](./TASKS.md)**: Pembagian 5 Track tugas untuk 5 anggota tim beserta aturan penulisan kode wajib untuk developer & AI Agent.

---

## 🏗️ Struktur Repositori (Monorepo)

```text
e-Voting/
├── frontend/             # Antarmuka Pengguna (React.js + Vite + Tailwind CSS)
│   ├── src/
│   │   ├── components/   # Komponen umum reusable
│   │   ├── features/     # Modul fitur (auth, booth, public, voter, admin)
│   │   ├── services/     # Axios client terpusat (api.js)
│   │   └── App.jsx
│   └── package.json
│
├── backend/              # RESTful API (Laravel 11+ & PostgreSQL)
│   ├── app/              # Controllers, FormRequests, Services, Models
│   ├── routes/api.php    # Endpoint terproteksi RBAC
│   ├── database/         # Migrations & Seeders
│   └── composer.json
│
├── PRD Platform ... .md  # Spesifikasi teknis & acceptance criteria
├── TASKS.md              # Task board & coding standards
└── .gitignore
```

---

## 🚀 Panduan Memulai (Local Development)

### 1. Menjalankan Frontend
```bash
cd frontend
npm install
npm run dev
```
Akses di browser: `http://localhost:5173`

### 2. Menjalankan Backend API
```bash
cd backend
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```
Akses di browser: `http://localhost:8000/api/health`

---

## ☁️ Panduan Deployment Gratis (Zero-Cost Architecture)
- **Frontend (React):** Hubungkan repo ke [Vercel](https://vercel.com) dengan mengatur **Root Directory = `frontend`**.
- **Backend (Laravel):** Hubungkan repo ke [Render.com](https://render.com) (Web Service) dengan mengatur **Root Directory = `backend`**.
- **Database:** Gunakan [Neon PostgreSQL](https://neon.tech) (Free Tier) dan masukkan URL koneksinya ke `.env` backend di Render.
