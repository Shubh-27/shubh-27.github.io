import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://shubh-27.github.io'),
  title: 'Shubh Thakkar — Backend Software Engineer / .NET Developer',
  description:
    'Portfolio of Shubh Thakkar — Backend Software Engineer specializing in C#, .NET 8, SQL Server query optimization, Azure, and practical AI/RAG architectures.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Shubh Thakkar — Backend Software Engineer / .NET Developer',
    description:
      'Backend architecture, financial calculation engines, high-performance SQL optimization, and cloud systems.',
    type: 'website',
    url: 'https://shubh-27.github.io/',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shubh Thakkar',
    jobTitle: 'Backend Software Engineer / .NET Developer',
    url: 'https://shubh-27.github.io/',
    sameAs: [
      'https://github.com/Shubh-27',
      'https://linkedin.com/in/shubh-thakkar',
    ],
    knowsAbout: [
      'C#',
      '.NET 8',
      'ASP.NET Core Web API',
      'SQL Server',
      'Query Optimization',
      'Azure App Service',
      'Azure Durable Functions',
      'PostgreSQL',
      'React',
      'Next.js',
      'RAG Architecture',
    ],
  };

  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://shubh-27.github.io/" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = storedTheme || (prefersDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={ibmPlexSans.className}>
        {children}

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NVB0CD06KS"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NVB0CD06KS');
          `}
        </Script>

        {/* Microsoft Clarity (Cookieless) */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                c[a]("consentv2", { ad_Storage: "denied", analytics_Storage: "denied" });
                c[a]("consent", false);
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ycy8e8m6i2");
          `}
        </Script>
      </body>
    </html>
  );
}
