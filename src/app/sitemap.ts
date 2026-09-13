import type { MetadataRoute } from 'next';
import { DEFAULT_REALM_ID } from '@/lib/game/constants';
import { getResources } from '@/lib/catalog/service';
import { BETA_CALCULATORS } from '@/lib/calculators/catalog';
import { GUIDES } from '@/lib/content/guides';
import { siteUrl } from '@/lib/seo';

export const revalidate = 3600;

/**
 * XML sitemap.
 *
 * Change frequencies reflect what actually changes: product pages carry live prices
 * and are worth recrawling often, guides are stable. Nothing is listed that a reader
 * would be disappointed to land on — there are no pages generated purely to be
 * indexed.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl('/'), changeFrequency: 'hourly', priority: 1 },
    { url: siteUrl('/exchange'), changeFrequency: 'hourly', priority: 0.9 },
    { url: siteUrl('/market'), changeFrequency: 'hourly', priority: 0.8 },
    { url: siteUrl('/market/movers'), changeFrequency: 'hourly', priority: 0.7 },
    { url: siteUrl('/calculators'), changeFrequency: 'weekly', priority: 0.8 },
    { url: siteUrl('/learn'), changeFrequency: 'weekly', priority: 0.8 },
    { url: siteUrl('/methodology'), changeFrequency: 'monthly', priority: 0.6 },
    { url: siteUrl('/status'), changeFrequency: 'daily', priority: 0.4 },
    { url: siteUrl('/about'), changeFrequency: 'monthly', priority: 0.4 },
    { url: siteUrl('/privacy'), changeFrequency: 'monthly', priority: 0.3 },
    { url: siteUrl('/terms'), changeFrequency: 'monthly', priority: 0.3 },
  ];

  const calculatorRoutes: MetadataRoute.Sitemap = BETA_CALCULATORS.map((entry) => ({
    url: siteUrl(`/calculators/${entry.slug}`),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const guideRoutes: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: siteUrl(`/learn/${guide.slug}`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Catalog reads degrade to empty rather than failing, so a database outage
  // produces a smaller sitemap instead of a broken one.
  const { data: resources } = await getResources(DEFAULT_REALM_ID).catch(() => ({
    data: [] as Awaited<ReturnType<typeof getResources>>['data'],
  }));

  const productRoutes: MetadataRoute.Sitemap = resources.map((resource) => ({
    url: siteUrl(`/exchange/${resource.slug}`),
    changeFrequency: 'hourly',
    priority: 0.8,
  }));



  return [...staticRoutes, ...calculatorRoutes, ...guideRoutes, ...productRoutes];
}
