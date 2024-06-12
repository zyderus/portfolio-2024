import { fetchProjects } from '@/lib/requests';

export default async function Projects() {
  const projects = await fetchProjects();

  return (
    <ul>
      {Array.from({ length: 8 }, (v, i) => i + 1).map((n) => (
        <li key={n}>{n}</li>
      ))}
    </ul>
  );
}
