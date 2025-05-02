import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand section */}
          <div>
            <p className="text-slate-700 text-base leading-relaxed max-w-xs">
              A powerful, flexible, and feature-rich boilerplate for building full-stack MVP applications with robust authentication, database, UI, and developer experience.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-slate-600 font-medium mb-4">PRODUCT</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-600 hover:text-slate-900">Home</Link></li>
              <li><Link href="/features" className="text-slate-600 hover:text-slate-900">Features</Link></li>
              <li>
                <a
                  href="https://github.com/your-repo/endeavor/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="text-slate-600 font-medium mb-4">RESOURCES</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/your-repo/endeavor#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/your-repo/endeavor/blob/main/CHANGELOG.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/your-repo/endeavor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="text-slate-600 font-medium mb-4">PLATFORM</h4>
            <ul className="space-y-3">
              <li><Link href="/login" className="text-slate-600 hover:text-slate-900">Login</Link></li>
              <li>
                <a
                  href="https://github.com/your-repo/endeavor#how-to-get-started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center">
          {/* Logo and tagline */}
          <div className="mb-6 md:mb-0 flex items-center">
            <div className="bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded">
              ENDEAVOR
            </div>
            <span className="ml-4 text-slate-600 text-sm">
              The modern full-stack MVP boilerplate for Next.js
            </span>
          </div>

          {/* Bottom links */}
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="https://github.com/your-repo/endeavor/stargazers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 text-sm flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Star on GitHub
            </a>
            <a
              href="https://github.com/your-repo/endeavor/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 text-sm"
            >
              License
            </a>
            <Link href="/privacy" className="text-slate-600 hover:text-slate-900 text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}