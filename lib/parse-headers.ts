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

      // If this is the "last" link, extract the page number as a string
      if (rel === 'last') {
        const pageMatch = url.match(/page=(\d+)/);
        if (pageMatch) {
          links['lastPage'] = pageMatch[1];
        }
      }
    }
  });

  return links;
}
