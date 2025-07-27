import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4">
        Selamat datang, {session?.user?.name} ({session?.user?.email})
      </p>
    </main>
  );
}
