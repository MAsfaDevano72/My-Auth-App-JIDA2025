'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ email: "", name: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" }
    });
    if (res.ok) router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 space-y-4 p-6 bg-white rounded-xl shadow">
      <h1 className="text-xl font-bold">Register</h1>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} className="input" />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} className="input" />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} className="input" />
      <button type="submit" className="btn">Register</button>
    </form>
  );
}
