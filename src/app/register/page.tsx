'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ email: "", name: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const res = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });

  const data = await res.json();
  if (!res.ok) {
    alert(data.error || 'Gagal mendaftar');
    return;
  }

  alert('Registrasi berhasil!');
};


  return (
    <form
  onSubmit={handleSubmit}
  className="max-w-md mx-auto mt-20 space-y-6 p-8 bg-white rounded-2xl shadow-lg border border-gray-200"
>
  <h1 className="text-3xl font-bold text-center text-blue-600">Buat Akun Baru</h1>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
    <input
      type="text"
      placeholder="Nama"
      onChange={(e) => setForm({ ...form, name: e.target.value })}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
    <input
      type="email"
      placeholder="Email"
      onChange={(e) => setForm({ ...form, email: e.target.value })}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
    <input
      type="password"
      placeholder="Password"
      onChange={(e) => setForm({ ...form, password: e.target.value })}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
      required
    />
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
  >
    Daftar Sekarang
  </button>
</form>

  );
}
