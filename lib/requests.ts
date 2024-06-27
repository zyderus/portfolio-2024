'use server';
import { parseLinkHeader } from './parse-headers';
import type { FeatureProject, PaginationLinks, Repo } from './types';

const { GITHUB_USERNAME, GITHUB_TOKEN } = process.env;
const apiDomain = process.env.NEXT_PUBLIC_DOMAIN || null;

export async function fetchFeatureProjects(): Promise<FeatureProject[] | []> {
  try {
    if (!apiDomain) {
      return [];
    }

    // TODO: Enable caching after development
    const response = await fetch(`${apiDomain}/api/projects/feature`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const fetchGithubReposByTopic = async (
  topic = 'feature'
): Promise<Repo[]> => {
  const url = `https://api.github.com/search/repositories?q=user:${GITHUB_USERNAME}+topic:${topic}`;

  try {
    const headers: HeadersInit = {};
    if (GITHUB_TOKEN) {
      headers.Authorization = `token ${GITHUB_TOKEN}`;
    }

    // TODO: Enable caching after development
    const response = await fetch(url, { headers, cache: 'no-store' });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch repositories. Status: ${response.status}`
      );
    }

    const data = await response.json();
    const reposSortedByCreatedDate = data.items.sort(
      (a: Repo, b: Repo) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    return reposSortedByCreatedDate;
  } catch (error: any) {
    console.error(
      'Error fetching repositories:',
      error.message ?? error.toString()
    );
    return [];
  }
};

export const fetchGithubRepos = async (
  page = 1,
  perPage = 10
): Promise<{ repos: Repo[]; pagination: PaginationLinks } | {}> => {
  const { GITHUB_USERNAME, GITHUB_TOKEN } = process.env;
  const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=created&page=${page}&per_page=${perPage}`;

  try {
    const headers: HeadersInit = {};
    if (GITHUB_TOKEN) {
      headers.Authorization = `token ${GITHUB_TOKEN}`;
    }

    // TODO: Enable caching after development
    const response = await fetch(url, { headers, cache: 'no-store' });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch repositories. Status: ${response.status}`
      );
    }

    const repos = await response.json();
    const linkHeader = response.headers.get('Link');
    const pagination = parseLinkHeader(linkHeader);

    return { repos, pagination };
  } catch (error: any) {
    console.error(
      'Error fetching repositories:',
      error.message ?? error.toString()
    );
    return {};
  }
};
