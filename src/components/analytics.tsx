import Script from 'next/script';
import React from 'react';

function Analytics() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-T0F0QSF1H6"
      ></Script>
      <Script id="google-analytics">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-T0F0QSF1H6');
  `}
      </Script>
    </>
  );
}

export default Analytics;
