export const dynamic = 'force-static';

import { baseUrl } from '@/content/site';

export default function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
