export const dynamic = 'force-static';

import { baseUrl } from '@/lib/content';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}sitemap.xml`,
  };
}
