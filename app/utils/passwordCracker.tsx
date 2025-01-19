export const crackPassword = async (hash: string, wordList: string[]): Promise<string | null> => {
  console.log('Hash to crack:', hash);
  console.log('Word list:', wordList);

  for (const word of wordList) {
    const hashedWord = hashPassword(word);

    console.log(`Trying word: ${word}, Hash: ${hashedWord}`);

    if (hashedWord === hash) {
      console.log(`Match found! Password: ${word}`);
      return word; // Return the word if it matches the hash
    }
  }
  console.log('No match found');
  return null; // Return null if no match is found
};

// Simple hashing function for demonstration
const hashPassword = (password: string): string => {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    hash = (hash << 5) - hash + password.charCodeAt(i);
  }
  return hash.toString();
};

  