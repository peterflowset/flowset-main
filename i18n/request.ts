import { getRequestConfig } from 'next-intl/server';
import { routing } from '../lib/navigation';

export default getRequestConfig(async ({ requestLocale }) => {
    // The `requestLocale` is a promise in Next.js 15
    let locale = await requestLocale;

    // Validate that the incoming `locale` parameter is valid
    if (!locale || !routing.locales.includes(locale as "de" | "it")) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});
