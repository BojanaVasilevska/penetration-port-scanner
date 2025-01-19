'use client';

import { useState } from 'react';
import Layout from '../components/layout';
import { scanPorts } from '../utils/portScanner';

export default function PortScanner() {
  const [target, setTarget] = useState('');
  const [ports, setPorts] = useState('');
  const [results, setResults] = useState<number[] | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const portList = ports.split(',').map(port => parseInt(port.trim())).filter(Boolean);
    const result = await scanPorts(target, portList);
    setResults(result); 
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Port Scanner</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="target" className="block font-semibold">Target</label>
          <input
            type="text"
            id="target"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="border px-4 py-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="ports" className="block font-semibold">Ports (comma-separated)</label>
          <input
            type="text"
            id="ports"
            value={ports}
            onChange={(e) => setPorts(e.target.value)}
            className="border px-4 py-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Scan
        </button>
      </form>
      {results && (
        <div className="mt-6">
          <h3 className="font-bold">Results:</h3>
          <p>Open ports: {results.join(', ')}</p>
        </div>
      )}
    </Layout>
  );
}
