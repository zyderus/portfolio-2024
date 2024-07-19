'use server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function getAppVersion() {
  const packageJson = await readFile(
    join(process.cwd(), 'package.json'),
    'utf8'
  );
  const { version } = JSON.parse(packageJson);
  return version;
}
