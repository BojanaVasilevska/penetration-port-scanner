import Link from 'next/link';
import Layout from './components/layout';

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Penetration Test Tool</h1>
        <p className="text-lg mb-8">
          This is a suite of tools designed for penetration testing and security audits. You can scan open ports, check for vulnerabilities, and even attempt password cracking with the provided wordlists.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Port Scanner</h3>
            <p className="mb-4">Scan specific ports on a target to check which ones are open and accessible.</p>
            <Link href="/port-scanner" className="text-blue-500 hover:text-blue-400">
              Start Scanning
            </Link>
          </div>

          <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Vulnerability Scanner</h3>
            <p className="mb-4">Check your target for missing security headers and other potential vulnerabilities.</p>
            <Link href="/vulnerability-scanner" className="text-blue-500 hover:text-blue-400">
              Start Scanning
            </Link>
          </div>

          <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Password Cracker</h3>
            <p className="mb-4">Attempt to crack passwords using a wordlist, useful for testing weak passwords.</p>
            <Link href="/password-cracker" className="text-blue-500 hover:text-blue-400">
              Start Cracking
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
