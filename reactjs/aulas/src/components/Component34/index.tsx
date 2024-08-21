'use client';

import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useState } from 'react';

const Index = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 31</h1>
        <p>Components ShadCD-UI</p>
      </header>

      <div className="grid place-content-center h-screen">
        <Button
          variant="outline"
          className="text-black"
          onClick={() => setShowAlert(!alert)}
        >
          Button
        </Button>

        {showAlert && (
          <Alert className="bg-red-200 border-2 border-red-500 p-2 text-red-700">
            {/* <Terminal className="h-4 w-4" /> */}
            <AlertTitle className="text-center">[ERROR]</AlertTitle>
            <AlertDescription>
              Login / Senha errado, Verifique os dados e tente novamente ❌
            </AlertDescription>
          </Alert>
        )}
      </div>
    </section>
  );
};

export default Index;
