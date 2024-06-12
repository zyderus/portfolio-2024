import type { FeatureProject, Project } from './types';

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

export async function fetchProjects(): Promise<Project[] | []> {
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
