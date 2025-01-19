'use client';

import { useState } from 'react';
import Layout from '../components/layout';
import { crackPassword } from '../utils/passwordCracker';

const PasswordCracker = () => {
  const [hash, setHash] = useState('');
  const [wordList, setWordList] = useState('');
  const [crackedPassword, setCrackedPassword] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log('Submitted hash:', hash);
    console.log('Submitted word list:', wordList);

    const words = wordList.split(',').map((word) => word.trim());
    const password = await crackPassword(hash, words);

    console.log('Cracked password:', password);

    setCrackedPassword(password);
    setIsLoading(false);
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Password Cracker</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="hash" className="block font-semibold">Hash</label>
          <input
            type="text"
            id="hash"
            value={hash}
            onChange={(e) => setHash(e.target.value)}
            className="border px-4 py-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="wordList" className="block font-semibold">Word List (comma-separated)</label>
          <input
            type="text"
            id="wordList"
            value={wordList}
            onChange={(e) => setWordList(e.target.value)}
            className="border px-4 py-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? 'Cracking...' : 'Crack Password'}
        </button>
      </form>

      {crackedPassword && (
        <div className="mt-6">
          <h3 className="font-bold">Cracked Password:</h3>
          <p>{crackedPassword ? crackedPassword : 'No password found'}</p>
        </div>
      )}
    </Layout>
  );
};

export default PasswordCracker;
