// filepath: c:\wamp64\www\alter\endeavor\src\app\dashboard\layout.js
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-muted border-r hidden md:flex flex-col py-6 px-4">
        <Link href="/dashboard" className="font-bold text-xl mb-8">Dashboard</Link>
        <nav className="flex flex-col gap-4">
          <Link href="/dashboard" className="hover:underline">Home</Link>
          <Link href="/dashboard/profile" className="hover:underline">Profile</Link>
          <Link href="/dashboard/settings" className="hover:underline">Settings</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
