import path from 'path';
import { promises } from 'fs';

export async function GET() {
  try {
    const jsonDirectory = path.join(process.cwd(), 'lib/json');

    const fileContents = await promises.readFile(
      jsonDirectory + '/feature-projects.json',
      'utf8'
    );

    return Response.json(JSON.parse(fileContents));
  } catch (error) {
    console.error('Error parsing JSON file:', error);
    return Response.json(
      {
        error: `Internal Server Error: ${error}`,
      },
      { status: 500 }
    );
  }
}
