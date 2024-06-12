import { fetchGithubRepos } from '@/lib/requests';

export default async function Projects() {
  const projects = await fetchGithubRepos();

  return (
    <ul>
      {projects.map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
