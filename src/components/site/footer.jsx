import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-gradient-to-r from-slate-50 to-blue-50 border-t border-slate-200 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <div className="flex items-center gap-2 mb-2">
            {/* Logo icon (reuse from header) */}
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path d="M8 20c4-8 16-8 16 0" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
              <path d="M6 24c4 2 16 2 20 0" stroke="#38bdf8" strokeWidth="2" fill="none"/>
              <path d="M16 16l2-4" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
            </svg>
            <span className="text-lg font-bold tracking-tighter text-sky-700">Bottlenose</span>
          </div>
          <div className="text-slate-500 text-sm mb-2">
            &copy; 2025 &nbsp; • &nbsp;
            <Link href="#" className="hover:underline">Terms of Service</Link>
            &nbsp; • &nbsp;
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            &nbsp; • &nbsp;
            <a href="mailto:support@bottlenose.ai" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}