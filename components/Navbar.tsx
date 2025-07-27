'use client';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="space-x-4">
        <Link href="/">Home</Link>
        {session ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/profile">Profile</Link>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
      {session && (
        <div className="space-x-2">
          <span>{session.user?.name}</span>
          <button onClick={() => signOut()} className="bg-red-500 px-2 py-1">Logout</button>
        </div>
      )}
    </nav>
  );
}
