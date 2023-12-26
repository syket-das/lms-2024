'use client';
import React, { useEffect } from 'react';

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? <div>{children}</div> : null;
};

export default ClientOnly;
