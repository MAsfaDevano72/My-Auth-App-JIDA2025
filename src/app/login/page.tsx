'use client';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password
    });
    if (res?.ok) router.push("/dashboard");
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-20 space-y-4 p-6 bg-white rounded-xl shadow">
      <h1 className="text-xl font-bold">Login</h1>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="input" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="input" />
      <button type="submit" className="btn">Sign In</button>
    </form>
  );
}
