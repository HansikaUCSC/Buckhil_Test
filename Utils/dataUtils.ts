import { promises as fs } from 'fs';

export async function saveUserEmail(email: string) {
  await fs.writeFile('userEmail.txt', email, 'utf8');
}

export async function readUserEmail(): Promise<string> {
  const email = await fs.readFile('userEmail.txt', 'utf8');
  return email.trim();
}