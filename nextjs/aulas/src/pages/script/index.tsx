import Script from 'next/script';
import React from 'react';

const Index = () => {
  return (
    <div>
      <h1>Script externo & interno</h1>

      <Script id="my-script" strategy="afterInteractive">
        {`window.alert('Rodando Script')`}
      </Script>
    </div>
  );
};

export default Index;
