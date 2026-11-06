import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Vote, Shield, CheckCircle2, QrCode, MonitorCheck } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              <Vote className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">E-Voting Sekolah</h1>
              <p className="text-xs text-slate-500">Platform Pemilihan Suara Aman & Mandiri</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/cek-dpt"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-md hover:bg-slate-100 transition"
            >
              Cek DPT
            </Link>
            <Link
              to="/verifikasi"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-md hover:bg-slate-100 transition"
            >
              Ambil QR Token
            </Link>
            <Link
              to="/admin/login"
              className="text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition"
            >
              Login Admin
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-12 flex-1 flex flex-col justify-center">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" /> Frontend React + Vite + Tailwind Siap
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
            Pemilihan Ketua OSIS yang Transparan, Cepat, dan Rahasia
          </h2>
          <p className="text-lg text-slate-600">
            Sistem e-voting mandiri dengan verifikasi kode QR langsung dari smartphone siswa dan pencoblosan di bilik laptop panitia.
          </p>
        </div>

        {/* 4 Kartu Modul Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Cek DPT Online</h3>
            <p className="text-xs text-slate-500 mb-4">Pastikan nama dan NISN Anda terdaftar dalam daftar pemilih tetap.</p>
            <Link to="/cek-dpt" className="text-xs font-semibold text-indigo-600 hover:underline">Buka Cek DPT &rarr;</Link>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <QrCode className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Verifikasi Siswa (HP)</h3>
            <p className="text-xs text-slate-500 mb-4">Input NISN + Tanggal Lahir untuk mendapatkan QR Code token pemilih.</p>
            <Link to="/verifikasi" className="text-xs font-semibold text-emerald-600 hover:underline">Verifikasi Sekarang &rarr;</Link>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-4">
              <MonitorCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Bilik Suara (Laptop)</h3>
            <p className="text-xs text-slate-500 mb-4">Kiosk mode bilik laptop untuk scan QR Code dan mencoblos surat suara.</p>
            <Link to="/booth" className="text-xs font-semibold text-amber-600 hover:underline">Masuk Bilik &rarr;</Link>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Portal Admin</h3>
            <p className="text-xs text-slate-500 mb-4">Panel Super Admin KPU dan Panitia Sekolah untuk mengelola pemilu.</p>
            <Link to="/admin/login" className="text-xs font-semibold text-purple-600 hover:underline">Login Admin &rarr;</Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        E-Voting Sekolah &copy; 2026 &bull; Sesuai Blueprint Teknis PRD &bull; Single-Tenant Sequential
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cek-dpt" element={<div className="p-8 text-center"><h2 className="text-xl font-bold">Halaman Cek DPT (Siap dikerjakan di TASK-FE-03)</h2><Link to="/" className="text-indigo-600 underline mt-4 inline-block">Kembali ke Beranda</Link></div>} />
        <Route path="/verifikasi" element={<div className="p-8 text-center"><h2 className="text-xl font-bold">Halaman Verifikasi Siswa Mobile (Siap dikerjakan di TASK-FE-04)</h2><Link to="/" className="text-indigo-600 underline mt-4 inline-block">Kembali ke Beranda</Link></div>} />
        <Route path="/booth" element={<div className="p-8 text-center"><h2 className="text-xl font-bold">Halaman Bilik Suara Kiosk (Siap dikerjakan di TASK-FE-05 s/d 08)</h2><Link to="/" className="text-indigo-600 underline mt-4 inline-block">Kembali ke Beranda</Link></div>} />
        <Route path="/admin/login" element={<div className="p-8 text-center"><h2 className="text-xl font-bold">Portal Login Admin (Siap dikerjakan di TASK-FE-09)</h2><Link to="/" className="text-indigo-600 underline mt-4 inline-block">Kembali ke Beranda</Link></div>} />
      </Routes>
    </BrowserRouter>
  );
}
