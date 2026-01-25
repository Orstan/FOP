import Script from 'next/script';

export function GoogleAdSense() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7434166826056099"
      crossOrigin="anonymous"
      strategy="beforeInteractive"
    />
  );
}
