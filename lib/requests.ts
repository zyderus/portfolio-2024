'use server';
import { parseLinkHeader } from './parse-headers';
import type { FeatureProject, Pagination, Repo } from './types';

const apiDomain = process.env.NEXT_PUBLIC_DOMAIN || null;

export async function fetchFeatureProjects(): Promise<
  FeatureProject[] | undefined
> {
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
  }
}

export const fetchGithubRepos = async (
  page = 1,
  perPage = 10
): Promise<{ repos: Repo[]; pagination: Pagination } | {}> => {
  const { GITHUB_USERNAME, GITHUB_TOKEN } = process.env;
  const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?page=${page}&per_page=${perPage}`;

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
