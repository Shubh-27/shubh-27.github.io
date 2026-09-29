export const dynamic = 'force-static';

import { baseUrl } from '@/content/site';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}sitemap.xml`,
  };
}
