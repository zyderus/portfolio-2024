export const formatRepoTitle = (title: string) => {
  return title
    .split('-')
    .map((t: string) => t[0].toUpperCase() + t.substring(1))
    .join(' ');
};
