import React, { useState, useEffect } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [errorBoundaryState, setErrorBoundaryState] = useState<ErrorBoundaryState>({
    hasError: false,
    error: undefined,
  });

  useEffect(() => {
    const handleError = (event: ErrorEvent): void => {
      // You can log the error to an error reporting service
      console.error('Error caught by error boundary:', event.error);
      setErrorBoundaryState({ hasError: true, error: event.error });
    };

    window.addEventListener('error', handleError);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []); // Run this effect only once on mount

  if (errorBoundaryState.hasError) {
    // You can customize the error UI here
    return (
      <div>
        <h1>Something went wrong</h1>
        {errorBoundaryState.error?.message && <p>{errorBoundaryState.error.message}</p>}
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
