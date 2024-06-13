interface PaginationLinks {
  [key: string]: string;
}

export function parseLinkHeader(header: string | null): PaginationLinks {
  const links: PaginationLinks = {};

  if (!header) {
    return links;
  }

  const parts = header.split(',');
  parts.forEach((part) => {
    const section = part.split(';');

    if (section.length < 2) {
      return;
    }

    const urlMatch = section[0].match(/<(.*)>/);
    const relMatch = section[1].match(/rel="(.*)"/);
    if (urlMatch && relMatch) {
      const url = urlMatch[1];
      const rel = relMatch[1];
      links[rel] = url;
    }
  });

  return links;
}
